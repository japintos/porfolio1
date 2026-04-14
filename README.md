# Portafolio Profesional – Julio A. Pintos

[![GitHub](https://img.shields.io/badge/GitHub-japintos-181717?logo=github)](https://github.com/japintos/porfolio1)
[![WebXpert](https://img.shields.io/badge/WebXpert-Socio%20Fundador-6366f1)](https://www.webxpert.com.ar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-julio--pintos-0077b5?logo=linkedin)](https://www.linkedin.com/in/julio-pintos-0638a8200/)

¡Bienvenido a mi portafolio web! Soy **Senior Fullstack Developer**, **Socio Fundador & Tech Lead** de WebXpert, con 18+ años de experiencia transformando ideas en soluciones digitales escalables.

**Despliegue actual:** la aplicación corre en **[Vercel](https://vercel.com)** con **[Next.js](https://nextjs.org)**. El contenido visible del sitio sigue siendo HTML/CSS/JS estático servido desde la carpeta `public/`, y el **CV en PDF** se genera en el servidor con **`@react-pdf/renderer`** (sin depender del canvas del navegador).

---

## Descripción

Este portafolio presenta mi perfil profesional como **Senior Fullstack Developer** y emprendedor tecnológico. Incluye mi experiencia empresarial, formación continua, stack tecnológico actualizado y proyectos que demuestran mi capacidad para crear soluciones web robustas que realmente funcionen.

**Objetivo:** Mostrar de manera auténtica y profesional mi trayectoria, habilidades y enfoque colaborativo en el desarrollo de software.

---

## Stack del proyecto (repositorio)

| Área | Tecnología |
|------|------------|
| Framework | **Next.js 14** (App Router) |
| Lenguaje | **TypeScript** |
| PDF del CV | **`@react-pdf/renderer`** (generación en servidor) |
| Estilos del sitio | CSS propio (`public/css/style.css`, variables CSS) |
| Contenido estático | HTML en `public/index.html`, assets en `public/` |
| Hosting | **Vercel** (producción) |

### Frontend (perfil profesional — contenido del sitio)

- **HTML5, CSS3, JavaScript**
- **React.js** (en proyectos externos; el portfolio público es estático + Next como shell)
- **Responsive Design & Mobile-First**

### Backend / lenguajes (experiencia)

- **Node.js**
- **Python** *(certificación reciente)*
- **PHP**
- **C++, C#, Visual Basic**
- **.NET Framework**

### Bases de datos

- **PostgreSQL, MySQL, MariaDB**
- **SQL Server**
- **Diseño y optimización de BD**

### Herramientas y entornos

- **VS Code, Cursor IDE, Visual Studio**
- **Git & GitHub**
- **Scrum & metodologías ágiles**
- **Linux, Windows, macOS**

---

## Estructura del proyecto

```
porfolio1/
├── app/                          # Next.js (App Router)
│   ├── layout.tsx
│   ├── page.tsx                  # “/” — iframe → /index.html
│   ├── globals.css
│   └── api/cv/route.tsx          # GET /api/cv → PDF
├── components/pdf/CvPdfDocument.tsx
├── lib/cv-data.ts                # Datos del CV (PDF)
├── public/                       # Sitio estático (sirve Vercel en /)
│   ├── index.html
│   ├── devrunner.html
│   ├── css/                      # style.css, devrunner.css
│   ├── js/                       # main.js, devrunner.js
│   └── Img/
├── package.json
├── next.config.mjs
├── tsconfig.json
└── README.md
```

- **`public/`** es lo que Vercel/Next sirve en la raíz del dominio (`/index.html`, `/css/...`, `/Img/...`).
- La **página principal de Next** (`app/page.tsx`) incrusta ese HTML en un **iframe** para no duplicar todo el markup en JSX de golpe.
- El **PDF del CV** no se arma con html2canvas en el cliente: la ruta **`/api/cv`** usa **`renderToBuffer`** de `@react-pdf/renderer` y los datos de **`lib/cv-data.ts`**.

---

## CV en PDF (cómo funciona)

1. El visitante pulsa **Descargar CV** en el hero (`public/index.html` → enlace a **`/api/cv`**).
2. El servidor ejecuta **`app/api/cv/route.tsx`**, renderiza **`CvPdfDocument`** con **`renderToBuffer`** y responde `application/pdf`.
3. Los textos y secciones del CV viven en **`lib/cv-data.ts`**. Si actualizas el contenido del CV, edita ese archivo y, si hace falta, el layout en **`components/pdf/CvPdfDocument.tsx`**.

Imagen de perfil en el PDF: URL **`{origen del sitio}/Img/foto_Perfil.jpg`** (debe existir en **`public/Img/`**).

---

## Características destacadas (sitio)

- **Diseño responsive**, loading screen, animaciones con `IntersectionObserver`, barra de scroll, menú hamburguesa.
- **Descarga de CV** vía **`GET /api/cv`** (PDF generado en servidor).
- **Formulario WhatsApp**, copiar email, tooltips en habilidades, modales de proyectos.
- **Accesibilidad y SEO:** skip links, ARIA, Schema.org, Open Graph, Twitter Cards.
- **DevXpert Runner:** minijuego en **`/devrunner.html`** (HTML/CSS/JS).

---

## Instalación y desarrollo local (Next.js)

```bash
git clone https://github.com/japintos/porfolio1.git
cd porfolio1
npm install
npm run dev
```

Abre **http://localhost:3000**: verás el portfolio dentro del iframe (contenido desde **`/index.html`**). El PDF se prueba en **http://localhost:3000/api/cv**.

### Scripts útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo Next |
| `npm run build` | Build de producción |
| `npm run start` | Servidor tras `build` (prueba local del artefacto) |

### Solo archivos estáticos (sin Next)

Si sirves únicamente **`public/`** (por ejemplo `npx serve public`), verás el sitio, pero **`/api/cv`** no existirá y el botón de descarga del CV no funcionará.

---

## Despliegue (Vercel)

1. Conecta el repositorio en [Vercel](https://vercel.com).
2. Framework preset: **Next.js** (detectado por `package.json`).
3. Build: `npm run build`, output estándar de Next.
4. Variables de entorno: no son obligatorias para el PDF; el origen para la foto se obtiene de la petición (`request.url`).

**GitHub Pages:** no cubre la API de Next; para CV en PDF y rutas dinámicas usa **Vercel** (u otro host con Node).

---

## Personalización

| Qué cambiar | Dónde |
|-------------|--------|
| Textos y secciones del **PDF** | `lib/cv-data.ts` y, si hace falta, `components/pdf/CvPdfDocument.tsx` |
| Contenido visual del **sitio** | `public/index.html`, `public/css/style.css`, `public/js/main.js` |
| Imágenes | `public/Img/` (y rutas `/Img/...` en HTML) |
| Metadatos / título Next | `app/layout.tsx` |
| Paleta y variables CSS | `public/css/style.css` (`:root`) |

---

## Proyectos destacados, formación, experiencia, contacto

*(Secciones informativas del portfolio; el detalle sigue alineado con el contenido de `public/index.html` y con mi perfil público.)*

### Proyectos (demos)

- **Carrito WebXpert:** [carritocompraswebxpert.vercel.app](https://carritocompraswebxpert.vercel.app/catalogo)
- **Landing WebXpert:** [www.webxpert.com.ar](https://www.webxpert.com.ar)
- **Oudin, Duarte & Asociados:** [japintos.github.io/estudioOudin](https://japintos.github.io/estudioOudin/)
- **Concesionario Web:** [concesionarioweb.vercel.app](https://concesionarioweb.vercel.app/)

### Variables CSS (referencia)

```css
:root {
  --primary-color: #1e1b4b;
  --accent-color: #6366f1;
  --background-color: #f8fafc;
  --border-radius: 18px;
  --transition: 0.3s cubic-bezier(.4,0,.2,1);
}
```

---

## Contribuciones

1. Fork del repositorio  
2. Rama: `git checkout -b feature/mejora`  
3. Commit y push  
4. Pull Request con descripción clara  

---

## Licencia

**MIT** — Copyright (c) 2025 Julio A. Pintos (ver texto de licencia en el repo si aplica).

---

## Contacto

- **Email:** [julioapintos1@gmail.com](mailto:julioapintos1@gmail.com)  
- **WhatsApp:** [+54 376 4724207](https://wa.me/3764724207)  
- **Ubicación:** Posadas, Misiones, Argentina  
- **LinkedIn:** [julio-pintos-0638a8200](https://www.linkedin.com/in/julio-pintos-0638a8200/)  
- **GitHub:** [japintos](https://github.com/japintos)  
- **WebXpert:** [www.webxpert.com.ar](https://www.webxpert.com.ar)  

---

*Última actualización del README: abril 2026 — Next.js en Vercel, CV en PDF vía `/api/cv` (`@react-pdf/renderer`), datos en `lib/cv-data.ts`, sitio estático en `public/`, nombre **Julio A. Pintos**, y stack de habilidades alineado con la web (incluye **PHP** en backend).*
