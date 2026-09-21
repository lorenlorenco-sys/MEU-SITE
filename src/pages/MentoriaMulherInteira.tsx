/* ──────────────────────────────────────────────────────────────────────────
   MENTORIA MULHER INTEIRA — página de vendas (Turma 1)

   Rota: /mentoria-mulher-inteira

   Identidade visual tirada do card oficial da mentoria: verde floresta,
   terracota, dourado queimado e papel creme. Tipografia Cormorant Garamond
   (títulos) + Inter (corpo) — ambas já self-hosted em src/fonts.ts, então
   esta página não baixa nenhuma fonte extra.

   Imagens: servidas de /public com nome estável (sem hash) para poderem ser
   pré-carregadas via <link rel="preload"> no index.html antes do JS executar.
   ────────────────────────────────────────────────────────────────────── */
const selo       = "/images/mentoria-selo.webp";
const seloMobile = "/images/mentoria-selo-mobile.webp";
const lorenFoto  = "/images/loren-mentoria.webp";
const lorenFotoM = "/images/loren-mentoria-mobile.webp";

import SEOHead from "@/components/SEOHead";
import { gtagSendEvent, WA_GERAL } from "@/lib/gtag";

const CTA_URL = WA_GERAL;

/* ── Paleta — extraída do card oficial da marca ──────────────────────────── */
const C = {
  paper:     "hsl(41 44% 92%)",   // papel creme do card (fundo principal)
  paperDeep: "hsl(38 32% 87%)",   // creme mais fechado (seção alternada)
  forest:    "hsl(163 45% 17%)",  // verde floresta (fundo escuro)
  forestDk:  "hsl(163 50% 10%)",  // verde mais profundo
  sage:      "hsl(163 16% 34%)",  // verde acinzentado (texto sobre creme)
  terracota: "hsl(22 52% 51%)",   // terracota
  gold:      "hsl(38 58% 45%)",   // dourado queimado
  goldSoft:  "hsl(38 55% 78%)",   // dourado claro (texto sobre fundo escuro)
  border:    "hsl(38 24% 78%)",   // borda sobre creme
  cream:     "hsl(41 48% 95%)",   // texto sobre fundo escuro
};

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "Inter, system-ui, sans-serif";

/* ── Helpers ─────────────────────────────────────────────────────────────── */
const GoldLine = ({ center = false, light = false }: { center?: boolean; light?: boolean }) => (
  <div
    style={{
      width: 46,
      height: 2,
      background: light
        ? `linear-gradient(90deg, ${C.goldSoft}, ${C.terracota})`
        : `linear-gradient(90deg, ${C.gold}, ${C.terracota})`,
      marginBottom: 20,
      ...(center ? { marginLeft: "auto", marginRight: "auto" } : {}),
    }}
  />
);

const Eyebrow = ({ children, light = false, center = false }: {
  children: React.ReactNode; light?: boolean; center?: boolean;
}) => (
  <p
    className={`text-[10px] tracking-[0.3em] uppercase mb-3 ${center ? "text-center" : ""}`}
    style={{ fontFamily: sans, color: light ? C.goldSoft : C.gold }}
  >
    {children}
  </p>
);

const Cta = ({
  label,
  variant = "terracota",
  size = "md",
  className = "",
}: {
  label: string;
  variant?: "terracota" | "gold";
  size?: "md" | "lg";
  className?: string;
}) => {
  const bg    = variant === "gold" ? C.gold : C.terracota;
  const color = variant === "gold" ? C.forestDk : C.cream;
  const py    = size === "lg" ? "py-5" : "py-4";
  const px    = size === "lg" ? "px-8 sm:px-12" : "px-7 sm:px-10";
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { e.preventDefault(); gtagSendEvent(CTA_URL); }}
      className={`inline-block text-center text-[11px] sm:text-xs tracking-[0.2em] uppercase ${px} ${py} rounded-sm transition-all duration-200 hover:brightness-110 hover:scale-[1.02] hover:shadow-xl active:scale-100 ${className}`}
      style={{ backgroundColor: bg, color, fontFamily: sans, fontWeight: 500 }}
    >
      {label}
    </a>
  );
};

/* Ponto dourado usado nas listas */
const Dot = ({ light = false }: { light?: boolean }) => (
  <span
    aria-hidden="true"
    style={{
      width: 5,
      height: 5,
      borderRadius: "50%",
      backgroundColor: light ? C.goldSoft : C.gold,
      flexShrink: 0,
      marginTop: 9,
    }}
  />
);

/* ══════════════════════════════════════════════════════════════════════════ */
/*  CONTEÚDO                                                                  */
/* ══════════════════════════════════════════════════════════════════════════ */

