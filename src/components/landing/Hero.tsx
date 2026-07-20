import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { gtagSendEvent, WA_SESSAO_ESTRATEGICA } from "@/lib/gtag";

// Servidas de /public (nome estável, sem hash) para serem pré-carregadas via
// <link rel="preload"> no index.html antes do JS executar.
// Mobile (800px) economiza ~65KB em dispositivos móveis.
const heroDesktop = "/images/hero-forest-sunlight.webp";       // 1400px, ~93KB
const heroMobile  = "/images/hero-forest-sunlight-mobile.webp"; //  800px, ~27KB

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          // srcset: mobile recebe 800px (27KB), desktop recebe 1400px (93KB)
          src={heroDesktop}
          srcSet={`${heroMobile} 800w, ${heroDesktop} 1400w`}
          sizes="100vw"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          fetchpriority="high"
          loading="eager"
          decoding="async"
          width={1400}
          height={788}
        />
        {/* Brand Color Overlay - #0B3B32 at 75% for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'hsl(169 69% 14% / 0.75)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16 lg:py-24">
          <div className="max-w-3xl">
            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-primary-foreground leading-[1.12] mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Psicoterapia para mulheres adultas que funcionam bem no mundo externo, mas sentem que algo essencial permanece desorganizado por dentro.
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mb-5 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Um trabalho clínico profundo para quem deseja compreender seus padrões, reorganizar a própria estrutura emocional e sustentar uma vida mais inteira no amor, no trabalho e em si.
            </p>

            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mb-5 animate-fade-in leading-relaxed" style={{ animationDelay: "0.25s" }}>
              Atendo mulheres adultas que já conquistaram espaço, autonomia e responsabilidade, mas vivem repetições internas nos vínculos, no corpo ou nas escolhas, que não se resolvem apenas com força de vontade ou entendimento racional.
            </p>

            <p className="text-base md:text-lg text-primary-foreground max-w-2xl mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: "0.3s" }}>
              Aqui, o foco não é alívio rápido, é estrutura interna, maturidade emocional e mudança real de direção.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              {/* Primary Button - Gold with glow effect */}
              <a
                href={WA_SESSAO_ESTRATEGICA}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); gtagSendEvent(WA_SESSAO_ESTRATEGICA); }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-accent-foreground text-sm tracking-wide px-8 h-14 rounded-full transition-all duration-300 ease-in-out hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_25px_rgba(193,124,70,0.4)]"
                >
                  Agendar Sessão Estratégica
                  <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" size={16} />
                </Button>
              </a>

              {/* Secondary Button - Ghost style with white border */}
              <a href="#metodo">
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full sm:w-auto text-primary-foreground border border-primary-foreground/40 bg-transparent text-sm tracking-wide px-8 h-14 rounded-full transition-all duration-300 ease-in-out hover:bg-primary-foreground/10 hover:border-primary-foreground/60 hover:text-primary-foreground"
                >
                  Conheça o método
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
