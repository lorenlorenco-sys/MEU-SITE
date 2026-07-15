import { User, Heart, Activity, Coins } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Identidade & Autonomia Interna",
      points: [
        "Crise de identidade",
        "Sensação de vazio",
        "Dificuldade de se posicionar sem culpa",
      ],
      color: "primary",
    },
    {
      icon: Heart,
      title: "Vínculos & Relacionamentos",
      points: [
        "Repetição de padrões amorosos",
        "Dependência emocional / autoabandono",
        "Dificuldade em sair de relações que já acabaram por dentro",
      ],
      color: "accent",
    },
    {
      icon: Activity,
      title: "Corpo, Ansiedade & Sobrecarga",
      points: [
        "Corpo sempre em alerta",
        "Sintomas físicos ligados ao excesso de responsabilidade",
        "Dores, cansaço e somatizações",
      ],
      color: "primary",
    },
    {
      icon: Coins,
      title: "Prosperidade & Self",
      points: [
        "Dinheiro ligado a culpa, medo ou salvamento",
        "Dificuldade em sustentar uma obra própria",
        "Medo de crescer e 'deixar pessoas para trás'",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="atendimentos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Eixos que trabalhamos na sua{" "}
              <span className="text-gradient">jornada</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity ${
                    service.color === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                />

                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      service.color === "primary"
                        ? "bg-primary/10"
                        : "bg-accent/10"
                    }`}
                  >
                    <service.icon
                      className={
                        service.color === "primary"
                          ? "text-primary"
                          : "text-accent"
                      }
                      size={28}
                    />
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <ul className="space-y-3">
                    {service.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                            service.color === "primary"
                              ? "bg-primary"
                              : "bg-accent"
                          }`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
