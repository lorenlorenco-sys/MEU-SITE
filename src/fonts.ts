/* ──────────────────────────────────────────────────────────────────────────
   Fontes self-hosted (Fontsource) — servidas do mesmo domínio/CDN do site.

   ESTRATÉGIA DE CARREGAMENTO:
   • Inter + Cormorant Garamond ficam aqui (global) — usadas em todas as
     páginas incluindo /analise-estrutural (tráfego pago).
   • Playfair Display foi removida daqui e é importada diretamente em
     Index.tsx (lazy) — eliminando ~5 arquivos .woff2 da requisição
     inicial de quem acessa /analise-estrutural.
   ────────────────────────────────────────────────────────────────────── */

// Inter — apenas os pesos realmente usados no projeto (400, 500).
// Peso 300 era carregado mas não aplicado explicitamente — removido.
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";

// Cormorant Garamond — usada em /analise-estrutural como fonte principal.
// Pesos 300 (títulos leves), 400 (corpo), 500 (ênfase) + itálicos de cada.
import "@fontsource/cormorant-garamond/latin-300.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-300-italic.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
