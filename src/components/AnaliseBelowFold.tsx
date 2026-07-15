// AnaliseBelowFold.tsx — chunk lazy-loaded após scroll ou 2s
// Contém todas as seções abaixo da dobra do hero+identificação.
import React from "react";
import lorenAbout from "@/assets/loren-analise-about.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gtagSendEvent, WA_PADROES } from "@/lib/gtag";

const CTA_URL = WA_PADROES;

/* ── Paleta (mesma do arquivo principal) ──────────────────────────────────── */
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

const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "Inter, system-ui, sans-serif";

/* ── Helpers ─────────────────────────────────────────────────────────────── */
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

const DeliveryCard = () => (
  <div
    className="rounded-sm p-6 md:p-8 flex flex-col gap-5"
    style={{
      background: `linear-gradient(135deg, ${C.forestDk} 0%, ${C.forest} 100%)`,
      border: `1px solid hsl(37 60% 45% / 0.4)`,
    }}
  >
    <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: C.gold, fontFamily: sans }}>
      O que você recebe
    </p>

    <div className="space-y-4">
      {[
        { icon: "◎", t: "Sessão individual de 40 min",    d: "Leitura clínica ao vivo, online, sem roteiro genérico" },
        { icon: "◎", t: "Mapa de resumo personalizado",     d: "O padrão identificado, a lógica por trás dele e o caminho mais coerente pra você" },
        { icon: "◎", t: "Direção terapêutica clara",       d: "Se faz sentido iniciar terapia e por onde começar" },
      ].map((item, i) => (
        <div key={i} className="flex gap-3 items-start">
          <span style={{ color: C.gold, fontFamily: serif, fontSize: 18, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
          <div>
            <p className="text-sm font-medium" style={{ color: C.cream, fontFamily: sans }}>{item.t}</p>
            <p className="text-xs leading-relaxed mt-0.5" style={{ color: C.goldPale, fontFamily: sans }}>{item.d}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="pt-3 border-t" style={{ borderColor: "hsl(37 60% 45% / 0.3)" }}>
      <p className="text-[11px] uppercase tracking-[0.2em] mb-1" style={{ color: C.goldPale, fontFamily: sans }}>Investimento</p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-light" style={{ color: C.gold, fontFamily: serif }}>R$ 129,90</span>
        <span className="text-xs" style={{ color: C.goldPale, fontFamily: sans }}>· pagamento único</span>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════ */
/*  COMPONENTE DE BAIXO DA DOBRA                                              */
/* ══════════════════════════════════════════════════════════════════════════ */
const AnaliseBelowFold = () => (
  <>
    {/* ─── DEPOIMENTOS ───────────────────────────────────────────────── */}
    <section
      className="px-6 py-12 md:px-12 md:py-16"
      style={{ backgroundColor: C.bgMuted, borderBottom: `1px solid ${C.border}` }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-[10px] tracking-[0.35em] uppercase text-center mb-2"
          style={{ fontFamily: sans, color: C.sage }}
        >
          Mulheres que já fizeram o encontro
        </p>
        <p
          className="text-center text-sm italic mb-8"
          style={{ fontFamily: serif, color: C.forest }}
        >
          "Saí com clareza do que se repetia em mim há anos."
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { quote: "Pela primeira vez entendi o padrão, não só o sintoma.",                  name: "M.C.", role: "Advogada" },
            { quote: "Saí da sessão com clareza e direção. O Mapa me ajudou a entender tudo.", name: "A.R.", role: "Médica" },
            { quote: "Me senti lida em profundidade sem julgamento nenhum.",                   name: "L.F.", role: "Professora" },
            { quote: "Entendi o que se repetia em mim há anos. O resumo foi cirúrgico.",      name: "P.S.", role: "Empresária" },
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-sm p-5 flex flex-col justify-between gap-4"
              style={{ backgroundColor: C.bg, border: `1px solid ${C.border}`, boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
            >
              <div>
                <StarRow />
                <p
                  className="text-base italic leading-snug mt-3"
                  style={{ fontFamily: serif, color: C.forest }}
                >
                  "{t.quote}"
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium" style={{ fontFamily: sans, color: C.forest }}>{t.name}</p>
                <p className="text-[10px] tracking-wide" style={{ fontFamily: sans, color: C.sage }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini CTA após prova social */}
        <div className="mt-8 text-center">
          <CtaButton label="Falar com a Loren no WhatsApp →" />
          <p className="text-[11px] mt-2" style={{ fontFamily: sans, color: C.sage }}>
            Vagas limitadas · R$ 129,90 · pagamento único
          </p>
        </div>
      </div>
    </section>

    {/* ─── PONTE: ANÁLISE → PROCESSO ─────────────────────────────────── */}
    <section
      className="px-6 py-14 md:px-12 md:py-20"
      style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.border}` }}
    >
      <div className="max-w-4xl mx-auto">
        <GoldLine />

        <h2
          className="text-2xl md:text-3xl lg:text-4xl leading-[1.12] tracking-tight mb-3 max-w-xl"
          style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
        >
          O ponto de partida de quem hoje{" "}
          <em style={{ color: C.terracota }}>está no processo comigo.</em>
        </h2>
        <p
          className="text-[15px] leading-relaxed mb-10 max-w-lg"
          style={{ fontFamily: sans, color: C.sage }}
        >
          Quase todas as mulheres que estão comigo em processo terapêutico
          começaram pelo Encontro Terapêutico. É o primeiro encontro real com o padrão. Para a maioria,
          se torna a entrada para um trabalho mais profundo e contínuo.
        </p>

        {/* Jornada visual: Análise → Protocolo */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-stretch mb-8">

          {/* Passo 01 */}
          <div
            className="flex-1 rounded-sm px-6 py-6"
            style={{ backgroundColor: C.bgMuted, border: `1px solid ${C.border}` }}
          >
            <p
              className="text-[9px] tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: sans, color: C.sage }}
            >
              Passo 01
            </p>
            <p
              className="text-lg mb-1.5 leading-snug"
              style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
            >
              Encontro Terapêutico{" "}
              <em style={{ color: C.terracota }}>de Padrões de Vínculo</em>
            </p>
            <p
              className="text-[11px] tracking-wide mb-4"
              style={{ fontFamily: sans, color: C.sage }}
            >
              40 min · 1 encontro · R$ 129,90 · Mapa incluso
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: sans, color: C.sage }}
            >
              Você entende o padrão central, a estrutura por trás dele
              e o próximo passo mais coerente pra você.
            </p>
          </div>

          {/* Conector */}
          <div className="flex md:flex-col items-center justify-center px-4">
            <svg className="hidden md:block" width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg className="block md:hidden" width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M6 13l6 6 6-6" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Passo 02 */}
          <div
            className="flex-1 rounded-sm px-6 py-6"
            style={{
              background: `linear-gradient(135deg, ${C.forestDk} 0%, ${C.forest} 100%)`,
              border: `1px solid hsl(37 60% 45% / 0.35)`,
            }}
          >
            <p
              className="text-[9px] tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: sans, color: C.gold }}
            >
              Passo 02
            </p>
            <p
              className="text-lg mb-1.5 leading-snug"
              style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
            >
              Protocolo Terapêutico{" "}
              <em style={{ color: C.gold }}>Individualizado</em>
            </p>
            <p
              className="text-[11px] tracking-wide mb-4"
              style={{ fontFamily: sans, color: C.goldPale }}
            >
              Acompanhamento contínuo · método próprio
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: sans, color: C.cream }}
            >
              Para quem quer ir além do diagnóstico e trabalhar a raiz
              do padrão com profundidade, continuidade e direção real.
            </p>
          </div>
        </div>

        <p
          className="text-[13px] italic text-center max-w-md mx-auto"
          style={{ fontFamily: serif, color: C.sage }}
        >
          O Encontro é independente, sem nenhuma obrigação de continuar.
          Mas quase todas as mulheres que passam por ela voltam para o processo.
        </p>
      </div>
    </section>

    {/* ─── O QUE VOCÊ RECEBE ─────────────────────────────────────────── */}
    <section className="px-6 py-14 md:px-12 md:py-20" style={{ backgroundColor: C.bg }}>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <GoldLine />
            <h2
              className="text-2xl md:text-3xl lg:text-4xl leading-[1.15] tracking-tight mb-4"
              style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
            >
              40 minutos.{" "}
              <em>Uma leitura.</em>{" "}
              <span style={{ color: C.terracota }}>Direção real.</span>
            </h2>
            <p className="text-sm mb-6 leading-relaxed" style={{ fontFamily: sans, color: C.sage }}>
              Não é conversa aberta nem escuta passiva. É leitura clínica do
              que sustenta o padrão, com entrega concreta no final.
            </p>
            <div className="space-y-2">
              {[
                "Sessão estratégica online (não é terapia genérica)",
                "Leitura dos pontos centrais que organizam sua repetição",
                "Mapa personalizado: padrão + lógica + caminho",
                "Indicação se faz sentido iniciar processo terapêutico",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ width: 16, height: 1.5, backgroundColor: C.gold, flexShrink: 0 }} />
                  <p className="text-sm" style={{ fontFamily: sans, color: C.sage }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <DeliveryCard />
        </div>

        {/* Passo a passo */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: "01", t: "Agende pelo WhatsApp",  d: "Escolha o turno que funciona pra você" },
            { n: "02", t: "Sessão online",          d: "40 min de leitura clínica ao vivo" },
            { n: "03", t: "Receba o Mapa",          d: "Resumo personalizado do que foi identificado" },
            { n: "04", t: "Saia orientada",         d: "Com direção clara para o próximo passo real" },
          ].map((s, i) => (
            <div
              key={i}
              className="relative rounded-sm p-5 overflow-hidden"
              style={{ border: `1px solid ${C.border}`, backgroundColor: C.bg }}
            >
              <span
                className="absolute top-2 right-3 text-5xl select-none"
                style={{ fontFamily: serif, fontWeight: 300, color: "hsl(37 82% 58% / 0.18)", lineHeight: 1 }}
              >
                {s.n}
              </span>
              <p className="text-base mb-1" style={{ fontFamily: serif, fontWeight: 400, color: C.forest }}>{s.t}</p>
              <p className="text-xs leading-relaxed pr-6" style={{ fontFamily: sans, color: C.sage }}>{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CtaButton size="lg" />
        </div>
      </div>
    </section>

    {/* ─── O QUE A LEITURA TORNA VISÍVEL ────────────────────────────── */}
    <section
      className="px-6 py-14 md:px-12 md:py-20"
      style={{ backgroundColor: C.bgMuted, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <GoldLine />
            <h3 className="text-xl md:text-2xl mb-5" style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}>
              O que essa leitura torna visível
            </h3>
            <div className="space-y-2.5">
              {[
                "Padrões de repetição nos vínculos afetivos e profissionais",
                "Sobrecarga emocional e hiperfunção",
                "Confusão entre força e mecanismo de defesa",
                "Travas em autonomia e posicionamento",
                "Ansiedade como efeito estrutural, não traço de personalidade",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-sm px-4 py-3"
                  style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
                >
                  <span className="rounded-full shrink-0 mt-1.5" style={{ width: 5, height: 5, backgroundColor: C.terracota }} />
                  <p className="text-sm leading-relaxed" style={{ fontFamily: sans, color: C.sage }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <GoldLine />
            <h3 className="text-xl md:text-2xl mb-5" style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}>
              Ao final, você sai com{" "}
              <em style={{ color: C.terracota }}>clareza e direção</em>
            </h3>
            <div className="space-y-3">
              {[
                "O padrão que está se repetindo, nomeado com precisão",
                "A lógica oculta que organiza sua repetição",
                "Os pontos centrais a serem trabalhados",
                "Se faz sentido iniciar terapia e por qual abordagem",
                "O próximo passo real para interromper o ciclo",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-6"
                    style={{ fontFamily: serif, fontWeight: 300, color: C.gold, lineHeight: 1.4, fontSize: "1rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: sans, color: C.sage }}>{item}</p>
                </div>
              ))}
            </div>
            <div
              className="mt-6 p-4 rounded-sm"
              style={{ backgroundColor: "hsl(37 60% 94%)", border: `1px solid hsl(37 60% 80%)` }}
            >
              <p className="text-sm italic" style={{ fontFamily: serif, color: C.forest }}>
                "Tudo isso no Mapa que você recebe ao final da sessão."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ─── SOBRE ─────────────────────────────────────────────────────── */}
    <section
      className="px-6 py-14 md:px-12 md:py-20"
      style={{ backgroundColor: C.forest }}
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

        {/* Foto */}
        <div className="w-full lg:w-5/12 shrink-0 relative">
          <img
            src={lorenAbout}
            alt="Loren Lorenço"
            className="w-full rounded-sm"
            loading="lazy"
            width={800}
            height={1024}
          />
          <div
            className="absolute bottom-4 right-4 left-4 rounded-sm p-4 grid grid-cols-3 gap-2"
            style={{ backgroundColor: "rgba(8,32,24,0.96)", border: "1px solid rgba(212,160,60,0.35)" }}
          >
            {[
              { n: "8+",   l: "anos" },
              { n: "500+", l: "mulheres" },
              { n: "Mapa", l: "incluso" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-lg font-light" style={{ fontFamily: serif, color: C.gold }}>{s.n}</p>
                <p className="text-[9px] tracking-widest uppercase" style={{ fontFamily: sans, color: C.goldPale }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Texto */}
        <div className="flex-1">
          <div style={{ width: 44, height: 2, background: `linear-gradient(90deg,${C.gold},${C.terracota})`, marginBottom: 24 }} />
          <h2
            className="text-2xl md:text-3xl leading-snug tracking-tight mb-4"
            style={{ fontFamily: serif, fontWeight: 300, color: C.cream }}
          >
            Quem faz essa leitura
          </h2>
          <p className="text-[15px] leading-relaxed mb-5" style={{ fontFamily: sans, color: C.cream }}>
            Sou Loren Lorenço, psicanalista com mais de 8 anos de atuação,
            consteladora familiar e mentora. Desenvolvi um método próprio
            integrando psicanálise, psicologia junguiana, constelação familiar,
            neurobiologia do trauma e Medicina Chinesa.
          </p>
          <p className="text-[15px] leading-relaxed mb-6" style={{ fontFamily: sans, color: C.goldPale }}>
            Já acompanhei mais de 500 mulheres em processos reais de
            travessia, do caos emocional à clareza estrutural.
          </p>
          <blockquote
            className="text-lg italic mb-7 leading-snug pl-4"
            style={{ fontFamily: serif, color: C.gold, borderLeft: `2px solid rgba(212,160,60,0.5)` }}
          >
            "Aqui não olhamos só para o que dói. Olhamos para a estrutura
            que sustenta a dor."
          </blockquote>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
            {[
              "Leitura clínica estrutural",
              "Foco em padrão e autonomia",
              "Mapa de resumo incluso",
              "Abordagem integrativa própria",
              "Linguagem profunda e clara",
              "Para mulheres em travessias reais",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 py-1">
                <span style={{ width: 8, height: 1.5, backgroundColor: C.gold, flexShrink: 0 }} />
                <span className="text-[11px]" style={{ fontFamily: sans, color: C.goldPale }}>{item}</span>
              </div>
            ))}
          </div>
          <CtaButton variant="gold" label="Falar com a Loren no WhatsApp →" />
        </div>
      </div>
    </section>

    {/* ─── FAQ ───────────────────────────────────────────────────────── */}
    <section className="px-6 py-14 md:px-12 md:py-20" style={{ backgroundColor: C.bg }}>
      <div className="max-w-2xl mx-auto">
        <GoldLine />
        <h2
          className="text-2xl md:text-3xl leading-snug tracking-tight mb-2"
          style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
        >
          Antes de agendar
        </h2>
        <p className="text-sm mb-8" style={{ fontFamily: sans, color: C.sage }}>
          Perguntas que surgem com frequência
        </p>
        <Accordion type="single" collapsible className="space-y-2">
          {[
            { q: "Qual é o investimento?",           a: "R$ 129,90, pagamento único, sem recorrência. Inclui o encontro de 40 min e o Mapa de resumo personalizado enviado após o encontro." },
            { q: "O que eu recebo exatamente?",      a: "Sessão individual de 40 min online + Mapa personalizado com o padrão identificado, a lógica que o sustenta e a direção terapêutica mais coerente para o seu momento." },
            { q: "Substitui a terapia?",             a: "Não. É uma leitura estratégica que oferece clareza sobre os padrões e pode direcionar o início de um processo terapêutico." },
            { q: "É para mim se já faço terapia?",   a: "Sim. O encontro é um mergulho pontual para destravar o que a terapia convencional às vezes não acessa com clareza." },
            { q: "Quanto tempo dura?",               a: "40 minutos. Objetivo, estruturado e com entrega concreta no final." },
            { q: "É online?",                        a: "100% online, por videochamada. Você escolhe o turno no agendamento." },
            { q: "É só para questões amorosas?",     a: "Não. Envolve padrões emocionais em todas as áreas: trabalho, família, maternidade e relação consigo mesma." },
            { q: "Sou obrigada a seguir em terapia?",a: "Não. O encontro é independente. Você decide os próximos passos com total autonomia." },
          ].map((item, i) => (
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
                {item.q}
              </AccordionTrigger>
              <AccordionContent
                className="text-sm leading-relaxed pb-4"
                style={{ fontFamily: sans, color: C.sage }}
              >
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* ─── ESCASSEZ ──────────────────────────────────────────────────── */}
    <section
      className="px-6 py-12 md:px-12 md:py-14"
      style={{ background: `linear-gradient(135deg, ${C.forestDk} 0%, ${C.forest} 100%)` }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#4ade80", boxShadow: "0 0 0 4px rgba(74,222,128,0.2)" }} />
          <p className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: sans, color: C.goldPale }}>
            Disponibilidade aberta
          </p>
        </div>
        <p
          className="text-lg md:text-xl italic leading-relaxed mb-6"
          style={{ fontFamily: serif, color: C.cream, fontWeight: 300 }}
        >
          São{" "}
          <strong className="not-italic" style={{ color: C.gold, fontWeight: 400 }}>
            no máximo 8 encontros por mês.
          </strong>{" "}
          Como é individual e aprofundada, os horários não esperam.
        </p>
        <CtaButton variant="gold" size="lg" label="Falar com a Loren no WhatsApp →" />
        <p className="text-[11px] mt-3" style={{ fontFamily: sans, color: C.goldPale }}>
          R$ 129,90 · Pagamento único · Mapa incluso
        </p>
      </div>
    </section>

    {/* ─── CTA FINAL ─────────────────────────────────────────────────── */}
    <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: C.bg }}>
      <div className="max-w-lg mx-auto text-center">
        <GoldLine center />
        <h2
          className="text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight mb-3"
          style={{ fontFamily: serif, fontWeight: 300, color: C.forest }}
        >
          O que falta não é esforço.{" "}
          <em style={{ color: C.terracota }}>É leitura.</em>
        </h2>
        <p className="text-sm mb-8" style={{ fontFamily: sans, color: C.sage }}>
          40 minutos de clareza. Um Mapa com sua direção. Um próximo passo real.
        </p>
        <CtaButton size="lg" label="Falar com a Loren no WhatsApp →" />
        <p className="text-[11px] mt-3" style={{ fontFamily: sans, color: C.sage }}>
          Online · 40 min · Mapa incluso · Até 8 vagas/mês
        </p>
      </div>
    </section>

    {/* ─── FOOTER ────────────────────────────────────────────────────── */}
    <footer
      className="px-6 py-6 text-center"
      style={{ borderTop: `1px solid ${C.border}`, backgroundColor: C.bg }}
    >
      <p className="text-[11px] tracking-wide" style={{ fontFamily: sans, color: C.sage }}>
        © {new Date().getFullYear()} Loren Lorenço · Todos os direitos reservados
      </p>
    </footer>
  </>
);

export default AnaliseBelowFold;
