import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import lorenPhoto from "@/assets/loren-photo-about.webp";
import SEOHead from "@/components/SEOHead";
import { gtagSendEvent, WA_ANALISE } from "@/lib/gtag";

const Sobre = () => {
  const forWhom = [
    "sustentam responsabilidades no mundo externo;",
    "percebem repetições nos vínculos e escolhas;",
    "não buscam acolhimento genérico ou adaptação emocional;",
    "estão dispostas a olhar para a própria estrutura com honestidade;",
    "desejam construir autonomia interna e posição adulta.",
  ];

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="Sobre | Loren Lorenço — Clínica de Individuação e Vínculos"
        description="Conheça a posição clínica e o campo teórico que sustenta o trabalho de Loren Lorenço. Psicanálise, Jung, abordagem sistêmica e regulação de trauma."
        canonicalPath="/sobre"
      />
      {/* Header */}
      <header className="py-6 bg-primary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="mr-2" size={14} />
            Voltar
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
              {/* Photo */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="aspect-[3/4] overflow-hidden border border-accent/20">
                  <img 
                    src={lorenPhoto} 
                    alt="Loren Lorenço — Psicanalista e cofundadora do Realidade Feminina, especializada em encontro terapêutico estrutural de vínculos e individuação feminina"
                    className="w-full h-full object-cover object-top scale-110"
                    loading="lazy"
                    style={{
                      filter: 'saturate(0.95) sepia(0.05) hue-rotate(-5deg)',
                    }}
                  />
                </div>
              </div>

              {/* Intro Content */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <p className="text-xs tracking-[0.3em] text-primary-foreground/60 uppercase mb-5">
                  Sobre
                </p>

                <div className="space-y-5 text-lg">
                  <p className="text-primary-foreground leading-relaxed">
                    Este trabalho nasce da prática clínica e da investigação contínua sobre os vínculos, a estrutura emocional e o processo de individuação feminina.
                  </p>

                  <p className="text-primary-foreground/80 leading-relaxed">
                    Minha atuação não é orientada por sintomas isolados, nem por narrativas emocionais, mas pela leitura da estrutura interna que sustenta a forma como uma mulher se vincula, escolhe, se adapta e ocupa seu lugar no mundo.
                  </p>

                  <div className="pt-3">
                    <p className="text-primary-foreground leading-relaxed">
                      O que me interessa clinicamente não é "o que aconteceu",
                    </p>
                    <p className="text-accent font-medium leading-relaxed">
                      mas como isso se organizou internamente — no corpo, no psiquismo e nos vínculos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A posição clínica */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              A posição clínica
            </h2>

            <div className="space-y-5 text-lg">
              <p className="text-foreground leading-relaxed">
                Trabalho a partir do encontro terapêutico estrutural dos vínculos, compreendendo que repetições emocionais e relacionais não são falhas individuais, mas respostas estruturais a contextos vividos.
              </p>

              <div className="pl-6">
                <p className="text-foreground leading-relaxed">
                  Essa leitura permite sair da lógica de correção do comportamento
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  e entrar na lógica de reorganização do lugar interno.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-muted-foreground leading-relaxed">
                  A clínica não opera para aliviar sintomas rapidamente,
                </p>
                <p className="text-foreground font-medium leading-relaxed">
                  mas para sustentar processos de consciência, responsabilidade emocional e autoria de escolha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O campo que sustenta o método */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">
              O campo que sustenta o método
            </h2>

            <div className="space-y-5 text-lg">
              <p className="text-primary-foreground leading-relaxed">
                O trabalho integra fundamentos da Psicanálise, Psicologia Analítica (Jung), abordagem sistêmica, neurociência, regulação de trauma e fases do desenvolvimento.
              </p>

              <div className="pl-6">
                <p className="text-primary-foreground/80 leading-relaxed">
                  Essa integração não acontece como soma de técnicas,
                </p>
                <p className="text-primary-foreground leading-relaxed">
                  mas como estrutura de leitura clínica, aplicada com critério, timing e escuta do corpo.
                </p>
              </div>

              <div className="pt-2 space-y-1">
                <p className="text-primary-foreground leading-relaxed">
                  O método se constrói na clínica real —
                </p>
                <p className="text-primary-foreground/80 leading-relaxed">
                  no encontro com mulheres que funcionam no mundo externo,
                </p>
                <p className="text-primary-foreground/80 leading-relaxed">
                  mas vivem internamente sobrecarga, autoabandono e dificuldade de sustentar vínculos adultos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como essa clínica opera hoje */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Como essa clínica opera hoje
            </h2>

            <div className="space-y-5 text-lg">
              <p className="text-foreground leading-relaxed">
                O acompanhamento acontece de forma individual, com direção clara e escuta profunda.
              </p>

              <div className="pl-6">
                <p className="text-foreground/80 leading-relaxed">
                  O trabalho não segue protocolos fixos,
                </p>
                <p className="text-foreground leading-relaxed">
                  mas é orientado pela leitura da estrutura que se apresenta, respeitando ritmo, limites e capacidade de integração.
                </p>
              </div>

              <div className="pt-4 space-y-1">
                <p className="text-foreground font-medium leading-relaxed">
                  Aqui, consciência não é fim.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  É instrumento.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-foreground/80 leading-relaxed">
                  O objetivo não é dependência do processo,
                </p>
                <p className="text-foreground font-medium leading-relaxed">
                  mas apropriação de si, reorganização interna e maturidade emocional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem este trabalho faz sentido */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">
              Para quem este trabalho faz sentido
            </h2>

            <p className="text-primary-foreground/80 leading-relaxed text-lg mb-6">
              Este trabalho é indicado para mulheres que:
            </p>

            <div className="space-y-3 mb-8">
              {forWhom.map((item, index) => (
                <p 
                  key={index}
                  className="text-primary-foreground leading-relaxed text-lg pl-5"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-primary-foreground/80 leading-relaxed text-lg">
                Não é um trabalho para quem busca respostas rápidas,
              </p>
              <p className="text-primary-foreground font-medium leading-relaxed text-lg">
                nem para quem espera ser conduzida sem implicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Porta de entrada - CTA */}
      <section className="py-14 md:py-18 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">
              Porta de entrada
            </h2>

            <p className="text-foreground leading-relaxed text-lg mb-8">
              A porta de entrada para o trabalho é o Encontro Terapêutico de Vínculos —
              <br />
              <span className="text-muted-foreground">um encontro de leitura, clareza e orientação.</span>
            </p>

            <a
              href={WA_ANALISE}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); gtagSendEvent(WA_ANALISE); }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm tracking-wide px-8 py-6 rounded-sm"
              >
                Falar com a Loren no WhatsApp
                <ArrowRight className="ml-3" size={16} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-primary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Loren Lorenço. Todos os direitos reservados.
            </p>
            <Link 
              to="/" 
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sobre;
