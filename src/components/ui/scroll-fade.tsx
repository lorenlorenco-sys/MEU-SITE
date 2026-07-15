import { useRef, useEffect, useState, ReactNode } from "react";

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos, mantém a mesma API da versão anterior. */
  delay?: number;
}

/**
 * ScrollFade — efeito "aparecer ao rolar" (fade + subida sutil).
 *
 * Antes usava framer-motion (~120KB de JS). Reescrito com IntersectionObserver
 * + transição CSS nativa (~1KB), sem dependências. API idêntica: nenhum outro
 * arquivo precisa mudar. Respeita prefers-reduced-motion.
 */
const ScrollFade = ({ children, className = "", delay = 0 }: ScrollFadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Acessibilidade: quem prefere menos movimento vê o conteúdo direto.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // dispara só uma vez (once)
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px" }, // equivalente ao margin:"-50px" anterior
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s, transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollFade;
