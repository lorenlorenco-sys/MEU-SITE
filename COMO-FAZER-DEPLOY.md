# Guia definitivo — lorenlorenco.com.br

**Regra de ouro: nunca mais faça upload manual de pasta no painel do Cloudflare.**
Era isso que fazia versões antigas do site voltarem: existiam 7 pastas de build
diferentes no projeto (abril a julho) e bastava arrastar a errada. Todas foram
movidas para `_arquivo-builds-antigos/` (nada foi apagado).

## Diagnóstico (15/07/2026)

- Site NO AR e servindo o build mais recente (`assets/index-CPQrZYKC.js` = `dist/` de 07/jul).
- DNS, SSL, `_headers` (cache) e `_redirects` (SPA) estão corretos — não mexer.
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
5. Cloudflare publica sozinho em ~1 minuto.

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
