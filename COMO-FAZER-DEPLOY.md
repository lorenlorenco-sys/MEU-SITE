# Guia definitivo — lorenlorenco.com.br

**Regra de ouro: nunca mais faça upload manual de pasta no painel do Cloudflare.**
Era isso que fazia versões antigas do site voltarem: existiam 7 pastas de build
diferentes no projeto (abril a julho) e bastava arrastar a errada. Todas foram
movidas para `_arquivo-builds-antigos/` (nada foi apagado).

## Diagnóstico (16/07/2026) — instabilidade intermitente RESOLVIDA na camada de cache

Evidência coletada ao vivo: a borda do Cloudflare servia HTML de ~21h atrás
(`cf-cache-status: HIT`, `age: 74955`) apontando para `index-CPQrZYKC.js`
(build de 07/jul), enquanto a origem já servia o deploy de 16/07 11:23
(`index-DVxgKgba.js`). Os assets antigos NÃO existem mais na origem e voltavam
como `200 text/html` (fallback do `_redirects`) com `Cache-Control: immutable,
1 ano` — ou seja, o navegador guardava HTML no lugar de JavaScript por 1 ano.
É por isso que o problema "sumia e voltava": dependia de qual datacenter/cache
atendia o acesso.

Causa no repositório: a regra `/index.html` do `public/_headers` NUNCA casa em
produção (o Pages redireciona `/index.html` → `/`), então o HTML das rotas
ficava sem política de cache. Corrigido: regra `/*` com `max-age=0,
must-revalidate` + `! Cache-Control` antes de reativar cache longo só em
`/assets/*` (arquivos com hash).

### Ação ÚNICA no painel do Cloudflare (fazer 1 vez)

O HTML só entra no cache da borda (`cf-cache-status: HIT` com `age` de 20h e
`max-age=14400`) se existir regra de zona. Verificar e corrigir:

1. Painel > domínio lorenlorenco.com.br > **Rules > Page Rules** e **Rules >
   Cache Rules**: se houver regra "Cache Everything" (ou "Eligible for cache")
   cobrindo o site, EDITAR para "Bypass cache" em HTML ou simplesmente
   EXCLUIR a regra (anote antes o que ela dizia, para rollback).
2. **Caching > Configuration > Browser Cache TTL**: deixar em
   "Respect Existing Headers".
3. **Caching > Configuration > Purge Everything** (1 vez, após o deploy desta
   correção) — remove o HTML velho e os assets envenenados da borda.
4. Validar: `npm run smoke:prod` deve terminar com "Producao consistente".

## Diagnóstico anterior (15/07/2026)

- Site NO AR e servindo o build mais recente (`assets/index-CPQrZYKC.js` = `dist/` de 07/jul).
- DNS, SSL e `_redirects` (SPA) corretos. (O `_headers` parecia correto, mas a
  regra `/index.html` não tinha efeito — ver diagnóstico de 16/07 acima.)
- Causa raiz das regressões: deploy manual + ausência de git (o `.git` do Lovable
  apontava para um servidor deles que não existe mais).
- Fator de risco extra: o projeto está dentro do OneDrive, que pode restaurar
  versões antigas de arquivos silenciosamente. Com o GitHub como fonte da
  verdade, esse risco fica neutralizado.

## Passo 1 — Finalizar o Git (fazer 1 vez, na sua máquina)

O repositório já foi iniciado. Abra o PowerShell na pasta do projeto e rode:

```powershell
git add -A
git commit -m "Estado inicial: codigo em producao (build 07/jul)"
```

Depois publique no GitHub (mais fácil pelo GitHub Desktop: File > Add local
repository > Publish repository > marque "keep this code private").

## Passo 2 — Conectar o Cloudflare Pages ao GitHub (fazer 1 vez)

1. Painel Cloudflare > Workers & Pages > seu projeto Pages.
2. Settings > Builds & deployments > Connect to Git > escolha o repositório.
3. Configuração de build:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Production branch: `main`
4. Pronto: todo `git push` na main publica automaticamente o build correto.

## Fluxo de trabalho a partir de agora

1. Editar o código.
2. `npm test` — testes de regressão (inclui rota /analise-estrutural).
3. `npm run predeploy` — build + verificação de imagens LCP, GTM, canonical.
4. `git add -A && git commit -m "descricao"` e `git push`.
5. Cloudflare publica sozinho em ~1 minuto (e o GitHub Actions roda testes +
   smoke test de produção automaticamente a cada push).
6. `npm run smoke:prod` — confirma que borda e origem servem o MESMO build e
   que nenhum asset devolve HTML no lugar de JS/CSS.

### Rollback (se algo der errado)

Painel Cloudflare > Workers & Pages > projeto > Deployments > deploy anterior >
"Rollback to this deployment". Um clique, instantâneo.

## O que NUNCA fazer

- Upload manual de pasta/zip no painel (usa build errado).
- Criar cópias `dist-alguma-coisa` — só existe `dist/`, e ela nem vai pro git.
- Editar arquivos direto no painel do Cloudflare.
- Mudar SSL/TLS, Page Rules ou `_headers` sem registrar aqui o valor anterior.

## Configuração Cloudflare atual (não alterar sem motivo)

- `public/_headers`: assets com hash = cache 1 ano imutável; `index.html` =
  `must-revalidate` (sempre busca a versão nova). Correto para SPA com Vite.
- `public/_redirects`: `/* /index.html 200` — necessário para as rotas do React.
