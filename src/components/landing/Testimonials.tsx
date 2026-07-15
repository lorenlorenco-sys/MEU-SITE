import { Quote } from "lucide-react";
import ScrollFade from "@/components/ui/scroll-fade";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "O encontro me ajudou a entender a estrutura que sustentava meus vínculos. Não foi sobre conforto, foi sobre clareza.",
      author: "Mulher, 38 anos",
    },
    {
      quote: "O trabalho trouxe leitura e direção. Passei a sustentar escolhas com mais responsabilidade e menos repetição.",
      author: "Mulher, 42 anos",
    },
    {
      quote: "Foi a primeira vez que não fui conduzida a me adaptar, mas a reorganizar meu lugar interno.",
      author: "Mulher, 35 anos",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <ScrollFade>
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-3 text-center">
              Depoimentos
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
              O que mulheres em processo dizem
            </h2>
          </ScrollFade>

          {/* Grid de cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10">
            {testimonials.map((testimonial, index) => (
              <ScrollFade key={index} delay={index * 0.1}>
                <div className="bg-background/60 backdrop-blur-sm p-6 md:p-8 rounded-xl h-full flex flex-col">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
                  
                  {/* Quote text in italic */}
                  <p className="font-serif text-lg text-foreground leading-relaxed italic flex-grow mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author in bold gold */}
                  <p className="text-sm font-semibold text-accent">
                    {testimonial.author}
                  </p>
                </div>
              </ScrollFade>
            ))}
          </div>

          <ScrollFade delay={0.4}>
            <p className="text-sm text-muted-foreground text-center">
              (Relatos reais, anonimizados.)
            </p>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;