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
}

export interface CvFeaturedCert {
  year: string;
  title: string;
  issuer: string;
  hours?: string;
}

export interface CvCertGroup {
  theme: string;
  items: string[];
}

export interface CvSkillGroup {
  title: string;
  items: string[];
}

/** Fuente única del CV imprimible (PDF). Alineado con el portfolio; sin proyectos. */
export const cvData = {
  name: 'Julio A. Pintos',
  photoPath: '/Img/foto_Perfil.jpg',
  logoPath: '/logo.jpg',
  headline: 'Senior Fullstack Developer · Socio Fundador & Tech Lead',
  subtitle: 'WebXpert · Arquitectura de soluciones y delivery end-to-end',
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
    'Disponible para roles de liderazgo técnico, consultoría y proyectos freelance (remoto / híbrido / Posadas).',
  languages: [
    { label: 'Español', level: 'Nativo' },
    { label: 'Inglés', level: 'Técnico — lectura de documentación y recursos' },
  ],
  profile: [
    'Senior Fullstack con más de 18 años en desarrollo web, arquitectura de soluciones y liderazgo técnico. Socio fundador de WebXpert (2025), con foco en productos digitales escalables, performance, SEO técnico y transformación digital.',
    'Combino ejecución hands-on con visión de negocio: relevamiento, diseño, implementación y despliegue con criterio de simplicidad, mantenibilidad y resultados medibles.',
  ],
  strengths: [
    {
      title: 'Desarrollo integral',
      text: 'Del análisis al deploy, con calidad en producción y foco en mantenibilidad.',
    },
    {
      title: 'Liderazgo técnico',
      text: 'Arquitectura, equipos, code review y decisiones alineadas a objetivos de negocio.',
    },
    {
      title: 'Enfoque práctico',
      text: 'Tecnología adecuada por contexto, sin sobreingeniería innecesaria.',
    },
    {
      title: 'Formación continua',
      text: 'Python, Agile, Power BI, IA aplicada, SEO y buenas prácticas de desarrollo.',
    },
  ] satisfies CvStrength[],
  experience: [
    {
      role: 'Socio Fundador & Tech Lead',
      organization: 'WebXpert',
      period: 'Mar 2025 – Actualidad',
      context: 'Agencia digital · Posadas, Misiones',
      bullets: [
        'Liderazgo técnico de proyectos web y e-commerce: landings, APIs e integraciones de pago.',
        'Gestión de entregas end-to-end: calidad de código, UX y performance.',
        'Transformación digital para PyMEs; optimización de conversión y procesos.',
        'SEO técnico y Core Web Vitals; tiempos de carga por debajo de 2 s en entornos exigentes.',
      ],
    },
    {
      role: 'Desarrollo y consultoría independiente',
      organization: 'Freelance',
      period: '2006 – Actualidad',
      context: 'Remoto / Posadas, Misiones',
      bullets: [
        'Análisis, diseño e implementación de soluciones web y de escritorio para empresas locales.',
        'Modelado y optimización de bases de datos (PostgreSQL, SQL Server, MySQL).',
        'Auditoría de sistemas, detección de vulnerabilidades y mejoras de rendimiento.',
      ],
    },
    {
      role: 'Infraestructura, redes y sistemas',
      organization: 'Poder Judicial de Misiones',
      period: '2007 – Actualidad',
      context: 'Entorno institucional · continuidad operativa',
      bullets: [
        'Soporte técnico integral en Windows, Linux y macOS.',
        'Administración y monitoreo de redes LAN/MAN; conectividad y seguridad operativa.',
        'Instalación, configuración y mantenimiento de sistemas y aplicaciones críticas.',
      ],
    },
  ] satisfies CvExperience[],
  education: [
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
      period: '2024 – Actualidad',
      title: 'Técnico Superior en Análisis de Sistemas',
      institution: 'Instituto Combate Mbororé',
      status: 'En curso',
    },
    {
      period: '2024',
      title: 'Técnico en redes, optimización y reparación de equipos',
      institution: 'Instituto Combate Mbororé',
      status: 'Completado',
    },
    {
      period: '2024',
      title: 'Operador en electrónica y robótica',
      institution: 'Instituto Combate Mbororé',
      status: 'Completado',
    },
  ] satisfies CvEducation[],
  featuredCertifications: [
    { year: '2025', title: 'Python', issuer: 'Santander Open Academy', hours: '8 h' },
    {
      year: '2025',
      title: 'Gestión de Proyectos y metodología Agile',
      issuer: 'Santander Open Academy',
      hours: '8 h',
    },
    {
      year: '2026',
      title: 'Gestión efectiva de proyectos y equipos',
      issuer: 'Santander Open Academy',
      hours: '8 h',
    },
    {
      year: '2026',
      title: 'Iniciación al Desarrollo con IA',
      issuer: 'BIG school',
      hours: '6 h',
    },
    { year: '2026', title: 'Power BI', issuer: 'Santander Open Academy', hours: '8 h' },
    {
      year: '2026',
      title: 'Power BI Intermedio: análisis y modelado',
      issuer: 'Santander Open Academy',
      hours: '8 h',
    },
    {
      year: '2025',
      title: 'SEO y Content Marketing',
      issuer: 'Santander Open Academy',
      hours: '8 h',
    },
    { year: '2026', title: 'SEO para IA y Google', issuer: 'BIG school', hours: '6 h' },
  ] satisfies CvFeaturedCert[],
  certificationGroups: [
    {
      theme: 'Desarrollo, datos e IA',
      items: [
        'Python (2025, 8 h) · Power BI (2026, 8 h) · Power BI Intermedio (2026, 8 h)',
        'Iniciación al Desarrollo con IA — BIG school (2026, 6 h)',
        'Prompting responsable: IA en el negocio (2026, 8 h)',
        'Excel básico a intermedio (2025, 8 h)',
      ],
    },
    {
      theme: 'Gestión, Agile y liderazgo',
      items: [
        'Gestión de Proyectos y metodología Agile (2025, 8 h)',
        'Gestión efectiva de proyectos y equipos (2026, 8 h)',
      ],
    },
    {
      theme: 'SEO, marketing digital y e-commerce',
      items: [
        'SEO y Content Marketing (2025, 8 h) · SEO para IA y Google — BIG school (2026, 6 h)',
        'Ecommerce para PyMEs — IE University (2025, 6 h)',
        'Competencias en marketing digital — UChicago (2025, 8 h)',
        'Storytelling en marketing digital — UChicago (2025, 8 h)',
      ],
    },
    {
      theme: 'Marca personal y networking',
      items: [
        'Marca personal y networking profesional (2025)',
        'Marca personal 360: de profesional anónimo a referente visible (2025, 8 h)',
      ],
    },
  ] satisfies CvCertGroup[],
  skillGroups: [
    {
      title: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Python', 'PHP', 'C++', 'C#', 'Visual Basic', '.NET Framework'],
    },
    {
      title: 'Bases de datos',
      items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MariaDB'],
    },
    {
      title: 'Herramientas y metodologías',
      items: [
        'Git',
        'VS Code',
        'Cursor IDE',
        'Visual Studio',
        'Scrum',
        'DIA',
        'Canva',
      ],
    },
    {
      title: 'Sistemas operativos',
      items: ['Windows', 'Linux (GNOME)', 'macOS'],
    },
  ] satisfies CvSkillGroup[],
  footerNote:
    'Portfolio con certificados verificables y detalle de trayectoria disponible bajo solicitud.',
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
  educationSantander: cvData.certificationGroups.flatMap((g) =>
    g.items.map((text) => ({ year: '2025–2026', text: `${g.theme}: ${text}` })),
  ),
  skills: Object.fromEntries(
    cvData.skillGroups.map((g) => [g.title.replace(/\s+/g, '_'), g.items]),
  ),
};
