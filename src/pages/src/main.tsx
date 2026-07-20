import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./fonts.ts";
import "./index.css";

const container = document.getElementById("root")!;

// O build gera o HTML de cada rota já pronto (pré-renderização). Quando ele
// existe, o React apenas "assume" o HTML que o navegador já pintou —
// hydrateRoot em vez de createRoot — evitando apagar e redesenhar a tela.
// createRoot fica como fallback para o `vite dev`, onde o root está vazio.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
