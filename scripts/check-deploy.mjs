#!/usr/bin/env node
/**
 * check-deploy.mjs — Validação pré-deploy do site lorenlorenco.com.br
 *
 * Uso: node scripts/check-deploy.mjs
 *      (ou via `npm run check`)
 *
 * Bloqueia o deploy se encontrar qualquer problema crítico.
 * Emite avisos para problemas não-bloqueantes.
 */

import { readdirSync, readFileSync, statSync, existsSync } from "fs";
import { join, extname } from "path";

// ── Configuração ────────────────────────────────────────────────────────────
const LIMITS = {
  lcp_images: [                         // imagens LCP — limite mais rigoroso
    "public/images/hero-forest-sunlight.webp",
    "public/images/loren-analise-hero.webp",
    "public/images/loren-analise-hero-mobile.webp",
    "public/images/loren-photo-professional.webp",
  ],
  lcp_max_kb: 100,                      // LCP não pode passar de 100 KB

  mobile_hero_pairs: [                  // cada hero desktop precisa de versão mobile
    {
      desktop: "public/images/hero-forest-sunlight.webp",
      mobile:  "public/images/hero-forest-sunlight-mobile.webp",
    },
  ],

  images_dir: "public/images",          // diretório geral de imagens
  image_max_kb: 200,                    // limite geral (aviso, não erro)
  image_warn_kb: 120,                   // aviso se acima desse valor

  og_image: "public/og-image.jpg",
  og_max_kb: 250,

  index_html: "dist/index.html",        // HTML gerado pelo build
};

// ── Helpers ─────────────────────────────────────────────────────────────────
const kb = (bytes) => (bytes / 1024).toFixed(1);

let errors = [];
let warnings = [];

function err(msg)  { errors.push(`  ❌ ${msg}`); }
function warn(msg) { warnings.push(`  ⚠️  ${msg}`); }
function ok(msg)   { console.log(`  ✅ ${msg}`); }

function fileKb(path) {
  if (!existsSync(path)) return null;
  return statSync(path).size / 1024;
}

// ── 1. Imagens LCP ──────────────────────────────────────────────────────────
console.log("\n📐 Verificando imagens LCP...");
for (const img of LIMITS.lcp_images) {
  const size = fileKb(img);
  if (size === null) {
    warn(`${img} não encontrado — verifique se o arquivo existe.`);
    continue;
  }
  if (size > LIMITS.lcp_max_kb) {
    err(`${img} tem ${kb(size * 1024)} KB (limite: ${LIMITS.lcp_max_kb} KB). Comprima antes de fazer deploy.`);
  } else {
    ok(`${img} → ${kb(size * 1024)} KB ✓`);
  }
}

// ── 2. Pares desktop/mobile ──────────────────────────────────────────────────
console.log("\n📱 Verificando versões mobile das imagens hero...");
for (const { desktop, mobile } of LIMITS.mobile_hero_pairs) {
  if (!existsSync(mobile)) {
    err(`Versão mobile não encontrada: ${mobile}\n     Crie uma versão 800px a partir de ${desktop}`);
  } else {
    const mSize = fileKb(mobile);
    ok(`${mobile} → ${kb(mSize * 1024)} KB ✓`);
  }
}

// ── 3. Todas as imagens em public/images ────────────────────────────────────
console.log("\n🖼️  Verificando tamanho geral das imagens...");
if (existsSync(LIMITS.images_dir)) {
  const files = readdirSync(LIMITS.images_dir);
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (![".webp", ".jpg", ".jpeg", ".png", ".gif", ".avif"].includes(ext)) continue;
    const path = join(LIMITS.images_dir, file);
    const size = fileKb(path);
    if (size > LIMITS.image_max_kb) {
      err(`${path} tem ${kb(size * 1024)} KB — acima do limite de ${LIMITS.image_max_kb} KB.`);
    } else if (size > LIMITS.image_warn_kb) {
      warn(`${path} tem ${kb(size * 1024)} KB — considere comprimir (limite recomendado: ${LIMITS.image_warn_kb} KB).`);
    }
  }
}

// ── 4. og-image.jpg ─────────────────────────────────────────────────────────
console.log("\n🔗 Verificando og-image...");
const ogSize = fileKb(LIMITS.og_image);
if (ogSize !== null) {
  if (ogSize > LIMITS.og_max_kb) {
    warn(`og-image.jpg tem ${kb(ogSize * 1024)} KB — pode ser comprimida (limite: ${LIMITS.og_max_kb} KB).`);
  } else {
    ok(`og-image.jpg → ${kb(ogSize * 1024)} KB ✓`);
  }
}

// ── 5. Verificação do index.html (preloads e fetchpriority) ─────────────────
console.log("\n🔍 Verificando index.html...");
if (!existsSync(LIMITS.index_html)) {
  warn(`${LIMITS.index_html} não encontrado — rode \`npm run build\` antes de verificar.`);
} else {
  const html = readFileSync(LIMITS.index_html, "utf-8");

  // Conta fetchpriority="high" por rota — só deve haver 1 por rota
  const highCount = (html.match(/fetchpriority['":\s]+=?['"]?high/gi) || []).length;
  if (highCount > 2) {
    // 2 é aceitável: uma no script inline (preload) + uma no <img> do Hero
    err(`index.html tem ${highCount} ocorrências de fetchpriority="high". Só deve haver 1 imagem LCP por rota com alta prioridade.`);
  } else {
    ok(`fetchpriority="high" → ${highCount} ocorrência(s) ✓`);
  }

  // Garante que GTM está presente
  if (!html.includes("GTM-")) {
    warn("GTM não encontrado no index.html — analytics pode não estar funcionando.");
  } else {
    ok("GTM presente ✓");
  }

  // Garante que canonical está presente
  if (!html.includes('rel="canonical"')) {
    warn("Tag canonical não encontrada no index.html.");
  } else {
    ok("Tag canonical presente ✓");
  }

  // Garante que analytics carrega após load (não bloqueia renderização)
  if (html.includes("gtag") && !html.includes("addEventListener('load'") && !html.includes('addEventListener("load"')) {
    warn("GTM/GA pode estar bloqueando renderização — verifique se está carregando após window.load.");
  }
}

// ── 6. Relatório final ───────────────────────────────────────────────────────
console.log("\n" + "─".repeat(55));

if (warnings.length > 0) {
  console.log("\n⚠️  AVISOS (não bloqueiam o deploy, mas merecem atenção):\n");
  warnings.forEach((w) => console.log(w));
}

if (errors.length > 0) {
  console.log("\n❌ ERROS — DEPLOY BLOQUEADO:\n");
  errors.forEach((e) => console.log(e));
  console.log("\n🛑 Corrija os erros acima antes de fazer o deploy.\n");
  process.exit(1);   // código de saída 1 = falha (bloqueia scripts encadeados)
} else {
  console.log("\n✅ Tudo certo! Pode fazer o deploy com segurança.\n");
  process.exit(0);
}
