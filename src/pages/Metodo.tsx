import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { gtagSendEvent, WA_ANALISE } from "@/lib/gtag";

const Metodo = () => {
  return (
    <div className="min-h-screen bg-primary">
      <SEOHead
        title="O Método | Loren Lorenço — Encontro Terapêutico de Vínculos"
        description="Entenda o método do encontro terapêutico estrutural dos vínculos. Uma abordagem clínica que investiga a organização interna, não apenas sintomas."
        canonicalPath="/metodo"
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-serif text-xl text-primary-foreground">
              Loren Lorenço
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-14 md:pt-32 md:pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              O método
            </h1>
            
            <div className="space-y-5 text-primary-foreground/80 leading-relaxed">
              <p>
                O método que sustenta este trabalho parte da compreensão de que os vínculos não se organizam apenas por escolha consciente, mas por estruturas emocionais formadas ao longo da vida.
              </p>
              <p>
                Essas estruturas influenciam a forma como uma mulher ama, se adapta, se responsabiliza, sustenta limites e ocupa o próprio lugar — no amor, no trabalho e na vida.
              </p>
              <p className="pl-6 italic text-primary-foreground/70">
                Por isso, o foco do método não está no sintoma isolado,<br />
                mas na estrutura que sustenta a repetição.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que este método olha */}
      <section className="py-14 md:py-16 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              O que este método olha
            </h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Este método investiga a organização interna que sustenta os vínculos, a identidade e as escolhas.
            </p>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              O olhar clínico se dirige principalmente a:
            </p>
            
            <div className="space-y-3 text-foreground/80 leading-relaxed mb-6">
              <p className="pl-4">a estrutura de vínculo predominante</p>
              <p className="pl-4">as defesas emocionais construídas como estratégias de sobrevivência</p>
              <p className="pl-4">o impacto das experiências precoces e relacionais no corpo</p>
              <p className="pl-4">as lealdades inconscientes que mantêm padrões ativos</p>
              <p className="pl-4">o lugar interno a partir do qual a mulher se posiciona no mundo</p>
            </div>
            
            <p className="pl-6 italic text-foreground/70">
              O objetivo não é explicar o passado,<br />
              mas compreender como ele continua operando no presente.
            </p>
          </div>
        </div>
      </section>

      {/* Pressupostos clínicos */}
      <section className="py-14 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">
              Pressupostos clínicos
            </h2>
            
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              O método se apoia em alguns pressupostos fundamentais:
            </p>
            
            <div className="space-y-3 text-primary-foreground/80 leading-relaxed mb-6">
              <p className="pl-4">repetição não é falta de consciência, mas organização estrutural</p>
              <p className="pl-4">adaptação excessiva não é virtude, mas resposta relacional</p>
              <p className="pl-4">sintomas são sinais de uma estrutura sobrecarregada</p>
              <p className="pl-4">vínculo sem diferenciação gera perda de si</p>
              <p className="pl-4">individuação exige responsabilidade emocional</p>
            </div>
            
            <p className="text-primary-foreground/70 leading-relaxed">
              Esses pressupostos orientam a condução clínica e impedem que o trabalho se reduza a aconselhamento, acolhimento genérico ou correção de comportamento.
            </p>
          </div>
        </div>
      </section>

      {/* Como o método opera */}
      <section className="py-14 md:py-16 bg-muted/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Como o método opera
            </h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              O método opera a partir do encontro terapêutico estrutural dos vínculos, integrando corpo, psiquismo e campo relacional.
            </p>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              Na prática clínica, isso significa:
            </p>
            
            <div className="space-y-3 text-foreground/80 leading-relaxed mb-6">
              <p className="pl-4">leitura precisa da estrutura emocional que se apresenta</p>
              <p className="pl-4">atenção ao corpo como registro vivo da história</p>
              <p className="pl-4">diferenciação entre adaptação, lealdade e escolha adulta</p>
              <p className="pl-4">regulação do sistema nervoso como base para consciência</p>
              <p className="pl-4">sustentação de limites, tempo e ritmo do processo</p>
            </div>
            
            <p className="pl-6 italic text-foreground/70">
              O método não acelera o que precisa ser integrado,<br />
              nem prolonga o que já pode ser reorganizado.
            </p>
          </div>
        </div>
      </section>

      {/* O que este método não é */}
      <section className="py-14 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">
              O que este método não é
            </h2>
            
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Este método não é:
            </p>
            
            <div className="space-y-3 text-primary-foreground/80 leading-relaxed mb-6">
              <p className="pl-4">um conjunto de técnicas aplicáveis de forma padronizada</p>
              <p className="pl-4">um processo de motivação ou fortalecimento do ego</p>
              <p className="pl-4">uma proposta de alívio rápido ou solução imediata</p>
              <p className="pl-4">um espaço de dependência terapêutica</p>
              <p className="pl-4">uma prática espiritualizada ou simbólica desvinculada da clínica</p>
            </div>
            
            <p className="text-primary-foreground/70 leading-relaxed">
              Esses limites protegem o campo e sustentam a seriedade do trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* Quando o método cumpre sua função */}
      <section className="py-14 md:py-16 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Quando o método cumpre sua função
            </h2>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              O método cumpre sua função quando a mulher:
            </p>
            
            <div className="space-y-3 text-foreground/80 leading-relaxed mb-6">
              <p className="pl-4">reconhece os próprios padrões sem se confundir com eles</p>
              <p className="pl-4">sustenta limites sem culpa excessiva</p>
              <p className="pl-4">escolhe vínculos a partir de presença, não de carência</p>
              <p className="pl-4">diferencia responsabilidade de autoabandono</p>
              <p className="pl-4">ocupa um lugar interno mais adulto e autoral</p>
            </div>
            
            <p className="pl-6 italic text-foreground/70">
              Não se trata de viver sem conflitos,<br />
              mas de não se perder de si nos conflitos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-5">
              Porta de entrada
            </h2>
            
            <p className="text-primary-foreground/80 leading-relaxed mb-3">
              A porta de entrada para este trabalho é o Encontro Terapêutico de Vínculos —
            </p>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              um encontro clínico de leitura, clareza e orientação.
            </p>

            <a
              href={WA_ANALISE}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); gtagSendEvent(WA_ANALISE); }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm tracking-wide px-8 py-6 rounded-sm"
              >
                Falar com a Loren no WhatsApp
                <ArrowRight className="ml-3" size={16} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-serif text-primary-foreground">Loren Lorenço</p>
            <div className="flex gap-6 text-sm text-primary-foreground/70">
              <Link to="/" className="hover:text-accent transition-colors">Início</Link>
              <Link to="/sobre" className="hover:text-accent transition-colors">Sobre</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Metodo;
