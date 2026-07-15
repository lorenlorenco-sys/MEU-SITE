import ScrollFade from "@/components/ui/scroll-fade";

const Problem = () => {
  const structures = [
    "vínculos construídos na falta ou na adaptação excessiva;",
    "trauma relacional não metabolizado no corpo;",
    "lealdades inconscientes e histórias que seguem operando;",
    "estratégias de sobrevivência que funcionaram no passado, mas hoje limitam a vida;",
    "dificuldade de ocupar um lugar adulto, próprio e autoral.",
  ];

  return (
    <section className="bg-primary text-primary-foreground">
      {/* CAMADA 1 — Eixo central: a frase de deslocamento */}
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollFade>
              <p className="text-xs tracking-[0.3em] text-primary-foreground/50 uppercase mb-8">
                Estrutura, não sintoma
              </p>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.1] mb-0">
                O que geralmente está em jogo não é o sintoma.
              </h2>
            </ScrollFade>
          </div>
        </div>
      </div>

      {/* CAMADA 2 — Desconstrução do sintoma */}
      <div className="py-10 md:py-14 bg-primary-foreground/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <ScrollFade>
              <p className="text-primary-foreground/75 leading-relaxed text-lg md:text-xl">
                Na clínica, o que aparece como ansiedade, dificuldade nos relacionamentos ou cansaço constante raramente é a raiz do problema.
              </p>
            </ScrollFade>
          </div>
        </div>
      </div>

      {/* CAMADA 3 — Nomeação da estrutura + blocos conceituais */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl">
            <ScrollFade>
              <p className="text-primary-foreground leading-relaxed text-lg md:text-xl mb-10 max-w-3xl">
                O que sustenta esses sintomas costuma ser uma estrutura interna marcada por:
              </p>
            </ScrollFade>

            {/* Blocos conceituais */}
            <div className="space-y-4 md:space-y-5 mb-14">
              {structures.map((item, index) => (
                <ScrollFade key={index} delay={index * 0.08}>
                  <div className="flex items-start gap-4 md:pl-12 lg:pl-20">
                    {/* Gold dot indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed">
                      {item}
                    </p>
                  </div>
                </ScrollFade>
              ))}
            </div>

            {/* Fechamento */}
            <ScrollFade delay={0.3}>
              <div className="max-w-2xl pt-10">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary-foreground leading-tight">
                  Quando a estrutura muda, os sintomas deixam de ser o centro.
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
