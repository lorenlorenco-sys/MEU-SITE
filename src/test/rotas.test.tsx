/**
 * Teste de regressão: garante que as rotas essenciais renderizam sem quebrar.
 * Se /analise-estrutural (tráfego pago) ou a home falharem, o teste falha
 * e o deploy deve ser bloqueado.
 *
 * Rodar: npm test
 */
import { describe, it, expect } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { Suspense } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import AnalisePadroes from "@/pages/AnalisePadroes";

function renderRota(path: string, element: React.ReactElement) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Suspense fallback={<div data-testid="carregando" />}>
        <Routes>
          <Route path={path} element={element} />
        </Routes>
      </Suspense>
    </MemoryRouter>
  );
}

describe("rotas essenciais", () => {
  it("/analise-estrutural renderiza com conteúdo principal", async () => {
    const { container } = renderRota("/analise-estrutural", <AnalisePadroes />);
    await waitFor(() => {
      expect(container.querySelector("main")).toBeTruthy();
    });
    // O h1 da página de campanha precisa existir (LCP / âncora da oferta)
    expect(container.querySelector("h1")?.textContent).toMatch(/terapia/i);
  });

  it("/mentoriamulherinteira renderiza com h1 e CTA de WhatsApp", async () => {
    const { default: Mentoria } = await import("@/pages/MentoriaMulherInteira");
    const { container } = renderRota("/mentoriamulherinteira", <Mentoria />);
    await waitFor(() => {
      expect(container.querySelector("main")).toBeTruthy();
    });
    expect(container.querySelector("h1")?.textContent).toMatch(/mulher inteira/i);
    // Pelo menos um CTA precisa apontar para o WhatsApp — se o link sumir,
    // a página deixa de converter e o teste falha.
    expect(container.querySelector('a[href*="wa.me"]')).toBeTruthy();
  });

  it("/ (home) renderiza sem erro", async () => {
    const { default: Index } = await import("@/pages/Index");
    const { container } = renderRota("/", <Index />);
    await waitFor(() => {
      expect(container.innerHTML.length).toBeGreaterThan(100);
    });
  });
});
