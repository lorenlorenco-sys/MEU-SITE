import { ArrowRight, BookOpen, Headphones, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contents = () => {
  const contents = [
    {
      icon: BookOpen,
      type: "Artigos",
      title: "Reflexões sobre vínculos e autoconhecimento",
      description: "Textos para você refletir sobre padrões, identidade e travessia interna.",
      color: "primary",
    },
    {
      icon: Video,
      type: "Vídeos",
      title: "Lives e conteúdos em vídeo",
      description: "Conversas profundas sobre temas que impactam a vida emocional feminina.",
      color: "accent",
    },
    {
      icon: Headphones,
      type: "Podcasts",
      title: "Áudios para sua jornada",
      description: "Episódios para ouvir enquanto cuida de si, com insights práticos e profundos.",
      color: "primary",
    },
  ];

  return (
    <section id="conteudos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Conteúdos para sua{" "}
              <span className="text-gradient">jornada</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Artigos, vídeos e podcasts para você continuar sua travessia de autoconhecimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contents.map((content, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 ${
                    content.color === "primary"
                      ? "bg-primary/10"
                      : "bg-accent/10"
                  }`}
                >
                  <content.icon
                    className={
                      content.color === "primary"
                        ? "text-primary"
                        : "text-accent"
                    }
                    size={32}
                  />
                </div>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    content.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {content.type}
                </span>

                <h3 className="font-serif text-xl font-semibold mb-3">
                  {content.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {content.description}
                </p>

                <Button variant="ghost" className="group/btn">
                  Em breve
                  <ArrowRight
                    className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    size={16}
                  />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
