export type NavItem = {
  href: string;
  label: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Highlight = {
  eyebrow: string;
  title: string;
  description: string;
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  summary: string;
  impact: string[];
  tags: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number;
  }[];
};

export type Education = {
  period: string;
  institution: string;
  title: string;
  status: string;
  credentialUrl?: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
  featured?: boolean;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
};

export type Certification = {
  year: string;
  title: string;
  issuer: string;
  focus: string;
  area: string;
  completedAt: string;
  hours?: string;
  modules?: string;
  serial?: string;
  credentialUrl?: string;
};

export const navItems: NavItem[] = [
  { href: '#presentacion', label: 'Inicio' },
  { href: '#perfil', label: 'Perfil' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#educacion', label: 'Educación' },
  { href: '#certificaciones', label: 'Certificaciones' },
  { href: '#habilidades', label: 'Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

export const metrics: Metric[] = [
  { value: '18+', label: 'años de experiencia técnica' },
  { value: '50+', label: 'proyectos completados' },
  { value: '2025', label: 'fundación de WebXpert' },
  { value: '3', label: 'frentes: arquitectura, liderazgo y delivery' },
];

export const highlights: Highlight[] = [
  {
    eyebrow: 'Desarrollo integral',
    title: 'Del diseño al deploy',
    description:
      'Trabajo desde el análisis y el diseño hasta la implementación, cuidando que cada proyecto funcione correctamente en producción.',
  },
  {
    eyebrow: 'Colaboración efectiva',
    title: 'Comunicación clara y trabajo en equipo',
    description:
      'Me adapto a equipos, comunico con claridad y busco la mejor solución en conjunto, alineando tecnología con objetivos reales.',
  },
  {
    eyebrow: 'Enfoque práctico',
    title: 'Tecnología adecuada para cada contexto',
    description:
      'Priorizo simplicidad, mantenibilidad y resultados. La mejor solución es la que resuelve el problema sin complejidad innecesaria.',
  },
  {
    eyebrow: 'Aprendizaje continuo',
    title: 'Actualización constante',
    description:
      'Mantengo una formación activa en Python, SEO, ecommerce, gestión de proyectos, Power BI, IA y buenas prácticas de desarrollo.',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Socio Fundador & Tech Lead',
    organization: 'WebXpert',
    period: '2025 - Actualidad',
    summary:
      'Agencia digital especializada en desarrollo web, optimización y estrategias digitales para empresas.',
    impact: [
      'Liderazgo técnico y arquitectura de soluciones escalables, desde landings hasta e-commerce con APIs y pagos.',
      'Gestión de equipo y proyectos end-to-end, cuidando calidad de código, performance y experiencia de usuario.',
      'Estrategias de transformación digital para PyMEs, optimización de conversión y mejora de procesos.',
      'SEO técnico, Core Web Vitals y performance, con tiempos de carga por debajo de 2 segundos en proyectos exigentes.',
    ],
    tags: ['Technical Leadership', 'Digital Strategy', 'Team Management', 'Performance'],
  },
  {
    role: 'Desarrollo y consultoría',
    organization: 'Freelancer',
    period: '2006 - Actualidad',
    summary:
      'Soluciones informáticas para empresas locales, con foco en desarrollo web, sistemas administrativos y consultoría técnica.',
    impact: [
      'Análisis, diseño y desarrollo web y de escritorio, desde relevamiento de requisitos hasta implementación.',
      'Diseño, implementación y optimización de bases de datos en PostgreSQL, SQL Server y MySQL.',
      'Auditoría de sistemas, detección de vulnerabilidades, mejoras y optimización de rendimiento.',
    ],
    tags: ['Web Development', 'Database Design', 'System Audit'],
  },
  {
    role: 'Soporte técnico e infraestructura',
    organization: 'Poder Judicial de Misiones',
    period: '2007 - Actualidad',
    summary:
      'Soporte técnico, redes LAN/MAN y sistemas operativos en un entorno institucional de alta continuidad operativa.',
    impact: [
      'Soporte integral a usuarios en hardware y software en entornos Windows, Linux y macOS.',
      'Administración y monitoreo de redes LAN/MAN, conectividad y seguridad.',
      'Instalación, configuración y mantenimiento de sistemas operativos y aplicaciones.',
    ],
    tags: ['IT Support', 'Network Admin', 'System Maintenance'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Construcción de interfaces web responsivas, claras y orientadas a experiencia de usuario.',
    skills: [
      { name: 'HTML5', level: 94 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 82 },
    ],
  },
  {
    title: 'Backend',
    description: 'Lenguajes, plataformas y criterio fullstack para resolver lógica de negocio.',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Python', level: 72 },
      { name: 'PHP', level: 80 },
      { name: 'C++ / C# / Visual Basic', level: 70 },
      { name: '.NET Framework', level: 70 },
    ],
  },
  {
    title: 'Bases de datos',
    description: 'Diseño, implementación y optimización de bases relacionales.',
    skills: [
      { name: 'PostgreSQL', level: 84 },
      { name: 'SQL Server', level: 78 },
      { name: 'MySQL', level: 84 },
      { name: 'MariaDB', level: 80 },
    ],
  },
  {
    title: 'Herramientas y sistemas',
    description: 'Entornos de trabajo, control de versiones, metodologías y sistemas operativos.',
    skills: [
      { name: 'VS Code / Cursor IDE / Visual Studio', level: 88 },
      { name: 'Git / GitHub', level: 86 },
      { name: 'Scrum', level: 76 },
      { name: 'Windows / Linux GNOME / macOS', level: 84 },
      { name: 'DIA / Canva', level: 72 },
    ],
  },
];

export const education: Education[] = [
  {
    period: '1996 - 2000',
    institution: 'EPET N.º 1 UNESCO',
    title: 'Técnico en Informática',
    status: 'Título técnico secundario',
  },
  {
    period: '2000 - 2010',
    institution: 'Universidad Americana',
    title: 'Ingeniería en Sistemas',
    status: 'Incompleto',
  },
  {
    period: '2024 - 2026',
    institution: 'Instituto Superior Combate Mbororé',
    title: 'Técnico Analista Programador',
    status:
      'Título oficial · Formación Profesional Nivel II · 1.424 h · Res. SPEPM 1.362/23 · Abr 2026',
    credentialUrl: '/certificados/tecnico-analista-programador-combate-mbore.pdf',
  },
  {
    period: '2024 - Actualidad',
    institution: 'Instituto Superior Combate Mbororé',
    title: 'Técnico Superior Analista de Sistemas de Computación',
    status: 'En curso · titulación final del trayecto formativo',
  },
  {
    period: '2024',
    institution: 'Instituto Combate Mbororé',
    title: 'Técnico en redes informáticas, optimización y reparación de computadoras',
    status: 'Completado',
  },
  {
    period: '2024',
    institution: 'Instituto Combate Mbororé',
    title: 'Operador en electrónica y robótica',
    status: 'Completado',
  },
];

export const projects: Project[] = [
  {
    id: 'carrito-webxpert',
    title: 'Carrito de Compras WebXpert',
    category: 'E-commerce',
    image: '/Img/carrito de compras.jpg',
    href: 'https://carritocompraswebxpert.vercel.app/catalogo',
    featured: true,
    challenge:
      'Crear una experiencia de compra clara y rápida para que el usuario llegue al producto correcto sin fricción.',
    solution:
      'SPA con catálogo interactivo, filtros, interfaz mobile-first y un flujo de checkout pensado para conversión.',
    result:
      'Carga percibida liviana, navegación simple y una base preparada para evolucionar hacia integraciones comerciales.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS3', 'API REST'],
  },
  {
    id: 'webxpert-landing',
    title: 'Landing WebXpert',
    category: 'Marca',
    image: '/Img/proyecto2.jpg',
    href: 'https://www.webxpert.com.ar',
    challenge:
      'Presentar una agencia nueva con credibilidad inmediata y una propuesta comercial entendible.',
    solution:
      'Landing responsive, estructura comercial directa, narrativa de servicios y optimización SEO técnica.',
    result:
      'Mayor claridad para potenciales clientes y una presencia digital alineada al posicionamiento de la marca.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
  },
  {
    id: 'oudin-duarte',
    title: 'Oudin, Duarte & Asociados',
    category: 'Institucional',
    image: '/Img/oudin.jpg',
    href: 'https://japintos.github.io/estudioOudin/',
    challenge:
      'Modernizar la presencia digital de un estudio jurídico sin perder sobriedad ni confianza profesional.',
    solution:
      'Sitio institucional accesible, responsive, con contenidos ordenados y llamados de contacto claros.',
    result:
      'Mejor percepción de marca, más claridad en servicios y acceso directo a canales de consulta.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Accesibilidad'],
  },
  {
    id: 'concesionario-web',
    title: 'Concesionario Web',
    category: 'Catalogo',
    image: '/Img/web-consecionario.jpg',
    href: 'https://concesionarioweb.vercel.app/',
    challenge:
      'Mostrar vehiculos de forma atractiva y facilitar la exploracion desde dispositivos moviles.',
    solution:
      'Catalogo visual con cards, filtros, detalles y contacto directo para reducir pasos innecesarios.',
    result:
      'Experiencia más simple para comparar opciones y aumentar la intención de consulta.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
  },
  {
    id: 'devxpert-runner',
    title: 'DevXpert Runner',
    category: 'Experiencia',
    image: '/Img/foto_Perfil.jpg',
    href: '/devrunner.html',
    challenge:
      'Sumar un detalle memorable al portfolio sin distraer del objetivo profesional.',
    solution:
      'Minijuego runner en HTML, CSS y JavaScript puro inspirado en el universo dev.',
    result:
      'Un punto de diferenciación que muestra creatividad, lógica e interacción liviana.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Game loop'],
  },
];

