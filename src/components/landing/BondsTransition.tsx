import ScrollFade from "@/components/ui/scroll-fade";
import sculptureBonds from "@/assets/sculpture-bonds.webp";

const BondsTransition = () => {
  return (
    <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with soft edge mask */}
          <ScrollFade className="relative">
            <div className="relative">
              {/* Soft radial mask effect */}
              <div 
                className="relative mx-auto max-w-md lg:max-w-lg"
                style={{
                  maskImage: 'radial-gradient(ellipse 80% 80% at center, black 40%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 40%, transparent 75%)',
                }}
              >
                <img 
                  src={sculptureBonds} 
                  alt="Escultura de nós metálicos entrelaçados simbolizando a complexidade e conexão dos vínculos emocionais - Clínica Loren Lorenço" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollFade>

          {/* Text Content */}
          <div className="lg:pl-8">
            <ScrollFade delay={0.1}>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
                A Estrutura dos Vínculos
              </p>
            </ScrollFade>

            <ScrollFade delay={0.2}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                Quando a estrutura muda, os sintomas deixam de ser o centro.
              </h2>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BondsTransition;
