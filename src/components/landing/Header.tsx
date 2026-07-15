import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoHeader from "@/assets/logo-header.webp";
import { gtagSendEvent, WA_SESSAO } from "@/lib/gtag";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "/sobre", isRoute: true },
    { label: "Método", href: "/metodo", isRoute: true },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center -ml-2">
            <img src={logoHeader} alt="Loren Lorenço" className="h-32 w-auto object-contain object-left scale-110" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
            <a 
              href={WA_SESSAO}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); gtagSendEvent(WA_SESSAO); }}
            >
              <Button 
                size="sm" 
                className="bg-accent text-accent-foreground text-xs tracking-wide px-5 py-2 rounded-full ml-4 transition-all duration-300 ease-in-out hover:bg-accent/90 hover:scale-105 hover:shadow-lg"
              >
                Agendar
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-accent/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-foreground hover:text-accent text-sm py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-accent text-sm py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <a
                href={WA_SESSAO}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); gtagSendEvent(WA_SESSAO); }}
              >
                <Button
                  size="sm"
                  className="bg-accent text-accent-foreground text-xs tracking-wide px-5 py-2 rounded-full w-fit mt-2 transition-all duration-300 ease-in-out hover:bg-accent/90 hover:scale-105 hover:shadow-lg"
                >
                  Agendar
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
