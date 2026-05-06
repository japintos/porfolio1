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
};

export const navItems: NavItem[] = [
  { href: '#presentacion', label: 'Inicio' },
  { href: '#perfil', label: 'Perfil' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#habilidades', label: 'Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#certificaciones', label: 'Formacion' },
  { href: '#contacto', label: 'Contacto' },
];

export const metrics: Metric[] = [
  { value: '18+', label: 'anos de experiencia tecnica' },
  { value: '20+', label: 'proyectos entregados' },
  { value: '3', label: 'areas de especializacion' },
  { value: '24h', label: 'tiempo objetivo de respuesta' },
];

export const highlights: Highlight[] = [
  {
    eyebrow: 'Producto',
    title: 'Interfaces con criterio de negocio',
    description:
      'No diseno pantallas aisladas: ordeno el recorrido para que cada seccion responda a una pregunta real del visitante.',
  },
  {
    eyebrow: 'Arquitectura',
    title: 'Base tecnica preparada para crecer',
    description:
      'Componentes claros, contenido separado y estilos gobernados por tokens para evitar que el sitio vuelva a ser dificil de mantener.',
  },
  {
    eyebrow: 'Conversion',
    title: 'Contacto directo y confianza visible',
    description:
      'Proyectos, resultados, certificaciones y llamados a la accion trabajan juntos para convertir visitas en conversaciones.',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Socio Fundador & Tech Lead',
    organization: 'WebXpert',
    period: '2025 - Actualidad',
    summary:
      'Direccion tecnica de soluciones web, e-commerce y presencia digital para empresas que necesitan vender y operar mejor.',
    impact: [
      'Arquitectura de proyectos end-to-end desde discovery hasta deploy.',
      'Optimizacion de performance, SEO tecnico y experiencia mobile-first.',
      'Acompanamiento tecnico para PyMEs que necesitan decisiones simples y mantenibles.',
    ],
    tags: ['Leadership', 'Web Strategy', 'SEO tecnico', 'Performance'],
  },
  {
    role: 'Fullstack Developer Freelance',
    organization: 'Clientes y empresas locales',
    period: '2006 - Actualidad',
    summary:
      'Desarrollo de aplicaciones web, sistemas administrativos, sitios institucionales y soluciones a medida.',
    impact: [
      'Analisis, diseno, desarrollo e implementacion de sistemas.',
      'Modelado y optimizacion de bases de datos relacionales.',
      'Modernizacion de procesos con foco en utilidad real.',
    ],
    tags: ['Fullstack', 'Databases', 'Legacy systems', 'Consultoria'],
  },
  {
    role: 'Soporte tecnico e infraestructura',
    organization: 'Poder Judicial de Misiones',
    period: '2007 - Actualidad',
    summary:
      'Soporte, redes, sistemas operativos y continuidad operativa en entornos institucionales.',
    impact: [
      'Resolucion de incidencias de hardware, software y conectividad.',
      'Administracion de infraestructura LAN/MAN.',
      'Instalacion y mantenimiento de entornos Windows, Linux y macOS.',
    ],
    tags: ['IT Support', 'Networks', 'Operations', 'Security'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Interfaces rapidas, responsivas y faciles de usar.',
    skills: [
      { name: 'HTML5 semantico', level: 94 },
      { name: 'CSS moderno', level: 92 },
      { name: 'JavaScript', level: 88 },
      { name: 'React / Next.js', level: 82 },
    ],
  },
  {
    title: 'Backend',
    description: 'APIs, integraciones y logica de negocio mantenible.',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'PHP', level: 80 },
      { name: 'Python', level: 72 },
      { name: '.NET / C#', level: 70 },
    ],
  },
  {
    title: 'Datos',
    description: 'Modelado, consultas y optimizacion de bases relacionales.',
    skills: [
      { name: 'PostgreSQL', level: 84 },
      { name: 'MySQL / MariaDB', level: 84 },
      { name: 'SQL Server', level: 78 },
      { name: 'Power BI', level: 68 },
    ],
  },
  {
    title: 'Delivery',
    description: 'Herramientas y criterio para llevar ideas a produccion.',
    skills: [
      { name: 'Git / GitHub', level: 86 },
      { name: 'Vercel', level: 78 },
      { name: 'Scrum', level: 76 },
      { name: 'SEO tecnico', level: 80 },
    ],
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
    focus: 'Visibilidad organica moderna y busquedas asistidas por IA.',
  },
  {
    year: '2026',
    title: 'Power BI Intermedio',
    issuer: 'Santander Open Academy',
    focus: 'Analisis, modelado de datos y visualizacion ejecutiva.',
  },
  {
    year: '2026',
    title: 'Prompting responsable',
    issuer: 'Santander Open Academy',
    focus: 'Uso practico de IA generativa para productividad y negocio.',
  },
  {
    year: '2025',
    title: 'Gestion de Proyectos y Agile',
    issuer: 'Santander Open Academy',
    focus: 'Organizacion de equipos, entregables y mejora continua.',
  },
  {
    year: '2025',
    title: 'Python',
    issuer: 'Santander Open Academy',
    focus: 'Fundamentos de programacion y automatizacion.',
  },
  {
    year: '2025',
    title: 'SEO y Content Marketing',
    issuer: 'Santander Open Academy',
    focus: 'Contenido, posicionamiento y estrategia digital.',
  },
];
