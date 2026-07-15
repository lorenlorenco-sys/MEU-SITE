import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { gtagSendEvent, WA_GPS } from "@/lib/gtag";

// PDF hospedado localmente em /public para máxima performance e independência
const PDF_URL = "/gps-psiquico.pdf";

const WHATSAPP_URL = WA_GPS;

const GpsPsiquico = () => {
  const pdfSrc = `${PDF_URL}#view=FitH`;

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead
        title="Seu GPS Psíquico | Loren Lorenço"
        description="Material de leitura clínica para apoio à construção da Estrutura Adulta."
        canonicalPath="/gps-psiquico"
      />

      {/* Header */}
      <header className="py-6 bg-primary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="mr-2" size={14} />
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Seu GPS Psíquico chegou
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              Parabéns por escolher o caminho da Estrutura Adulta.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-border bg-card">
              <div className="relative w-full" style={{ paddingTop: "129%" }}>
                <iframe
                  src={pdfSrc}
                  title="GPS Psíquico — Loren Lorenço"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Caso o documento não carregue, atualize a página ou utilize um navegador diferente.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Pronta para o próximo passo
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-10">
              Após a leitura, o Encontro Terapêutico de Vínculos é a porta de entrada para o trabalho clínico.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); gtagSendEvent(WHATSAPP_URL); }}
                className="inline-flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Falar com a Loren no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GpsPsiquico;
