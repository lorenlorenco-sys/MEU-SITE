import { Suspense, lazy } from "react";

// Toaster e Sonner são containers de notificações — ficam vazios até uma toast()
// ser disparada. Lazy-load seguro: remove primitivos Radix (Toast/Sonner) do
// bundle inicial, reduzindo TBT em /analise-estrutural onde nunca são usados.
const Toaster = lazy(() =>
  import("@/components/ui/toaster").then((m) => ({ default: m.Toaster }))
);
const Sonner = lazy(() =>
  import("@/components/ui/sonner").then((m) => ({ default: m.Toaster }))
);
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AnalisePadroes é estático (recebe tráfego pago/Google Ads) — fica no bundle
// principal para evitar round-trip extra antes de renderizar o LCP.
// Index é lazy: visitas orgânicas à home toleram o carregamento diferido, e
// isso remove ~170 KB do bundle inicial que seria inútil para /analise-estrutural.
import AnalisePadroes from "./pages/AnalisePadroes";

const Index = lazy(() => import("./pages/Index"));

const Sobre = lazy(() => import("./pages/Sobre"));
const Metodo = lazy(() => import("./pages/Metodo"));
const GpsPsiquico = lazy(() => import("./pages/GpsPsiquico"));
const EbookGpsPsiquico = lazy(() => import("./pages/EbookGpsPsiquico"));
const NotFound = lazy(() => import("./pages/NotFound"));

// react-query e TooltipProvider foram removidos: não eram usados por nenhum
// componente, mas embrulhavam o app inteiro e entravam no JS crítico de toda
// página (incluindo a landpage de tráfego pago). Removê-los reduz o JavaScript
// não usado e as tarefas longas na linha principal (TBT) no mobile.
// AppRoutes = a árvore SEM router. O cliente embrulha em <BrowserRouter>;
// o build de pré-renderização embrulha em <StaticRouter>. Assim os dois
// renderizam exatamente o mesmo HTML e a hidratação não dá mismatch.
export const AppRoutes = () => (
  <>
    {/* Toaster e Sonner são lazy — precisam do próprio <Suspense>. Sem ele,
        o HTML pré-renderizado traz os containers prontos mas o cliente ainda
        não baixou o chunk na hora de hidratar, e o React acusa divergência. */}
    <Suspense fallback={null}>
      <Toaster />
      <Sonner />
    </Suspense>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/gps-psiquico" element={<GpsPsiquico />} />
        <Route path="/ebook" element={<EbookGpsPsiquico />} />
        <Route path="/analise-estrutural" element={<AnalisePadroes />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
