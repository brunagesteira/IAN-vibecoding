const translations = {
  en: {
    navHome: "Home",
    navHow: "How it works",
    navWho: "Who belongs here",
    navRefer: "Refer someone",
    heroEyebrow: "Web Summit Rio &middot; 2026",
    heroTitle: "The network you can't apply to.",
    heroSubtitle:
      "IAN is a private referral network for exceptional tech talent. No open applications. No noise. Just reputation, timing and trust.",
    heroPrimary: "Submit a private referral",
    heroSecondary: "Learn how it works",
    heroMicrocopy: "For Web Summit Rio 2026 connections only.",
    heroTrust: "By invitation &middot; By reputation &middot; By trust",
    howEyebrow: "Private signal",
    howTitle: "How it works",
    howSubtitle: "A private network only works when every signal comes from trust.",
    stepOneTitle: "Someone is remembered",
    stepOneText: "A trusted member refers a professional they genuinely believe in.",
    stepTwoTitle: "IAN reviews the signal",
    stepTwoText: "We look at reputation, context and fit - not open applications.",
    stepThreeTitle: "Opportunities find the right people",
    stepThreeText:
      "Selected profiles may be connected to private opportunities and trusted partners.",
    whoEyebrow: "Who belongs here",
    whoTitle: "Who belongs here",
    whoText:
      "For builders, operators, engineers, founders and specialists whose work speaks before they do.",
    whyEyebrow: "Signal over noise",
    whyTitle: "Why private",
    whyMain:
      "The best opportunities rarely start with a job post. They start with memory, reputation and trust.",
    whySupport: "IAN exists for the people whose names come up before the search begins.",
    ctaEyebrow: "Private referral",
    ctaTitle: "Know someone who should be remembered?",
    ctaText: "Every referral is reviewed. Not every profile is accepted.",
    ctaButton: "Submit a private referral",
  },
  pt: {
    navHome: "In&iacute;cio",
    navHow: "Como funciona",
    navWho: "Quem pertence",
    navRefer: "Indicar algu&eacute;m",
    heroEyebrow: "Web Summit Rio &middot; 2026",
    heroTitle: "A rede para a qual voc&ecirc; n&atilde;o se candidata.",
    heroSubtitle:
      "IAN &eacute; uma rede privada de indica&ccedil;&otilde;es para talentos excepcionais em tecnologia. Sem inscri&ccedil;&otilde;es abertas. Sem ru&iacute;do. Apenas reputa&ccedil;&atilde;o, momento e confian&ccedil;a.",
    heroPrimary: "Enviar indica&ccedil;&atilde;o privada",
    heroSecondary: "Entenda como funciona",
    heroMicrocopy: "Apenas para conex&otilde;es do Web Summit Rio 2026.",
    heroTrust: "Por convite &middot; Por reputa&ccedil;&atilde;o &middot; Por confian&ccedil;a",
    howEyebrow: "Indicação privada",
    howTitle: "Como funciona",
    howSubtitle: "Uma rede privada s&oacute; funciona quando toda indicação vem de confian&ccedil;a.",
    stepOneTitle: "Algu&eacute;m &eacute; lembrado",
    stepOneText: "Um membro de confian&ccedil;a indica um profissional em quem realmente acredita.",
    stepTwoTitle: "A IAN revisa a indicação",
    stepTwoText: "Observamos reputa&ccedil;&atilde;o, contexto e encaixe - n&atilde;o inscri&ccedil;&otilde;es abertas.",
    stepThreeTitle: "Oportunidades encontram as pessoas certas",
    stepThreeText:
      "Perfis selecionados podem ser conectados a oportunidades privadas e parceiros confi&aacute;veis.",
    whoEyebrow: "Para quem já chegou em algum lugar. E quer estar perto de quem está indo mais longe.",
    whoTitle: "Para quem já chegou em algum lugar. E quer estar perto de quem está indo mais longe.",
    whoText:
      "Para builders, operadores, engenheiros, fundadores e especialistas cujo trabalho fala antes deles.",
    whyEyebrow: "Indicação acima do ru&iacute;do",
    whyTitle: "Por que privada",
    whyMain:
      "As melhores oportunidades raramente come&ccedil;am com uma vaga publicada. Elas come&ccedil;am com mem&oacute;ria, reputa&ccedil;&atilde;o e confian&ccedil;a.",
    whySupport: "IAN existe para as pessoas cujos nomes surgem antes da busca come&ccedil;ar.",
    ctaEyebrow: "Indica&ccedil;&atilde;o privada",
    ctaTitle: "Conhece algu&eacute;m que deveria ser lembrado?",
    ctaText: "Toda indica&ccedil;&atilde;o &eacute; revisada. Nem todo perfil &eacute; aceito.",
    ctaButton: "Enviar indica&ccedil;&atilde;o privada",
  },
};