export const certifications: Certification[] = [
  {
    year: '2026',
    title: 'SEO para IA y Google',
    issuer: 'BIG school',
    area: 'SEO + IA',
    completedAt: '3 de mayo de 2026',
    hours: '6 h',
    focus: 'Visibilidad orgánica moderna, posicionamiento en Google y búsquedas asistidas por IA.',
    credentialUrl: '/certificados/seo-ia-google-big-school.pdf',
  },
  {
    year: '2026',
    title: 'Power BI Intermedio: análisis y modelado de datos',
    issuer: 'Santander Open Academy',
    area: 'Datos',
    completedAt: '22 de abril de 2026',
    hours: '8 h',
    modules: '2 módulos',
    serial: 'OA-2026-0422002515907',
    focus: 'Análisis, modelado de datos y visualización ejecutiva para toma de decisiones.',
    credentialUrl: '/certificados/power-bi-intermedio-santander.pdf',
  },
  {
    year: '2026',
    title: 'Power BI',
    issuer: 'Santander Open Academy',
    area: 'Datos',
    completedAt: '14 de abril de 2026',
    hours: '8 h',
    modules: '2 módulos',
    serial: 'OA-2026-0414002479164',
    focus: 'Fundamentos de análisis, visualización de datos y construcción de reportes.',
    credentialUrl: '/certificados/power-bi-santander.pdf',
  },
  {
    year: '2026',
    title: 'Iniciación al Desarrollo con IA',
    issuer: 'BIG school',
    area: 'IA + Desarrollo',
    completedAt: '13 de marzo de 2026',
    hours: '6 h',
    focus: 'Desarrollo asistido por inteligencia artificial y uso práctico de IA en flujos técnicos.',
    credentialUrl: '/certificados/iniciacion-desarrollo-ia-big-school.pdf',
  },
  {
    year: '2026',
    title: 'Prompting responsable: maximiza la IA en tu negocio',
    issuer: 'Santander Open Academy',
    area: 'IA + Negocio',
    completedAt: '9 de abril de 2026',
    hours: '8 h',
    modules: '2 módulos',
    serial: 'OA-2026-0409002459496',
    focus: 'Uso práctico y responsable de IA generativa para productividad, negocio y comunicación.',
    credentialUrl: '/certificados/prompting-responsable-santander.pdf',
  },
  {
    year: '2026',
    title: 'Gestion Efectiva de proyectos y equipos',
    issuer: 'Santander Open Academy',
    area: 'Gestion + Liderazgo',
    completedAt: '10 de marzo de 2026',
    hours: '8 h',
    modules: '2 módulos',
    serial: 'OA-2026-0310002341766',
    focus: 'Liderazgo, coordinación de equipos, ejecución y gestión efectiva de proyectos.',
    credentialUrl: '/certificados/gestion-efectiva-proyectos-equipos-santander.pdf',
  },
  {
    year: '2025',
    title: 'Gestión de Proyectos y Fundamentos de metodología Agile',
    issuer: 'Santander Open Academy',
    area: 'Agile + Delivery',
    completedAt: '22 de diciembre de 2025',
    hours: '8 h',
    modules: '2 módulos',
    serial: 'OA-2025-1222002103734',
    focus: 'Organización de equipos, entregables, metodología Agile y mejora continua.',
    credentialUrl: '/certificados/gestion-proyectos-agile-santander.pdf',
  },
  {
    year: '2025',
    title: 'Competencias en marketing digital',
    issuer: 'Santander Open Academy / The University of Chicago',
    area: 'Marketing digital',
    completedAt: '2025',
    hours: '8 h',
    focus: 'SEO, SEM, email marketing, redes sociales y estrategia digital aplicada a negocio.',
  },
  {
    year: '2025',
    title: 'Excel básico a intermedio',
    issuer: 'Santander Open Academy',
    area: 'Datos + Productividad',
    completedAt: '2025',
    hours: '8 h',
    focus: 'Formulación, tablas dinámicas y análisis de datos para tareas operativas y reportes.',
  },
  {
    year: '2025',
    title: 'Marca personal 360',
    issuer: 'Santander Open Academy',
    area: 'Marca personal',
    completedAt: '17 de septiembre de 2025',
    hours: '8 h',
    modules: '2 módulos',
    serial: 'OA-2025-0917001727809',
    focus: 'Construcción de visibilidad profesional: de profesional anónimo a referente visible.',
    credentialUrl: '/certificados/marca-personal-360-santander.pdf',
  },
  {
    year: '2025',
    title: 'Marca personal y networking profesional',
    issuer: 'Santander Open Academy',
    area: 'Marca personal',
    completedAt: '2025',
    focus: 'Desarrollo de marca personal y construccion de relaciones profesionales.',
  },
  {
    year: '2025',
    title: 'Python',
    issuer: 'Santander Open Academy',
    area: 'Backend + Automatización',
    completedAt: '17 de septiembre de 2025',
    hours: '8 h',
    modules: '2 módulos',
    serial: 'OA-2025-0917001727889',
    focus: 'Fundamentos de programación, automatización y pensamiento lógico aplicado al backend.',
    credentialUrl: '/certificados/python-santander.pdf',
  },
  {
    year: '2025',
    title: 'Storytelling en marketing digital',
    issuer: 'Santander Open Academy / The University of Chicago',
    area: 'Marketing digital',
    completedAt: '30 de julio de 2025',
    hours: '8 h',
    modules: '2 módulos',
    serial: 'OA-2025-0730001506045',
    focus: 'Comunicación, narrativa y marketing digital para presentar propuestas con mayor claridad.',
    credentialUrl: '/certificados/storytelling-marketing-digital-santander.pdf',
  },
  {
    year: '2025',
    title: 'Ecommerce para PyMEs',
    issuer: 'Santander Open Academy / IE University',
    area: 'E-commerce',
    completedAt: '30 de julio de 2025',
    hours: '6 h',
    modules: '2 módulos',
    serial: 'OA-2025-0730001505823',
    focus: 'Venta online, canales digitales y oportunidades para pequeñas empresas.',
    credentialUrl: '/certificados/ecommerce-pymes-santander.pdf',
  },
  {
    year: '2025',
    title: 'SEO y Content Marketing',
    issuer: 'Santander Open Academy',
    area: 'SEO + Contenido',
    completedAt: '24 de julio de 2025',
    hours: '8 h',
    modules: '2 módulos',
    serial: 'OA-2025-0724001468156',
    focus: 'Contenido, posicionamiento organico y estrategia digital para mejorar visibilidad.',
    credentialUrl: '/certificados/seo-content-marketing-santander.pdf',
  },
];
