import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollFade from "@/components/ui/scroll-fade";
import sculptureBonds from "@/assets/sculpture-bonds.webp";
import { gtagSendEvent, WA_ANALISE } from "@/lib/gtag";

const Process = () => {
  const movements = [
    {
      number: "01",
      title: "Mapeamento da estrutura",
      description: "Identificação dos padrões de vínculo, das defesas emocionais e da forma como o corpo sustenta a história vivida.",
    },
    {
      number: "02",
      title: "Reorganização interna",
      description: "Metabolização de experiências emocionais, diferenciação entre adaptação e escolha, e fortalecimento do lugar adulto e autoral.",
    },
    {
      number: "03",
      title: "Integração e sustentação",
      description: "Aplicação concreta das mudanças na vida cotidiana, nos vínculos, no corpo e nas decisões.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
      {/* Background sculpture texture */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url(${sculptureBonds})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header - Centralizado */}
          <div className="text-center mb-16">
            <ScrollFade>
              <p className="text-xs tracking-[0.3em] text-primary-foreground/50 uppercase mb-6">
                O processo
              </p>
            </ScrollFade>

            <ScrollFade delay={0.1}>
              <p className="text-primary-foreground leading-relaxed text-lg max-w-2xl mx-auto">
                O acompanhamento acontece de forma individual, com direção clara e escuta profunda.
                O processo é estruturado a partir do que se apresenta no campo clínico, respeitando o ritmo, os limites e a capacidade de integração de cada mulher.
              </p>
            </ScrollFade>

            <ScrollFade delay={0.15}>
              <p className="text-primary-foreground font-medium text-lg pt-6">
                De forma geral, o trabalho atravessa três movimentos:
              </p>
            </ScrollFade>
          </div>

          {/* Three movements - Grid de 3 colunas */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-20">
            {movements.map((movement, index) => (
              <ScrollFade key={index} delay={0.1 + index * 0.1}>
                <div className="bg-primary-foreground/5 p-8 md:p-10 text-center h-full">
                  {/* Large serif number in gold */}
                  <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-accent block mb-6">
                    {movement.number}
                  </span>
                  
                  <h3 className="font-serif text-xl md:text-2xl text-primary-foreground mb-4">
                    {movement.title}
                  </h3>
                  
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {movement.description}
                  </p>
                </div>
              </ScrollFade>
            ))}
          </div>

          {/* Bloco de Conclusão - Centralizado com respiro generoso */}
          <ScrollFade delay={0.4}>
            <div className="py-14 md:py-20 text-center max-w-3xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-snug">
                O objetivo não é dependência do processo,
                <br />
                <span className="text-accent">mas apropriação de si.</span>
              </p>
            </div>
          </ScrollFade>

          {/* CTA Final */}
          <ScrollFade delay={0.5}>
            <div className="text-center pt-8 border-t border-primary-foreground/10">
              <p className="font-serif text-xl md:text-2xl text-primary-foreground mb-8 pt-8">
                E quando você sente que é hora de começar?
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
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
};

export default Process;