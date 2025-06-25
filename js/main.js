// =========================
// MENÚ HAMBURGUESA
// =========================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('open');
});
// Cerrar menú al hacer click fuera o en un enlace
navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// =========================
// SCROLL SUAVE PARA ANCLAS
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =========================
// BOTÓN SCROLL TOP
// =========================
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =========================
// ANIMACIONES DE ENTRADA (AOS-like)
// =========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('[data-aos]').forEach(el => {
  observer.observe(el);
});

// =========================
// COPIAR EMAIL AL PORTAPAPELES
// =========================
document.querySelectorAll('.btn-copy').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = btn.getAttribute('data-copy');
    navigator.clipboard.writeText(email).then(() => {
      btn.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-copy"></i>';
      }, 1500);
    });
  });
});

// =========================
// DARK MODE HOOK (sin toggle UI)
// =========================
// Puedes activar dark mode con: document.body.classList.add('dark-mode');
// O quitarlo con: document.body.classList.remove('dark-mode');

// =========================
// DARK MODE TOGGLE BUTTON
// =========================
// ... existing code ... 