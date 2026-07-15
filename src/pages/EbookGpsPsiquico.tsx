import { Check, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ebookCover from "@/assets/ebook-cover.webp";
import authorPhoto from "@/assets/author-photo.webp";
import SEOHead from "@/components/SEOHead";

const HOTMART_URL = "https://pay.hotmart.com/V105035990J?off=sj802605";
const ANALISE_URL = "/analise-estrutural";
const INSTAGRAM_URL = "https://www.instagram.com/lorenlorenco";

/* ── Paleta ────────────────────────────────────────────────────────────────── */
const C = {
  bg:        "hsl(40 20% 97%)",
  bgMuted:   "hsl(40 20% 93%)",
  forest:    "hsl(163 58% 18%)",
  forestDk:  "hsl(163 58% 12%)",
  sage:      "hsl(163 20% 35%)",
  terracota: "hsl(25 55% 51%)",
  gold:      "hsl(37 82% 58%)",
  goldPale:  "hsl(37 60% 88%)",
  border:    "hsl(100 10% 85%)",
  cream:     "hsl(40 20% 97%)",
};

/* Playfair Display como fonte principal */
const serif = "'Playfair Display', Georgia, serif";
const sans  = "Inter, system-ui, sans-serif";

/* ── Helpers ──────────────────────────────────────────────────────────────── */
const GoldLine = ({ center = false }: { center?: boolean }) => (
  <div style={{
    width: 44, height: 2,
    background: `linear-gradient(90deg, ${C.gold}, ${C.terracota})`,
    marginBottom: 20,
    ...(center ? { margin: "0 auto 20px" } : {}),
  }} />
);

const StarRow = ({ count = 5 }: { count?: number }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        size={12}
        fill={C.gold}
        strokeWidth={0}
        style={{ color: C.gold }}
      />
    ))}
  </div>
);