const MOMENTOS = [
  {
    n: "01",
    t: "Você está vivendo uma dor",
    d: "Uma dor emocional, conflitos nos relacionamentos ou situações que se repetem e machucam. Você sabe que precisa de ajuda, mas não sabe por onde começar.",
  },
  {
    n: "02",
    t: "Sua vida está funcionando",
    d: "Você trabalha, cuida, resolve e atende às demandas. Não existe uma grande crise, mas existe a sensação de que alguma parte sua está ficando para trás. Como nada parece urgente, as necessidades dos outros chegam primeiro.",
  },
  {
    n: "03",
    t: "Você chegou a um ponto de virada",
    d: "Está encerrando um ciclo ou vivendo uma mudança. E já percebe que não quer começar uma nova fase carregando os mesmos medos, padrões e formas de se abandonar.",
  },
];

const TEMAS = [
  {
    n: "01",
    t: "A criança ferida",
    d: "Como experiências de rejeição, abandono, críticas ou falta de acolhimento ainda influenciam suas escolhas e relações.",
  },
  {
    n: "02",
    t: "Os padrões que se repetem",
    d: "A necessidade de agradar, o medo de decepcionar, a culpa, a autocobrança e as situações em que você se abandona para preservar um vínculo.",
  },
  {
    n: "03",
    t: "A mulher que você precisou se tornar",
    d: "A mulher forte, controladora, independente ou responsável por tudo — o que ela precisou proteger e o preço que você paga por continuar vivendo dessa maneira.",
  },
  {
    n: "04",
    t: "Identidade e valor pessoal",
    d: "A diferença entre quem você é e aquilo que aprendeu que precisava ser para receber amor, aprovação e reconhecimento.",
  },
  {
    n: "05",
    t: "Limites e posicionamento",
    d: "A capacidade de dizer não, expressar suas necessidades, sustentar escolhas e permanecer ao seu lado mesmo quando o outro não aprova.",
  },
  {
    n: "06",
    t: "Desejos, escolhas e recomeços",
    d: "O que você sente, o que deseja e o que faz sentido para a mulher que é hoje e para a próxima fase da sua vida.",
  },
];

const PARA_QUEM = [
  "Está vivendo uma dor emocional e não sabe por onde começar",
  "Percebe que continua repetindo padrões que machucam",
  "Sente que se perdeu nos relacionamentos ou nas responsabilidades",
  "Cuida de todos, mas tem dificuldade de se priorizar",
  "Sente culpa quando tenta colocar limites",
  "Sabe o que precisa fazer, mas não consegue sustentar",
  "Mesmo sendo competente, duvida do próprio valor e teme ser descoberta como uma fraude",
  "Não está vivendo uma crise, mas percebe que precisa olhar para si",
  "Adia seus movimentos emocionais porque sempre surge algo mais urgente",
  "Sente que está diante de uma mudança, um ponto de virada ou um recomeço",
  "Não quer levar os mesmos padrões para a próxima fase da vida",
  "Deseja construir uma relação mais segura consigo mesma",
];

const ENTREGAS = [
  ["1 encontro individual", "Uma hora comigo, antes do percurso em grupo começar."],
  ["Mapa de Consciência Emocional", "Aplicado no encontro individual, olhando para a sua história e o seu momento."],
  ["Dossiê Individual da Mulher Inteira", "Os principais pontos identificados e uma direção inicial para a sua jornada."],
  ["8 encontros semanais", "On-line, ao vivo e em grupo, ao longo de dois meses."],
  ["Acompanhamento da sua jornada", "Durante todo o período da mentoria."],
  ["Caderno de Travessia", "Material autoral para impressão, usado do início ao fim do processo."],
  ["Testes e exercícios", "Entre os encontros, para sustentar o que foi trabalhado."],
  ["Materiais de apoio", "Conteúdos complementares ao longo do percurso."],
  ["Acesso às gravações", "Disponíveis durante o período da mentoria."],
];

