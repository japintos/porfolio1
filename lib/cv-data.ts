export interface CvContact {
  email: string;
  phone: string;
  location: string;
  portfolio: string;
  linkedin: string;
  github: string;
}

export interface CvStrength {
  title: string;
  text: string;
}

export interface CvExperience {
  role: string;
  organization: string;
  period: string;
  context?: string;
  bullets: string[];
}

export interface CvEducation {
  period: string;
  title: string;
  institution: string;
  status: string;
  credentialUrl?: string;
}

export interface CvSkillGroup {
  title: string;
  items: string[];
}

export interface CvApaCitation {
  year: string;
  text: string;
}

/** Fuente única del CV imprimible (PDF). Alineado con el portfolio; sin proyectos. */
export const cvData = {
  name: 'Julio A. Pintos',
  photoPath: '/Img/foto_Perfil.jpg',
  logoPath: '/logo.jpg',
  headline: 'Senior Fullstack Developer',
  subtitle: 'Socio Fundador & Tech Lead · WebXpert',
  yearsExperience: '18+',
  contact: {
    email: 'julioapintos1@gmail.com',
    phone: '+54 376 4724207',
    location: 'Posadas, Misiones, Argentina',
    portfolio: 'https://www.webxpert.com.ar/japintos',
    linkedin: 'https://www.linkedin.com/in/julio-pintos-0638a8200/',
    github: 'https://github.com/japintos',
  } satisfies CvContact,
  availability:
    'Disponible para liderazgo técnico, desarrollo, datos, IA aplicada y consultoría (remoto / híbrido / Posadas).',
  languages: [
    { label: 'Español', level: 'Nativo' },
    { label: 'Inglés', level: 'Técnico — lectura de documentación' },
  ],
  profile: [
    'Senior Fullstack con 18+ años en desarrollo web, arquitectura de soluciones y liderazgo técnico. Socio fundador de WebXpert (2025). Enfoque en productos digitales escalables, performance, SEO técnico, datos e IA aplicada al negocio.',
    'Combino ejecución hands-on y visión de negocio: relevamiento, diseño, implementación y despliegue con simplicidad, mantenibilidad y resultados medibles.',
  ],
  strengths: [
    {
      title: 'Desarrollo integral',
      text: 'Del análisis al deploy, con calidad en producción y mantenibilidad.',
    },
    {
      title: 'Liderazgo técnico',
      text: 'Arquitectura, equipos y decisiones alineadas a objetivos de negocio.',
    },
    {
      title: 'Datos e IA aplicada',
      text: 'Python, Power BI, spec-driven development y agentes autónomos en contexto real.',
    },
    {
      title: 'Formación continua',
      text: 'Agile, SEO, marketing digital y actualización constante en stack moderno.',
    },
  ] satisfies CvStrength[],
  experience: [
    {
      role: 'Socio Fundador & Tech Lead',
      organization: 'WebXpert',
      period: 'Mar 2025 – Actualidad',
      context: 'Agencia digital · Posadas, Misiones',
      bullets: [
        'Lideré arquitectura y delivery de proyectos web y e-commerce (landings, APIs, pagos).',
        'Gestioné entregas end-to-end priorizando calidad de código, UX y performance.',
        'Impulsé transformación digital en PyMEs con foco en conversión y procesos.',
        'Optimicé SEO técnico y Core Web Vitals; cargas por debajo de 2 s en sitios exigentes.',
      ],
    },
    {
      role: 'Desarrollo y consultoría independiente',
      organization: 'Freelance',
      period: '2006 – Actualidad',
      context: 'Remoto / Posadas, Misiones',
      bullets: [
        'Diseñé e implementé soluciones web y de escritorio para empresas locales.',
        'Modelé y optimicé bases de datos en PostgreSQL, SQL Server y MySQL.',
        'Audité sistemas, detecté vulnerabilidades y mejoré rendimiento operativo.',
      ],
    },
    {
      role: 'Infraestructura, redes y sistemas',
      organization: 'Poder Judicial de Misiones',
      period: '2007 – Actualidad',
      context: 'Entorno institucional · continuidad operativa',
      bullets: [
        'Brindé soporte técnico integral en Windows, Linux y macOS.',
        'Administré redes LAN/MAN con foco en conectividad y seguridad operativa.',
        'Mantuve sistemas y aplicaciones críticas en entorno de alta disponibilidad.',
      ],
    },
  ] satisfies CvExperience[],
  education: [
    {
      period: '2024 – 2026',
      title: 'Técnico Analista Programador',
      institution: 'Instituto Superior Combate Mbororé',
      status: 'Título oficial · Nivel II · 1.424 h · Abr 2026',
    },
    {
      period: '2024 – Actualidad',
      title: 'Técnico Superior Analista de Sistemas de Computación',
      institution: 'Instituto Superior Combate Mbororé',
      status: 'En curso · titulación final',
    },
    {
      period: '1996 – 2000',
      title: 'Técnico en Informática',
      institution: 'EPET N.º 1 UNESCO',
      status: 'Título técnico secundario',
    },
    {
      period: '2000 – 2010',
      title: 'Ingeniería en Sistemas',
      institution: 'Universidad Americana',
      status: 'Incompleto',
    },
    {
      period: '2024',
      title: 'Redes, electrónica y robótica (complementaria)',
      institution: 'Instituto Combate Mbororé',
      status: 'Técnico en redes y operador en electrónica y robótica — Completado',
    },
  ] satisfies CvEducation[],
  /** Citas breves estilo APA para formación continua (sangría francesa en PDF). */
  apaCertifications: [
    {
      year: '2026',
      text: 'Silicon Misiones. (2026). Workshop IA: Spec-Driven Development y Agentes Autónomos [Taller híbrido].',
    },
    {
      year: '2026',
      text: 'BIG school. (2026). SEO para IA y Google [Curso en línea, 6 h].',
    },
    {
      year: '2026',
      text: 'Santander Open Academy. (2026). Power BI Intermedio: análisis y modelado de datos [Curso en línea, 8 h].',
    },
    {
      year: '2026',
      text: 'Santander Open Academy. (2026). Power BI [Curso en línea, 8 h].',
    },
    {
      year: '2026',
      text: 'BIG school. (2026). Iniciación al Desarrollo con IA [Curso en línea, 6 h].',
    },
    {
      year: '2026',
      text: 'Santander Open Academy. (2026). Prompting responsable: maximiza la IA en tu negocio [Curso en línea, 8 h].',
    },
    {
      year: '2026',
      text: 'Santander Open Academy. (2026). Gestión efectiva de proyectos y equipos [Curso en línea, 8 h].',
    },
    {
      year: '2025',
      text: 'Santander Open Academy. (2025). Gestión de Proyectos y metodología Agile [Curso en línea, 8 h].',
    },
    {
      year: '2025',
      text: 'Santander Open Academy & University of Chicago. (2025). Competencias en marketing digital [Curso en línea, 8 h].',
    },
    {
      year: '2025',
      text: 'Santander Open Academy. (2025). Excel básico a intermedio [Curso en línea, 8 h].',
    },
    {
      year: '2025',
      text: 'Santander Open Academy. (2025). Marca personal 360 [Curso en línea, 8 h].',
    },
    {
      year: '2025',
      text: 'Santander Open Academy. (2025). Marca personal y networking profesional [Curso en línea].',
    },
    {
      year: '2025',
      text: 'Santander Open Academy. (2025). Python [Curso en línea, 8 h].',
    },
    {
      year: '2025',
      text: 'Santander Open Academy & University of Chicago. (2025). Storytelling en marketing digital [Curso en línea, 8 h].',
    },
    {
      year: '2025',
      text: 'Santander Open Academy & IE University. (2025). Ecommerce para PyMEs [Curso en línea, 6 h].',
    },
    {
      year: '2025',
      text: 'Santander Open Academy. (2025). SEO y Content Marketing [Curso en línea, 8 h].',
    },
  ] satisfies CvApaCitation[],
  skillGroups: [
    {
      title: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Python', 'PHP', 'C++', 'C#', '.NET'],
    },
    {
      title: 'Bases de datos',
      items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MariaDB'],
    },
    {
      title: 'Herramientas y metodologías',
      items: ['Git', 'VS Code', 'Cursor', 'Visual Studio', 'Scrum'],
    },
    {
      title: 'Sistemas operativos',
      items: ['Windows', 'Linux', 'macOS'],
    },
  ] satisfies CvSkillGroup[],
  footerNote:
    'Certificados verificables y trayectoria ampliada disponibles en portfolio bajo solicitud.',
};

export type CvData = typeof cvData;

/** Campos legacy para `CvPdfDocument.tsx` (no usar en producción; ver `CvPrintDocument`). */
export const cvDataLegacy = {
  ...cvData,
  roles: `${cvData.headline} · ${cvData.subtitle}`,
  summary: cvData.profile,
  stats: [
    { label: 'Años de experiencia', value: cvData.yearsExperience },
    { label: 'WebXpert', value: '2025' },
  ],
  highlights: cvData.strengths.map((s) => ({ title: s.title, text: s.text })),
  experience: cvData.experience.map((ex) => ({
    title: `${ex.organization} — ${ex.role}`,
    date: ex.period,
    summary: ex.context ?? '',
    bullets: ex.bullets,
    tags: [] as string[],
  })),
  educationFormal: cvData.education.map((ed) => ({
    years: ed.period,
    institution: ed.institution,
    detail: `${ed.title} — ${ed.status}`,
  })),
  educationSantander: cvData.apaCertifications.map((c) => ({
    year: c.year,
    text: c.text,
  })),
  skills: Object.fromEntries(
    cvData.skillGroups.map((g) => [g.title.replace(/\s+/g, '_'), g.items]),
  ),
};
