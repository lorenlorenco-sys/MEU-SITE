// Servidas de /public com nome estável (sem hash) para poderem ser
// pré-carregadas via <link rel="preload"> no index.html antes do JS executar.
const lorenHero = "/images/loren-analise-hero.webp";
const lorenHeroMobile = "/images/loren-analise-hero-mobile.webp";

import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { gtagSendEvent, WA_PADROES } from "@/lib/gtag";

// ─── Lazy: chunk separado, baixado só após scroll ou 2s ───────────────────
// O import() dinâmico garante que o Vite/webpack gere um chunk independente
// para tudo que está abaixo da dobra (FAQ, Depoimentos, Sobre, etc.).
const AnaliseBelowFold = lazy(
  () => import("@/components/AnaliseBelowFold")
);

const CTA_URL = WA_PADROES;

/* ── Paleta ──────────────────────────────────────────────────────────────── */
const C = {
  bg:        "hsl(40 20% 97%)",          // creme principal
  bgMuted:   "hsl(40 20% 93%)",          // creme levemente mais escuro
  forest:    "hsl(163 58% 18%)",         // verde floresta (fundo escuro)
  forestDk:  "hsl(163 58% 12%)",         // verde floresta mais escuro
  sage:      "hsl(163 20% 35%)",         // verde sálvia (texto sobre creme)
  terracota: "hsl(25 55% 51%)",          // terracota
  gold:      "hsl(37 82% 58%)",          // dourado
  goldPale:  "hsl(37 60% 88%)",          // dourado pálido (texto suave sobre escuro)
  border:    "hsl(100 10% 85%)",         // borda clara
  cream:     "hsl(40 20% 97%)",          // creme (texto sobre fundo escuro)
};

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "Inter, system-ui, sans-serif";

/* ── Helpers (usados acima da dobra) ─────────────────────────────────────── */
const GoldLine = ({ center = false }: { center?: boolean }) => (
  <div
    style={{
      width: 44,
      height: 2,
      background: `linear-gradient(90deg, ${C.gold}, ${C.terracota})`,
      marginBottom: 20,
      ...(center ? { marginLeft: "auto", marginRight: "auto" } : {}),
    }}
  />
);

const StarRow = () => (
  <div className="flex gap-0.5" aria-label="5 estrelas">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={C.gold}>
        <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8l-2.78 1.46.53-3.09L1.5 4.27l3.11-.45z" />
      </svg>
    ))}
  </div>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
    style={{
      backgroundColor: "hsl(37 60% 92%)",
      color: C.forest,
      fontFamily: sans,
      border: `1px solid hsl(37 60% 78%)`,
    }}
  >
    {children}
  </span>
);

const CtaButton = ({
  className = "",
  label = "Falar com a Loren no WhatsApp →",
  variant = "terracota",
  size = "md",
}: {
  className?: string;
  label?: string;
  variant?: "terracota" | "gold";
  size?: "md" | "lg";
}) => {
  const bg    = variant === "gold" ? C.gold : C.terracota;
  const color = variant === "gold" ? C.forest : C.cream;
  const py    = size === "lg" ? "py-5" : "py-4";
  const px    = size === "lg" ? "px-8 sm:px-12" : "px-7 sm:px-10";
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.preventDefault(); gtagSendEvent(CTA_URL); }}
      className={`inline-block text-xs tracking-[0.22em] uppercase ${px} ${py} rounded-sm transition-all duration-200 hover:brightness-105 hover:scale-[1.025] hover:shadow-xl active:scale-100 ${className}`}
      style={{ backgroundColor: bg, color, fontFamily: sans, fontWeight: 500 }}
    >
      {label}
    </a>
  );
};

