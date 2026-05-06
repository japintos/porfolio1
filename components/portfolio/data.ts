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
  { href: '#educacion', label: 'Educacion' },
  { href: '#certificaciones', label: 'Certificaciones' },
  { href: '#habilidades', label: 'Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

export const metrics: Metric[] = [
  { value: '18+', label: 'anos de experiencia tecnica' },
  { value: '50+', label: 'proyectos completados' },
  { value: '2025', label: 'fundacion de WebXpert' },
  { value: '3', label: 'frentes: arquitectura, liderazgo y delivery' },
];

export const highlights: Highlight[] = [
  {
    eyebrow: 'Desarrollo integral',
    title: 'Del diseno al deploy',
    description:
      'Trabajo desde el analisis y el diseno hasta la implementacion, cuidando que cada proyecto funcione correctamente en produccion.',
  },
  {
    eyebrow: 'Colaboracion efectiva',
    title: 'Comunicacion clara y trabajo en equipo',
    description:
      'Me adapto a equipos, comunico con claridad y busco la mejor solucion en conjunto, alineando tecnologia con objetivos reales.',
  },
  {
    eyebrow: 'Enfoque practico',
    title: 'Tecnologia adecuada para cada contexto',
    description:
      'Priorizo simplicidad, mantenibilidad y resultados. La mejor solucion es la que resuelve el problema sin complejidad innecesaria.',
  },
  {
    eyebrow: 'Aprendizaje continuo',
    title: 'Actualizacion constante',
    description:
      'Mantengo una formacion activa en Python, SEO, ecommerce, gestion de proyectos, Power BI, IA y buenas practicas de desarrollo.',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Socio Fundador & Tech Lead',
    organization: 'WebXpert',
    period: '2025 - Actualidad',
    summary:
      'Agencia digital especializada en desarrollo web, optimizacion y estrategias digitales para empresas.',
    impact: [
      'Liderazgo tecnico y arquitectura de soluciones escalables, desde landings hasta e-commerce con APIs y pagos.',
      'Gestion de equipo y proyectos end-to-end, cuidando calidad de codigo, performance y experiencia de usuario.',
      'Estrategias de transformacion digital para PyMEs, optimizacion de conversion y mejora de procesos.',
      'SEO tecnico, Core Web Vitals y performance, con tiempos de carga por debajo de 2 segundos en proyectos exigentes.',
    ],
    tags: ['Technical Leadership', 'Digital Strategy', 'Team Management', 'Performance'],
  },
  {
    role: 'Desarrollo y consultoria',
    organization: 'Freelancer',
    period: '2006 - Actualidad',
    summary:
      'Soluciones informaticas para empresas locales, con foco en desarrollo web, sistemas administrativos y consultoria tecnica.',
    impact: [
      'Analisis, diseno y desarrollo web y de escritorio, desde relevamiento de requisitos hasta implementacion.',
      'Diseno, implementacion y optimizacion de bases de datos en PostgreSQL, SQL Server y MySQL.',
      'Auditoria de sistemas, deteccion de vulnerabilidades, mejoras y optimizacion de rendimiento.',
    ],
    tags: ['Web Development', 'Database Design', 'System Audit'],
  },
  {
    role: 'Soporte tecnico e infraestructura',
    organization: 'Poder Judicial de Misiones',
    period: '2007 - Actualidad',
    summary:
      'Soporte tecnico, redes LAN/MAN y sistemas operativos en un entorno institucional de alta continuidad operativa.',
    impact: [
      'Soporte integral a usuarios en hardware y software en entornos Windows, Linux y macOS.',
      'Administracion y monitoreo de redes LAN/MAN, conectividad y seguridad.',
      'Instalacion, configuracion y mantenimiento de sistemas operativos y aplicaciones.',
    ],
    tags: ['IT Support', 'Network Admin', 'System Maintenance'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Construccion de interfaces web responsivas, claras y orientadas a experiencia de usuario.',
    skills: [
      { name: 'HTML5', level: 94 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'React.js', level: 82 },
    ],
  },
  {
    title: 'Backend',
    description: 'Lenguajes, plataformas y criterio fullstack para resolver logica de negocio.',
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
    description: 'Diseno, implementacion y optimizacion de bases relacionales.',
    skills: [
      { name: 'PostgreSQL', level: 84 },
      { name: 'SQL Server', level: 78 },
      { name: 'MySQL', level: 84 },
      { name: 'MariaDB', level: 80 },
    ],
  },
  {
    title: 'Herramientas y sistemas',
    description: 'Entornos de trabajo, control de versiones, metodologias y sistemas operativos.',
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
    institution: 'EPET No 1 UNESCO',
    title: 'Tecnico en Informatica',
    status: 'Titulo tecnico secundario',
  },
  {
    period: '2000 - 2010',
    institution: 'Universidad Americana',
    title: 'Ingenieria en Sistemas',
    status: 'Incompleto',
  },
  {
    period: '2024 - Actualidad',
    institution: 'Instituto Combate Mborore',
    title: 'Tecnico Superior en Analisis de Sistemas',
    status: 'En curso',
  },
  {
    period: '2024',
    institution: 'Instituto Combate Mborore',
    title: 'Tecnico en redes informaticas, optimizacion y reparacion de computadoras',
    status: 'Completado',
  },
  {
    period: '2024',
    institution: 'Instituto Combate Mborore',
    title: 'Operador en electronica y robotica',
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
      'Crear una experiencia de compra clara y rapida para que el usuario llegue al producto correcto sin friccion.',
    solution:
      'SPA con catalogo interactivo, filtros, interfaz mobile-first y un flujo de checkout pensado para conversion.',
    result:
      'Carga percibida liviana, navegacion simple y una base preparada para evolucionar hacia integraciones comerciales.',
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
      'Landing responsive, estructura comercial directa, narrativa de servicios y optimizacion SEO tecnica.',
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
      'Modernizar la presencia digital de un estudio juridico sin perder sobriedad ni confianza profesional.',
    solution:
      'Sitio institucional accesible, responsive, con contenidos ordenados y llamados de contacto claros.',
    result:
      'Mejor percepcion de marca, mas claridad en servicios y acceso directo a canales de consulta.',
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
      'Experiencia mas simple para comparar opciones y aumentar la intencion de consulta.',
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
      'Un punto de diferenciacion que muestra creatividad, logica e interaccion liviana.',
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
    focus: 'Visibilidad organica moderna, posicionamiento en Google y busquedas asistidas por IA.',
    credentialUrl: '/certificados/seo-ia-google-big-school.pdf',
  },
  {
    year: '2026',
    title: 'Power BI Intermedio: analisis y modelado de datos',
    issuer: 'Santander Open Academy',
    area: 'Datos',
    completedAt: '22 de abril de 2026',
    hours: '8 h',
    modules: '2 modulos',
    serial: 'OA-2026-0422002515907',
    focus: 'Analisis, modelado de datos y visualizacion ejecutiva para toma de decisiones.',
    credentialUrl: '/certificados/power-bi-intermedio-santander.pdf',
  },
  {
    year: '2026',
    title: 'Power BI',
    issuer: 'Santander Open Academy',
    area: 'Datos',
    completedAt: '14 de abril de 2026',
    hours: '8 h',
    modules: '2 modulos',
    serial: 'OA-2026-0414002479164',
    focus: 'Fundamentos de analisis, visualizacion de datos y construccion de reportes.',
    credentialUrl: '/certificados/power-bi-santander.pdf',
  },
  {
    year: '2026',
    title: 'Iniciacion al Desarrollo con IA',
    issuer: 'BIG school',
    area: 'IA + Desarrollo',
    completedAt: '13 de marzo de 2026',
    hours: '6 h',
    focus: 'Desarrollo asistido por inteligencia artificial y uso practico de IA en flujos tecnicos.',
    credentialUrl: '/certificados/iniciacion-desarrollo-ia-big-school.pdf',
  },
  {
    year: '2026',
    title: 'Prompting responsable: maximiza la IA en tu negocio',
    issuer: 'Santander Open Academy',
    area: 'IA + Negocio',
    completedAt: '9 de abril de 2026',
    hours: '8 h',
    modules: '2 modulos',
    serial: 'OA-2026-0409002459496',
    focus: 'Uso practico y responsable de IA generativa para productividad, negocio y comunicacion.',
    credentialUrl: '/certificados/prompting-responsable-santander.pdf',
  },
  {
    year: '2026',
    title: 'Gestion Efectiva de proyectos y equipos',
    issuer: 'Santander Open Academy',
    area: 'Gestion + Liderazgo',
    completedAt: '10 de marzo de 2026',
    hours: '8 h',
    modules: '2 modulos',
    serial: 'OA-2026-0310002341766',
    focus: 'Liderazgo, coordinacion de equipos, ejecucion y gestion efectiva de proyectos.',
    credentialUrl: '/certificados/gestion-efectiva-proyectos-equipos-santander.pdf',
  },
  {
    year: '2025',
    title: 'Gestion de Proyectos y Fundamentos de metodologia Agile',
    issuer: 'Santander Open Academy',
    area: 'Agile + Delivery',
    completedAt: '22 de diciembre de 2025',
    hours: '8 h',
    modules: '2 modulos',
    serial: 'OA-2025-1222002103734',
    focus: 'Organizacion de equipos, entregables, metodologia Agile y mejora continua.',
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
    title: 'Excel basico a intermedio',
    issuer: 'Santander Open Academy',
    area: 'Datos + Productividad',
    completedAt: '2025',
    hours: '8 h',
    focus: 'Formulacion, tablas dinamicas y analisis de datos para tareas operativas y reportes.',
  },
  {
    year: '2025',
    title: 'Marca personal 360',
    issuer: 'Santander Open Academy',
    area: 'Marca personal',
    completedAt: '17 de septiembre de 2025',
    hours: '8 h',
    modules: '2 modulos',
    serial: 'OA-2025-0917001727809',
    focus: 'Construccion de visibilidad profesional: de profesional anonimo a referente visible.',
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
    area: 'Backend + Automatizacion',
    completedAt: '17 de septiembre de 2025',
    hours: '8 h',
    modules: '2 modulos',
    serial: 'OA-2025-0917001727889',
    focus: 'Fundamentos de programacion, automatizacion y pensamiento logico aplicado al backend.',
    credentialUrl: '/certificados/python-santander.pdf',
  },
  {
    year: '2025',
    title: 'Storytelling en marketing digital',
    issuer: 'Santander Open Academy / The University of Chicago',
    area: 'Marketing digital',
    completedAt: '30 de julio de 2025',
    hours: '8 h',
    modules: '2 modulos',
    serial: 'OA-2025-0730001506045',
    focus: 'Comunicacion, narrativa y marketing digital para presentar propuestas con mayor claridad.',
    credentialUrl: '/certificados/storytelling-marketing-digital-santander.pdf',
  },
  {
    year: '2025',
    title: 'Ecommerce para PyMEs',
    issuer: 'Santander Open Academy / IE University',
    area: 'E-commerce',
    completedAt: '30 de julio de 2025',
    hours: '6 h',
    modules: '2 modulos',
    serial: 'OA-2025-0730001505823',
    focus: 'Venta online, canales digitales y oportunidades para pequenas empresas.',
    credentialUrl: '/certificados/ecommerce-pymes-santander.pdf',
  },
  {
    year: '2025',
    title: 'SEO y Content Marketing',
    issuer: 'Santander Open Academy',
    area: 'SEO + Contenido',
    completedAt: '24 de julio de 2025',
    hours: '8 h',
    modules: '2 modulos',
    serial: 'OA-2025-0724001468156',
    focus: 'Contenido, posicionamiento organico y estrategia digital para mejorar visibilidad.',
    credentialUrl: '/certificados/seo-content-marketing-santander.pdf',
  },
];
