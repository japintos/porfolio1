'use client';

import Image from 'next/image';
import type { CSSProperties, FormEvent } from 'react';
import { useMemo, useState } from 'react';
import {
  certifications,
  experiences,
  highlights,
  metrics,
  navItems,
  projects,
  skillGroups,
  type Project,
} from './data';
import styles from './PortfolioExperience.module.css';

type Theme = 'dark' | 'light';

const whatsappNumber = '543764724207';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export default function PortfolioExperience() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filters = useMemo(
    () => ['Todos', ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'Todos') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  function handleWhatsAppSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) return;

    const text = [
      'Hola Julio, quiero conversar sobre un proyecto.',
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Mensaje: ${message}`,
    ].join('\n');

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    event.currentTarget.reset();
  }

  return (
    <div className={cx(styles.page, theme === 'light' && styles.pageLight)}>
      <div className={styles.noise} aria-hidden="true" />
      <header className={styles.header}>
        <a className={styles.brand} href="#presentacion" onClick={() => setIsMenuOpen(false)}>
          <span className={styles.brandMark}>JP</span>
          <span>
            <strong>Julio A. Pintos</strong>
            <small>Fullstack Developer & Tech Lead</small>
          </span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={cx(styles.nav, isMenuOpen && styles.navOpen)} aria-label="Menu principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.themeToggle}
          type="button"
          onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
          aria-label="Cambiar tema visual"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </header>

      <main>
        <section className={cx(styles.section, styles.hero)} id="presentacion">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Disponible para proyectos seleccionados</p>
            <h1>
              Desarrollo experiencias digitales con mirada de negocio, arquitectura y detalle visual.
            </h1>
            <p className={styles.heroLead}>
              Soy Senior Fullstack Developer, Socio Fundador y Tech Lead de WebXpert. Ayudo a
              empresas y emprendedores a convertir ideas en productos web rapidos, claros y
              preparados para crecer.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#contacto">
                Agendar una consulta
              </a>
              <a className={styles.secondaryAction} href="/api/cv">
                Descargar CV
              </a>
              <a className={styles.textAction} href="#proyectos">
                Ver proyectos
              </a>
            </div>
          </div>

          <div className={styles.heroVisual} aria-label="Resumen profesional de Julio A. Pintos">
            <div className={styles.profileCard}>
              <div className={styles.profileImageWrap}>
                <Image
                  src="/Img/foto_Perfil.jpg"
                  alt="Foto de perfil de Julio A. Pintos"
                  width={320}
                  height={320}
                  priority
                  className={styles.profileImage}
                />
              </div>
              <div>
                <span className={styles.availability}>Open to collaborate</span>
                <h2>Tech Lead con foco en delivery real</h2>
                <p>
                  Combino experiencia tecnica, criterio comercial y ejecucion para construir sitios
                  que generen confianza desde el primer scroll.
                </p>
              </div>
            </div>
            <div className={styles.metricGrid}>
              {metrics.map((metric) => (
                <div className={styles.metricCard} key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="perfil">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Perfil profesional</p>
            <h2>Una marca personal pensada como producto digital.</h2>
            <p>
              La pagina no tiene que parecer un CV pegado en internet. Tiene que contar una historia
              clara: quien sos, que resolviste, como trabajas y por que conviene contactarte.
            </p>
          </div>
          <div className={styles.highlightGrid}>
            {highlights.map((highlight) => (
              <article className={styles.highlightCard} key={highlight.title}>
                <span>{highlight.eyebrow}</span>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="experiencia">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Experiencia</p>
            <h2>Trayectoria tecnica con contexto operativo y comercial.</h2>
          </div>
          <div className={styles.timeline}>
            {experiences.map((experience) => (
              <article className={styles.experienceCard} key={experience.role}>
                <div className={styles.experienceMeta}>
                  <span>{experience.period}</span>
                  <strong>{experience.organization}</strong>
                </div>
                <div className={styles.experienceBody}>
                  <h3>{experience.role}</h3>
                  <p>{experience.summary}</p>
                  <ul>
                    {experience.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.tagList}>
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="habilidades">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Stack y criterio</p>
            <h2>Herramientas agrupadas por el problema que ayudan a resolver.</h2>
          </div>
          <div className={styles.skillsGrid}>
            {skillGroups.map((group) => (
              <article className={styles.skillCard} key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className={styles.skillList}>
                  {group.skills.map((skill) => (
                    <div className={styles.skillItem} key={skill.name}>
                      <div>
                        <span>{skill.name}</span>
                        <small>{skill.level}%</small>
                      </div>
                      <span
                        className={styles.skillBar}
                        style={{ '--level': `${skill.level}%` } as CSSProperties}
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="proyectos">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Case studies</p>
            <h2>Proyectos presentados por desafio, solucion y resultado.</h2>
          </div>

          <div className={styles.filterBar} aria-label="Filtrar proyectos por categoria">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={cx(activeFilter === filter && styles.filterActive)}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className={styles.projectsGrid}>
            {visibleProjects.map((project) => (
              <article
                className={cx(styles.projectCard, project.featured && styles.projectFeatured)}
                key={project.id}
              >
                <button
                  type="button"
                  className={styles.projectPreview}
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Ver detalles de ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`Captura o imagen representativa de ${project.title}`}
                    width={900}
                    height={560}
                    className={styles.projectImage}
                  />
                  <span>{project.category}</span>
                </button>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p>{project.challenge}</p>
                  <div className={styles.tagList}>
                    {project.stack.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.projectActions}>
                    <button type="button" onClick={() => setSelectedProject(project)}>
                      Detalles
                    </button>
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      Ver online
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="certificaciones">
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Formacion continua</p>
            <h2>Aprendizaje reciente alineado a producto, datos, SEO e IA.</h2>
          </div>
          <div className={styles.certGrid}>
            {certifications.map((certification) => (
              <article className={styles.certCard} key={`${certification.year}-${certification.title}`}>
                <span>{certification.year}</span>
                <h3>{certification.title}</h3>
                <strong>{certification.issuer}</strong>
                <p>{certification.focus}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={cx(styles.section, styles.contactSection)} id="contacto">
          <div className={styles.contactCopy}>
            <p className={styles.kicker}>Contacto</p>
            <h2>Si hay una idea, la bajamos a una solucion concreta.</h2>
            <p>
              Contame que necesitás construir, mejorar o vender. Te respondo con una mirada tecnica
              y una proxima accion clara.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:julioapintos1@gmail.com">julioapintos1@gmail.com</a>
              <a href="https://www.linkedin.com/in/julio-pintos-0638a8200/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/japintos" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleWhatsAppSubmit}>
            <label>
              Nombre
              <input name="name" type="text" placeholder="Tu nombre" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="tu@email.com" required />
            </label>
            <label>
              Mensaje
              <textarea name="message" placeholder="Contame brevemente que necesitas" required />
            </label>
            <button type="submit">Enviar por WhatsApp</button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Julio A. Pintos</span>
        <span>Senior Fullstack Developer | WebXpert</span>
        <a href="#presentacion">Volver arriba</a>
      </footer>

      {selectedProject ? (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <article className={styles.modal}>
            <button
              className={styles.modalClose}
              type="button"
              aria-label="Cerrar detalle de proyecto"
              onClick={() => setSelectedProject(null)}
            >
              x
            </button>
            <Image
              src={selectedProject.image}
              alt={`Imagen de ${selectedProject.title}`}
              width={900}
              height={560}
              className={styles.modalImage}
            />
            <div className={styles.modalContent}>
              <span>{selectedProject.category}</span>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <dl>
                <div>
                  <dt>Desafio</dt>
                  <dd>{selectedProject.challenge}</dd>
                </div>
                <div>
                  <dt>Solucion</dt>
                  <dd>{selectedProject.solution}</dd>
                </div>
                <div>
                  <dt>Resultado</dt>
                  <dd>{selectedProject.result}</dd>
                </div>
              </dl>
              <div className={styles.tagList}>
                {selectedProject.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className={styles.primaryAction} href={selectedProject.href} target="_blank" rel="noopener noreferrer">
                Abrir proyecto
              </a>
            </div>
          </article>
        </div>
      ) : null}
    </div>
  );
}
