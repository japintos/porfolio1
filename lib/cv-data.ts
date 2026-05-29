export interface CvContact {
  email: string;
  phone: string;
  location: string;
  portfolio: string;
  linkedin: string;
  github: string;
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

export interface CvCertification {
  year: string;
  title: string;
  issuer: string;
  area: string;
  hours?: string;
}

export interface CvSkillGroup {
  title: string;
  items: string[];
}

import { certifications as portfolioCertifications } from '@/components/portfolio/data';

/** Fuente única del CV imprimible (PDF). Alineado con el portfolio; sin proyectos. */
export const cvData = {
  name: 'Julio A. Pintos',
  photoPath: '/Img/foto_Perfil.jpg',
  logoPath: '/logo.jpg',
  headline: 'Senior Fullstack Developer',
  subtitle: 'Socio Fundador & Tech Lead · WebXpert',
  yearsExperience: '18+',
  totalCertifications: portfolioCertifications.length,
  contact: {
    email: 'julioapintos1@gmail.com',
    phone: '+54 376 4724207',
    location: 'Posadas, Misiones, Argentina',
    portfolio: 'https://www.webxpert.com.ar/japintos',
    linkedin: 'https://www.linkedin.com/in/julio-pintos-0638a8200/',
    github: 'https://github.com/japintos',
  } satisfies CvContact,
  availability: 'Remoto · híbrido · Posadas, Misiones',
  languages: [
    { label: 'Español', level: 'Nativo' },
    { label: 'Inglés', level: 'Técnico (lectura)' },
  ],
  profileSummary:
    'Senior Fullstack con 18+ años en desarrollo web, arquitectura y liderazgo técnico. Socio fundador de WebXpert (2025). Enfoque en productos escalables, performance, SEO técnico, datos e IA aplicada al negocio.',
  profileBullets: [
    'Desarrollo integral del análisis al deploy, con calidad en producción.',
    'Liderazgo técnico: arquitectura, equipos y decisiones alineadas al negocio.',
    'Datos e IA: Python, Power BI, spec-driven development y agentes autónomos.',
    'Formación continua en Agile, SEO, marketing digital y stack moderno.',
  ],
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
      context: 'Entorno institucional',
      bullets: [
        'Soporte técnico integral en Windows, Linux y macOS.',
        'Administré redes LAN/MAN; conectividad y seguridad operativa.',
        'Mantuve sistemas críticos en entorno de alta disponibilidad.',
      ],
    },
  ] satisfies CvExperience[],
  education: [
    {
      period: '2024 – 2026',
      title: 'Técnico Analista Programador',
      institution: 'Instituto Superior Combate Mbororé',
      status: 'Título oficial · Nivel II · Abr 2026',
    },
    {
      period: '2024 – Actualidad',
      title: 'Técnico Superior Analista de Sistemas de Computación',
      institution: 'Instituto Superior Combate Mbororé',
      status: 'En curso',
    },
    {
      period: '1996 – 2000',
      title: 'Técnico en Informática',
      institution: 'EPET N.º 1 UNESCO',
      status: 'Título secundario',
    },
    {
      period: '2000 – 2010',
      title: 'Ingeniería en Sistemas',
      institution: 'Universidad Americana',
      status: 'Incompleto',
    },
  ] satisfies CvEducation[],
  certifications: portfolioCertifications.map((cert) => ({
    year: cert.year,
    title: cert.title,
    issuer: cert.issuer,
    area: cert.area,
    hours: cert.hours,
  })) satisfies CvCertification[],
  skillGroups: [
    { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
    { title: 'Backend', items: ['Node.js', 'Python', 'PHP', 'C++', 'C#', '.NET'] },
    { title: 'Bases de datos', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MariaDB'] },
    { title: 'Herramientas', items: ['Git', 'VS Code', 'Cursor', 'Visual Studio', 'Scrum'] },
    { title: 'Sistemas', items: ['Windows', 'Linux', 'macOS'] },
  ] satisfies CvSkillGroup[],
};

export type CvData = typeof cvData;

/** Campos legacy para `CvPdfDocument.tsx`. */
export const cvDataLegacy = {
  ...cvData,
  roles: `${cvData.headline} · ${cvData.subtitle}`,
  summary: [cvData.profileSummary],
  stats: [
    { label: 'Años de experiencia', value: cvData.yearsExperience },
    { label: 'WebXpert', value: '2025' },
  ],
  highlights: cvData.profileBullets.map((text, i) => ({
    title: `Punto ${i + 1}`,
    text,
  })),
  strengths: cvData.profileBullets.map((text, i) => ({
    title: `Punto ${i + 1}`,
    text,
  })),
  profile: [cvData.profileSummary],
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
  educationSantander: cvData.certifications.map((c) => ({
    year: c.year,
    text: `${c.issuer} — ${c.title}${c.hours ? ` (${c.hours})` : ''}`,
  })),
  skills: Object.fromEntries(
    cvData.skillGroups.map((g) => [g.title.replace(/\s+/g, '_'), g.items]),
  ),
};
