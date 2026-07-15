import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollFade from "@/components/ui/scroll-fade";
import { gtagSendEvent, WA_ANALISE } from "@/lib/gtag";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollFade>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug mb-6">
              Você não precisa ter <em>tudo claro</em> para começar.
            </p>
          </ScrollFade>

          <ScrollFade delay={0.1}>
            <p className="text-primary-foreground/80 mb-12 leading-relaxed text-lg max-w-xl mx-auto">
              Precisa apenas estar disposta a olhar com honestidade para o que se repete.
            </p>
          </ScrollFade>

          <ScrollFade delay={0.2}>
            <a
              href={WA_ANALISE}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); gtagSendEvent(WA_ANALISE); }}
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground text-base tracking-wide px-12 h-16 rounded-full transition-all duration-300 ease-in-out hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(193,124,70,0.4)]"
              >
                Falar com a Loren no WhatsApp
                <ArrowRight className="ml-3 transition-transform duration-300" size={18} />
              </Button>
            </a>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;