import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollFade from "@/components/ui/scroll-fade";
import { gtagSendEvent, WA_ANALISE } from "@/lib/gtag";

const StrategicSession = () => {
  const outcomes = [
    "Maior compreensão sobre os padrões de vínculo que se repetem",
    "Clareza sobre a estrutura emocional que está em jogo",
    "Orientação sobre a direção possível do processo",
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto">
          {/* Premium Card Container */}
          <ScrollFade>
            <div className="bg-background rounded-2xl shadow-sm border border-accent/50 p-8 md:p-12 lg:p-14 relative">
              {/* Badge - Porta de Entrada */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-accent/10 text-accent text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-accent/20">
                  Porta de Entrada
                </span>
              </div>

              {/* Title */}
              <div className="text-center pt-4 mb-10">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                  Encontro Terapêutico de Vínculos
                </h2>
              </div>

              {/* Main text */}
              <div className="space-y-6 mb-10 text-center">
                <p className="text-foreground leading-relaxed text-lg">
                  O encontro terapêutico de vínculos é a porta de entrada para o trabalho clínico.
                </p>

                <div className="space-y-2">
                  <p className="text-foreground leading-relaxed text-lg">
                    É um encontro único, com tempo e direção,
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    onde investigamos a estrutura que sustenta seus vínculos, o momento de vida em que você se encontra e se este acompanhamento faz sentido para você agora.
                  </p>
                </div>

                {/* Italic disclaimer with elegant gray */}
                <div className="pt-2">
                  <p className="text-muted-foreground/70 leading-relaxed italic">
                    Não é uma sessão terapêutica contínua.
                  </p>
                  <p className="text-foreground font-medium leading-relaxed">
                    É um espaço de leitura, clareza e orientação.
                  </p>
                </div>
              </div>

              {/* Outcomes with Sparkles icons */}
              <div className="mb-10">
                <p className="text-foreground text-lg mb-6 text-center">
                  Ao final do encontro, você terá:
                </p>
                
                <div className="space-y-4 max-w-md mx-auto">
                  {outcomes.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href={WA_ANALISE}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => { e.preventDefault(); gtagSendEvent(WA_ANALISE); }}
                >
                  <Button 
                    size="lg" 
                    className="bg-accent text-accent-foreground text-sm tracking-wide px-10 h-14 rounded-full transition-all duration-300 ease-in-out hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_25px_rgba(193,124,70,0.4)]"
                  >
                    Falar com a Loren no WhatsApp
                    <ArrowRight className="ml-3 transition-transform duration-300" size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
};

export default StrategicSession;