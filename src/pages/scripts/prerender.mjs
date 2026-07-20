/* ──────────────────────────────────────────────────────────────────────────
   PRÉ-RENDERIZAÇÃO (roda depois do `vite build`)

   Para cada rota da lista abaixo, renderiza o React no Node e grava o HTML
   pronto em dist/<rota>/index.html. O visitante passa a receber a página já
   desenhada, em vez de um <div id="root"> vazio que só ganha conteúdo depois
   de ~200 KB de JavaScript baixarem e executarem.

   PARA ADICIONAR UMA ROTA NOVA: inclua o caminho no array ROTAS.
   ────────────────────────────────────────────────────────────────────── */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const ROTAS = [
  "/",
  "/analise-estrutural",
  "/sobre",
  "/metodo",
  "/gps-psiquico",
  "/ebook",
];

const MARCADOR = '<div id="root"></div>';

const { render } = await import(resolve(raiz, "dist-ssr/entry-server.js"));
const template = readFileSync(resolve(raiz, "dist/index.html"), "utf-8");

if (!template.includes(MARCADOR)) {
  console.error(`✗ index.html não contém ${MARCADOR} — nada foi pré-renderizado.`);
  process.exit(1);
}

let falhas = 0;

for (const rota of ROTAS) {
  try {
    const appHtml = await render(rota);

    // Trava de segurança: HTML nunca deve conter byte nulo. Se aparecer,
    // o navegador o mostra como caractere corrompido no meio do texto.
    if (appHtml.includes("\u0000")) {
      throw new Error("HTML gerado contém byte nulo (\\u0000)");
    }

    const html = template.replace(MARCADOR, `<div id="root">${appHtml}</div>`);

    const destino =
      rota === "/"
        ? resolve(raiz, "dist/index.html")
        : resolve(raiz, `dist${rota}/index.html`);

    mkdirSync(dirname(destino), { recursive: true });
    writeFileSync(destino, html);

    const kb = (Buffer.byteLength(appHtml) / 1024).toFixed(1);
    console.log(`  ✓ ${rota.padEnd(22)} ${kb.padStart(7)} kB de HTML`);
  } catch (err) {
    falhas++;
    console.error(`  ✗ ${rota} — ${err.message}`);
  }
}

if (falhas > 0) {
  console.error(`\n✗ ${falhas} rota(s) falharam na pré-renderização.`);
  process.exit(1);
}
console.log(`\n✓ ${ROTAS.length} rotas pré-renderizadas.`);
