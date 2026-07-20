/* ──────────────────────────────────────────────────────────────────────────
   ENTRADA DE SERVIDOR — usada apenas durante o build (pré-renderização).

   Este arquivo NUNCA é enviado ao navegador. Ele roda no Node, dentro de
   scripts/prerender.mjs, para gerar o HTML estático de cada rota. Esse HTML
   é injetado dentro de <div id="root"> no index.html final.

   Resultado: o navegador recebe a página já desenhada (imagem do hero, H1,
   CTA) e a pinta ANTES de baixar e executar o JavaScript — que é o que
   elimina o "atraso na renderização" do LCP apontado pelo Lighthouse.
   ────────────────────────────────────────────────────────────────────── */
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Writable } from "node:stream";
import { AppRoutes } from "./App";

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Acumulamos os pedaços como Buffer e só convertemos para texto no fim.
    // Converter pedaço a pedaço corromperia caracteres acentuados que caem
    // exatamente na fronteira entre dois chunks (ç, ã, é ocupam 2 bytes).
    // Buffer.from() copia — o React reaproveita o buffer interno entre chunks.
    const partes: Buffer[] = [];
    let settled = false;

    const sink = new Writable({
      write(chunk, _enc, cb) {
        partes.push(Buffer.from(chunk));
        cb();
      },
      final(cb) {
        if (!settled) {
          settled = true;
          // O renderToPipeableStream do React 18 ocasionalmente insere um
          // byte nulo (\u0000) na emenda entre dois chunks, ao lado de um
          // caractere acentuado. É lixo puro — o caractere em si vem
          // íntegro logo depois. Se ficasse no HTML, o navegador o
          // exibiria como "" (o losango de interrogação). Removemos.
          const texto = Buffer.concat(partes).toString("utf8");
          resolve(texto.replace(/\u0000/g, ""));
        }
        cb();
      },
    });

    const { pipe, abort } = renderToPipeableStream(
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>,
      {
        // onAllReady só dispara depois que todo lazy()/Suspense resolveu,
        // garantindo HTML completo em vez do fallback vazio.
        onAllReady() {
          pipe(sink);
        },
        onError(err) {
          if (!settled) {
            settled = true;
            reject(err);
          }
        },
      }
    );

    // Rede de segurança: não deixa o build pendurado se algo travar.
    const t = setTimeout(() => {
      if (!settled) {
        settled = true;
        abort();
        reject(new Error("Timeout ao pré-renderizar " + url));
      }
    }, 20000);
    if (typeof t.unref === "function") t.unref();
  });
}
