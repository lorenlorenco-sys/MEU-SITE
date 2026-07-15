/**
 * gtag.ts — Utilitário de rastreamento GA4 / Google Ads
 *
 * Como funciona:
 *  1. O usuário clica num botão de WhatsApp.
 *  2. gtagSendEvent() dispara gtag('event','purchase') para o GA4.
 *  3. O GA4 repassa o evento ao Google Ads como conversão.
 *  4. Após o envio (ou 2 s de timeout), abre o WhatsApp numa nova aba.
 */

// Declara a função global `gtag` injetada pelo script GA4 no index.html
declare function gtag(...args: unknown[]): void;

// ─── URL de WhatsApp ───────────────────────────────────────────────────────

/**
 * Link curto oficial do WhatsApp — aponta para a conversa da Loren.
 * Todas as constantes abaixo usam este mesmo link; mantidas separadas
 * para facilitar customização futura por contexto.
 */
const WA = "https://wa.me/message/6BVCSOD5ROHIE1";

export const WA_GERAL              = WA;
export const WA_SESSAO             = WA;
export const WA_SESSAO_ESTRATEGICA = WA;
export const WA_ANALISE            = WA;
export const WA_PADROES            = WA;
export const WA_GPS                = WA;

// ─── Função principal ──────────────────────────────────────────────────────

/**
 * Dispara um evento GA4 'purchase' (que o Google Ads conta como conversão)
 * e então abre a URL numa nova aba.
 *
 * Uso no JSX:
 *   <a href={url} target="_blank" rel="noopener noreferrer"
 *      onClick={(e) => { e.preventDefault(); gtagSendEvent(url); }}>
 *
 * @param url  URL de destino (WhatsApp ou qualquer link externo)
 */
export function gtagSendEvent(url: string): void {
  const openUrl = () => {
    if (typeof url === "string") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Se o gtag não estiver carregado (ex: bloqueador de ads), abre direto
  if (typeof gtag === "undefined") {
    openUrl();
    return;
  }

  gtag("event", "purchase", {
    event_callback: openUrl,
    event_timeout: 2000, // abre mesmo se o GA4 demorar ou falhar
  });
}
