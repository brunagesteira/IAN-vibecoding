const translations = {
  en: {
    navHome: "Home",
    navHow: "How it works",
    navWho: "Who belongs here",
    navRefer: "Refer someone",
    heroEyebrow: "Private Talent Network",
    heroTitle: "The network you can't apply to.",
    heroSubtitle:
      "IAN is a private referral network for exceptional tech talent. No open applications. No noise. Just reputation, timing and trust.",
    heroPrimary: "Submit a private referral",
    heroSecondary: "Learn how it works",
    heroMicrocopy: "Private access. Trusted referrals only.",
    heroTrust: "By invitation &middot; By reputation &middot; By trust",
    signalAria: "Private talent signal",
    signalKicker: "Private Talent Signal",
    signalTitle: "Referral-based access",
    signalItemOne: "Curated by reputation",
    signalItemTwo: "Built on trust",
    signalItemThree: "Trusted opportunities",
    howEyebrow: "Trusted referral",
    howTitle: "How it works",
    howSubtitle: "A private network only works when every signal is rooted in trust.",
    stepOneTitle: "Someone is remembered",
    stepOneText: "A trusted member refers a professional they genuinely believe in.",
    stepTwoTitle: "IAN reviews the referral signal",
    stepTwoText: "We look at reputation, context and fit - never open applications.",
    stepThreeTitle: "Opportunities find the right people",
    stepThreeText:
      "Selected profiles may be connected to private opportunities and trusted partners.",
    whoEyebrow: "Who belongs here",
    whoTitle: "IAN",
    whoText:
      "For those who have built something worth knowing. And want to be around people who think alike.",
    tagSenior: "Senior tech talent",
    tagBuilders: "High-potential builders",
    tagFounders: "Founders",
    tagOperators: "Operators",
    tagEngineers: "Engineers",
    tagProduct: "Product specialists",
    tagConnectors: "Trusted connectors",
    tagPartners: "Strategic partners",
    whyEyebrow: "Reputation over noise",
    whyTitle: "Why a private network?",
    whyMain:
      "The best opportunities rarely begin with a job post. They begin with memory, reputation and trust.",
    whySupport: "IAN exists for the people whose names come up before the search begins.",
    ctaEyebrow: "Private referral",
    ctaTitle: "Know someone who should be remembered?",
    ctaText: "Every referral is reviewed. Not every profile is accepted.",
    ctaButton: "Submit a private referral",
    footerNetwork: "Private Talent Acquisition Network",
    footerPrivacy: "Privacy",
    footerReferral: "Referral form",
  },
  pt: {
    navHome: "In&iacute;cio",
    navHow: "Como funciona",
    navWho: "Quem pertence",
    navRefer: "Indicar algu&eacute;m",
    heroEyebrow: "Rede Privada de Talentos",
    heroTitle: "A rede para a qual voc&ecirc; n&atilde;o se candidata.",
    heroSubtitle:
      "IAN &eacute; uma rede privada de indica&ccedil;&otilde;es para talentos excepcionais em tecnologia. Sem inscri&ccedil;&otilde;es abertas. Sem ru&iacute;do. Apenas reputa&ccedil;&atilde;o, momento e confian&ccedil;a.",
    heroPrimary: "Enviar indica&ccedil;&atilde;o privada",
    heroSecondary: "Entenda como funciona",
    heroMicrocopy: "Acesso privado. Apenas indica&ccedil;&otilde;es de confian&ccedil;a.",
    heroTrust: "Por convite &middot; Por reputa&ccedil;&atilde;o &middot; Por confian&ccedil;a",
    signalAria: "Sinal privado de talento",
    signalKicker: "Sinal Privado de Talento",
    signalTitle: "Acesso por indica&ccedil;&atilde;o",
    signalItemOne: "Curadoria por reputa&ccedil;&atilde;o",
    signalItemTwo: "Constru&iacute;do com confian&ccedil;a",
    signalItemThree: "Oportunidades confi&aacute;veis",
    howEyebrow: "Indica&ccedil;&atilde;o de confian&ccedil;a",
    howTitle: "Como funciona",
    howSubtitle: "Uma rede privada s&oacute; funciona quando todo sinal nasce da confian&ccedil;a.",
    stepOneTitle: "Algu&eacute;m &eacute; lembrado",
    stepOneText: "Um membro de confian&ccedil;a indica um profissional em quem realmente acredita.",
    stepTwoTitle: "A IAN revisa o sinal de indica&ccedil;&atilde;o",
    stepTwoText:
      "Observamos reputa&ccedil;&atilde;o, contexto e encaixe - n&atilde;o inscri&ccedil;&otilde;es abertas.",
    stepThreeTitle: "Oportunidades encontram as pessoas certas",
    stepThreeText:
      "Perfis selecionados podem ser conectados a oportunidades privadas e parceiros confi&aacute;veis.",
    whoEyebrow: "Quem pertence aqui",
    whoTitle: "IAN",
    whoText:
      "Para quem j&aacute; construiu algo que vale a pena conhecer. E quer estar perto de quem pensa igual.",
    tagSenior: "Talentos seniores em tecnologia",
    tagBuilders: "Builders de alto potencial",
    tagFounders: "Fundadores",
    tagOperators: "Operadores",
    tagEngineers: "Engenheiros",
    tagProduct: "Especialistas de produto",
    tagConnectors: "Conectores de confian&ccedil;a",
    tagPartners: "Parceiros estrat&eacute;gicos",
    whyEyebrow: "Reputa&ccedil;&atilde;o acima do ru&iacute;do",
    whyTitle: "Por que uma rede privada?",
    whyMain:
      "As melhores oportunidades raramente come&ccedil;am com uma vaga publicada. Elas come&ccedil;am com mem&oacute;ria, reputa&ccedil;&atilde;o e confian&ccedil;a.",
    whySupport: "IAN existe para as pessoas cujos nomes surgem antes da busca come&ccedil;ar.",
    ctaEyebrow: "Indica&ccedil;&atilde;o privada",
    ctaTitle: "Conhece algu&eacute;m que deveria ser lembrado?",
    ctaText: "Toda indica&ccedil;&atilde;o &eacute; revisada. Nem todo perfil &eacute; aceito.",
    ctaButton: "Enviar indica&ccedil;&atilde;o privada",
    footerNetwork: "Rede Privada de Aquisi&ccedil;&atilde;o de Talentos",
    footerPrivacy: "Privacidade",
    footerReferral: "Formul&aacute;rio de indica&ccedil;&atilde;o",
  },
};

const storageKey = "ianLatestReferral";

function decodeHtml(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    if (dictionary[key]) {
      element.setAttribute("aria-label", decodeHtml(dictionary[key]));
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