/* ══════════════════════════════════════════════════════════════════════════ */
/*  PÁGINA                                                                    */
/* ══════════════════════════════════════════════════════════════════════════ */
const AnalisePadroes = () => {
  // ─── Carregamento diferido do below-fold ──────────────────────────────
  // Dispara quando o usuário começa a rolar (IntersectionObserver observa
  // um sentinel no fim da section de identificação) OU após 2 segundos,
  // o que ocorrer primeiro — evitando que usuários lentos nunca vejam o conteúdo.
  const [showBelow, setShowBelow] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Gatilho 1: timeout de segurança de 2 s
    const timer = setTimeout(() => setShowBelow(true), 2000);

    // Gatilho 2: scroll — observa um div logo abaixo da seção visível
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBelow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // pré-carrega 300px antes de chegar na dobra
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Fonte Cormorant Garamond agora é pré-carregada globalmente no index.html
          (junto com Playfair Display) para evitar uma 2ª requisição de fonte
          render-blocking só nesta página, o que atrasava o LCP do H1. */}

      {/* pb-20 no mobile para não cobrir conteúdo com o sticky CTA */}
      <main
        className="overflow-hidden pb-20 lg:pb-0"
        style={{ fontFamily: serif, backgroundColor: C.bg, color: C.forest, contain: "paint" }}
      >

        {/* ─── HERO ──────────────────────────────────────────────────────── */}
        <section className="min-h-[90vh] lg:min-h-screen flex flex-col lg:flex-row">

          {/* Texto */}
          <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 xl:px-24 lg:py-0 order-2 lg:order-1"
               style={{ backgroundColor: C.bg }}>
            <div className="mb-5">
              <Chip>Sessão online · 40 min · Com mapa dos próximos passos</Chip>
            </div>

            <GoldLine />

            {/* ① Título direto e identificável — alinhado com a busca */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] leading-[1.1] tracking-tight mb-6 max-w-xl"
              style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
            >
              Terapia online para mulheres que estão cansadas de repetir os mesmos{" "}
              <em style={{ color: C.terracota, fontWeight: 400 }}>
                problemas nos relacionamentos, carreira, nas escolhas e na vida emocional.
              </em>
            </h1>

            {/* ② Texto que nomeia a dor + ③ apresentação da Análise */}
            <div className="space-y-3 max-w-md mb-7">
              <p
                className="text-[15px] leading-relaxed"
                style={{ fontFamily: sans, color: C.sage }}
              >
                Relacionamentos difíceis, ansiedade, depressão, culpa,
                sobrecarga, medo de se posicionar e sensação de carregar
                tudo sozinha podem ser sinais de padrões emocionais que se
                repetem há muito tempo.
              </p>
              <p
                className="text-[15px] leading-relaxed"
                style={{ fontFamily: sans, color: C.forest }}
              >
                No{" "}
                <strong style={{ fontWeight: 500 }}>
                  Encontro Terapêutico
                </strong>
                , você tem uma sessão online individual para entender
                melhor o que está acontecendo com você, por que certos
                padrões continuam se repetindo e quais pontos precisam ser
                trabalhados no seu processo terapêutico.
              </p>
              <p
                className="text-[15px] leading-relaxed"
                style={{ fontFamily: sans, color: C.sage }}
              >
                Depois da sessão, você recebe o{" "}
                <strong style={{ fontWeight: 500, color: C.forest }}>
                  Mapa Inicial do Processo Terapêutico
                </strong>
                : um Mapa com os principais padrões identificados e os
                próximos passos sugeridos para conduzir seu processo com
                mais clareza.
              </p>
            </div>

            {/* ④ CTA + ⑤ frase de apoio */}
            <div className="flex flex-col items-start gap-2.5 mb-7">
              <CtaButton size="lg" label="Falar com a Loren no WhatsApp →" />
              <p
                className="text-[12px] leading-relaxed max-w-xs"
                style={{ fontFamily: sans, color: C.sage }}
              >
                Ideal para quem sente que está repetindo os mesmos problemas,
                mas ainda não sabe por onde começar.
              </p>
            </div>

            {/* Vagas + preço */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mb-8">
              <div
                className="flex-1 flex items-center gap-3 px-4 py-3 rounded-sm"
                style={{ backgroundColor: C.bgMuted, border: `1px solid ${C.border}` }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#4ade80", flexShrink: 0, boxShadow: "0 0 0 3px #4ade8033" }} />
                <p className="text-[12px]" style={{ fontFamily: sans, color: C.forest }}>
                  <strong style={{ fontWeight: 500 }}>Vagas limitadas</strong>, até 8 por mês
                </p>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-sm"
                style={{ backgroundColor: C.bgMuted, border: `1px solid ${C.border}` }}
              >
                <span className="text-base font-light" style={{ fontFamily: serif, color: C.gold }}>R$</span>
                <span className="text-base font-medium" style={{ fontFamily: sans, color: C.forest }}>129,90</span>
              </div>
            </div>

            {/* Métricas */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { n: "8+",   l: "anos de experiência" },
                { n: "500+", l: "mulheres atendidas" },
                { n: "Mapa", l: "de resumo incluso" },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-base font-light" style={{ fontFamily: serif, color: C.terracota }}>{m.n}</span>
                  <span className="text-[11px] tracking-wide uppercase" style={{ fontFamily: sans, color: C.sage }}>{m.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Foto */}
          <div className="lg:flex-1 h-[55vw] max-h-[65vh] lg:h-auto lg:max-h-none order-1 lg:order-2 relative">
            {/* <picture> com variante leve (700px / ~29KB) para mobile —
                a versão de 1200px (~92KB) só baixa em telas lg+. Isso corta
                o peso da imagem de LCP em ~70% no celular. */}
            <picture>
              <source media="(min-width: 1024px)" srcSet={lorenHero} />
              <img
                src={lorenHeroMobile}
                alt="Loren Lorenço, psicanalista"
                className="w-full h-full object-cover object-[center_10%]"
                width={700}
                height={870}
                fetchpriority="high"
                loading="eager"
                decoding="async"
              />
            </picture>
            {/* Gradiente: mobile = baixo→cima, desktop = esquerda→direita */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-black/35 lg:to-transparent" />

            {/* ─── Abordagens terapêuticas ───────────────────────────────────
                Mobile: oculto (cobria o rosto) — aparece na faixa e no
                bloco de método da 2ª dobra
                Desktop: lista vertical no canto inferior-esquerdo          */}
            <div
              className="absolute bottom-4 left-4 hidden lg:block"
              style={{
                backgroundColor: "rgba(8,32,24,0.96)",
                border: "1px solid rgba(212,160,60,0.32)",
                borderRadius: "2px",
                padding: "11px 13px",
                maxWidth: "204px",
              }}
            >
              {/* Rótulo */}
              <p
                className="text-[8px] tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: sans, color: C.gold }}
              >
                Abordagem integrativa
              </p>

              {/* Lista: 2 col no mobile → 1 col no desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 gap-y-[4px] lg:gap-y-[6px]">
                {[
                  "Psicanálise",
                  "Psicologia Junguiana",
                  "Clínica Contemporânea",
                  "Constelação Familiar",
                  "Neurobiologia do Trauma",
                  "Neurociência",
                  "Fases do Desenvolvimento",
                  "Medicina Chinesa",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span
                      style={{
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        backgroundColor: C.gold,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="text-[10px] leading-snug"
                      style={{ fontFamily: sans, color: C.cream }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge estrelas — oculto em mobile pequeno */}
            <div
              className="absolute bottom-4 right-4 rounded-sm px-4 py-3 hidden sm:block"
              style={{
                backgroundColor: "hsl(40 20% 97%)",
                border: `1px solid ${C.border}`,
              }}
            >
              <StarRow />
              <p className="text-[11px] mt-1" style={{ fontFamily: sans, color: C.forest }}>
                +500 encontros realizados
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAIXA DE ATRIBUTOS ────────────────────────────────────────── */}
        {/* Keywords alinhados com Google Ads + prova de método */}
        <div
          className="px-6 py-4 flex flex-wrap gap-x-6 gap-y-2 justify-center items-center"
          style={{ backgroundColor: C.forest }}
        >
          {[
            "Psicoterapia online",
            "Psicanálise · Psicologia Junguiana · Neurociência",
            "40 min · Mapa personalizado incluso",
            "Para mulheres · 8 vagas/mês",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: C.gold, flexShrink: 0 }} />
              <span className="text-[10px] tracking-[0.22em] uppercase" style={{ fontFamily: sans, color: C.cream }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* ─── IDENTIFICAÇÃO ─────────────────────────────────────────────── */}
        {/* Posicionada ANTES dos depoimentos: tráfego frio precisa se reconhecer
            na dor antes de ver prova social — melhora conversão Google Ads      */}
        {/* FUNDO ESCURO: toda a tipografia usa cream sólido ou gold */}
        <section
          className="px-6 py-14 md:px-12 md:py-20"
          style={{ backgroundColor: C.forest }}
        >
          <div className="max-w-3xl mx-auto">
            <GoldLine />

            {/* ① Título de identificação */}
            <h2
              className="text-2xl md:text-3xl lg:text-[2.35rem] leading-[1.12] tracking-tight mb-4 max-w-2xl"
              style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
            >
              Você já entendeu muita coisa,{" "}
              <em style={{ color: C.gold, fontWeight: 400 }}>
                mas ainda se vê voltando para o mesmo lugar.
              </em>
            </h2>

            {/* ② Subtexto da lógica estrutural */}
            <p
              className="text-[15px] leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: sans, color: C.goldPale }}
            >
              Isso significa que talvez você esteja tentando resolver sintomas
              sem enxergar a estrutura que os sustenta.
            </p>

            {/* ③ Cards de identificação — 2 col desktop, empilhado mobile */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { n: "01", t: "Você sabe explicar o que sente, mas ainda reage como se estivesse em sobrevivência." },
                { n: "02", t: "No amor, na família ou no trabalho, você sente que precisa sustentar mais do que deveria." },
                { n: "03", t: "Você tenta se posicionar, mas culpa, medo ou ansiedade puxam você de volta." },
                { n: "04", t: "Você já fez terapia, leu, refletiu, tentou sozinha… mas ainda sente que falta um mapa claro do que se repete." },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 rounded-sm px-5 py-5"
                  style={{
                    border: "1px solid rgba(250,246,240,0.16)",
                    backgroundColor: "rgba(250,246,240,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: serif,
                      fontWeight: 300,
                      color: "rgba(212,160,60,0.55)",
                      fontSize: "1.4rem",
                      lineHeight: 1,
                    }}
                  >
                    {card.n}
                  </span>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ fontFamily: sans, color: C.cream }}
                  >
                    {card.t}
                  </p>
                </div>
              ))}
            </div>

            {/* ④ Bloco de método — autoridade clínica elegante */}
            <div
              className="mb-10 text-center px-6 py-5 rounded-sm mx-auto"
              style={{
                border: "1px solid rgba(212,160,60,0.22)",
                backgroundColor: "rgba(250,246,240,0.04)",
                maxWidth: "600px",
              }}
            >
              <p
                className="text-[9px] tracking-[0.32em] uppercase mb-3"
                style={{ fontFamily: sans, color: C.gold }}
              >
                Método próprio integrando
              </p>
              <p
                className="text-base italic leading-relaxed"
                style={{ fontFamily: serif, fontWeight: 300, color: C.goldPale }}
              >
                psicanálise, psicologia junguiana, clínica contemporânea,
                constelação familiar, neurobiologia do trauma, neurociência,
                fases do desenvolvimento humano e Medicina Chinesa.
              </p>
            </div>

            {/* ⑤ CTA */}
            <div className="text-center">
              <CtaButton variant="gold" size="lg" label="Falar com a Loren no WhatsApp →" />
              <p className="text-[11px] mt-3" style={{ fontFamily: sans, color: C.goldPale }}>
                R$ 129,90 · 40 min · Mapa incluso
              </p>
            </div>
          </div>
        </section>

        {/* ─── SENTINEL: dispara o carregamento do below-fold ───────────── */}
        {/* Fica logo abaixo da dobra visível; o IntersectionObserver
            detecta quando o usuário se aproxima e aciona o lazy import. */}
        <div ref={sentinelRef} aria-hidden="true" />

        {/* ─── BELOW FOLD (lazy) ─────────────────────────────────────────── */}
        {showBelow && (
          <Suspense
            fallback={
              // Placeholder mínimo para evitar CLS enquanto o chunk carrega
              <div style={{ minHeight: "60vh", backgroundColor: C.bgMuted }} aria-hidden="true" />
            }
          >
            <AnaliseBelowFold />
          </Suspense>
        )}

        {/* ─── STICKY CTA MOBILE ─────────────────────────────────────────── */}
        {/* Fora do lazy: precisa aparecer imediatamente no mobile */}
        <div
          className="fixed bottom-0 left-0 right-0 z-50 p-3 lg:hidden"
          style={{
            backgroundColor: C.bg,
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.preventDefault(); gtagSendEvent(CTA_URL); }}
            className="flex items-center justify-between w-full text-xs tracking-[0.18em] uppercase px-5 py-4 rounded-sm hover:opacity-90 transition-opacity"
            style={{
              background: `linear-gradient(90deg, ${C.terracota}, hsl(20 60% 46%))`,
              color: C.cream,
              fontFamily: sans,
              fontWeight: 500,
            }}
          >
            <span>Falar com a Loren no WhatsApp</span>
            <span className="flex flex-col items-end leading-tight">
              <span className="text-[9px] tracking-[0.05em] normal-case font-normal opacity-80">R$ 129,90 · Mapa incluso</span>
              <span>→</span>
            </span>
          </a>
        </div>

      </main>
    </>
  );
};

export default AnalisePadroes;