const CtaBuy = ({
  label = "Quero o GPS Psíquico →",
  className = "",
  size = "md",
  variant = "terracota",
  fullWidth = false,
}: {
  label?: string;
  className?: string;
  size?: "md" | "lg";
  variant?: "terracota" | "gold";
  fullWidth?: boolean;
}) => {
  const bg    = variant === "gold" ? C.gold : C.terracota;
  const color = variant === "gold" ? C.forest : C.cream;
  return (
    <a
      href={HOTMART_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block tracking-[0.18em] uppercase rounded-sm font-medium transition-all duration-200 hover:brightness-110 hover:scale-[1.02] hover:shadow-xl active:scale-100 ${
        size === "lg" ? "text-xs px-10 py-5" : "text-xs px-8 py-4"
      } ${fullWidth ? "w-full text-center" : ""} ${className}`}
      style={{ backgroundColor: bg, color, fontFamily: sans }}
    >
      {label}
    </a>
  );
};

/* ── Conteúdo ─────────────────────────────────────────────────────────────── */
const chapters = [
  "O que é o GPS Psíquico e por que ele importa",
  "A arquitetura interna das emoções",
  "Ansiedade e sintomas de superfície: quando a raiz é mais profunda",
  "Padrões repetitivos: o que o inconsciente insiste em mostrar",
  "Sobrecarga e exaustão: quando o sistema pede pausa",
  "O papel da consciência na reorganização interna",
  "Direções possíveis: da compreensão à transformação",
];

const forWho = [
  "Sente ansiedade de forma recorrente, mas as explicações que encontra nunca chegam à raiz.",
  "Vive em sobrecarga emocional e já não distingue o que é cansaço do corpo do que é cansaço da mente.",
  "Repete os mesmos padrões nos relacionamentos, no trabalho, consigo mesma. E já percebeu isso.",
  "Busca autoconhecimento real, sem abordagens superficiais ou promessas motivacionais.",
  "Quer entender a estrutura interna que sustenta o que sente, pensa e repete.",
  "Está em processo terapêutico e quer aprofundar a compreensão com uma leitura clínica complementar.",
];

const testimonials = [
  {
    quote: "Não esperava encontrar tanta precisão num e-book. Cada capítulo me fez nomear algo que eu não conseguia articular.",
    name: "C.M.",
    role: "Psicóloga",
  },
  {
    quote: "Li de uma vez. A parte sobre padrões repetitivos foi cirúrgica. Finalmente entendi o que estava por baixo.",
    name: "R.A.",
    role: "Advogada",
  },
  {
    quote: "Diferente de tudo que já li sobre ansiedade. Fala da estrutura, não do sintoma. Mudou minha perspectiva.",
    name: "F.S.",
    role: "Professora",
  },
];

const faqs = [
  {
    q: "Em que formato o e-book é entregue?",
    a: "PDF, compatível com qualquer dispositivo: celular, tablet, computador ou e-reader.",
  },
  {
    q: "Preciso ter conhecimento prévio em psicologia?",
    a: "Não. O conteúdo foi escrito para ser acessível a qualquer pessoa que deseje compreender seus processos emocionais, sem necessidade de formação técnica.",
  },
  {
    q: "Quanto tempo leva para receber?",
    a: "O acesso é imediato. Após a confirmação do pagamento, você recebe o link de download automaticamente por e-mail.",
  },
  {
    q: "O e-book substitui terapia?",
    a: "Não. O GPS Psíquico é um material de compreensão e reflexão. Ele complementa processos terapêuticos, mas não os substitui.",
  },
  {
    q: "E se eu não gostar do conteúdo?",
    a: "Você tem 7 dias de garantia incondicional. Se sentir que o material não é para o seu momento, basta solicitar o reembolso integral pelo Hotmart. Sem perguntas, sem burocracia.",
  },
  {
    q: "Posso presentear alguém?",
    a: "Sim. Após a compra, você pode compartilhar o PDF com quem desejar.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════ */
const EbookGpsPsiquico = () => (
  <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500&display=swap"
    />

    <SEOHead
      title="GPS Psíquico — Emoções como Estrutura | Loren Lorenço"
      description="Um mapa interno para compreender a estrutura por trás da sua ansiedade, dos seus padrões emocionais e da exaustão que insiste em se repetir."
      canonicalPath="/ebook"
    />

    <div
      className="min-h-screen overflow-hidden pb-24 lg:pb-0"
      style={{ fontFamily: serif, backgroundColor: C.bg, color: C.forest }}
    >

      {/* ── BANNER URGÊNCIA ───────────────────────────────────────────────── */}
      <div
        className="w-full py-2.5 px-4 text-center"
        style={{ background: `linear-gradient(90deg, ${C.forestDk}, ${C.forest})` }}
      >
        <p className="text-[11px] tracking-[0.25em] uppercase" style={{ fontFamily: sans, color: C.gold }}>
          ✦ Preço de lançamento · R$ 37,90 · Acesso imediato ✦
        </p>
      </div>

      {/* ── NAV ───────────────────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 border-b px-6 md:px-12"
        style={{
          backgroundColor: `${C.bg}f5`,
          backdropFilter: "blur(14px)",
          borderColor: C.border,
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-14">
          <Link
            to="/"
            className="text-xs tracking-wide transition-opacity hover:opacity-60"
            style={{ fontFamily: sans, color: C.sage }}
          >
            ← Voltar ao site
          </Link>
          <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
            <span
              className="inline-block text-[10px] tracking-[0.2em] uppercase px-5 py-2 rounded-sm transition-all hover:brightness-110"
              style={{ backgroundColor: C.terracota, color: C.cream, fontFamily: sans }}
            >
              Comprar · R$ 37,90
            </span>
          </a>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════
          HERO — impacto imediato, acima do fold no celular
      ══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-12 md:px-12 md:py-20" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Texto */}
          <div className="order-2 md:order-1">
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-5"
              style={{ fontFamily: sans, color: C.terracota }}
            >
              E-book · 7 capítulos · PDF imediato
            </p>

            <GoldLine />

            {/* Headline de impacto */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4"
              style={{ fontFamily: serif, fontWeight: 500, color: C.forest }}
            >
              Você dá conta de muita coisa.
              <br />
              <em style={{ fontWeight: 300, fontStyle: "italic" }}>
                Mas talvez ainda não entenda o que isso tem custado por dentro.
              </em>
            </h1>

            <p
              className="text-base font-light leading-relaxed mb-5 max-w-lg"
              style={{ fontFamily: sans, color: C.sage }}
            >
              O GPS Psíquico é um e-book clínico para mulheres que sustentam,
              resolvem, acolhem e funcionam mas, por dentro, sentem ansiedade,
              exaustão, culpa, irritabilidade ou a sensação de repetir os mesmos
              padrões.
            </p>

            <p
              className="text-base font-light leading-relaxed mb-5 max-w-lg"
              style={{ fontFamily: sans, color: C.sage }}
            >
              Este material te ajuda a reconhecer a estrutura por trás do que
              você sente: emoções recorrentes, sintomas, vínculos difíceis,
              mecanismos de defesa e lugares internos que você aprendeu a ocupar
              para se manter segura, aceita ou necessária.
            </p>

            <p
              className="text-base leading-relaxed mb-8 max-w-lg"
              style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 400, color: C.forest }}
            >
              Quando você entende a estrutura, o sintoma deixa de ser uma ameaça.
              E começa a virar informação.
            </p>

            {/* Prova social inline */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-1.5">
                {["C", "R", "F"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-medium"
                    style={{
                      backgroundColor: i === 0 ? C.forest : i === 1 ? C.terracota : C.gold,
                      color: C.cream,
                      fontFamily: sans,
                      border: `2px solid ${C.bg}`,
                    }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <StarRow />
                  <span className="text-[11px] font-medium" style={{ fontFamily: sans, color: C.forest }}>
                    5.0
                  </span>
                </div>
                <p className="text-[10px]" style={{ fontFamily: sans, color: C.sage }}>
                  Avaliado por leitoras
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["PDF Digital", "Acesso Imediato", "Garantia 7 dias", "60+ páginas"].map((b) => (
                <span
                  key={b}
                  className="text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-sm"
                  style={{ border: `1px solid ${C.border}`, color: C.sage, fontFamily: sans }}
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Preço */}
            <div className="flex items-baseline gap-3 mb-2">
              <span
                className="text-sm line-through"
                style={{ fontFamily: sans, color: C.sage, opacity: 0.7 }}
              >
                R$ 57,00
              </span>
              <span
                className="text-5xl md:text-6xl"
                style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
              >
                R$ 37,90
              </span>
            </div>
            <p className="text-[11px] mb-7" style={{ fontFamily: sans, color: C.terracota }}>
              Preço de lançamento · Garantia incondicional de 7 dias
            </p>

            <CtaBuy size="lg" label="Quero acessar o GPS Psíquico →" className="mb-3" />
            <p className="text-xs mt-3" style={{ fontFamily: sans, color: C.sage }}>
              Compra segura via Hotmart · PIX, boleto e cartão
            </p>
          </div>

          {/* Capa */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div
                className="absolute rounded-lg blur-sm"
                style={{
                  inset: 0,
                  transform: "translate(14px, 14px)",
                  backgroundColor: `${C.gold}40`,
                }}
              />
              <img
                src={ebookCover}
                alt="Capa do e-book GPS Psíquico: Emoções como Estrutura, por Loren Lorenço"
                className="relative rounded-lg shadow-2xl w-52 sm:w-60 lg:w-72"
                style={{ border: `1px solid ${C.gold}44` }}
              />
              <div
                className="absolute -top-3 -right-3 rounded-full w-16 h-16 flex flex-col items-center justify-center text-center shadow-lg"
                style={{ backgroundColor: C.terracota }}
              >
                <p className="text-[8px] uppercase tracking-wide leading-tight" style={{ fontFamily: sans, color: C.cream }}>
                  Preço
                </p>
                <p className="text-[8px] uppercase tracking-wide leading-tight" style={{ fontFamily: sans, color: C.cream }}>
                  lançamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAIXA DE CONFIANÇA ─────────────────────────────────────────────── */}
      <div
        className="px-6 py-4 flex flex-wrap gap-x-8 gap-y-2 justify-center"
        style={{ backgroundColor: C.forest }}
      >
        {[
          "7 capítulos de leitura clínica",
          "60+ páginas de conteúdo denso",
          "Método integrativo próprio",
          "Acesso imediato em PDF",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              style={{
                width: 4, height: 4, borderRadius: "50%",
                backgroundColor: C.gold, flexShrink: 0,
              }}
            />
            <span
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{ fontFamily: sans, color: C.cream }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* ── NÚMEROS ───────────────────────────────────────────────────────── */}
      <section
        className="px-6 py-12 md:px-12 md:py-16"
        style={{ backgroundColor: C.bg, borderBottom: `1px solid ${C.border}` }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {[
            { num: "7",    label: "capítulos" },
            { num: "60+",  label: "páginas" },
            { num: "8",    label: "anos de clínica" },
            { num: "500+", label: "mulheres atendidas" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <p
                className="text-6xl md:text-7xl leading-none"
                style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
              >
                {stat.num}
              </p>
              <div style={{ width: 24, height: 1, backgroundColor: C.gold, opacity: 0.7 }} />
              <p
                className="text-[10px] tracking-[0.25em] uppercase"
                style={{ fontFamily: sans, color: C.sage }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          DEPOIMENTOS — movidos para cima, antes do "para quem"
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-14 md:px-12 md:py-16"
        style={{ backgroundColor: C.bgMuted, borderBottom: `1px solid ${C.border}` }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-center mb-2"
            style={{ fontFamily: sans, color: C.sage }}
          >
            Quem já leu
          </p>
          <h2
            className="text-2xl md:text-3xl text-center mb-10"
            style={{ fontFamily: serif, fontWeight: 400, color: C.forest }}
          >
            O que as leitoras disseram
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-sm p-6 flex flex-col justify-between gap-5"
                style={{
                  backgroundColor: C.bg,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <div>
                  <StarRow />
                  <p
                    className="text-base italic leading-snug mt-3"
                    style={{ fontFamily: serif, fontWeight: 400, color: C.forest }}
                  >
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <p
                    className="text-[11px] font-medium"
                    style={{ fontFamily: sans, color: C.forest }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[10px]" style={{ fontFamily: sans, color: C.sage }}>
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOOK — dor articulada ──────────────────────────────────────────── */}
      <section
        className="px-6 py-14 md:px-12 md:py-20"
        style={{ backgroundColor: C.bg }}
      >
        <div className="max-w-3xl mx-auto">
          <GoldLine />
          <h2
            className="text-3xl md:text-4xl leading-[1.15] tracking-tight mb-8"
            style={{ fontFamily: serif, fontWeight: 500, color: C.forest }}
          >
            Você se reconhece em algum destes cenários?
          </h2>
          <div className="space-y-3">
            {[
              "Você sente que algo acontece por dentro, mas ainda não conseguiu nomear com clareza.",
              "Você percebe que repete padrões nos vínculos, no trabalho ou consigo mesma, e entender isso racionalmente ainda não foi suficiente para mudar.",
              "Você já buscou autoconhecimento, terapia, leituras ou podcasts, mas sente que ainda falta uma peça mais profunda.",
              "Você reage de formas que reconhece como suas, mas não consegue explicar de onde vêm ou por que persistem.",
              "Você desconfia que o que sente não é apenas estresse: e que a resposta não está em relaxar mais, mas em entender mais.",
              "Você quer uma leitura clínica do que você sente, não uma lista de dicas para se sentir melhor.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-sm px-5 py-4"
                style={{ backgroundColor: C.bgMuted, border: `1px solid ${C.border}` }}
              >
                <span
                  style={{
                    width: 6, height: 6, borderRadius: "50%",
                    backgroundColor: C.terracota, flexShrink: 0, marginTop: 6,
                  }}
                />
                <p className="text-sm leading-relaxed" style={{ fontFamily: sans, color: C.sage }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-7 md:p-9 rounded-sm"
            style={{ backgroundColor: C.forest }}
          >
            <p
              className="text-lg italic leading-relaxed mb-4"
              style={{ fontFamily: serif, fontWeight: 400, color: C.cream }}
            >
              "Não é fraqueza. Não é falta de força de vontade. É ausência de
              mapa. O GPS Psíquico foi escrito para oferecer exatamente isso:
              uma leitura clínica da sua estrutura interna."
            </p>
            <p className="text-sm" style={{ fontFamily: sans, color: C.gold }}>
              Loren Lorenço, psicanalista
            </p>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM ─────────────────────────────────────────────────────── */}
      <section
        className="px-6 py-16 md:px-12 md:py-24"
        style={{ backgroundColor: C.forest }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Cabeçalho de destaque */}
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: sans, color: C.gold }}
          >
            Este e-book é para você
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-3"
            style={{ fontFamily: serif, fontWeight: 500, color: C.cream }}
          >
            Você se reconhece aqui?
          </h2>
          <p className="text-sm mb-10 font-light" style={{ fontFamily: sans, color: C.goldPale }}>
            Se qualquer um desses pontos ressoa, esse material foi escrito para você.
          </p>

          <div className="space-y-3 mb-12">
            {forWho.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-sm px-5 py-4"
                style={{
                  backgroundColor: "rgba(250,246,240,0.07)",
                  border: `1px solid rgba(250,246,240,0.15)`,
                }}
              >
                <Check
                  size={15}
                  style={{ color: C.gold, flexShrink: 0, marginTop: 3 }}
                  strokeWidth={2.5}
                />
                <p className="text-sm leading-relaxed" style={{ fontFamily: sans, color: C.goldPale }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA dentro da seção */}
          <div className="text-center">
            <CtaBuy size="lg" variant="gold" label="Quero o GPS Psíquico →" />
            <p className="text-[11px] mt-3" style={{ fontFamily: sans, color: C.goldPale }}>
              R$ 37,90 · Preço de lançamento · Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO / SUMÁRIO ────────────────────────────────────────────── */}
      <section
        className="px-6 py-14 md:px-12 md:py-20"
        style={{ backgroundColor: C.forest }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-center mb-2"
            style={{ fontFamily: sans, color: C.gold }}
          >
            Conteúdo
          </p>
          <h2
            className="text-2xl md:text-3xl text-center mb-3"
            style={{ fontFamily: serif, fontWeight: 400, color: C.cream }}
          >
            O que você vai encontrar no e-book
          </h2>
          <div
            style={{
              width: 44, height: 2,
              background: `linear-gradient(90deg,${C.gold},${C.terracota})`,
              margin: "0 auto 40px",
            }}
          />

          <div className="space-y-0">
            {chapters.map((ch, i) => (
              <div
                key={i}
                className="flex gap-6 items-baseline py-5"
                style={{
                  borderBottom:
                    i < chapters.length - 1
                      ? "1px solid rgba(250,246,240,0.1)"
                      : "none",
                }}
              >
                <span
                  className="w-14 shrink-0 text-right text-5xl leading-none"
                  style={{ fontFamily: serif, fontWeight: 300, color: C.gold, opacity: 0.45 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-base font-light leading-relaxed"
                  style={{ fontFamily: serif, color: C.cream }}
                >
                  {ch}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CtaBuy size="lg" variant="gold" label="Quero acessar o e-book →" />
            <p className="text-[11px] mt-3" style={{ fontFamily: sans, color: C.goldPale }}>
              R$ 37,90 · Preço de lançamento · Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* ── O QUE MUDA ────────────────────────────────────────────────────── */}
      <section
        className="px-6 py-14 md:px-12 md:py-20"
        style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.border}` }}
      >
        <div className="max-w-3xl mx-auto">
          <GoldLine />
          <h2
            className="text-2xl md:text-3xl leading-snug tracking-tight mb-10"
            style={{ fontFamily: serif, fontWeight: 500, color: C.forest }}
          >
            O que muda quando você começa a entender seu mapa interno?
          </h2>

          <div className="space-y-5">
            <p
              className="text-base font-light leading-relaxed"
              style={{ fontFamily: sans, color: C.sage }}
            >
              Quando você não entende a estrutura por trás do que sente, tudo parece bagunça.
            </p>
            <p
              className="text-base font-light leading-relaxed"
              style={{ fontFamily: sans, color: C.sage }}
            >
              A ansiedade parece surgir do nada. A exaustão parece fraqueza. A irritação
              vira culpa. O corpo parece estar contra você. E os padrões que se repetem
              começam a ser confundidos com personalidade.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ fontFamily: serif, fontWeight: 400, fontStyle: "italic", color: C.forest }}
            >
              Mas quando você começa a ler esse mapa, algo muda.
            </p>
            <p
              className="text-base font-light leading-relaxed"
              style={{ fontFamily: sans, color: C.sage }}
            >
              Você passa a reconhecer que muitas das suas reações têm uma lógica. Que
              certos sintomas não aparecem por acaso. Que alguns vínculos ativam lugares
              antigos dentro de você. Que a culpa, o controle, a hiperfunção e a sobrecarga
              podem ser respostas aprendidas: não defeitos pessoais.
            </p>
            <p
              className="text-base font-light leading-relaxed"
              style={{ fontFamily: sans, color: C.sage }}
            >
              Entender o mapa interno não resolve tudo de uma vez. Mas organiza o caminho.
              Você começa a diferenciar o que sente, o que repete, o que protege, o que
              carrega e o que talvez já não precise mais sustentar.
            </p>
            <p
              className="text-base font-light leading-relaxed"
              style={{ fontFamily: sans, color: C.sage }}
            >
              E essa clareza muda a forma como você olha para si.
            </p>
            <p
              className="text-base leading-relaxed pt-2"
              style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 400, color: C.forest }}
            >
              Porque o que antes parecia confusão começa a revelar uma estrutura. E onde
              existe estrutura, existe possibilidade de consciência e transformação.
            </p>
          </div>
        </div>
      </section>

      {/* ── AUTORA ────────────────────────────────────────────────────────── */}
      <section className="px-6 py-14 md:px-12 md:py-20" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 md:gap-14 items-center">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative max-w-xs w-full">
              <div
                className="absolute rounded-sm"
                style={{
                  inset: 0,
                  transform: "translate(10px, 10px)",
                  backgroundColor: `${C.gold}22`,
                }}
              />
              <div
                className="relative overflow-hidden rounded-sm shadow-xl"
                style={{ aspectRatio: "3/4", border: `1px solid ${C.gold}33` }}
              >
                <img
                  src={authorPhoto}
                  alt="Loren Lorenço — Psicoterapeuta"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <GoldLine />
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-2"
              style={{ fontFamily: sans, color: C.sage }}
            >
              Quem escreveu
            </p>
            <h2
              className="text-2xl md:text-3xl mb-5"
              style={{ fontFamily: serif, fontWeight: 500, color: C.forest }}
            >
              Loren Lorenço
            </h2>
            <div
              className="space-y-4 text-sm leading-relaxed"
              style={{ fontFamily: sans, color: C.sage }}
            >
              <p>
                Psicoterapeuta com mais de 8 anos de atuação clínica com mulheres
                adultas. Seu método próprio integra psicanálise, psicologia analítica
                junguiana, neurobiologia do trauma, constelação familiar e Medicina
                Tradicional Chinesa.
              </p>
              <p>
                Já acompanhou mais de 500 mulheres em processos de travessia real,
                do caos emocional à clareza estrutural.
              </p>
              <p style={{ color: C.forest }}>
                O GPS Psíquico é a síntese dos conceitos que ela trabalha no
                consultório, agora em forma de leitura direta e acessível.
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-[11px] tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
              style={{ fontFamily: sans, color: C.terracota }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              @lorenlorenco
            </a>
          </div>
        </div>
      </section>

      {/* ── GARANTIA ──────────────────────────────────────────────────────── */}
      <section
        className="px-6 py-14 md:px-12 md:py-16"
        style={{ background: `linear-gradient(135deg, ${C.forestDk}, ${C.forest})` }}
      >
        <div className="max-w-xl mx-auto text-center">
          <ShieldCheck
            className="mx-auto mb-5"
            style={{ color: C.gold, width: 44, height: 44 }}
            strokeWidth={1.2}
          />
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: sans, color: C.gold }}
          >
            Segurança
          </p>
          <h2
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: serif, fontWeight: 400, color: C.cream }}
          >
            Garantia incondicional de 7 dias
          </h2>
          <div
            style={{
              width: 44, height: 2,
              background: `linear-gradient(90deg,${C.gold},${C.terracota})`,
              margin: "0 auto 20px",
            }}
          />
          <p
            className="text-sm font-light leading-relaxed"
            style={{ fontFamily: sans, color: C.goldPale }}
          >
            Se dentro de 7 dias após a compra você sentir que o conteúdo não é para
            o seu momento, basta solicitar o reembolso integral pelo Hotmart.
            Sem perguntas. Sem burocracia. O risco é zero.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="px-6 py-14 md:px-12 md:py-20" style={{ backgroundColor: C.bg }}>
        <div className="max-w-2xl mx-auto">
          <GoldLine />
          <h2
            className="text-2xl md:text-3xl mb-2"
            style={{ fontFamily: serif, fontWeight: 500, color: C.forest }}
          >
            Antes de comprar
          </h2>
          <p className="text-sm mb-8" style={{ fontFamily: sans, color: C.sage }}>
            Perguntas que surgem com frequência
          </p>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-sm px-5"
                style={{ border: `1px solid ${C.border}`, backgroundColor: C.bgMuted }}
              >
                <AccordionTrigger
                  className="text-sm font-medium hover:no-underline py-4 text-left"
                  style={{ fontFamily: sans, color: C.forest }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm leading-relaxed pb-4"
                  style={{ fontFamily: sans, color: C.sage }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section
        className="px-6 py-16 md:px-12 md:py-24"
        style={{ backgroundColor: C.bgMuted, borderTop: `1px solid ${C.border}` }}
      >
        <div className="max-w-lg mx-auto text-center">
          <GoldLine center />
          <h2
            className="text-3xl md:text-4xl leading-snug tracking-tight mb-3"
            style={{ fontFamily: serif, fontWeight: 500, color: C.forest }}
          >
            Pronta para ler o seu GPS?
          </h2>
          <p className="text-sm mb-10 leading-relaxed" style={{ fontFamily: sans, color: C.sage }}>
            Um material de leitura clínica que oferece clareza sobre a estrutura
            que sustenta o que se repete, e as direções possíveis para a mudança real.
          </p>

          {/* Card de compra */}
          <div
            className="rounded-sm p-8 md:p-10 mb-8 text-left"
            style={{
              background: `linear-gradient(135deg, ${C.forestDk}, ${C.forest})`,
              border: `1px solid hsl(37 60% 45% / 0.35)`,
            }}
          >
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-2"
              style={{ fontFamily: sans, color: C.gold }}
            >
              GPS Psíquico · E-book
            </p>
            <div className="flex items-baseline gap-3 mb-1">
              <span
                className="text-sm line-through"
                style={{ fontFamily: sans, color: C.goldPale, opacity: 0.7 }}
              >
                R$ 57,00
              </span>
              <span
                className="text-5xl md:text-6xl font-light"
                style={{ fontFamily: serif, color: C.gold }}
              >
                R$ 37,90
              </span>
            </div>
            <p className="text-[11px] mb-6" style={{ fontFamily: sans, color: C.goldPale }}>
              Preço de lançamento · Acesso imediato após o pagamento
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "7 capítulos de leitura clínica",
                "60+ páginas de conteúdo denso",
                "Material em PDF. Leia onde quiser",
                "Acesso permanente, sem prazo de validade",
                "Garantia incondicional de 7 dias",
                "Pagamento seguro via Hotmart",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check
                    style={{ color: C.gold, width: 14, height: 14, flexShrink: 0 }}
                    strokeWidth={2.5}
                  />
                  <span className="text-sm" style={{ fontFamily: sans, color: C.cream }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <CtaBuy
              size="lg"
              label="Quero o GPS Psíquico agora →"
              className="w-full text-center"
              fullWidth
            />
          </div>

          {/* Cross-sell */}
          <div
            className="rounded-sm p-5"
            style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
          >
            <p className="text-xs mb-2" style={{ fontFamily: sans, color: C.sage }}>
              Quer ir além da leitura?
            </p>
            <p
              className="text-sm italic mb-3"
              style={{ fontFamily: serif, fontWeight: 400, color: C.forest }}
            >
              O <strong style={{ fontWeight: 500 }}>Encontro Terapêutico de Padrões</strong> é o
              próximo passo — uma sessão individual com Mapa de resumo personalizado.
            </p>
            <Link
              to={ANALISE_URL}
              className="text-[11px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
              style={{ fontFamily: sans, color: C.terracota }}
            >
              Conhecer o encontro →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        className="py-8 px-6 text-center"
        style={{ borderTop: `1px solid ${C.border}`, backgroundColor: C.bg }}
      >
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mb-4 text-[11px] tracking-[0.15em] uppercase transition-opacity hover:opacity-60"
          style={{ fontFamily: sans, color: C.sage }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          @lorenlorenco
        </a>
        <p className="text-[11px]" style={{ fontFamily: sans, color: C.sage }}>
          © {new Date().getFullYear()} Loren Lorenço · Todos os direitos reservados
        </p>
      </footer>

      {/* ── STICKY CTA MOBILE ─────────────────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-3 lg:hidden"
        style={{
          backgroundColor: "rgba(250,246,240,0.97)",
          backdropFilter: "blur(14px)",
          borderTop: `1px solid ${C.border}`,
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full text-xs tracking-[0.18em] uppercase px-5 py-4 rounded-sm hover:opacity-90 transition-opacity"
          style={{
            background: `linear-gradient(90deg, ${C.terracota}, hsl(20 60% 46%))`,
            color: C.cream,
            fontFamily: sans,
            fontWeight: 500,
          }}
        >
          <span>Quero o GPS Psíquico</span>
          <span className="flex flex-col items-end leading-tight">
            <span
              className="text-[9px] tracking-[0.05em] normal-case font-normal opacity-80"
            >
              R$ 37,90 · Lançamento
            </span>
            <span>→</span>
          </span>
        </a>
      </div>

    </div>
  </>
);

export default EbookGpsPsiquico;
