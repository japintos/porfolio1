/**
 * Genera el CV en PDF en el cliente con html2pdf.js.
 * Los datos reflejan el contenido del portafolio (una sola fuente de mantenimiento aquí).
 */
(function () {
  'use strict';

  const HTML2PDF_CDN =
    'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  const CV_DATA = {
    name: 'Julio Pintos',
    photoSrc: 'Img/foto_Perfil.jpg',
    roles:
      'Senior Fullstack Developer · Socio Fundador & Tech Lead WebXpert · Solutions Architect',
    summary: [
      'Como Senior Fullstack Developer y Socio Fundador de WebXpert, combino 18+ años de experiencia técnica con visión empresarial. Me especializo en crear soluciones web robustas que aporten valor desde PyMEs hasta organizaciones más grandes.',
      'Mi enfoque es integral: entiendo las necesidades del negocio, trabajo en equipo y entrego proyectos de calidad con objetivos medibles. Elijo la tecnología adecuada priorizando simplicidad, mantenibilidad y resultados.',
    ],
    contact: {
      email: 'julioapintos1@gmail.com',
      phone: '+54 376 4724207',
      location: 'Posadas, Misiones, Argentina',
      portfolio: 'https://japintos.github.io/porfolio1/',
      linkedin: 'https://www.linkedin.com/in/julio-pintos-0638a8200/',
      github: 'https://github.com/japintos',
    },
    stats: [
      { label: 'Años de experiencia', value: '18+' },
      { label: 'Proyectos completados', value: '50+' },
      { label: 'WebXpert', value: '2025' },
    ],
    highlights: [
      {
        title: 'Desarrollo integral',
        text: 'Del diseño al deploy, asegurando que cada proyecto funcione correctamente.',
      },
      {
        title: 'Colaboración efectiva',
        text: 'Me adapto a equipos, comunico con claridad y busco la mejor solución en conjunto.',
      },
      {
        title: 'Enfoque práctico',
        text: 'Tecnologías adecuadas por proyecto: funcionalidad y mantenibilidad primero.',
      },
      {
        title: 'Aprendizaje continuo',
        text: 'Actualización constante (p. ej. Python, arquitecturas y buenas prácticas).',
      },
    ],
    experience: [
      {
        title: 'WebXpert — Socio Fundador & Tech Lead',
        date: 'Marzo 2025 – Actualidad',
        summary:
          'Agencia digital especializada en desarrollo web, optimización y estrategias digitales.',
        bullets: [
          'Liderazgo técnico y arquitectura de soluciones escalables: desde landings hasta e-commerce con APIs y pagos.',
          'Gestión de equipo y proyectos end-to-end: calidad de código, performance y UX.',
          'Estrategias de transformación digital para PyMEs; optimización de conversión y procesos.',
          'SEO técnico, Core Web Vitals y performance; tiempos de carga por debajo de 2 s en proyectos exigentes.',
        ],
        tags: ['Technical Leadership', 'Digital Strategy', 'Team Management', 'Performance'],
      },
      {
        title: 'Freelancer — Desarrollo y consultoría',
        date: '2006 – Actualidad',
        summary: 'Soluciones informáticas para empresas locales.',
        bullets: [
          'Análisis, diseño y desarrollo web y de escritorio, de requisitos a implementación.',
          'Bases de datos: diseño, implementación y optimización en PostgreSQL, SQL Server y MySQL.',
          'Auditoría de sistemas, vulnerabilidades, mejoras y optimización de rendimiento.',
        ],
        tags: ['Web Development', 'Database Design', 'System Audit'],
      },
      {
        title: 'Poder Judicial de Misiones — Soporte técnico e infraestructura',
        date: '2007 – Actualidad',
        summary: 'Soporte técnico, redes LAN/MAN y sistemas operativos.',
        bullets: [
          'Soporte integral a usuarios en hardware y software (Windows, Linux, macOS).',
          'Administración y monitoreo de redes LAN/MAN; conectividad y seguridad.',
          'Instalación, configuración y mantenimiento de sistemas operativos y aplicaciones.',
        ],
        tags: ['IT Support', 'Network Admin', 'System Maintenance'],
      },
    ],
    educationFormal: [
      {
        years: '1996 – 2000',
        institution: 'EPET Nº1 UNESCO',
        detail: 'Técnico en Informática — Título técnico secundario',
      },
      {
        years: '2000 – 2010',
        institution: 'Universidad Americana',
        detail: 'Ingeniería en Sistemas (incompleto)',
      },
      {
        years: '2024 – Actualidad',
        institution: 'Instituto Combate Mbororé',
        detail: 'Técnico Superior en Análisis de Sistemas — En curso',
      },
      {
        years: '2024',
        institution: 'Instituto Combate Mbororé',
        detail: 'Técnico en Redes informáticas, optimización y reparación de computadoras — Completado',
      },
      {
        years: '2024',
        institution: 'Instituto Combate Mbororé',
        detail: 'Operador en electrónica y robótica — Completado',
      },
    ],
    educationSantander: [
      { year: '2025', text: 'Ecommerce para PyMEs (IE University) — 6 h' },
      { year: '2025', text: 'Storytelling en marketing digital (UChicago) — 8 h' },
      { year: '2025', text: 'Python — 8 h (terminado sep. 2025)' },
      { year: '2025', text: 'Marca personal y networking profesional' },
      { year: '2025', text: 'Excel básico a intermedio — 8 h' },
      { year: '2025', text: 'Competencias en marketing digital (UChicago) — 8 h' },
      { year: '2026', text: 'Power BI — 8 h (terminado abr. 2026)' },
    ],
    skills: {
      Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      Backend: ['Node.js', 'Python', 'C++', 'C#', 'Visual Basic', '.NET Framework'],
      Bases_de_datos: ['PostgreSQL', 'SQL Server', 'MySQL', 'MariaDB'],
      Herramientas: [
        'VS Code',
        'Cursor IDE',
        'Visual Studio',
        'Git',
        'Windows',
        'Scrum',
        'DIA',
        'Canva',
      ],
      Sistemas_operativos: ['Windows', 'Linux (GNOME)', 'macOS'],
    },
  };

  function renderCvHtml() {
    const c = CV_DATA.contact;
    const contactLine = [
      esc(c.email),
      esc(c.phone),
      esc(c.location),
      `<a href="${esc(c.portfolio)}">${esc(c.portfolio)}</a>`,
      `LinkedIn: <a href="${esc(c.linkedin)}">perfil</a>`,
      `GitHub: <a href="${esc(c.github)}">japintos</a>`,
    ].join(' · ');

    let html = `<div class="cv-pdf-inner">`;

    html += `<header class="cv-header cv-keep">
      <div class="cv-photo-wrap">
        <img src="${esc(CV_DATA.photoSrc)}" alt="" width="112" height="112" />
      </div>
      <div class="cv-header-main">
        <h1 class="cv-name">${esc(CV_DATA.name)}</h1>
        <p class="cv-tagline">${esc(CV_DATA.roles)}</p>
        <div class="cv-contact-bar">${contactLine}</div>
      </div>
    </header>`;

    html += `<section class="cv-section cv-keep">
      <h2 class="cv-section-title">Perfil profesional</h2>`;
    CV_DATA.summary.forEach((p) => {
      html += `<p class="cv-summary">${esc(p)}</p>`;
    });
    html += `<div class="cv-stats">`;
    CV_DATA.stats.forEach((s) => {
      html += `<span class="cv-stat"><strong>${esc(s.value)}</strong> ${esc(s.label)}</span>`;
    });
    html += `</div>`;

    html += `<div class="cv-highlight-grid">`;
    CV_DATA.highlights.forEach((h) => {
      html += `<div class="cv-highlight cv-keep">
        <h4>${esc(h.title)}</h4>
        <p>${esc(h.text)}</p>
      </div>`;
    });
    html += `</div></section>`;

    html += `<section class="cv-section">
      <h2 class="cv-section-title">Experiencia laboral</h2>`;
    CV_DATA.experience.forEach((ex) => {
      html += `<article class="cv-exp-block cv-keep">
        <div class="cv-exp-head">
          <h3 class="cv-exp-title">${esc(ex.title)}</h3>
          <span class="cv-exp-date">${esc(ex.date)}</span>
        </div>
        <p class="cv-exp-summary">${esc(ex.summary)}</p>
        <ul class="cv-exp-list">`;
      ex.bullets.forEach((b) => {
        html += `<li>${esc(b)}</li>`;
      });
      html += `</ul><div class="cv-tags">`;
      ex.tags.forEach((t) => {
        html += `<span class="cv-tag">${esc(t)}</span>`;
      });
      html += `</div></article>`;
    });
    html += `</section>`;

    html += `<section class="cv-section cv-break-before">
      <h2 class="cv-section-title">Formación académica y cursos</h2>`;
    CV_DATA.educationFormal.forEach((ed) => {
      html += `<div class="cv-edu-block cv-keep">
        <div class="cv-edu-row">
          <span class="cv-edu-years">${esc(ed.years)}</span>
          <span class="cv-edu-inst">${esc(ed.institution)}</span>
        </div>
        <span class="cv-edu-meta">${esc(ed.detail)}</span>
      </div>`;
    });

    html += `<h3 class="cv-edu-group-title">Santander Open Academy</h3>`;
    CV_DATA.educationSantander.forEach((item) => {
      html += `<div class="cv-edu-bullet">${esc(item.year)} — ${esc(item.text)}</div>`;
    });
    html += `</section>`;

    html += `<section class="cv-section">
      <h2 class="cv-section-title">Habilidades y tecnologías</h2>`;
    Object.keys(CV_DATA.skills).forEach((key) => {
      const label = key.replace(/_/g, ' ');
      const list = CV_DATA.skills[key].join(', ');
      html += `<div class="cv-skills-block cv-keep">
        <span class="cv-skills-label">${esc(label)}:</span>
        <span class="cv-skills-text">${esc(list)}</span>
      </div>`;
    });
    html += `</section>`;

    const now = new Date();
    const dateStr = now.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    html += `<footer class="cv-footer">
      CV generado desde el portafolio · ${esc(dateStr)} ·
      <a href="${esc(c.portfolio)}">${esc(c.portfolio)}</a>
    </footer>`;

    html += `</div>`;
    return html;
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = resolve;
      s.onerror = () => reject(new Error('No se pudo cargar html2pdf.js'));
      document.head.appendChild(s);
    });
  }

  function preloadImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = src;
    });
  }

  async function ensureHtml2Pdf() {
    if (typeof html2pdf !== 'undefined') return;
    await loadScript(HTML2PDF_CDN);
    if (typeof html2pdf === 'undefined') {
      throw new Error('html2pdf no está disponible tras cargar el script');
    }
  }

  async function generatePdf() {
    const root = document.getElementById('cv-pdf-root');
    if (!root) return;

    root.innerHTML = renderCvHtml();
    root.setAttribute('aria-hidden', 'false');

    await preloadImage(CV_DATA.photoSrc);
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'CV-Julio-Pintos-Fullstack-Developer.pdf',
      image: { type: 'jpeg', quality: 0.92 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        letterRendering: true,
        logging: false,
        backgroundColor: '#ffffff',
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: {
        mode: ['avoid-all', 'css', 'legacy'],
        before: '.cv-break-before',
        avoid: ['.cv-keep', '.cv-exp-block', '.cv-edu-block', '.cv-highlight'],
      },
    };

    await html2pdf().set(opt).from(root).save();

    root.innerHTML = '';
    root.setAttribute('aria-hidden', 'true');
  }

  function init() {
    const btn = document.getElementById('cv-download-btn');
    if (!btn) return;

    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const label = btn.querySelector('span');
      const prev = label ? label.textContent : '';
      btn.disabled = true;
      if (label) label.textContent = 'Generando PDF…';
      try {
        await ensureHtml2Pdf();
        await generatePdf();
      } catch (err) {
        console.error(err);
        alert(
          'No se pudo generar el PDF. Comprueba tu conexión (se descarga una librería la primera vez) o inténtalo de nuevo.'
        );
      } finally {
        btn.disabled = false;
        if (label) label.textContent = prev || 'Descargar CV';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
