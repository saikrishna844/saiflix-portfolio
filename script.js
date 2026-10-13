(() => {
  const intro = document.getElementById('intro');
  const finishIntro = () => intro && intro.classList.add('done');
  window.addEventListener('load', () => setTimeout(finishIntro, 850));
  setTimeout(finishIntro, 2200);
  document.getElementById('year').textContent = new Date().getFullYear();

  const revealTargets = document.querySelectorAll(
    '.section-heading, .featured-project, .project-card, .skill-cell, .experience-panel, .cert-card, .contact-section > *'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('visible'));
  }

  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle(
            'active', link.getAttribute('href') === `#${entry.target.id}`
          ));
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(section => navObserver.observe(section));
  }
})();

// Blog catalogue: client-side topic filters and search, no backend required.
(() => {
  const grid = document.getElementById('blogGrid');
  const search = document.getElementById('blogSearch');
  const empty = document.getElementById('blogEmpty');
  const filters = Array.from(document.querySelectorAll('.blog-filter'));
  if (!grid || !search) return;
  let active = 'all';
  const cards = Array.from(grid.querySelectorAll('.blog-card'));
  const apply = () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const topics = (card.dataset.topics || '').split(/\s+/);
      const matchesTopic = active === 'all' || topics.includes(active);
      const matchesText = !q || card.textContent.toLowerCase().includes(q);
      const visible = matchesTopic && matchesText;
      card.hidden = !visible;
      if (visible) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  };
  filters.forEach(button => button.addEventListener('click', () => {
    active = button.dataset.filter || 'all';
    filters.forEach(item => item.classList.toggle('active', item === button));
    apply();
  }));
  search.addEventListener('input', apply);
})();
