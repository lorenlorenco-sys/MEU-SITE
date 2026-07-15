import ScrollFade from "@/components/ui/scroll-fade";

const ProcessTransition = () => {
  return (
    <section className="py-10 md:py-14 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollFade>
            <p className="font-serif text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
              E quando você sente que é hora de começar?
            </p>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
};

export default ProcessTransition;
