(function () {
  // ---- Textos por idioma ----------------------------------------------------
  const profileTexts = {
    en: {
      greeting: "Hello, I'm",
      name: "Henrique A. Lopes",
      role: "Software Developer",
      location: "📍 Viçosa, MG – Brazil",
      summary:
        "I am a recent Computer Science graduate from UFV, specializing in software development and artificial intelligence. I have experience in web and mobile development and currently work as an ERP/SAP developer at SEIDOR. I have participated in AI projects involving computer vision, predictive regression, and data science. My goal is to combine these skills to create intelligent and efficient solutions for real-world challenges.",
      download: "Download CV",
      contact: "Contact",
      altLinkedIn: "My LinkedIn profile",
      altGithub: "My Github profile",
    },
    pt: {
      greeting: "Olá, eu sou",
      name: "Henrique A. Lopes",
      role: "Desenvolvedor de Software",
      location: "📍 Viçosa, MG – Brasil",
      summary:
        "Sou recém-graduado em Ciência da Computação pela UFV, com foco em desenvolvimento de software e inteligência artificial. Tenho experiência em desenvolvimento web e mobile e atuo como desenvolvedor ERP/SAP na SEIDOR. Participei de projetos de IA envolvendo visão computacional, regressão preditiva e data science. Busco unir essas habilidades para criar soluções inteligentes e eficientes para desafios reais.",
      download: "Baixar CV",
      contact: "Contato",
      altLinkedIn: "Meu perfil no LinkedIn",
      altGithub: "Meu perfil no Github",
    },
  };

  // Seção Educação
  const educationTexts = {
    en: {
      title: "Education",
      items: [
        {
          institution: "Federal University of Viçosa (UFV)",
          meta: "B.Sc. in Computer Science · 2021–2025",
          desc:
            "Focus on software development, Artificial Intelligence, and Data Science.",
        },
      ],
    },
    pt: {
      title: "Educação",
      items: [
        {
          institution: "Universidade Federal de Viçosa (UFV)",
          meta: "Bacharelado em Ciência da Computação · 2021–2025",
          desc:
            "Ênfase em desenvolvimento de software, Inteligência Artificial e Ciência de Dados",
        },
      ],
    },
  };

  // ---- Elementos usados -----------------------------------------------------
  const switchBtn = document.getElementById("langSwitch");
  const navLinks = document.querySelectorAll(".nav-links li a");

  // Seção profile
  const profileSection =
    document.getElementById("profile") ||
    document.querySelector("section#profile");
  const profileGreeting = profileSection?.querySelector(".section__text__p1");
  const profileName = profileSection?.querySelector(".title");
  const profileRole = profileSection?.querySelector(".section__text__p2");
  const profileLocation = profileSection?.querySelector(".location");
  const profileSummary = profileSection?.querySelector(".summary");
  const btnDownload = profileSection?.querySelector(".btn.btn-color-2");
  const btnContact = profileSection?.querySelector(".btn.btn-color-1");
  const iconLinkedIn = profileSection?.querySelector(
    '#socials-container img[alt][src*="linkedin"]'
  );
  const iconGithub = profileSection?.querySelector(
    '#socials-container img[alt][src*="github"]'
  );

  // Seção educação
  const eduSection = document.querySelector(".education");
  const eduTitle = eduSection?.querySelector("h2");
  const eduItem = eduSection?.querySelector(".edu-item");
  const eduInstitution = eduItem?.querySelector("h4");
  const eduMeta = eduItem?.querySelector(".edu-meta");
  // pega o <p> de descrição que não é o .edu-meta
  const eduDesc = eduItem?.querySelector("p:not(.edu-meta)");

  // ---- Funções auxiliares ---------------------------------------------------
  function applyLangToNav(lang) {
    navLinks.forEach((a) => {
      const text = a.dataset?.[lang];
      if (text) a.textContent = text;
    });
  }

  function applyLangToProfile(lang) {
    const t = profileTexts[lang] || profileTexts.en;
    if (profileGreeting) profileGreeting.textContent = t.greeting;
    if (profileName) profileName.textContent = t.name;
    if (profileRole) profileRole.textContent = t.role;
    if (profileLocation) profileLocation.textContent = t.location;
    if (profileSummary) profileSummary.textContent = t.summary;
    if (btnDownload) btnDownload.textContent = t.download;
    if (btnContact) btnContact.textContent = t.contact;
    if (iconLinkedIn) iconLinkedIn.setAttribute("alt", t.altLinkedIn);
    if (iconGithub) iconGithub.setAttribute("alt", t.altGithub);
  }

  function applyLangToEducation(lang) {
    const e = educationTexts[lang] || educationTexts.en;
    if (eduTitle) eduTitle.textContent = e.title;

    // se tiver mais, iteraria sobre .edu-item e e.items
    const item = e.items[0];
    if (item) {
      if (eduInstitution) eduInstitution.textContent = item.institution;
      if (eduMeta) eduMeta.textContent = item.meta;
      if (eduDesc) eduDesc.textContent = item.desc;
    }
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    applyLangToNav(lang);
    applyLangToProfile(lang);
    applyLangToEducation(lang); // <<< importante
  }

  function setSwitch(lang) {
    if (!switchBtn) return;
    switchBtn.dataset.lang = lang;
    switchBtn.setAttribute("aria-checked", String(lang === "pt"));
    switchBtn.setAttribute(
      "aria-label",
      lang === "pt"
        ? "Alternador de idioma: Português"
        : "Language switch: English"
    );
  }

  function toggleLang() {
    const current = switchBtn?.dataset.lang || "en";
    const next = current === "en" ? "pt" : "en";
    setSwitch(next);
    applyLang(next);
    try {
      localStorage.setItem("site_lang", next);
    } catch {}
  }

  // ---- Bootstrapping --------------------------------------------------------
  let saved = "en";
  try {
    saved = localStorage.getItem("site_lang") || "en";
  } catch {}

  setSwitch(saved);
  applyLang(saved);

  if (switchBtn) {
    switchBtn.addEventListener("click", toggleLang);
    switchBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleLang();
      }
    });
  }
})();