const FAQ = [
  {
    q: "Como acontecem os encontros?",
    a: "São 8 encontros semanais, on-line, ao vivo e em grupo, ao longo de dois meses. Antes do percurso coletivo começar, você tem um encontro individual de uma hora comigo. As gravações ficam disponíveis durante o período da mentoria.",
  },
  {
    q: "Vou precisar expor a minha história para o grupo?",
    a: "Não. Você não precisará expor nada que não desejar. Cada mulher vive o processo respeitando o próprio tempo e os próprios limites.",
  },
  {
    q: "Não estou em crise. Ainda faz sentido participar?",
    a: "Faz. Nem toda mulher começa um processo porque tudo desmoronou. Muitas começam porque perceberam que estão se deixando para depois e não querem esperar a dor aumentar.",
  },
  {
    q: "A mentoria substitui a psicoterapia?",
    a: "Não. É um processo de consciência emocional em grupo, com acompanhamento individualizado, e não substitui um tratamento psicoterapêutico individual. Se você já faz terapia, a mentoria pode caminhar junto com o seu processo.",
  },
  {
    q: "Como funciona o investimento?",
    a: "O valor especial da primeira turma é de R$ 697,00 à vista ou 4 vezes de R$ 174,25 sem juros. As vagas são limitadas para que eu consiga conhecer e acompanhar a jornada de cada participante.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════ */
/*  PÁGINA                                                                    */
/* ══════════════════════════════════════════════════════════════════════════ */
const MentoriaMulherInteira = () => (
  <>
    <SEOHead
      title="Mentoria Mulher Inteira | Loren Lorenço"
      description="Processo de dois meses para mulheres que desejam compreender suas feridas, reconhecer os padrões que as afastam de si e recuperar as partes que foram deixando para trás. Turma 1, on-line e ao vivo, com vagas limitadas."
      canonicalPath="/mentoriamulherinteira"
      ogImage="/images/mentoria-og.jpg"
    />

    {/* pb-24 no mobile para o CTA fixo não cobrir conteúdo */}
    <main
      className="overflow-hidden pb-24 lg:pb-0"
      style={{ fontFamily: serif, backgroundColor: C.paper, color: C.forest, contain: "paint" }}
    >

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section
        className="flex flex-col lg:flex-row lg:min-h-screen"
        style={{ backgroundColor: C.forest }}
      >
        {/* Texto */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 xl:px-24 lg:py-20 order-2 lg:order-1">
          <div className="mb-5">
            <span
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(241,233,214,0.08)",
                color: C.goldSoft,
                fontFamily: sans,
                border: "1px solid rgba(212,170,80,0.34)",
              }}
            >
              <span
                style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: C.terracota }}
                aria-hidden="true"
              />
              Turma 1 · Vagas limitadas
            </span>
          </div>

          <GoldLine light />

          <p
            className="text-[11px] tracking-[0.34em] uppercase mb-3"
            style={{ fontFamily: sans, color: C.goldSoft }}
          >
            Mentoria
          </p>

          <h1
            className="text-4xl md:text-5xl xl:text-[3.6rem] leading-[1.05] tracking-tight mb-4"
            style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
          >
            Mulher Inteira
          </h1>

          <p
            className="text-lg md:text-xl leading-snug mb-6 max-w-md"
            style={{ fontFamily: serif, fontWeight: 300, color: C.goldSoft, fontStyle: "italic" }}
          >
            Reconexão feminina, identidade e força emocional.
          </p>

          <div className="space-y-3 max-w-md mb-7">
            <p className="text-[15px] leading-relaxed" style={{ fontFamily: sans, color: C.cream }}>
              Um processo de dois meses para mulheres que desejam compreender suas feridas,
              reconhecer os padrões que as afastam de si e recuperar as partes que foram
              deixando para trás.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ fontFamily: sans, color: "rgba(241,233,214,0.72)" }}>
              Para quem está vivendo uma dor e não sabe por onde começar. E para quem sente que
              chegou a um ponto de virada e não quer continuar se deixando para depois.
            </p>
          </div>

          <p
            className="text-xl md:text-2xl leading-snug mb-8 max-w-md pl-4"
            style={{
              fontFamily: serif,
              fontWeight: 300,
              color: C.cream,
              borderLeft: `2px solid ${C.terracota}`,
            }}
          >
            Você não precisa se tornar outra mulher.{" "}
            <em style={{ color: C.goldSoft }}>Basta voltar para casa.</em>
          </p>

          <div className="flex flex-col items-start gap-3 mb-9">
            <Cta size="lg" label="Quero participar da primeira turma →" />
            <p className="text-[12px]" style={{ fontFamily: sans, color: "rgba(241,233,214,0.62)" }}>
              R$ 697,00 ou 4x de R$ 174,25 sem juros · Conversa pelo WhatsApp
            </p>
          </div>

          {/* Métricas rápidas */}
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {[
              { n: "2", l: "meses de travessia" },
              { n: "8", l: "encontros ao vivo" },
              { n: "1", l: "encontro individual" },
            ].map((m) => (
              <div key={m.l} className="flex items-center gap-2">
                <span className="text-xl font-light" style={{ fontFamily: serif, color: C.terracota }}>
                  {m.n}
                </span>
                <span
                  className="text-[10px] tracking-[0.16em] uppercase"
                  style={{ fontFamily: sans, color: "rgba(241,233,214,0.66)" }}
                >
                  {m.l}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Selo da mentoria — arte sem fundo sobre o papel creme da marca */}
        <div
          className="lg:flex-1 flex items-center justify-center px-8 py-14 lg:py-16 order-1 lg:order-2"
          style={{
            background: `radial-gradient(circle at 50% 38%, ${C.cream}, ${C.paperDeep})`,
          }}
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={selo} />
            <img
              src={seloMobile}
              alt="Mentoria Mulher Inteira — integre quem você foi, sustente quem você é e geste quem deseja se tornar"
              className="w-full max-w-[290px] lg:max-w-[420px] h-auto"
              width={675}
              height={1108}
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      {/* ─── FAIXA DE ATRIBUTOS ──────────────────────────────────────────── */}
      <div
        className="px-6 py-4 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 justify-center items-center"
        style={{ backgroundColor: C.forestDk, borderTop: "1px solid rgba(212,170,80,0.18)" }}
      >
        {[
          "On-line e ao vivo",
          "Encontro individual + Mapa de Consciência Emocional",
          "Dossiê individual",
          "Caderno de Travessia",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="hidden sm:block"
              style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: C.gold, flexShrink: 0 }}
            />
            <span
              className="text-[10px] tracking-[0.2em] uppercase text-center"
              style={{ fontFamily: sans, color: "rgba(241,233,214,0.82)" }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* ─── IDENTIFICAÇÃO ───────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-5xl mx-auto">
          <GoldLine />
          <h2
            className="text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.1] tracking-tight mb-5 max-w-2xl"
            style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
          >
            Alguma coisa dentro de você{" "}
            <em style={{ color: C.terracota, fontWeight: 400 }}>está pedindo atenção?</em>
          </h2>
          <p
            className="text-[15px] leading-relaxed mb-12 max-w-xl"
            style={{ fontFamily: sans, color: C.sage }}
          >
            Mulheres chegam à mentoria a partir de três lugares diferentes. Talvez você reconheça
            o seu em um deles.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {MOMENTOS.map((m) => (
              <div
                key={m.n}
                className="flex flex-col gap-3 rounded-sm px-6 py-7"
                style={{
                  backgroundColor: "rgba(255,255,255,0.45)",
                  border: `1px solid ${C.border}`,
                  borderTop: `2px solid ${C.terracota}`,
                }}
              >
                <span
                  style={{ fontFamily: serif, fontWeight: 300, color: C.gold, fontSize: "1.5rem", lineHeight: 1 }}
                >
                  {m.n}
                </span>
                <h3
                  className="text-xl leading-tight"
                  style={{ fontFamily: serif, fontWeight: 400, color: C.forest }}
                >
                  {m.t}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ fontFamily: sans, color: C.sage }}>
                  {m.d}
                </p>
              </div>
            ))}
          </div>

          <div
            className="px-7 py-8 rounded-sm max-w-3xl mx-auto text-center"
            style={{ backgroundColor: C.paperDeep, border: `1px solid ${C.border}` }}
          >
            <p
              className="text-xl md:text-2xl leading-snug"
              style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
            >
              Nem toda mulher começa um processo porque tudo desmoronou.{" "}
              <em style={{ color: C.terracota }}>
                Algumas começam porque perceberam que não querem esperar isso acontecer.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* ─── DOS CONTOS PARA A SUA HISTÓRIA ──────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.forest }}>
        <div className="max-w-4xl mx-auto">
          <GoldLine light />
          <h2
            className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-10 max-w-2xl"
            style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
          >
            Dos contos para{" "}
            <em style={{ color: C.goldSoft }}>a sua própria história</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div
              className="px-6 py-7 rounded-sm"
              style={{ border: "1px solid rgba(241,233,214,0.16)", backgroundColor: "rgba(241,233,214,0.05)" }}
            >
              <Eyebrow light>Entre Contos e Espelhos</Eyebrow>
              <p className="text-[14px] leading-relaxed mb-3" style={{ fontFamily: sans, color: C.cream }}>
                Os contos ajudam você a reconhecer feridas, padrões, medos, desejos e partes de si
                que foram silenciadas.
              </p>
              <p
                className="text-lg leading-snug"
                style={{ fontFamily: serif, fontWeight: 300, color: C.goldSoft, fontStyle: "italic" }}
              >
                Eles oferecem o espelho.
              </p>
            </div>

            <div
              className="px-6 py-7 rounded-sm"
              style={{
                border: "1px solid rgba(212,170,80,0.38)",
                backgroundColor: "rgba(212,170,80,0.08)",
              }}
            >
              <Eyebrow light>Mentoria Mulher Inteira</Eyebrow>
              <p className="text-[14px] leading-relaxed mb-3" style={{ fontFamily: sans, color: C.cream }}>
                Você começa a olhar, com acompanhamento, para a sua própria história: de onde vêm
                seus padrões, como eles afetam sua vida e quais movimentos precisam ser construídos
                para que você pare de se abandonar.
              </p>
              <p
                className="text-lg leading-snug"
                style={{ fontFamily: serif, fontWeight: 300, color: C.goldSoft, fontStyle: "italic" }}
              >
                Aqui começa o caminho de volta.
              </p>
            </div>
          </div>

          <p
            className="text-xl md:text-2xl leading-snug text-center max-w-2xl mx-auto"
            style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
          >
            Nos contos, você começa a se reconhecer.{" "}
            <em style={{ color: C.goldSoft }}>
              Na mentoria, começa o caminho para trazer essas partes de volta.
            </em>
          </p>
        </div>
      </section>

      {/* ─── COMO FUNCIONA ───────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-5xl mx-auto">
          <GoldLine />
          <h2
            className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-4 max-w-2xl"
            style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
          >
            Uma jornada em grupo{" "}
            <em style={{ color: C.terracota, fontWeight: 400 }}>com acompanhamento individual</em>
          </h2>
          <p className="text-[15px] leading-relaxed mb-12 max-w-xl" style={{ fontFamily: sans, color: C.sage }}>
            Embora os encontros aconteçam em grupo, sua jornada não será genérica.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {/* Passo 1 */}
            <div
              className="px-6 py-7 rounded-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.55)", border: `1px solid ${C.border}` }}
            >
              <Eyebrow>Passo 01 · Antes do grupo</Eyebrow>
              <h3 className="text-2xl leading-tight mb-3" style={{ fontFamily: serif, fontWeight: 400, color: C.forest }}>
                Encontro individual de uma hora
              </h3>
              <p className="text-[14px] leading-relaxed mb-4" style={{ fontFamily: sans, color: C.sage }}>
                Vamos olhar para sua história, seu momento atual, as feridas emocionais mais
                presentes e como elas vêm impactando:
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {["seus relacionamentos", "sua identidade", "sua carreira", "seus limites", "sua autoestima", "suas decisões"].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Dot />
                    <span className="text-[13px] leading-relaxed" style={{ fontFamily: sans, color: C.forest }}>
                      {i}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="text-[11px] tracking-[0.16em] uppercase mt-5 pt-4"
                style={{ fontFamily: sans, color: C.gold, borderTop: `1px solid ${C.border}` }}
              >
                Com a aplicação do Mapa de Consciência Emocional
              </p>
            </div>

            {/* Passo 2 */}
            <div
              className="px-6 py-7 rounded-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.55)", border: `1px solid ${C.border}` }}
            >
              <Eyebrow>Passo 02 · Seu ponto de partida</Eyebrow>
              <h3 className="text-2xl leading-tight mb-3" style={{ fontFamily: serif, fontWeight: 400, color: C.forest }}>
                Dossiê Individual da Mulher Inteira
              </h3>
              <p className="text-[14px] leading-relaxed mb-4" style={{ fontFamily: sans, color: C.sage }}>
                Depois do encontro, você recebe um documento com os principais pontos identificados
                na sua história e uma direção inicial para a sua jornada.
              </p>
              <p className="text-[14px] leading-relaxed" style={{ fontFamily: sans, color: C.forest }}>
                Esse mapa será o seu ponto de partida durante os dois meses — e é o que faz o
                percurso coletivo falar com o seu caso, e não com um caso genérico.
              </p>
            </div>
          </div>

          {/* Passo 3 */}
          <div
            className="px-7 py-8 rounded-sm mb-10"
            style={{ backgroundColor: C.forest, border: "1px solid rgba(212,170,80,0.28)" }}
          >
            <Eyebrow light>Passo 03 · Dois meses de travessia</Eyebrow>
            <h3 className="text-2xl md:text-3xl leading-tight mb-3" style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}>
              8 encontros semanais, on-line e ao vivo
            </h3>
            <p className="text-[14px] leading-relaxed max-w-2xl" style={{ fontFamily: sans, color: "rgba(241,233,214,0.78)" }}>
              Encontros em grupo, com exercícios e testes entre as semanas, materiais de apoio e
              acompanhamento da sua jornada do início ao fim. As gravações ficam disponíveis durante
              todo o período.
            </p>
          </div>

          <p
            className="text-xl md:text-2xl leading-snug text-center max-w-2xl mx-auto"
            style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
          >
            O grupo compartilha o caminho.{" "}
            <em style={{ color: C.terracota }}>Mas cada mulher realiza a própria travessia.</em>
          </p>
        </div>
      </section>

      {/* ─── O QUE VAMOS TRABALHAR ───────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.forestDk }}>
        <div className="max-w-5xl mx-auto">
          <GoldLine light center />
          <h2
            className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-4 text-center"
            style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
          >
            O que vamos <em style={{ color: C.goldSoft }}>trabalhar</em>
          </h2>
          <p
            className="text-[15px] leading-relaxed mb-12 text-center max-w-xl mx-auto"
            style={{ fontFamily: sans, color: "rgba(241,233,214,0.7)" }}
          >
            Seis territórios que sustentam a forma como você se relaciona consigo mesma.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEMAS.map((t) => (
              <div
                key={t.n}
                className="flex flex-col gap-3 rounded-sm px-6 py-7"
                style={{
                  border: "1px solid rgba(241,233,214,0.14)",
                  backgroundColor: "rgba(241,233,214,0.045)",
                }}
              >
                <span
                  style={{ fontFamily: serif, fontWeight: 300, color: "rgba(212,170,80,0.7)", fontSize: "1.4rem", lineHeight: 1 }}
                >
                  {t.n}
                </span>
                <h3 className="text-xl leading-tight" style={{ fontFamily: serif, fontWeight: 400, color: C.cream }}>
                  {t.t}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ fontFamily: sans, color: "rgba(241,233,214,0.74)" }}>
                  {t.d}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Cta variant="gold" size="lg" label="Quero participar da primeira turma →" />
          </div>
        </div>
      </section>

      {/* ─── SER UMA MULHER INTEIRA ──────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-4xl mx-auto">
          <GoldLine center />
          <h2
            className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-10 text-center"
            style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
          >
            Ser uma Mulher Inteira{" "}
            <em style={{ color: C.terracota, fontWeight: 400 }}>não é ser perfeita</em>
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {["Não é nunca mais sentir medo.", "Não é ter todas as respostas.", "Não é dar conta de tudo sozinha."].map((n) => (
              <p
                key={n}
                className="text-[15px] leading-relaxed px-5 py-5 rounded-sm text-center"
                style={{
                  fontFamily: sans,
                  color: C.sage,
                  backgroundColor: "rgba(255,255,255,0.4)",
                  border: `1px solid ${C.border}`,
                }}
              >
                {n}
              </p>
            ))}
          </div>

          <div
            className="px-7 py-9 rounded-sm text-center"
            style={{ backgroundColor: C.forest, border: "1px solid rgba(212,170,80,0.28)" }}
          >
            <p
              className="text-xl md:text-2xl leading-snug mb-5"
              style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
            >
              Ser uma Mulher Inteira é{" "}
              <em style={{ color: C.goldSoft }}>
                não precisar abandonar partes de si para ser amada, aceita ou reconhecida.
              </em>
            </p>
            <p
              className="text-[15px] leading-relaxed max-w-xl mx-auto mb-5"
              style={{ fontFamily: sans, color: "rgba(241,233,214,0.78)" }}
            >
              É recuperar sua voz, seus limites, seus desejos e sua capacidade de fazer escolhas
              mais conscientes.
            </p>
            <p
              className="text-lg md:text-xl leading-snug"
              style={{ fontFamily: serif, fontWeight: 300, color: C.goldSoft, fontStyle: "italic" }}
            >
              Força emocional é conseguir permanecer ao seu lado enquanto atravessa a vida.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PARA QUEM É ─────────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-4xl mx-auto">
          <GoldLine />
          <h2
            className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-10 max-w-2xl"
            style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
          >
            Esta mentoria é <em style={{ color: C.terracota, fontWeight: 400 }}>para você que…</em>
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-12">
            {PARA_QUEM.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  style={{ flexShrink: 0, marginTop: 5 }} aria-hidden="true"
                >
                  <path d="M3 8.5l3.2 3.2L13 5" stroke={C.terracota} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14.5px] leading-relaxed" style={{ fontFamily: sans, color: C.forest }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div
            className="px-7 py-8 rounded-sm text-center"
            style={{ backgroundColor: "rgba(255,255,255,0.5)", border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.terracota}` }}
          >
            <p className="text-xl md:text-2xl leading-snug" style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}>
              Você não precisa esperar a dor aumentar para começar.{" "}
              <em style={{ color: C.terracota }}>
                Perceber que está se deixando para depois já é um motivo para voltar.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* ─── O QUE VOCÊ RECEBERÁ ─────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.forest }}>
        <div className="max-w-5xl mx-auto">
          <GoldLine light />
          <h2
            className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-10 max-w-2xl"
            style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
          >
            O que você <em style={{ color: C.goldSoft }}>receberá</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-5 mb-10">
            {ENTREGAS.map(([t, d]) => (
              <div key={t} className="flex items-start gap-3">
                <Dot light />
                <div>
                  <p className="text-[15px] leading-snug" style={{ fontFamily: sans, fontWeight: 500, color: C.cream }}>
                    {t}
                  </p>
                  <p className="text-[13.5px] leading-relaxed" style={{ fontFamily: sans, color: "rgba(241,233,214,0.66)" }}>
                    {d}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-[14px] leading-relaxed px-6 py-5 rounded-sm"
            style={{
              fontFamily: sans,
              color: "rgba(241,233,214,0.82)",
              backgroundColor: "rgba(241,233,214,0.06)",
              border: "1px solid rgba(241,233,214,0.14)",
            }}
          >
            Você não precisará expor nada que não desejar. Cada mulher poderá viver o processo
            respeitando seu próprio tempo e seus limites.
          </p>
        </div>
      </section>

      {/* ─── CADERNO DE TRAVESSIA ────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow center>Material autoral incluso</Eyebrow>
          <h2
            className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-3"
            style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
          >
            Caderno de Travessia
          </h2>
          <p
            className="text-lg leading-snug mb-8"
            style={{ fontFamily: serif, fontWeight: 300, color: C.terracota, fontStyle: "italic" }}
          >
            A jornada da Mulher Inteira de volta para si
          </p>

          <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
            <p className="text-[15px] leading-relaxed" style={{ fontFamily: sans, color: C.sage }}>
              Durante a mentoria, você terá um caderno autoral para registrar aquilo que começa a
              reconhecer, compreender como os padrões aparecem em sua vida e acompanhar os
              movimentos construídos durante os encontros.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ fontFamily: sans, color: C.sage }}>
              Ele será o espaço para reunir suas percepções, testes, exercícios, escolhas e
              descobertas ao longo da jornada.
            </p>
          </div>

          <p className="text-xl md:text-2xl leading-snug" style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}>
            Não será apenas um material para ler.{" "}
            <em style={{ color: C.terracota }}>Será o registro da sua travessia.</em>
          </p>
        </div>
      </section>

      {/* ─── QUEM CONDUZIRÁ VOCÊ ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.forestDk }}>
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="lg:w-[42%]">
            <picture>
              <source media="(min-width: 1024px)" srcSet={lorenFoto} />
              <img
                src={lorenFotoM}
                alt="Loren Lorenço, psicanalista e psicoterapeuta"
                className="w-full h-full object-cover object-[center_20%] max-h-[70vh] lg:max-h-none"
                width={520}
                height={781}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          <div className="lg:w-[58%] flex flex-col justify-center px-6 py-14 md:px-12 lg:px-14 lg:py-20">
            <GoldLine light />
            <h2
              className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
            >
              Quem conduzirá você
            </h2>
            <div className="space-y-4 max-w-xl">
              <p className="text-[15px] leading-relaxed" style={{ fontFamily: sans, color: C.cream }}>
                Sou Loren Lorenço, psicanalista e psicoterapeuta, criadora da Clínica do Vínculo e do
                grupo Entre Contos e Espelhos.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ fontFamily: sans, color: "rgba(241,233,214,0.74)" }}>
                Há quase seis anos acompanho mulheres que, mesmo sendo funcionais, responsáveis e
                capazes, sentem que se perderam de si nos relacionamentos, nas exigências e nos
                papéis que precisaram assumir.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ fontFamily: sans, color: "rgba(241,233,214,0.74)" }}>
                Meu trabalho integra psicanálise, psicologia complexa, neurobiologia do trauma e
                fases do desenvolvimento humano para ajudar cada mulher a compreender sua história e
                construir uma forma mais adulta e segura de se relacionar consigo e com os outros.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-7">
              {["Psicanálise", "Psicologia complexa", "Neurobiologia do trauma", "Desenvolvimento humano"].map((t) => (
                <span
                  key={t}
                  className="text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-full"
                  style={{
                    fontFamily: sans,
                    color: C.goldSoft,
                    border: "1px solid rgba(212,170,80,0.34)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OFERTA ──────────────────────────────────────────────────────── */}
      <section id="oferta" className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-sm overflow-hidden"
            style={{ border: `1px solid ${C.border}`, backgroundColor: "rgba(255,255,255,0.6)" }}
          >
            {/* Cabeçalho da oferta */}
            <div className="px-7 py-7 text-center" style={{ backgroundColor: C.forest }}>
              <p className="text-[10px] tracking-[0.32em] uppercase mb-2" style={{ fontFamily: sans, color: C.goldSoft }}>
                Turma 1
              </p>
              <h2 className="text-2xl md:text-3xl leading-tight" style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}>
                Mentoria Mulher Inteira
              </h2>
            </div>

            {/* Detalhes */}
            <div className="px-7 py-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {[
                  ["Duração", "Dois meses"],
                  ["Encontros", "Semanais e ao vivo"],
                  ["Formato", "On-line e em grupo"],
                  ["Acompanhamento", "Coletivo e individualizado"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 pb-2"
                    style={{ borderBottom: `1px solid ${C.border}` }}
                  >
                    <span className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: sans, color: C.sage }}>
                      {k}
                    </span>
                    <span className="text-[15px] text-right" style={{ fontFamily: sans, color: C.forest }}>
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Preço */}
              <div className="text-center mb-7">
                <p className="text-[10px] tracking-[0.28em] uppercase mb-3" style={{ fontFamily: sans, color: C.gold }}>
                  Investimento especial da primeira turma
                </p>
                <p className="leading-none mb-2">
                  <span className="text-lg align-top" style={{ fontFamily: serif, color: C.sage }}>4x de R$ </span>
                  <span className="text-5xl md:text-6xl" style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}>
                    174
                  </span>
                  <span className="text-2xl" style={{ fontFamily: serif, color: C.forest }}>,25</span>
                </p>
                <p className="text-[13px]" style={{ fontFamily: sans, color: C.sage }}>
                  sem juros · ou R$ 697,00 à vista
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <Cta size="lg" label="Quero fazer parte da primeira turma →" className="w-full sm:w-auto" />
                <div
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm"
                  style={{ backgroundColor: C.paperDeep, border: `1px solid ${C.border}` }}
                >
                  <span
                    aria-hidden="true"
                    style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: C.terracota, flexShrink: 0, boxShadow: `0 0 0 3px ${C.terracota}33` }}
                  />
                  <p className="text-[12px] leading-snug" style={{ fontFamily: sans, color: C.forest }}>
                    <strong style={{ fontWeight: 500 }}>Vagas limitadas</strong> — para que eu possa
                    conhecer e acompanhar a jornada de cada participante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PERGUNTAS FREQUENTES ────────────────────────────────────────── */}
      <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-3xl mx-auto">
          <GoldLine center />
          <h2
            className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-10 text-center"
            style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
          >
            Perguntas <em style={{ color: C.terracota, fontWeight: 400 }}>frequentes</em>
          </h2>

          <div className="space-y-3">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group rounded-sm px-6 py-2"
                style={{ backgroundColor: "rgba(255,255,255,0.5)", border: `1px solid ${C.border}` }}
              >
                <summary
                  className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-start justify-between gap-4 text-lg leading-snug py-3"
                  style={{ fontFamily: serif, fontWeight: 400, color: C.forest }}
                >
                  {f.q}
                  <span
                    className="transition-transform duration-200 group-open:rotate-45 shrink-0 text-2xl leading-none"
                    style={{ color: C.terracota, fontFamily: sans, fontWeight: 300 }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-[14.5px] leading-relaxed mt-1 mb-3" style={{ fontFamily: sans, color: C.sage }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FECHAMENTO ──────────────────────────────────────────────────── */}
      <section className="px-6 py-20 md:px-12 md:py-28" style={{ backgroundColor: C.forest }}>
        <div className="max-w-3xl mx-auto text-center">
          <GoldLine light center />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-tight mb-7"
            style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
          >
            Você não <em style={{ color: C.goldSoft }}>deixou de existir</em>
          </h2>

          <div className="space-y-4 max-w-xl mx-auto mb-8">
            <p className="text-[15px] leading-relaxed" style={{ fontFamily: sans, color: "rgba(241,233,214,0.8)" }}>
              Talvez algumas partes suas tenham ficado escondidas debaixo das responsabilidades, dos
              medos, dos relacionamentos e de tudo o que você precisou sustentar.
            </p>
            <p
              className="text-xl md:text-2xl leading-snug"
              style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
            >
              Mas elas ainda estão aí.{" "}
              <em style={{ color: C.goldSoft }}>Esperando que você volte para buscá-las.</em>
            </p>
            <p className="text-[15px] leading-relaxed" style={{ fontFamily: sans, color: "rgba(241,233,214,0.8)" }}>
              Você pode estar atravessando uma dor, vivendo uma fase aparentemente tranquila ou
              sentindo que um novo ciclo está começando. Independentemente do ponto em que esteja,
              você não precisa continuar entrando nas próximas fases da vida deixando a si mesma
              para trás.
            </p>
          </div>

          <p
            className="text-lg md:text-xl leading-snug mb-9 max-w-xl mx-auto"
            style={{ fontFamily: serif, fontWeight: 300, color: C.goldSoft, fontStyle: "italic" }}
          >
            A Mentoria Mulher Inteira é o começo desse caminho de volta para si.
          </p>

          <Cta variant="gold" size="lg" label="Quero começar minha travessia →" />
          <p className="text-[12px] mt-4" style={{ fontFamily: sans, color: "rgba(241,233,214,0.62)" }}>
            Turma 1 · Vagas limitadas · R$ 697,00 ou 4x de R$ 174,25 sem juros
          </p>
        </div>
      </section>

      {/* ─── RODAPÉ ──────────────────────────────────────────────────────── */}
      <footer className="px-6 py-10 text-center" style={{ backgroundColor: C.forestDk }}>
        <p className="text-[13px] mb-1" style={{ fontFamily: serif, color: C.goldSoft }}>
          Loren Lorenço · Clínica do Vínculo
        </p>
        <p className="text-[11px]" style={{ fontFamily: sans, color: "rgba(241,233,214,0.5)" }}>
          © {new Date().getFullYear()} · Todos os direitos reservados
        </p>
      </footer>

      {/* ─── CTA FIXO (MOBILE) ───────────────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-3 lg:hidden"
        style={{ backgroundColor: C.paper, borderTop: `1px solid ${C.border}` }}
      >
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { e.preventDefault(); gtagSendEvent(CTA_URL); }}
          className="flex items-center justify-between w-full text-[11px] tracking-[0.16em] uppercase px-5 py-4 rounded-sm hover:opacity-90 transition-opacity"
          style={{
            background: `linear-gradient(90deg, ${C.terracota}, hsl(16 52% 44%))`,
            color: C.cream,
            fontFamily: sans,
            fontWeight: 500,
          }}
        >
          <span>Quero participar da Turma 1</span>
          <span className="flex flex-col items-end leading-tight">
            <span className="text-[10.5px] tracking-[0.04em] normal-case font-normal opacity-85">
              4x de R$ 174,25
            </span>
            <span>→</span>
          </span>
        </a>
      </div>

    </main>
  </>
);

export default MentoriaMulherInteira;
