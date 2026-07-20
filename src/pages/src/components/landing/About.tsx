// Servida de /public com nome estável (sem hash) para ser pré-carregada via
// <link rel="preload"> no index.html antes do JS executar — elimina o delay de LCP.
const lorenPhoto = "/images/loren-photo-professional.webp";
import ScrollFade from "@/components/ui/scroll-fade";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image - enquadramento fechado com moldura e sombra */}
            <ScrollFade className="order-2 lg:order-1">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                {/* Drop shadow effect */}
                <div 
                  className="absolute inset-0 bg-accent/20 rounded-2xl translate-x-4 translate-y-4"
                  aria-hidden="true"
                />
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-accent/30 shadow-2xl">
                  <img
                    src={lorenPhoto}
                    alt="Loren Lorenço — Psicanalista especializada em individuação e vínculos para mulheres"
                    className="w-full h-full object-cover object-top scale-110"
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                    width={800}
                    height={994}
                    style={{
                      filter: 'saturate(0.95) sepia(0.05) hue-rotate(-5deg)',
                    }}
                  />
                </div>
              </div>
            </ScrollFade>

            {/* Content - centralizado verticalmente */}
            <div className="order-1 lg:order-2">
              <ScrollFade>
                <p className="text-sm tracking-widest text-primary-foreground/60 uppercase mb-4">
                  Quem conduz
                </p>

                <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-8">
                  Quem conduz este trabalho
                </h2>
              </ScrollFade>

              <div className="space-y-5 text-primary-foreground leading-relaxed text-lg">
                <ScrollFade delay={0.1}>
                  <p>
                    Este trabalho nasce da clínica e de uma investigação contínua sobre vínculos, estrutura emocional e individuação feminina — não é um espaço de motivação, é um processo de reorganização.
                  </p>
                </ScrollFade>

                <ScrollFade delay={0.15}>
                  <p className="text-primary-foreground/80">
                    Sou <span className="font-medium">Loren Lorenço</span>, psicanalista, com método próprio integrando Psicanálise, Psicologia Analítica, clínica contemporânea, constelação familiar, neurobiologia do trauma, neurociência, fases do desenvolvimento humano e Medicina Tradicional Chinesa — utilizada como mapa clínico de leitura do corpo, dos ciclos e dos processos internos, sem viés espiritual ou dogmático.
                  </p>
                </ScrollFade>

                <ScrollFade delay={0.2}>
                  <p className="text-primary-foreground/80">
                    Minha atuação não se guia por sintomas isolados, nem por histórias contadas para aliviar tensão — eu leio a estrutura interna que sustenta a forma como uma mulher se vincula, escolhe, se adapta e ocupa seu lugar no mundo.
                  </p>
                </ScrollFade>

                <ScrollFade delay={0.25}>
                  <p className="text-primary-foreground/80">
                    O interesse clínico não é o que aconteceu, é o modo como isso se organizou e passou a operar por dentro — no corpo, no psiquismo e nos vínculos.
                  </p>
                </ScrollFade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;