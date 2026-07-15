// Playfair Display é carregada aqui (lazy chunk) e não no bundle principal —
// evita que visitantes de /analise-estrutural baixem fontes desnecessárias.
import "@fontsource/playfair-display/latin-400.css";
import "@fontsource/playfair-display/latin-500.css";
import "@fontsource/playfair-display/latin-600.css";
import "@fontsource/playfair-display/latin-400-italic.css";
import "@fontsource/playfair-display/latin-500-italic.css";

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ForWho from "@/components/landing/ForWho";
import BondsTransition from "@/components/landing/BondsTransition";
import Problem from "@/components/landing/Problem";
import Method from "@/components/landing/Method";
import Process from "@/components/landing/Process";
import ProcessTransition from "@/components/landing/ProcessTransition";
import StrategicSession from "@/components/landing/StrategicSession";
import About from "@/components/landing/About";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/ui/section-divider";
import ImageDivider from "@/components/ui/image-divider";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead canonicalPath="/" />
      <Header />
      <main>
        <Hero />
        <SectionDivider variant="wave" />
        <ForWho />
        <BondsTransition />
        <Problem />
        <SectionDivider variant="line" />
        <Method />
        <SectionDivider variant="dots" />
        <Process />
        <ProcessTransition />
        <ImageDivider height="sm" />
        <StrategicSession />
        <SectionDivider variant="wave" />
        <About />
        <SectionDivider variant="line" />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
