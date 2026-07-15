import { Button } from "@/components/ui/button";
import { ArrowRight, Network, ShieldCheck, Waves, Scale, Anchor, XCircle, CheckCircle2 } from "lucide-react";
import ScrollFade from "@/components/ui/scroll-fade";
import { gtagSendEvent, WA_ANALISE } from "@/lib/gtag";

const Method = () => {
  const howItWorks = [
    {
      icon: Network,
      text: "Identificação da estrutura de vínculo que sustenta repetições",
    },
    {
      icon: ShieldCheck,
      text: "Leitura das defesas emocionais como estratégias de sobrevivência, não como falhas",
    },
    {
      icon: Waves,
      text: "Metabolização de experiências emocionais que ficaram registradas no corpo",
    },
    {
      icon: Scale,
      text: "Diferenciação entre adaptação, lealdade inconsciente e escolha adulta",
    },
    {
      icon: Anchor,
      text: "Construção de um lugar interno mais estável, autoral e responsável",
    },
  ];

  const forWhom = [
    "já têm vida funcional, autonomia e responsabilidade no mundo externo",
    "sentem que 'seguram tudo', mas internamente vivem exaustão ou desconexão",
    "repetem padrões nos vínculos, mesmo com consciência e trabalho pessoal",
    "não buscam dependência terapêutica, mas apropriação de si",
    "estão dispostas a sustentar um processo profundo, com presença e maturidade",
  ];

  const notPromises = [
    "Não promete felicidade constante.",
    "Não promete ausência de conflitos.",
    "Não promete soluções rápidas.",
    "Não promete respostas prontas.",
  ];

  const whenItWorks = [
    "Deixa de viver a partir da reação",
    "Sustenta limites sem culpa",
    "Escolhe vínculos a partir de presença, não de falta",
    "Reconhece o próprio ritmo e responsabilidade",
    "Ocupa o próprio lugar com mais verdade",
  ];

  return (
    <section id="metodo" className="bg-secondary">
      {/* BLOCO 1 — Introdução conceitual - Centralizado */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollFade>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
                Como eu trabalho
              </p>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
                Não é sobre falar mais, é sobre compreender melhor.
              </h2>
            </ScrollFade>

            <div className="space-y-6">
              <ScrollFade delay={0.1}>
                <p className="text-foreground leading-relaxed text-lg">
                  O trabalho que conduzo não é orientado pelo sintoma isolado, nem pela repetição de narrativas emocionais — ele parte da compreensão de que toda repetição emocional, relacional ou corporal está sustentada por uma estrutura interna específica.
                </p>
              </ScrollFade>

              <ScrollFade delay={0.15}>
                <p className="text-foreground leading-relaxed text-lg">
                  Atuo a partir da leitura estrutural desses padrões, ajudando a paciente a compreender como e por que determinados ciclos se mantêm e o que precisa ser reorganizado para que a mudança seja sustentável.
                </p>
              </ScrollFade>

              <ScrollFade delay={0.2}>
                <p className="text-foreground leading-relaxed text-lg">
                  Meu método próprio integra Psicanálise, Psicologia Analítica, clínica contemporânea, constelação familiar, neurobiologia do trauma, neurociência, fases do desenvolvimento humano e Medicina Tradicional Chinesa como ferramenta de leitura clínica do corpo e dos processos emocionais ao longo do tempo.
                </p>
              </ScrollFade>

              <ScrollFade delay={0.25}>
                <p className="text-accent font-serif text-xl md:text-2xl italic pt-4">
                  O foco não é adaptação nem alívio rápido — é reorganização interna, maturidade emocional e mudança real de direção.
                </p>
              </ScrollFade>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCO 2 — Como o método atua - Grid com ícones */}
      <div className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <ScrollFade>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-5 text-center">
                Como o método atua
              </h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-12 max-w-2xl mx-auto text-center">
                O processo integra corpo, psiquismo e campo relacional, respeitando o ritmo do sistema nervoso e o estágio de desenvolvimento emocional de cada mulher.
              </p>
            </ScrollFade>

            {/* Grid de blocos com ícones */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {howItWorks.map((item, index) => (
                <ScrollFade key={index} delay={index * 0.08}>
                  <div className="text-center">
                    <item.icon className="w-8 h-8 text-accent mx-auto mb-4" strokeWidth={1.5} />
                    <p className="text-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </ScrollFade>
              ))}
            </div>

            {/* Frase de Impacto - Destaque isolado */}
            <ScrollFade delay={0.4}>
              <div className="py-12 md:py-16 px-8 md:px-16 lg:px-24 text-center">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug">
                  Quando a estrutura muda, o comportamento muda.
                </p>
                <p className="font-serif text-xl md:text-2xl text-foreground/70 leading-snug mt-4">
                  Quando o lugar interno se reorganiza, as escolhas se transformam.
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </div>

      {/* BLOCO 3 — Para quem */}
      <div className="py-14 md:py-18 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl">
            <ScrollFade>
              <h3 className="font-serif text-2xl md:text-3xl mb-8">
                Para quem este método faz sentido
              </h3>

              <p className="text-primary-foreground/80 leading-relaxed text-lg mb-8">
                Este método é indicado para mulheres que:
              </p>
            </ScrollFade>

            <div className="space-y-4 mb-10 max-w-3xl">
              {forWhom.map((item, index) => (
                <ScrollFade key={index} delay={index * 0.08}>
                  <div className="flex items-start gap-4 pl-4">
                    {/* Gold dot indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <p className="text-primary-foreground leading-relaxed text-lg">
                      {item}
                    </p>
                  </div>
                </ScrollFade>
              ))}
            </div>

            <ScrollFade delay={0.3}>
              <div className="pt-6 max-w-2xl">
                <p className="text-primary-foreground/80 leading-relaxed mb-1">
                  Este não é um método de acolhimento contínuo.
                </p>
                <p className="text-primary-foreground font-medium leading-relaxed">
                  É um método de estruturação interna e individuação.
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </div>

      {/* BLOCO 4 — Como o processo acontece */}
      <div className="py-14 md:py-18">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollFade>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                Como o processo acontece
              </h3>
            </ScrollFade>

            <div className="space-y-5 text-left max-w-2xl mx-auto">
              <ScrollFade delay={0.1}>
                <p className="text-foreground leading-relaxed text-lg">
                  O acompanhamento acontece de forma individual, com encontros estruturados e direção clara.
                </p>
              </ScrollFade>

              <ScrollFade delay={0.15}>
                <p className="text-foreground leading-relaxed text-lg">
                  Cada etapa do processo é construída a partir do que se apresenta no campo clínico, respeitando limites, tempo de integração e capacidade de sustentação emocional.
                </p>
              </ScrollFade>

              <ScrollFade delay={0.2}>
                <p className="text-foreground leading-relaxed text-lg">
                  O objetivo não é prolongar o processo, mas conduzir com precisão o que precisa ser visto, metabolizado e reorganizado.
                </p>
              </ScrollFade>

              <ScrollFade delay={0.25}>
                <p className="text-accent font-serif text-xl italic pt-4 text-center">
                  Aqui, consciência não é fim — é instrumento.
                </p>
              </ScrollFade>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCO 5 — O que não promete - Destaque Verde */}
      <div className="py-14 md:py-18 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <ScrollFade>
              <h3 className="font-serif text-2xl md:text-3xl mb-10 text-center">
                O que este método não promete
              </h3>
            </ScrollFade>

            {/* Grid com ícones XCircle - cor suave */}
            <div className="grid sm:grid-cols-2 gap-6 mb-14 max-w-2xl mx-auto">
              {notPromises.map((item, index) => (
                <ScrollFade key={index} delay={index * 0.08}>
                  <div className="flex items-center gap-4">
                    <XCircle className="w-5 h-5 text-primary-foreground/40 flex-shrink-0" strokeWidth={1.5} />
                    <p className="text-primary-foreground/70 leading-relaxed">
                      {item}
                    </p>
                  </div>
                </ScrollFade>
              ))}
            </div>

            {/* O que oferece — destaque com CheckCircle2 */}
            <ScrollFade delay={0.3}>
              <div className="py-10 md:py-14 px-8 md:px-12 border-t border-primary-foreground/10">
                <div className="flex flex-col items-center gap-6">
                  <CheckCircle2 className="w-10 h-10 text-accent" strokeWidth={1.5} />
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-snug text-center">
                    O que ele oferece é estrutura interna suficiente para atravessar a vida sem se perder de si.
                  </p>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </div>

      {/* BLOCO 6 — Quando cumpre sua função */}
      <div className="py-14 md:py-18 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <ScrollFade>
              <h3 className="font-serif text-2xl md:text-3xl mb-8 text-center">
                Quando o método cumpre sua função
              </h3>

              <p className="text-muted-foreground leading-relaxed text-lg mb-10 text-center">
                O método cumpre sua função quando a mulher:
              </p>
            </ScrollFade>

            {/* Blocos em grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whenItWorks.map((item, index) => (
                <ScrollFade key={index} delay={index * 0.08}>
                  <div className="bg-background/60 backdrop-blur-sm p-6 border-l-[3px] border-l-accent">
                    <p className="text-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCO 7 — Afunilamento Final */}
      <div className="py-14 md:py-18 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <ScrollFade>
              <p className="text-foreground leading-relaxed text-lg mb-4">
                Este trabalho é direcionado a mulheres adultas que já sustentam autonomia, responsabilidade e funcionamento no mundo externo, mas percebem repetições internas que não se resolvem apenas com compreensão racional ou força de vontade.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Não é um processo para quem busca alívio imediato, respostas prontas ou terceirização da própria história.
              </p>
            </ScrollFade>
          </div>
        </div>
      </div>

      {/* BLOCO 8 — CTA Final */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollFade>
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-4">
                Se você sente que chegou o momento de sair da repetição e assumir uma posição mais adulta diante da própria vida,
              </p>

              <p className="text-foreground text-lg mb-10">
                Este trabalho pode fazer sentido para você.
              </p>

              <a
                href={WA_ANALISE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); gtagSendEvent(WA_ANALISE); }}
              >
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground text-sm tracking-wide px-8 h-14 rounded-full transition-all duration-300 ease-in-out hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_25px_rgba(193,124,70,0.4)]"
                >
                  Falar com a Loren no WhatsApp
                  <ArrowRight className="ml-3 transition-transform duration-300" size={16} />
                </Button>
              </a>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;