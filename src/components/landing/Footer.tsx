import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.webp";
import { gtagSendEvent, WA_ANALISE, WA_GERAL } from "@/lib/gtag";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#inicio" },
    { label: "O Método", href: "#metodo" },
    { label: "Sobre", href: "/sobre", isRoute: true },
    { label: "Agendar", href: WA_ANALISE, external: true },
  ];

  return (
    <footer className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Centered Logo */}
        <div className="flex justify-center mb-12">
          <img src={logoFooter} alt="Loren Lorenço" className="h-48 md:h-56 w-auto object-contain" />
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-10 text-sm text-primary-foreground/70">
          <a 
            href="mailto:lorenlorenco@gmail.com" 
            className="hover:text-accent transition-colors"
          >
            lorenlorenco@gmail.com
          </a>
          <span className="hidden md:inline text-primary-foreground/30">|</span>
          <a
            href={WA_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.preventDefault(); gtagSendEvent(WA_GERAL); }}
            className="hover:text-accent transition-colors"
          >
            (48) 99856-2483
          </a>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ) : link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); gtagSendEvent(link.href); }}
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors tracking-wide"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* Instagram Icon */}
        <div className="flex justify-center mb-12">
          <a
            href="https://instagram.com/lorenlorenco"
            className="text-primary-foreground/50 hover:text-accent transition-colors p-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-primary-foreground/10 mx-auto mb-8" />

        {/* Institutional Text */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs text-primary-foreground/50 leading-relaxed">
            Trabalho com método próprio integrando Psicanálise, Psicologia Analítica, clínica contemporânea, constelação familiar, neurobiologia do trauma, neurociência, fases do desenvolvimento humano e Medicina Tradicional Chinesa, com foco na leitura estrutural de padrões de vínculo, identidade, corpo e funcionamento emocional.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-primary-foreground/10 mx-auto mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-primary-foreground/40 leading-relaxed">
            © 2024 Loren Lorenço – Clínica de Individuação e Vínculos.
          </p>
          <p className="text-xs text-primary-foreground/40 mt-1">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;