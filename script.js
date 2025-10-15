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
					desc: "Focus on software development, Artificial Intelligence, and Data Science.",
				},
			],
		},
		pt: {
			title: "Educação",
			items: [
				{
					institution: "Universidade Federal de Viçosa (UFV)",
					meta: "Bacharelado em Ciência da Computação · 2021–2025",
					desc: "Ênfase em desenvolvimento de software, Inteligência Artificial e Ciência de Dados",
				},
			],
		},
	};

	const experienceTexts = {
		en: {
			title: "Professional Experience",
			items: [
				{
					time: "Sep 2025 – Present",
					role: "ABAP Developer/Consultant",
					meta: "Belo Horizonte/MG · Remote",
					points: [
						"Develop and maintain ABAP programs, reports, interfaces, and SAP customizations.",
					],
				},
				{
					time: "Feb 2025 – Jul 2025",
					role: "Intern — Legislative Assembly of Minas Gerais (ALMG)",
					meta: "Belo Horizonte/MG · Remote",
					points: [
						"Performed data analysis and automations using Python.",
						"Developed and applied HTML and CSS resources to improve and support digital media production.",
					],
				},
				{
					time: "Sep 2023 – Aug 2024",
					role: "Undergraduate Research (IC)",
					meta: "Viçosa/MG — UFV",
					points: [
						"Built Machine Learning solutions to optimize problems in architecture.",
						"Created a C# plugin for Rhinoceros as an architectural optimization solution.",
						"Optimized data generation with heuristic techniques.",
					],
				},
			],
		},
		pt: {
			title: "Experiência Profissional",
			items: [
				{
					time: "Set 2025 – Presente",
					role: "Desenvolvedor/Consultor ABAP",
					meta: "Belo Horizonte/MG · Remoto",
					points: [
						"Atuo no desenvolvimento e manutenção de programas ABAP, criação de relatórios, interfaces e customizações no SAP.",
					],
				},
				{
					time: "Fev 2025 – Jul 2025",
					role: "Estagiário — Assembleia Legislativa de Minas Gerais (ALMG)",
					meta: "Belo Horizonte/MG · Remoto",
					points: [
						"Realizei análises e automações de dados utilizando Python.",
						"Desenvolvi e apliquei recursos em HTML e CSS para aprimorar e apoiar a produção de mídias digitais.",
					],
				},
				{
					time: "Set 2023 – Ago 2024",
					role: "Iniciação Científica (IC)",
					meta: "Viçosa/MG — UFV",
					points: [
						"Desenvolvi, com técnicas de Machine Learning, soluções para a otimização de problemas em arquitetura.",
						"Criei um plugin em C# para o Rhinoceros como solução para a otimização arquitetônica.",
						"Otimizei geração de dados com técnicas heurísticas.",
					],
				},
			],
		},
	};

	const skillsTexts = {
		en: {
			levels: {
				advanced: "Advanced",
				intermediate: "Intermediate",
				basic: "Basic",
			},
			cards: [
				// Card 1: Languages
				["C/C++", "Python", "SQL", "Java", "JavaScript", "ABAP", "C#"],
				// Card 2: AI/ML
				[
					"Machine Learning",
					"Deep Learning",
					"Heuristics",
					"Computer Vision",
					"Data Analysis",
					"LLMs",
				],
				// Card 3: Frameworks & Libraries
				[
					"NumPy",
					"Pandas",
					"Scikit-learn",
					"TensorFlow",
					"PyTorch",
					"Android SDK",
					"React",
					"AWS",
				],
			],
		},
		pt: {
			levels: {
				advanced: "Avançado",
				intermediate: "Intermediário",
				basic: "Básico",
			},
			cards: [
				// Card 1: Linguagens
				["C/C++", "Python", "SQL", "Java", "JavaScript", "ABAP", "C#"],
				// Card 2: IA/ML
				[
					"Machine Learning",
					"Deep Learning",
					"Heurísticas",
					"Visão Computacional",
					"Análise de Dados",
					"LLMs",
				],
				// Card 3: Frameworks & Bibliotecas
				[
					"NumPy",
					"Pandas",
					"Scikit-learn",
					"TensorFlow",
					"PyTorch",
					"Android SDK",
					"React",
					"AWS",
				],
			],
		},
	};

	const projectsTexts = {
		en: {
			items: [
				{
					title: "Bridge Degradation Forecasting with AI",
					tags: [
						"Python",
						"PyTorch",
						"Artificial Intelligence",
						"Data Science",
						"GRU",
					],
					desc: "In my senior thesis with DNIT, I built an AI solution to forecast the degradation of bridges and overpasses. I tested MLP, TabNet, and GRU-based RNNs, with GRUs achieving the best results.",
					actions: ["View code"], // 1 botão
				},
				{
					title: "Computer Vision for Sign Languages",
					tags: ["Computer Vision", "PyTorch", "Fine-tuning", "Python"],
					desc: "I developed a real-time computer-vision model that translates LIBRAS symbols into Portuguese, using fine-tuning and pretrained models from Hugging Face to optimize accuracy and speed.",
					actions: ["View code", "View demo"], // 2 botões
				},
				{
					title: "Android CRM App: Efficiency for Education Institutions",
					tags: ["Mobile", "Android", "Java", "SQL"],
					desc: "Android app (with Rubeus) to address CRM challenges in education: track opportunities, manage activities, and view performance metrics with a practical workflow.",
					actions: ["View code", "View demo"],
				},
				{
					title: "Trem Expresso: Coffee E-commerce",
					tags: ["Web", "React", "Bootstrap 5", "Node.js", "Express", "SQLite"],
					desc: "Course project for Web Development: a simple, functional coffee store with product browsing, details, and a cart simulating a basic e-commerce flow.",
					actions: ["View code"],
				},
				{
					title: "An AI that Plays Mortal Kombat II – Genesis",
					tags: [
						"Computer Vision",
						"TensorFlow",
						"Reinforcement Learning",
						"CNN",
						"Python",
					],
					desc: "I built an AI agent that plays Mortal Kombat II on the Sega Genesis via computer vision and reinforcement learning. It learns only from frames and sends commands to the emulator.",
					actions: ["View code", "View demo"],
				},
				{
					title: "Computer Graphics in C++/OpenGL with Blender Airplane",
					tags: ["C++", "OpenGL", "Blender", "Engine"],
					desc: "I built a computer-graphics app in C++ using OpenGL and a 3D airplane model created in Blender. The project covers model import and rendering, 3D transformations, lighting and textures setup, plus camera and perspective control.",
					actions: ["View code", "View demo"],
				},
			],
		},
		pt: {
			items: [
				{
					title: "Previsão de Degradação em Pontes com IA",
					tags: [
						"Python",
						"PyTorch",
						"Inteligência Artificial",
						"Ciência de Dados",
						"GRU",
					],
					desc: "Em meu TCC com o DNIT, desenvolvi uma solução de IA para prever a degradação de pontes e viadutos. Testei MLP, TabNet e RNNs com GRU, sendo GRU a que obteve melhor desempenho.",
					actions: ["Ver código"],
				},
				{
					title: "Visão Computacional aplicada a Linguagens de Sinais",
					tags: ["Visão Computacional", "PyTorch", "Fine-tuning", "Python"],
					desc: "Rede de visão computacional que traduz, em tempo real, símbolos da LIBRAS para o português, usando fine-tuning e modelos pré-treinados da Hugging Face para precisão e velocidade.",
					actions: ["Ver código", "Ver demo"],
				},
				{
					title:
						"App de CRM para Android: Eficiência para Instituições de Ensino",
					tags: ["Mobile", "Android", "Java", "SQL"],
					desc: "Aplicativo Android (com a Rubeus) para desafios de CRM em educação: monitoramento de oportunidades, gestão de atividades e métricas de desempenho em um fluxo prático.",
					actions: ["Ver código", "Ver demo"],
				},
				{
					title: "Trem Expresso: Plataforma de E-commerce para Café",
					tags: ["Web", "React", "Bootstrap 5", "Node.js", "Express", "SQLite"],
					desc: "Projeto da disciplina de Desenvolvimento Web: loja de café com navegação de produtos, detalhes e carrinho simulando o fluxo básico de e-commerce.",
					actions: ["Ver código"],
				},
				{
					title: "Uma IA que joga Mortal Kombat II – Genesis",
					tags: [
						"Visão Computacional",
						"TensorFlow",
						"Aprendizado por Reforço",
						"CNN",
						"Python",
					],
					desc: "Agente de IA que joga Mortal Kombat II no Sega Genesis usando visão computacional e reforço. Aprende só pelos frames e envia comandos ao emulador.",
					actions: ["Ver código", "Ver demo"],
				},
				{
					title:
						"Projeto de Computação Gráfica em C++/OpenGL com Avião do Blender",
					tags: ["C++", "OpenGL", "Blender", "Engine"],
					desc: "Desenvolvi uma aplicação de computação gráfica em C++ com OpenGL e um avião 3D criado no Blender. Inclui importação e renderização do modelo, transformações 3D, configuração de iluminação e texturas, além de controle de câmera e perspectiva.",
					actions: ["Ver código", "Ver demo"],
				},
			],
		},
	};

	// ---- Elementos usados -----------------------------------------------------
	const switchBtn = document.getElementById("langSwitch");
	const navLinks = document.querySelectorAll(".nav-links li a");
	const langFlag = document.getElementById("langFlag");

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

	// ---- Elementos: Experiência
	const xpSection = document.getElementById("experience");
	const xpTitle = xpSection?.querySelector(".section-title");
	const xpRows = xpSection?.querySelectorAll(".timeline .timeline-row");

	// Seção projetos (root + cards) =====
	const projectsSection = document.getElementById("projects");
	const projectsTitle = projectsSection?.querySelector(".section-title");
	const projectCards = projectsSection?.querySelectorAll(".project-card");

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

		const item = e.items[0];
		if (item) {
			if (eduInstitution) eduInstitution.textContent = item.institution;
			if (eduMeta) eduMeta.textContent = item.meta;
			if (eduDesc) eduDesc.textContent = item.desc;
		}
	}

	// ---- Aplicar idioma na Experiência
	function applyLangToExperience(lang) {
		const x = experienceTexts[lang] || experienceTexts.en;
		if (xpTitle) xpTitle.textContent = x.title;

		if (!xpRows) return;
		xpRows.forEach((row, idx) => {
			const item = x.items[idx];
			if (!item) return;

			// Seletores dentro do row
			const timeBadge = row.querySelector(".time-badge");
			const roleEl = row.querySelector(".xp-role");
			const metaEl = row.querySelector(".xp-meta");
			const ulPoints = row.querySelector(".xp-points");

			if (timeBadge) timeBadge.textContent = item.time;
			if (roleEl) roleEl.textContent = item.role;
			if (metaEl) metaEl.textContent = item.meta;

			if (ulPoints && Array.isArray(item.points)) {
				// Zera e recria os <li> com o idioma escolhido
				ulPoints.innerHTML = "";
				item.points.forEach((p) => {
					const li = document.createElement("li");
					li.textContent = p;
					ulPoints.appendChild(li);
				});
			}
		});
	}

	function applyLangToSkills(lang) {
		const data = skillsTexts[lang] || skillsTexts.en;

		// Título da seção (já tem data-attrs no H2)
		const skillsSection =
			document.getElementById("Skills") ||
			document.querySelector("section#Skills");
		const skillsTitle = skillsSection?.querySelector(".section-title");
		if (skillsTitle) {
			const t = skillsTitle.dataset?.[lang];
			if (t) skillsTitle.textContent = t;
		}

		// Títulos dos cards
		const cards = skillsSection?.querySelectorAll(".skill-card");
		cards?.forEach((card, idx) => {
			const h3 = card.querySelector(".skill-card__title");
			if (h3?.dataset?.[lang]) h3.textContent = h3.dataset[lang];

			// Rótulos das tags
			const desiredLabels = data.cards[idx] || [];
			const tagEls = card.querySelectorAll(".tag");
			tagEls.forEach((tagEl, i) => {
				const labelEl = tagEl.querySelector(".label");
				if (labelEl && desiredLabels[i]) {
					labelEl.textContent = desiredLabels[i];
				}
				const levelEl = tagEl.querySelector(".level");
				if (levelEl) {
					const key = levelEl.dataset.key; // advanced|intermediate|basic
					if (key && data.levels[key]) {
						levelEl.textContent = data.levels[key];
					}
				}
			});
		});
	}

	// ===== aplicar idioma na seção Projetos =====
	function applyLangToProjects(lang) {
		// Título via data-attrs do próprio H2
		if (projectsTitle) {
			const txt = projectsTitle.dataset?.[lang];
			if (txt) projectsTitle.textContent = txt;
		}

		const data = projectsTexts[lang] || projectsTexts.en;
		if (!projectCards || !data?.items) return;

		projectCards.forEach((card, idx) => {
			const item = data.items[idx];
			if (!item) return;

			// Título
			const titleEl = card.querySelector(".project-title");
			if (titleEl && item.title) titleEl.textContent = item.title;

			// Tags
			const ul = card.querySelector(".tags");
			if (ul && Array.isArray(item.tags)) {
				ul.innerHTML = "";
				item.tags.forEach((t) => {
					const li = document.createElement("li");
					li.textContent = t;
					ul.appendChild(li);
				});
			}

			// Descrição
			const descEl = card.querySelector(".project-desc");
			if (descEl && item.desc) descEl.textContent = item.desc;

			// Botões (pega o 2º <span> de cada link — o de texto)
			const links = card.querySelectorAll(".card-actions .btn-link");
			links.forEach((a, i) => {
				const labelSpan = a.querySelector("span:last-child");
				if (labelSpan && item.actions?.[i]) {
					labelSpan.textContent = item.actions[i];
				}
			});
		});
	}

	function updateFlag(lang) {
		if (!langFlag) return;
		if (lang === "pt") {
			langFlag.src = "assets/Flag_of_Brazil.png";
			langFlag.alt = "Português";
		} else {
			langFlag.src = "assets/Flag_of_the_United_States.png";
			langFlag.alt = "English";
		}
	}

	function applyLang(lang) {
		document.documentElement.setAttribute(
			"lang",
			lang === "pt" ? "pt-BR" : "en"
		);
		applyLangToNav(lang);
		applyLangToProfile(lang);
		applyLangToEducation(lang);
		applyLangToExperience(lang);
		applyLangToProjects(lang);
		applyLangToSkills(lang);
		updateFlag(lang);
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
		updateFlag(lang);
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

(function () {
  const wrapper = document.querySelector(".projects-wrapper");
  const carousel = wrapper?.querySelector(".projects-carousel");
  const btnLeft = wrapper?.querySelector(".scroll-btn.left");
  const btnRight = wrapper?.querySelector(".scroll-btn.right");

  if (!wrapper || !carousel || !btnLeft || !btnRight) return;

  // Acessibilidade e comportamento básico
  carousel.setAttribute("role", "region");
  carousel.setAttribute("aria-label", "Carrossel de projetos");
  carousel.style.scrollBehavior = "smooth";

  // “Página” de rolagem por clique de seta
  const page = () => Math.max(wrapper.clientWidth * 0.9, 300);

  // Tolerância para bordas (px)
  const EPS = 2;
  const atStart = () => carousel.scrollLeft <= EPS;
  const atEnd = () =>
    (carousel.scrollWidth - carousel.clientWidth - carousel.scrollLeft) <= EPS;

  const updateButtons = () => {
    btnLeft.disabled = atStart();
    btnRight.disabled = atEnd();
    btnLeft.setAttribute("aria-disabled", String(btnLeft.disabled));
    btnRight.setAttribute("aria-disabled", String(btnRight.disabled));
  };

  const scrollByAmount = (amount) => {
    carousel.scrollBy({ left: amount, behavior: "smooth" });
    // feedback imediato (o listener de scroll vai refinar)
    requestAnimationFrame(updateButtons);
  };

  // Botões
  btnLeft.addEventListener("click", () => scrollByAmount(-page()));
  btnRight.addEventListener("click", () => scrollByAmount(page()));

  // Atualiza estado enquanto rola (inclui arrasto, teclado e wheel)
  const onScroll = () => requestAnimationFrame(updateButtons);
  carousel.addEventListener("scroll", onScroll, { passive: true });

  // Teclado dentro do carrossel
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByAmount(-page());
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByAmount(page());
    }
  });

  // Arrastar (mouse/touch)
  let dragging = false;
  let startX = 0;
  let startScroll = 0;

  const startDrag = (x) => {
    dragging = true;
    startX = x;
    startScroll = carousel.scrollLeft;
    carousel.classList.add("dragging");
  };
  const moveDrag = (x) => {
    if (!dragging) return;
    const dx = x - startX;
    carousel.scrollLeft = startScroll - dx;
    // durante o drag o listener de scroll já chama updateButtons
  };
  const endDrag = () => {
    dragging = false;
    carousel.classList.remove("dragging");
    updateButtons(); // garante estado correto ao soltar
  };

  carousel.addEventListener("mousedown", (e) => startDrag(e.clientX));
  window.addEventListener("mousemove", (e) => moveDrag(e.clientX));
  window.addEventListener("mouseup", endDrag);

  carousel.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientX), { passive: true });
  carousel.addEventListener("touchmove",  (e) => moveDrag(e.touches[0].clientX), { passive: true });
  carousel.addEventListener("touchend", endDrag);
  carousel.addEventListener("touchcancel", endDrag);

  // Evita clique em links enquanto arrasta
  carousel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", (e) => {
      if (carousel.classList.contains("dragging")) e.preventDefault();
    });
  });

  // Estado inicial + resize
  updateButtons();
  window.addEventListener("resize", updateButtons);
})();