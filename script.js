// SCRIPT.js
(function () {
	// ---- Textos por idioma (adicione/edite aqui) -----------------------------
	const profileTexts = {
		en: {
			greeting: "Hello, I'm",
			name: "Henrique A. Lopes",
			role: "Software Developer",
			location: "📍 Viçosa, MG – Brazil",
			summary:
				"I build web and mobile applications focused on performance and user experience. I enjoy software architecture, API integrations, and modern dev tooling, turning ideas into simple and useful products.",
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
				"Construo aplicações web e móveis focadas em desempenho e experiência do usuário. Gosto de arquitetura de software, integrações por APIs e ferramentas modernas de desenvolvimento, transformando ideias em produtos simples e úteis.",
			download: "Baixar CV",
			contact: "Contato",
			altLinkedIn: "Meu perfil no LinkedIn",
			altGithub: "Meu perfil no Github",
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
	const profileLocation = profileSection?.querySelector(".location"); // NOVO
	const profileSummary = profileSection?.querySelector(".summary"); // NOVO
	const btnDownload = profileSection?.querySelector(".btn.btn-color-2");
	const btnContact = profileSection?.querySelector(".btn.btn-color-1");
	const iconLinkedIn = profileSection?.querySelector(
		'#socials-container img[alt][src*="linkedin"]'
	);
	const iconGithub = profileSection?.querySelector(
		'#socials-container img[alt][src*="github"]'
	);

	function applyLangToProfile(lang) {
		const t = profileTexts[lang] || profileTexts.en;
		if (profileGreeting) profileGreeting.textContent = t.greeting;
		if (profileName) profileName.textContent = t.name;
		if (profileRole) profileRole.textContent = t.role;
		if (profileLocation) profileLocation.textContent = t.location; // NOVO
		if (profileSummary) profileSummary.textContent = t.summary; // NOVO
		if (btnDownload) btnDownload.textContent = t.download;
		if (btnContact) btnContact.textContent = t.contact;
		if (iconLinkedIn) iconLinkedIn.setAttribute("alt", t.altLinkedIn);
		if (iconGithub) iconGithub.setAttribute("alt", t.altGithub);
	}

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
		if (btnDownload) btnDownload.textContent = t.download;
		if (btnContact) btnContact.textContent = t.contact;
		if (iconLinkedIn) iconLinkedIn.setAttribute("alt", t.altLinkedIn);
		if (iconGithub) iconGithub.setAttribute("alt", t.altGithub);
	}

	function applyLang(lang) {
		document.documentElement.setAttribute(
			"lang",
			lang === "pt" ? "pt-BR" : "en"
		);

		applyLangToNav(lang);
		applyLangToProfile(lang);
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
	// idioma salvo (fallback: 'en')
	let saved = "en";
	try {
		saved = localStorage.getItem("site_lang") || "en";
	} catch {}

	setSwitch(saved);
	applyLang(saved);

	// registrar clique do switch
	if (switchBtn) {
		switchBtn.addEventListener("click", toggleLang);
		// também permite teclado (Enter/Espaço) se for um botão custom
		switchBtn.addEventListener("keydown", (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				toggleLang();
			}
		});
	}
})();
