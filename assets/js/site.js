(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gate = document.querySelector('#cinematic-gate');
  const enter = document.querySelector('.gate-enter');
  const reveals = [...document.querySelectorAll('.reveal')];

  if (gate && enter) {
    document.body.classList.add('gate-open');
    enter.addEventListener('click', () => {
      document.body.classList.remove('gate-open');
      gate.classList.add('is-entered');
      if (!reduceMotion) setTimeout(() => document.querySelector('#main')?.focus?.({preventScroll:true}), 820);
    });
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: .12, rootMargin: '0px 0px -6% 0px'});
    reveals.forEach(el => observer.observe(el));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.site-header nav a')];
  if ('IntersectionObserver' in window && navLinks.length) {
    const navObserver = new IntersectionObserver(entries => {
      const active = entries.find(e => e.isIntersecting);
      if (!active) return;
      navLinks.forEach(link => link.toggleAttribute('aria-current', link.getAttribute('href') === `#${active.target.id}`));
    }, {rootMargin:'-35% 0px -55% 0px'});
    sections.forEach(section => navObserver.observe(section));
  }
})();
