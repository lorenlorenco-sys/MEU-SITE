/* =========================================================
   Clínica do Vínculo — Landing Page
   JavaScript puro (sem dependências)
========================================================= */

/* =========================================================
   >>> CONFIGURAÇÃO PRINCIPAL <<<
   Altere APENAS aqui o número do WhatsApp.
   Use o formato internacional, só números:
   código do país (55) + DDD + número.
   Exemplo: 5511999999999
========================================================= */
const WHATSAPP_NUMERO = "5548998562483"; // Clínica do Vínculo — WhatsApp

/* Produto/serviço citado na mensagem automática */
const SERVICO = "o atendimento da Clínica do Vínculo";

/* =========================================================
   Monta o link do WhatsApp com mensagem codificada
========================================================= */
function linkWhatsApp(mensagem) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;
}

/* Mensagem padrão dos botões (sem formulário) */
function mensagemBotao(motivo) {
  const assunto = motivo && motivo !== "menu"
    ? motivo
    : "o atendimento de casais";
  return `Olá, Loren! Conheci a Clínica do Vínculo pela landing page e gostaria de ${assunto}.`;
}

/* =========================================================
   Abre o WhatsApp em nova aba
========================================================= */
function abrirWhatsApp(mensagem) {
  window.open(linkWhatsApp(mensagem), "_blank", "noopener");
}

/* =========================================================
   Botões genéricos de WhatsApp (.js-wa)
========================================================= */
function ativarBotoesWhatsApp() {
  document.querySelectorAll(".js-wa").forEach((el) => {
    const disparar = () => {
      const motivo = el.getAttribute("data-motivo") || "";
      abrirWhatsApp(mensagemBotao(motivo));
    };
    el.addEventListener("click", (e) => { e.preventDefault(); disparar(); });
    // Acessível via teclado (Enter / Espaço) para elementos <a> sem href
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); disparar(); }
    });
  });
}

/* =========================================================
   Menu mobile
========================================================= */
function ativarMenuMobile() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  const fechar = () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Abrir menu de navegação"); };

  toggle.addEventListener("click", () => {
    const aberto = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(aberto));
    toggle.setAttribute("aria-label", aberto ? "Fechar menu de navegação" : "Abrir menu de navegação");
  });

  // Fecha ao clicar num link do menu
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", fechar));
  // Fecha com ESC
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") fechar(); });
}

/* =========================================================
   Rolagem suave para âncoras internas
========================================================= */
function ativarScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length <= 1) return;
      const alvo = document.querySelector(id);
      if (!alvo) return;
      e.preventDefault();
      alvo.scrollIntoView({ behavior: "smooth", block: "start" });
      // Move o foco para acessibilidade
      alvo.setAttribute("tabindex", "-1");
      alvo.focus({ preventScroll: true });
    });
  });
}

/* =========================================================
   Formatação do telefone: (00) 00000-0000
========================================================= */
function formatarTelefone(valor) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/(\d{0,2})/, "($1");
  if (d.length <= 6) return d.replace(/(\d{2})(\d{0,4})/, "($1) $2");
  if (d.length <= 10) return d.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

function ativarMascaraTelefone() {
  const tel = document.getElementById("telefone");
  if (!tel) return;
  tel.addEventListener("input", () => { tel.value = formatarTelefone(tel.value); });
}

/* =========================================================
   Validação + envio do formulário
========================================================= */
function mostrarErro(campoId, mensagem) {
  const campo = document.getElementById(campoId);
  const field = campo.closest(".field");
  const msg = document.querySelector(`.error-msg[data-for="${campoId}"]`);
  if (field) field.classList.add("invalid");
  if (msg) msg.textContent = mensagem;
  campo.setAttribute("aria-invalid", "true");
}

function limparErro(campoId) {
  const campo = document.getElementById(campoId);
  const field = campo.closest(".field");
  const msg = document.querySelector(`.error-msg[data-for="${campoId}"]`);
  if (field) field.classList.remove("invalid");
  if (msg) msg.textContent = "";
  campo.removeAttribute("aria-invalid");
}

function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ativarFormulario() {
  const form = document.getElementById("leadForm");
  const feedback = document.getElementById("formFeedback");
  if (!form) return;

  // Limpa erro conforme o usuário corrige
  ["nome", "telefone", "email", "interesse"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", () => limparErro(id));
    if (el && el.tagName === "SELECT") el.addEventListener("change", () => limparErro(id));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const interesse = document.getElementById("interesse").value;

    let ok = true;
    let primeiroInvalido = null;

    if (nome.length < 2) { mostrarErro("nome", "Por favor, informe seu nome."); ok = false; primeiroInvalido = primeiroInvalido || "nome"; }
    else limparErro("nome");

    const digitos = telefone.replace(/\D/g, "");
    if (digitos.length < 10) { mostrarErro("telefone", "Informe um telefone válido com DDD."); ok = false; primeiroInvalido = primeiroInvalido || "telefone"; }
    else limparErro("telefone");

    if (email && !emailValido(email)) { mostrarErro("email", "Verifique o e-mail informado."); ok = false; primeiroInvalido = primeiroInvalido || "email"; }
    else limparErro("email");

    if (!interesse) { mostrarErro("interesse", "Selecione uma opção."); ok = false; primeiroInvalido = primeiroInvalido || "interesse"; }
    else limparErro("interesse");

    if (!ok) {
      if (primeiroInvalido) document.getElementById(primeiroInvalido).focus();
      return;
    }

    /* =====================================================
       Monta a mensagem personalizada do WhatsApp
    ===================================================== */
    let mensagem = `Olá! Meu nome é ${nome}. Conheci a Clínica do Vínculo pela landing page e gostaria de saber mais sobre ${SERVICO}.`;
    mensagem += ` Meu telefone é ${telefone}`;
    if (email) mensagem += ` e meu e-mail é ${email}`;
    mensagem += `. Meu principal interesse é ${interesse}.`;

    // Feedback visual (sem alert)
    if (feedback) {
      feedback.hidden = false;
      feedback.textContent = "Tudo certo! Estamos te levando ao WhatsApp para continuar a conversa…";
      feedback.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Abre o WhatsApp
    abrirWhatsApp(mensagem);
    form.reset();
  });
}

/* =========================================================
   Animações de entrada (IntersectionObserver)
========================================================= */
function ativarRevelacao() {
  const elementos = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elementos.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  elementos.forEach((el) => obs.observe(el));
}

/* =========================================================
   Inicialização
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  ativarBotoesWhatsApp();
  ativarMenuMobile();
  ativarScrollSuave();
  ativarMascaraTelefone();
  ativarFormulario();
  ativarRevelacao();
});