const storageKey = "ianLatestReferral";

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === language);
  });

  localStorage.setItem("ianLanguage", language);
}

function initLanguageSwitcher() {
  const languageButtons = document.querySelectorAll("[data-language]");
  if (!languageButtons.length) return;

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  setLanguage(localStorage.getItem("ianLanguage") || "en");
}

function getFieldLabel(field) {
  const label = document.querySelector(`label[for="${field.id}"]`);
  if (!label) return field.name;
  return label.textContent.replace("*", "").trim();
}

function markField(field, hasError) {
  field.classList.toggle("field-error", hasError);
  field.setAttribute("aria-invalid", hasError ? "true" : "false");
}

function initReferralForm() {
  const form = document.getElementById("referral-form");
  if (!form) return;

  const status = document.getElementById("form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const requiredFields = Array.from(form.querySelectorAll("[data-required]"));
    const missingFields = [];

    requiredFields.forEach((field) => {
      const isCheckbox = field.type === "checkbox";
      const isMissing = isCheckbox ? !field.checked : !field.value.trim();
      markField(field, isMissing);
      if (isMissing) missingFields.push(getFieldLabel(field));
    });

    if (missingFields.length) {
      status.textContent = `Please complete: ${missingFields.join(", ")}.`;
      status.className = "form-status is-visible is-error";
      requiredFields.find((field) => field.classList.contains("field-error"))?.focus();
      return;
    }

    const formData = new FormData(form);
    const referral = {
      yourName: formData.get("yourName") || "",
      yourEmail: formData.get("yourEmail") || "",
      yourCompany: formData.get("yourCompany") || "",
      relationship: formData.get("relationship") || "",
      referralName: formData.get("referralName") || "",
      referralEmail: formData.get("referralEmail") || "",
      referralLinkedin: formData.get("referralLinkedin") || "",
      currentCompany: formData.get("currentCompany") || "",
      currentRole: formData.get("currentRole") || "",
      location: formData.get("location") || "",
      referralReason: formData.get("referralReason") || "",
      submittedAt: new Date().toISOString(),
    };

    // Demo-only persistence: replace this with a real endpoint in production.
    localStorage.setItem(storageKey, JSON.stringify(referral));
    status.textContent = "Referral saved for this demo. Redirecting...";
    status.className = "form-status is-visible";

    window.setTimeout(() => {
      window.location.href = "thank-you.html";
    }, 450);
  });
}

function initReferralSummary() {
  const summary = document.getElementById("referral-summary");
  if (!summary) return;

  const rawReferral = localStorage.getItem(storageKey);
  if (!rawReferral) return;

  try {
    const referral = JSON.parse(rawReferral);
    const fields = {
      "summary-name": referral.referralName,
      "summary-linkedin": referral.referralLinkedin,
      "summary-company": referral.currentCompany,
      "summary-role": referral.currentRole,
    };

    Object.entries(fields).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value || "Not provided";
    });

    summary.hidden = false;
  } catch (error) {
    localStorage.removeItem(storageKey);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initReferralForm();
  initReferralSummary();
});
