import ScrollFade from "@/components/ui/scroll-fade";

const ForWho = () => {
  const points = [
    "você sustenta muito no mundo externo, mas sente que perdeu contato consigo mesma;",
    "repete padrões de vínculo que não se resolvem apenas com consciência ou esforço;",
    "percebe o corpo em estado constante de tensão, alerta ou exaustão;",
    "já fez processos, estudou, compreendeu, mas algo estrutural permanece no mesmo lugar;",
    "não busca alívio rápido, mas reorganização interna, maturidade emocional e autonomia.",
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle texture background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B3B32' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title with elegant letter-spacing */}
          <ScrollFade>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-14 tracking-tight">
              Este trabalho é para você se:
            </h2>
          </ScrollFade>

          {/* Cards Grid */}
          <div className="grid gap-5 md:gap-6 mb-16">
            {points.map((point, index) => (
              <ScrollFade key={index} delay={index * 0.08}>
                <div className="group relative bg-background/80 backdrop-blur-sm border-l-[3px] border-l-accent pl-6 pr-6 py-5 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1">
                  <div className="flex items-start gap-4">
                    {/* Gold dot indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <p className="text-foreground text-base md:text-lg leading-relaxed">
                      {point}
                    </p>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>

          {/* Closing Statement - Solid Green Block */}
          <ScrollFade delay={0.5}>
            <div className="bg-primary p-8 md:p-10 lg:p-12 shadow-xl">
              <p className="text-primary-foreground/80 leading-relaxed text-lg md:text-xl mb-3">
                Este não é um espaço de acolhimento genérico ou motivação.
              </p>
              <p className="text-accent font-serif text-xl md:text-2xl lg:text-3xl leading-snug tracking-tight">
                É um espaço de investigação profunda, estrutura e individuação.
              </p>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
