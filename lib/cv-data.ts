export interface CvContact {
  email: string;
  phone: string;
  location: string;
  portfolio: string;
  linkedin: string;
  github: string;
}

export interface CvHighlight {
  title: string;
  text: string;
}

export interface CvExperience {
  title: string;
  date: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface CvEducationFormal {
  years: string;
  institution: string;
  detail: string;
}

export interface CvEducationShort {
  year: string;
  text: string;
}

export interface CvData {
  name: string;
  photoPath: string;
  roles: string;
  summary: string[];
  contact: CvContact;
  stats: { label: string; value: string }[];
  highlights: CvHighlight[];
  experience: CvExperience[];
  educationFormal: CvEducationFormal[];
  educationSantander: CvEducationShort[];
  skills: Record<string, string[]>;
}

/** Fuente única para el PDF (react-pdf) y documentación; alinear con el contenido del portfolio. */
export const cvData: CvData = {
  name: 'Julio A. Pintos',
  photoPath: '/Img/foto_Perfil.jpg',
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
    Backend: ['Node.js', 'Python', 'PHP', 'C++', 'C#', 'Visual Basic', '.NET Framework'],
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
