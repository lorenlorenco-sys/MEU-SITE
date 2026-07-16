// Smoke test de PRODUCAO — detecta exatamente a falha diagnosticada em 16/07/2026:
//   1. Borda (cache) servindo HTML de um deploy diferente da origem.
//   2. HTML referenciando assets que ja nao existem (voltam como text/html).
//   3. Rota /analise-estrutural quebrada em acesso direto.
// Uso: node scripts/smoke-prod.mjs   (ou: npm run smoke:prod)
// Sai com codigo 1 em falha — pronto para GitHub Actions.

const BASE = process.env.SMOKE_BASE || "https://www.lorenlorenco.com.br";
const ROTAS = ["/", "/analise-estrutural"];

let falhas = 0;
const falha = (msg) => { falhas++; console.error("  FALHA: " + msg); };
const ok = (msg) => console.log("  ok: " + msg);

function extrairAssets(html) {
  return [...html.matchAll(/\/assets\/[A-Za-z0-9_.-]+\.(?:js|css)/g)]
    .map((m) => m[0])
    .sort()
    .filter((v, i, a) => a.indexOf(v) !== i ? false : true);
}

async function pega(url) {
  const r = await fetch(url, { redirect: "follow", headers: { "user-agent": "smoke-prod/1.0" } });
  const corpo = await r.text();
  return { status: r.status, ct: r.headers.get("content-type") || "", cache: r.headers.get("cf-cache-status") || "-", age: r.headers.get("age") || "0", cc: r.headers.get("cache-control") || "-", corpo };
}

for (const rota of ROTAS) {
  console.log(`\n== ${rota} ==`);
  // 1. Origem (cache-bust) e borda (URL normal) devem apontar para o MESMO build
  const origem = await pega(`${BASE}${rota}?smoke=${Date.now()}`);
  const borda = await pega(`${BASE}${rota}`);

  if (origem.status !== 200) falha(`origem devolveu HTTP ${origem.status}`);
  else ok(`origem HTTP 200`);
  if (borda.status !== 200) falha(`borda devolveu HTTP ${borda.status}`);

  const assetsOrigem = extrairAssets(origem.corpo);
  const assetsBorda = extrairAssets(borda.corpo);
  if (assetsOrigem.length === 0) falha("HTML da origem nao referencia nenhum asset — build quebrado?");
  if (JSON.stringify(assetsOrigem) !== JSON.stringify(assetsBorda)) {
    falha(`MISTURA DE VERSOES: borda (cf-cache-status=${borda.cache}, age=${borda.age}s) serve HTML com assets diferentes da origem.\n    origem: ${assetsOrigem.join(", ")}\n    borda:  ${assetsBorda.join(", ")}`);
  } else {
    ok(`borda e origem servem o mesmo build (cf-cache-status=${borda.cache}, age=${borda.age}s)`);
  }

  // 2. HTML nao pode ficar congelado por horas
  const maxAge = /max-age=(\d+)/.exec(borda.cc)?.[1];
  if (maxAge !== undefined && Number(maxAge) > 300) falha(`HTML com max-age=${maxAge}s (>300s): navegadores vao guardar versao velha. Cache-Control: ${borda.cc}`);
  else ok(`Cache-Control do HTML: ${borda.cc}`);

  // 3. Todo asset referenciado precisa existir e ter o MIME certo
  for (const a of assetsOrigem) {
    const r = await pega(`${BASE}${a}`);
    const esperado = a.endsWith(".css") ? "css" : "javascript";
    if (r.status !== 200) falha(`${a} devolveu HTTP ${r.status}`);
    else if (r.ct.includes("text/html")) falha(`${a} devolveu HTML (fallback SPA) no lugar de ${esperado} — asset nao existe no deploy atual!`);
    else if (!r.ct.includes(esperado)) falha(`${a} com content-type inesperado: ${r.ct}`);
    else ok(`${a} (${r.ct.split(";")[0]}, cf-cache-status=${r.cache})`);
  }
}

console.log(falhas ? `\n${falhas} falha(s) — producao INCONSISTENTE.` : "\nProducao consistente: mesmo build na borda e na origem, todos os assets integros.");
process.exit(falhas ? 1 : 0);
