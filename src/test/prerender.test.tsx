/**
 * Teste da PRÉ-RENDERIZAÇÃO.
 *
 * Verifica duas coisas no HTML que o build gera:
 *  1. O conteúdo acima da dobra (imagem LCP + H1) já vem escrito no HTML,
 *     sem depender do JavaScript. É isso que corrige o "atraso na
 *     renderização" apontado pelo Lighthouse — se este teste falhar, a
 *     otimização parou de funcionar silenciosamente.
 *  2. O React consegue "assumir" (hidratar) esse HTML sem divergência.
 *     Divergência faz o React descartar tudo e redesenhar: o usuário vê um
 *     piscar e o ganho de performance evapora.
 *
 * Só roda depois de `npm run build` (precisa da pasta dist/).
 */
import { describe, it, expect, vi } from "vitest";
import { act } from "@testing-library/react";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { hydrateRoot } from "react-dom/client";
import App from "@/App";

const ROTAS = ["/", "/analise-estrutural", "/sobre", "/metodo", "/gps-psiquico", "/ebook"];
const ABERTURA_ROOT = '<div id="root">';
const BYTE_NULO = String.fromCharCode(0);
const temBuild = existsSync(resolve(process.cwd(), "dist/index.html"));

// Arquivo plano (dist/analise-estrutural.html): é o que o Cloudflare Pages
// serve na URL sem barra no fim, sem redirecionamento intermediário.
const arquivoDaRota = (r: string) => (r === "/" ? "dist/index.html" : `dist${r}.html`);
const arquivoPasta = (r: string) => `dist${r}/index.html`;
const htmlDaRota = (r: string) => readFileSync(resolve(process.cwd(), arquivoDaRota(r)), "utf-8");

function conteudoDoRoot(html: string) {
  const ini = html.indexOf(ABERTURA_ROOT);
  const fim = html.lastIndexOf("</div>");
  if (ini < 0 || fim <= ini) return "";
  return html.slice(ini + ABERTURA_ROOT.length, fim);
}

describe.skipIf(!temBuild)("pré-renderização (requer npm run build antes)", () => {
  it("/analise-estrutural traz imagem LCP e H1 já no HTML", () => {
    const html = htmlDaRota("/analise-estrutural");
    expect(html).toContain("loren-analise-hero");
    expect(html).toMatch(/fetchpriority="high"/i);
    expect(html).toMatch(/<h1[\s>]/);
    expect(conteudoDoRoot(html).length).toBeGreaterThan(2000);
  });

  it("/ traz a imagem do hero já no HTML", () => {
    const html = htmlDaRota("/");
    expect(html).toContain("hero-forest-sunlight");
    expect(conteudoDoRoot(html).length).toBeGreaterThan(2000);
  });

  it("todas as rotas foram geradas e não contêm byte nulo", () => {
    for (const rota of ROTAS) {
      expect(existsSync(resolve(process.cwd(), arquivoDaRota(rota))), rota).toBe(true);
      expect(htmlDaRota(rota).includes(BYTE_NULO), rota).toBe(false);
    }
  });

  it("cada rota tem versão plana E versão em pasta (evita o 301 extra)", () => {
    for (const rota of ROTAS.filter((r) => r !== "/")) {
      expect(existsSync(resolve(process.cwd(), `dist${rota}.html`)), `${rota}.html`).toBe(true);
      expect(existsSync(resolve(process.cwd(), arquivoPasta(rota))), arquivoPasta(rota)).toBe(true);
    }
  });

  it("o React hidrata /analise-estrutural sem divergência", async () => {
    const capturados: unknown[][] = [];
    const spy = vi.spyOn(console, "error").mockImplementation((...a) => { capturados.push(a); });

    window.history.pushState({}, "", "/analise-estrutural");
    const container = document.createElement("div");
    container.id = "root";
    container.innerHTML = conteudoDoRoot(htmlDaRota("/analise-estrutural"));
    document.body.appendChild(container);

    await act(async () => { hydrateRoot(container, <App />); });
    spy.mockRestore();

    const divergencias = capturados.filter((a) =>
      /hydrat|did not match|mismatch/i.test(String(a[0]))
    );
    expect(divergencias.map(String).join("\n")).toBe("");
    expect(container.querySelector("h1")?.textContent).toMatch(/terapia/i);
  });
});
