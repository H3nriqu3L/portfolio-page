(function () {
  const switchBtn = document.getElementById('langSwitch');
  const navLinks  = document.querySelectorAll('.nav-links li a');

  // aplica o idioma nos textos dos links
  function applyLang(lang) {
    navLinks.forEach(a => {
      const text = a.dataset[lang]; 
      if (text) a.textContent = text;
    });
  }

  function setSwitch(lang) {
    switchBtn.dataset.lang = lang;
    switchBtn.setAttribute('aria-checked', String(lang === 'pt'));
  }

  // carrega idioma salvo
  const saved = localStorage.getItem('site_lang') || 'en';
  setSwitch(saved);
  applyLang(saved);

  // alterna no clique
  function toggleLang() {
    const next = switchBtn.dataset.lang === 'en' ? 'pt' : 'en';
    setSwitch(next);
    applyLang(next);
    localStorage.setItem('site_lang', next);
  }

  switchBtn.addEventListener('click', toggleLang);

})();
