# Site Content Catalog (generated 2025-10-19)

## Global Elements

### Header Navigation (`src/layouts/Navbar.astro`)
- Primary nav items (in order):
  * `Home` -> `/#hero`
  * `Productos` -> `/#productos`
  * `Servicios` -> `/#servicios`
  * `Proceso` -> `/#proceso`
  * `Testimonios` -> `/#testimonios`
  * `Temporal` -> `/#temporal`
  * `Art�culos` -> `/blog`
- Theme switch button includes sr-only label `cambiar tema`
- Mobile menu toggle includes sr-only label `togglenav`
- Logo image: `/images/logo_dark.png` (alt `Logo`)

### Footer (`src/layouts/Footer.astro`)
- Branding link text: `Continental Andes`
- Tagline paragraph: `Impulsamos la sostenibilidad mediante soluciones innovadoras para un mañana más verde.`
- Social icons reuse sr-only text: `enlace social`
- Navigation columns:
  * `Empresa`: `Acerca de`, `Blog`, `Empleos`, `Socios`, `Empleos`
  * `Soluciones`: `Marketing`, `Analítica`, `Comercio`, `Información`
  * `Soporte`: `Precios`, `Guías`, `Preguntas frecuentes`, `Contacto`
  * `Recursos`: `Reclamos`, `Privacidad`, `Términos`
- Footer closing strip text:
  * `&copy; <year> Continental Andes. Todos los derechos reservados`
  * `Pixory` (link target `https://www.pixory.cl`)

### Shared SEO Defaults
- `Layout.astro` sets `<html lang="es">`
- `<meta name="description" content="Web Site creado con Astro y TailwindCSS">`
- `<meta name="generator" content={Astro.generator}>`
- `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`
- Google Fonts import: `https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap`
- Global stylesheet: `/style/custom.css`
- `Navbar` + `Footer` injected on every page by layout
- `BlogLayout.astro` wraps `Layout` and adds JSON-LD (`Article` + `BreadcrumbList`) with fields: title, description, pubDate, updatedDate, heroImage (absolute), author, canonical URL. Breadcrumb names are `Inicio`, `Blog`, `{title}`.

## Page: `/` (Home)

### SEO
- Title: `Sopladores Centrífugos | Continental Andes Blowers`
- Meta description: `Web Site creado con Astro y TailwindCSS`

### Sections

#### Hero (`#hero`)
- Headline sequence:
  * `Transformamos el`
  * `Aire`
  * `` (empty `headline3`)
  * `en una herramienta.`
- Subheading lines:
  * `Más de 45.000 máquinas instaladas a nivel mundial.`
  * `Sopladores Centrífugos Monoetapa y Multietapa.`
  * `` (empty `subheading3`)
- Primary button: `Solicitar asesoría`
- Assets:
  * Video poster/background: `/images/hero-hero3.jpg`
  * Mobile background override: `/images/slider-bg3.webp`
  * Data constant `backgroundImage`: `hero-background-image.jpg`
  * Lazy-load video sources derived from `/videos/parte1.webm` and `/videos/parte1.mp4`

#### Servicios (`#servicios`)
- Section title: `Servicios`
- Subheading copy:
  * `Acompañamos todo el ciclo de vida de cada máquina:`
  * `Instalación, mantención y soporte.`
  * `Garantizamos eficiencia, seguridad y continuidad operacional en cada proyecto.`
- Service cards (alt text `Imagen del servicio`):
  1. `Puesta en Marcha`  -  `Chequeo de montaje y condición inicial, configuración, calibración y ajuste de parámetros de operación para equipos nuevos o reacondicionados.`  -  image `/images/services-solar3.png`
  2. `Mantenimiento de Equipos`  -  `Planes preventivos, predictivos y proactivos para asegurar la disponibilidad y desempeño de sus sopladores.`  -  image `/images/services-wind.png`
  3. `Contratos de Mantenimiento`  -  `Servicios programados según su necesidad (mensual, trimestral o semestral) para continuidad sin detenciones.`  -  image `/images/services-hydro.png`
  4. `Ingeniería de Proyectos`  -  `Diseño, fabricación y montaje de sistemas de aire o gas, control e instrumentación y regulación de caudal.`  -  image `/images/services-storage.png`
  5. `Repuestos`  -  `Disponibilidad de piezas y componentes originales para minimizar tiempos de parada.`  -  image `/images/services-respuestos_400_533.jpg`
  6. `Capacitación Técnica`  -  `Formación para personal de operación y mantención enfocada en seguridad y eficiencia.`  -  image `/images/services-green.png`
- Unused data strings: call-to-action `Asegure la continuidad operacional con nuestro soporte experto.`, button label `Solicitar información`

#### Industrias (`#industrias`)
- Section title: `Industrias`
- Subheading:
  * `Aplicaciones en `
  * `múltiples industrias`
  * `Los equipos Continental Blowers son pieza fundamental en diversos procesos industriales, asegurando eficiencia, confiabilidad y continuidad operacional.`
- Area cards (alt text `Imagen del servicio`):
  1. `Tratamiento de Aguas Servidas`  -  `Aireación y procesos biológicos en plantas de agua potable y aguas residuales.`  -  image `/images/services-hydro.png`
  2. `Minería`  -  `Suministro de aire para transporte neumático, filtración y procesos metalúrgicos.`  -  image `/images/services-storage.png`
  3. `Industra Alimentaria`  -  `Aplicaciones sanitarias, aire de proceso y control de atmósferas.`  -  image `/images/services-smart-grid.png`
  4. `Química y Petroquímica`  -  `Aireación, agitación y soporte a reacciones y tratamientos de gases.`  -  image `/images/services-solar3.png`
  5. `Cemento y Materiales`  -  `Transporte neumático y fluidización en silos y hornos.`  -  image `/images/services-wind.png`
  6. `Pulpa y Papel`  -  `Aire de procesos, secado y soporte a líneas de producción.`  -  image `/images/services-green.png`

#### Productos (`#innovacion`)
- Section title: `Productos`
- Subheading lines:
  * `Sopladores Centrífugos`
  * ` Monoetapa y Multietapa`
- Innovations (images rendered via `LazyImage` with alt `banner image`):
  1. `Compresor Centrífugo Monoetapa`
     ```
     Los compresores radiales tipo TC de Continental Industrie son equipos de flujo modernos para la compresión de grandes cantidades de aire o gas, desde 2,500 hasta 35,000 m3/h, con una presión de hasta 1,3 bar g.
Gracias a las tolerancias de alta precisión y al control continuo de los parámetros mediante la aplicación de nuevas técnicas de tecnología aeroespacial, el mecanizado 3D de las palas del impulsor asegura una alta eficiencia de compresión (más del 85%) y un alto rendimiento general.
     ```
     Visual: `/images/singlestage_draw.jpg`
  2. `Compresor Centrífugo Multietapa`  -  `Como resultado de nuestra preocupación por mejorar nuestro desempeño e invirtiendo gran parte de nuestros recursos en la investigación, Continental Industrie puede ofrecerle una gama completa de máquinas, que pueden suministrar desde 1.000 a 65.000 m3/hr de aire seco, limpio y sin pulsaciones alcanzando presiones relativas de hasta 1,8 bares o en vacío de hasta 6.700 mmH2O (WG).`  -  visual `/images/innovations-inno-panel.webp`
  3. `Impulsores de Gas`  -  `Como resultado de nuestra preocupación por mejorar nuestro desempeño e invirtiendo gran parte de nuestros recursos en la investigación, Continental Industrie puede ofrecerle una gama completa de máquinas, que pueden suministrar desde 1.000 a 65.000 m3/hr de aire seco, limpio y sin pulsaciones alcanzando presiones relativas de hasta 1,8 bares o en vacío de hasta 6.700 mmH2O (WG).`  -  visual `/images/innovations-inno-wind.webp`
- Unused data strings: call-to-action `Solicite una puesta en marcha con nuestro equipo`, button label `Solicitar asesoría`, visual string `innovations-section-image.jpg`

#### Testimonios (`#testimonios`)
- Section title: `Testimonios`
- Subheading lines:
  * `Profesionales con amplia`
  * ` experiencia en la industria`
- Testimonials (card alt `profile picture`):
  1. `Carlos Suárez`  -  occupation `Ventas`  -  quote `"c.suarez@continentalandes.com · +56 9 9679 4151"`  -  image `/images/testimonials-person1.png`
  2. `Miguel Urbina`  -  occupation `Repuestos`  -  quote `"m.urbina@continentalandes.com · +56 9 6645 0740"`  -  image `/images/testimonials-person2.png`
  3. `Vanessa Pajares`  -  occupation `Servicios`  -  quote `"v.pajares@continentalandes.com · +56 9 6659 0216"`  -  image `/images/testimonials-person3.png`
- Unused data strings: call-to-action `Contácte a nuestro equipo para asesoría técnica`, button label `Contactar`, visual string `customer-testimonials-image.jpg`

#### Temporal (`#productos`)
- Section title: `Temporal`
- Subheading lines:
  * `Continental Andes Blowers en la`
  * ` Región Andina`
- Body copy:
  ```
  Somos la oficina de Continental Industrie para Chile, Perú, Argentina, Bolivia y Ecuador.
Más de 25 años de experiencia nos permiten comprender las condiciones específicas de cada industria y proyecto.
  ```
- Impact list (rendered with leading checkmark icon):
  * `Cobertura: Chile, Perú, Argentina, Bolivia, Ecuador`
  * `+25 años en la región`
  * `Procesos: PTAR, biogás, minería e industria`
  * `Objetivos: eficiencia, seguridad y continuidad operacional`
- Primary button: `Contactar`
- Unused data string: call-to-action `Conózcanos y cuente con nuestro soporte`
- Visual: `/images/environment-green-hands.png` (alt `impacto ambiental`)

#### Productos (`#Productos`)
- Section title: `Productos`
- Subheading lines:
  * `Sopladores centrífugos `
  * `monoetapa y multietapa`
- Project cards (alt `Imagen del proyecto`):
  1. `Sopladores Monoetapa`  -  `Equipos compactos y eficientes para diversas aplicaciones industriales. Ficha técnica disponible en nuestro sitio web.`  -  location label `Región andina`  -  image `/images/featured-solar-person.png`
  2. `Sopladores Multietapa`  -  `Alto rendimiento y confiabilidad para mayores demandas de caudal y presión. Consulte la ficha técnica en línea.`  -  location `Región andina`  -  image `/images/featured-wind-person.png`
  3. `Soluciones a medida`  -  `Diseño y suministro de sistemas completos de aire o gas, control e instrumentación según requerimientos.`  -  location `Proyectos en Latinoamérica`  -  image `/images/featured-amazonas2.png`
- Card button text: `Leer más`
- Unused data strings: call-to-action `Consulte por disponibilidad y especificaciones`, button label `Ver productos`

#### Contáctenos (`#cta`)
- Section title: `Contáctenos`
- Subheading lines:
  * `Nos contactaremos `
  * `con usted a la brevedad`
- Initiatives (icon images rendered with empty alt):
  1. `Oficina Comercial`  -  `Avenida Italia 850, Providencia, Santiago, Chile.`  -  icon `/images/cta-green-2.svg`
  2. `Bodegas`  -  `Pdte. Jorge Alessandri Rodríguez 11491, San Bernardo.`  -  icon `/images/cta-green-4.svg`
  3. `Canales de contacto`  -  `Tel/Fax: (+56 2) 2 461 94 18 · cba@continentalandes.com`  -  icon `/images/cta-green-3.svg`
- Email form:
  * Placeholder: `tucorreo@ejemplo.com`
  * Submit button (desktop text): `Comenzar`
  * Mobile-only icon button (no readable text)
- Unused data strings: call-to-action `Envíenos su consulta técnica o comercial`, button label `Escríbanos`, visual string `get-involved-section-image.jpg`
- Additional asset defined but unused: `/images/cta-green-1.svg`

## Page: `/fonts`

### SEO
- Title: `Catálogo de fuentes`
- Meta description: `Web Site creado con Astro y TailwindCSS`

### Sections

#### Encabezado
- `Catálogo de fuentes`
- `Vista rápida de las familias y pesos usados en el sitio.`
- `Primaria: font-sans -> Raleway (Google Fonts) + stack por defecto.`
- `Monoespaciada: font-mono -> stack por defecto de Tailwind.`

#### Sans (Raleway)
- Weight values iterated: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
- Each card displays:
  * Label: `font: font-sans -> weight: {valor}`
  * Badge: `Raleway {valor}`
  * Sample sentence: `The quick brown fox salta sobre el perro perezoso.`
  * Sample string: `Aá Bbé Ccé Ddé Éé Ff Gg Hh Ii Jj Kk Ll Mm Nn Ññ Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz — 0123456789`

#### Monoespaciada (font-mono)
- Label text: `font: font-mono`
- Code sample:
  ```ts
  function ejemplo(a: number, b: number) {
    const suma = a + b; // áéíóú ñ Ñ
    return `Resultado: ${suma}`;
  }
  ```

#### Guía de uso
- Bullet list:
  * `Usa font-sans para títulos y cuerpo de texto.`
  * `Usa font-mono solo para código o datos tabulares.`
  * `Puedes ajustar el peso con clases como font-light, font-normal, font-semibold, font-bold.`

#### Títulos por sección
- Rows rendered with title, font, weight, sizes, ref:
  * `Hero (h1 principal)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: text-3xl`, `sm: text-4xl`, `md: text-6xl`, `lg: text-7xl`  -  referencia `src/components/sections/hero/Hero.astro:54`
  * `Servicios (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/services/KeyServices.astro:14`
  * `Industrias (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/areas/KeyAreas.astro:15`
  * `Productos destacados (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/productos/Productos.astro:16`
  * `Innovación (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/proceso/Proceso.astro:18`
  * `Impacto ambiental (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/environment/EnvironmentalImpact.astro:19`
  * `Testimonios (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/testimonials/CustomerTestimonials.astro:16`
  * `CTA (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/cta/GetInvolved.astro:16`
  * `Títulos de tarjetas (Title3)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: text-2xl`  -  referencia `src/components/shared/Title3.astro:12`
  * `Blog índice y tag (h1)`  -  font `Raleway (font-sans)`  -  peso `font-extrabold` (`800`)  -  tamaños `base: text-4xl`, `md: text-5xl`  -  referencia `src/pages/blog/index.astro:16`, `src/pages/blog/tag/[tag].astro:18`
  * `Blog artículo (h1)`  -  font `Raleway (font-sans)`  -  peso `font-extrabold` (`800`)  -  tamaños `base: text-4xl`, `md: text-5xl`  -  referencia `src/layouts/BlogLayout.astro:43`
  * `Subtítulo común (SubTitle2)`  -  font `Raleway (font-sans)`  -  peso `font-extrabold` (`800`)  -  tamaños `base: text-lg`, `md: text-4xl`  -  referencia `src/components/shared/SubTitle2.astro:13`
- Nota al pie: `Nota: Title2 no define tamaño explícito; hereda el tamaño base. En Hero y Blog los tamaños se fijan con utilidades text-* por breakpoint.`

## Page: `/colores`

### SEO
- Title: `Paleta de colores`
- Meta description: `Web Site creado con Astro y TailwindCSS`

### Sections

#### Encabezado
- `Paleta de colores`
- `Muestra de colores definidos en Tailwind (swatch y código HEX).`

#### Paleta
- Cada tarjeta muestra `group.name-label` y la etiqueta `HEX` seguida del valor.
- Grupos y valores:
  * `Base (base)`
    - `base-50` -> `#f9f9f9`
    - `base-100` -> `#efefef`
    - `base-200` -> `#e6e6e6`
    - `base-300` -> `#dbdbdb`
    - `base-400` -> `#d1d1d1`
    - `base-500` -> `#c7c7c7`
    - `base-600` -> `#bdbdbd`
    - `base-700` -> `#b3b3b3`
    - `base-800` -> `#a8a8a8`
    - `base-900` -> `#9e9e9e`
    - `base-950` -> `#949494`
    - `base-DEFAULT` -> `#f9f9f9`
  * `Base (oscuro) (base-dark)`
    - `base-dark-50` -> `#808080`
    - `base-dark-100` -> `#757575`
    - `base-dark-200` -> `#6b6b6b`
    - `base-dark-300` -> `#616161`
    - `base-dark-400` -> `#575757`
    - `base-dark-500` -> `#4d4d4d`
    - `base-dark-600` -> `#424242`
    - `base-dark-700` -> `#383838`
    - `base-dark-800` -> `#2e2e2e`
    - `base-dark-900` -> `#242424`
    - `base-dark-950` -> `#1a1a1a`
    - `base-dark-DEFAULT` -> `#1a1a1a`
  * `Acento (accent)`
    - `accent-50` -> `#ffffff`
    - `accent-100` -> `#c7c7c7`
    - `accent-200` -> `#b3b3b3`
    - `accent-300` -> `#949494`
    - `accent-400` -> `#707070`
    - `accent-500` -> `#545454`
    - `accent-600` -> `#3d3d3d`
    - `accent-700` -> `#292929`
    - `accent-800` -> `#1c1c1c`
    - `accent-900` -> `#141414`
    - `accent-950` -> `#000000`
    - `accent-DEFAULT` -> `#000000`
    - `accent-light` -> `#ffffff`
    - `accent-dark` -> `#000000`
  * `Primario (primary)`
    - `primary-50` -> `#f1fcf1`
    - `primary-100` -> `#e0f9df`
    - `primary-200` -> `#c2f1c1`
    - `primary-300` -> `#92e491`
    - `primary-400` -> `#5acf59`
    - `primary-500` -> `#34b433`
    - `primary-DEFAULT` -> `#228B22`
    - `primary-600` -> `#228b22`
    - `primary-700` -> `#207521`
    - `primary-800` -> `#1e5d1f`
    - `primary-900` -> `#1a4d1b`
    - `primary-950` -> `#092a0b`
  * `Secundario (secondary)`
    - `secondary-50` -> `#edfaff`
    - `secondary-100` -> `#d6f2ff`
    - `secondary-200` -> `#b5eaff`
    - `secondary-300` -> `#83dfff`
    - `secondary-400` -> `#48cbff`
    - `secondary-DEFAULT` -> `#1eadff`
    - `secondary-500` -> `#1eadff`
    - `secondary-600` -> `#068fff`
    - `secondary-700` -> `#007bff`
    - `secondary-800` -> `#085ec5`
    - `secondary-900` -> `#0d519b`
    - `secondary-950` -> `#0e315d`
  * `CTA (cta)`
    - `cta-50` -> `#ffffe7`
    - `cta-100` -> `#feffc1`
    - `cta-200` -> `#fffd86`
    - `cta-300` -> `#fff441`
    - `cta-400` -> `#ffe60d`
    - `cta-DEFAULT` -> `#ffd700`
    - `cta-500` -> `#ffd700`
    - `cta-600` -> `#d19e00`
    - `cta-700` -> `#a67102`
    - `cta-800` -> `#89580a`
    - `cta-900` -> `#74480f`
    - `cta-950` -> `#442604`

## Page: `/blog`

### SEO
- Title: `Blog`
- Meta description: `Web Site creado con Astro y TailwindCSS`

### Sections

#### Cabecera
- Heading: `Blog`
- Intro paragraph: `Noticias, guías y artículos técnicos sobre sopladores y compresores centrífugos.`

#### Filtros de etiquetas
- Default link text: `Todas`
- Tag badges render as `#{tag}`

#### Listado de artículos
- Each card shows:
  * Blog post image (alt is the post `title`)
  * Title (from content collection)
  * Description (from frontmatter)
  * Date formatted via `toLocaleDateString()`

#### Paginación (solo si `totalPages > 1`)
- Aria-labels: `Página anterior`, `Página siguiente`
- Pagination link text:
  * Previous button: `«`
  * Page numbers: `1`, `2`, ...
  * Next button: `»`

## Page: `/blog/page/[page]`

### SEO
- Title format: `Blog · Página {page}`
- Meta description: `Web Site creado con Astro y TailwindCSS`

### Sections
- Heading: `Blog`
- Subtitle: `Página {page} de {totalPages}`
- Tag filter identical to `/blog`
- Card layout identical to `/blog`
- Pagination controls identical (`«`, `Página anterior`, `Página siguiente`), with previous link pointing to `/blog` cuando `page - 1 === 1`

## Page: `/blog/tag/[tag]`

### SEO
- Title format: `Blog · #{tagParam}`

### Sections
- Heading: `#{tagParam}`
- Subtitle: `Artículos etiquetados con “#{tagParam}”.`
- Tag filter identical a `/blog`, destacando la etiqueta activa con `bg-primary text-accent-light border-primary`
- Empty state message: `No hay artículos con esta etiqueta.`

## Blog Article Layout (`src/layouts/BlogLayout.astro`)
- Article heading inherits post `title`
- Optional subtitle prefixes: `Publicado: {fecha}` y `Actualizado: {fecha}`
- Breadcrumb nav text: `Inicio / Blog / {title}`
- Hero image alt usa el `title` del artículo

## Blog Content Collection (`src/content/blog`)

### `primer-articulo.md`
- Frontmatter:
  * `title`: `Qué es un compresor centrífugo?`
  * `description`: `Introducción técnica a los principios de operación, componentes y ventajas de los compresores centrífugos.`
  * `pubDate`: `2025-01-15`
  * `heroImage`: `/images/blog-wind.webp`
  * `tags`: `compresores`, `centrífugo`, `ingeniería`
  * `author`: `Continental Andes Blowers`
- Body content:
  * Heading: `Qué es un compresor centrífugo?`
  * Lead paragraph: `Una guía clara para entender sus principios y ventajas.`
  * Figure:
    - Image: `/images/blog-smart-grid.webp`
    - Alt text: `Esquema moderno de red energética`
    - Caption: `Visualización moderna de sistemas energéticos.`
  * Paragraph: `Los compresores centrífugos son máquinas turbocompresoras que transfieren energía al fluido mediante un **impulsor** de alta velocidad. A continuación se describen sus conceptos fundamentales y ventajas operativas.`
  * `## Principio de operación`
    - Paragraph: `El gas ingresa axialmente al impulsor y se acelera radialmente por la acción de las palas. En el difusor, la velocidad se convierte en presión.`
  * `## Componentes principales`
    - List items: `Impulsor`, `Difusor`, `Carcasa`, `Sello y rodamientos`
  * `## Ventajas clave`
    - List items: `Flujo continuo y estable`, `Menor vibración y mantenimiento`, `Alta eficiencia en rangos de caudal elevados`
  * `## Aplicaciones`
    - Paragraph: `PTAR, biogás, minería e industria de procesos, entre otras.`

### `puesta-en-marcha.md`
- Frontmatter:
  * `title`: `Puesta en marcha segura: checklist esencial`
  * `description`: `Lista de verificación para una puesta en marcha segura y eficiente de sopladores y compresores.`
  * `pubDate`: `2025-01-20`
  * `heroImage`: `/images/blog-solar3.webp`
  * `tags`: `puesta en marcha`, `mantenimiento`, `seguridad`
  * `author`: `Equipo de Servicios`
- Body content:
  * Heading: `Puesta en marcha segura: checklist esencial`
  * Lead paragraph: `Planifique, controle y documente para un arranque sin sorpresas.`
  * Figure:
    - Image: `/images/blog-green.webp`
    - Alt text: `Equipo técnico verificando parámetros`
    - Caption: `Checklist visual de arranque en planta.`
  * Paragraph: `Una puesta en marcha planificada minimiza riesgos y asegura rendimiento desde el primer día.`
  * `## Antes de energizar`
    - List items: `Verifique alineación y fijaciones`, `Revise lubricación y niveles`, `Confirme sentido de giro`
  * `## Pruebas iniciales`
    - List items: `Monitoree vibración y temperatura`, `Ajuste parámetros de operación`, `Registre datos de desempeño`
  * `## Documentación`
    - Paragraph: `Mantenga registros de pruebas y parámetros para optimización y trazabilidad.`

## Image Inventory

| Asset | Used in section(s) |
| --- | --- |
| `/images/logo_dark.png` | Header logo in Navbar |
| `/images/hero-hero3.jpg` | Hero section video poster/background |
| `/images/slider-bg3.webp` | Hero section mobile background override |
| `hero-background-image.jpg` | Defined in Hero data (not directly rendered) |
| `/images/services-solar3.png` | Servicios card `Puesta en Marcha`; Industrias card `Química y Petroquímica` |
| `/images/services-wind.png` | Servicios card `Mantenimiento de Equipos`; Industrias card `Cemento y Materiales` |
| `/images/services-hydro.png` | Servicios card `Contratos de Mantenimiento`; Industrias card `Tratamiento de Aguas Servidas` |
| `/images/services-storage.png` | Servicios card `Ingeniería de Proyectos`; Industrias card `Minería` |
| `/images/services-respuestos_400_533.jpg` | Servicios card `Repuestos` |
| `/images/services-green.png` | Servicios card `Capacitación Técnica`; Industrias card `Pulpa y Papel` |
| `/images/services-smart-grid.png` | Industrias card `Industra Alimentaria` |
| `/images/singlestage_draw.jpg` | Productos/Innovaciones `Compresor Centrífugo Monoetapa` (también definido como `imgGrid`) |
| `/images/innovations-inno-panel.webp` | Productos/Innovaciones `Compresor Centrífugo Multietapa` |
| `/images/innovations-inno-wind.webp` | Productos/Innovaciones `Impulsores de Gas` |
| `innovations-section-image.jpg` | Defined in Productos data (not directly rendered) |
| `/images/testimonials-person1.png` | Testimonios card `Carlos Suárez` |
| `/images/testimonials-person2.png` | Testimonios card `Miguel Urbina` |
| `/images/testimonials-person3.png` | Testimonios card `Vanessa Pajares` |
| `customer-testimonials-image.jpg` | Defined in Testimonios data (not directly rendered) |
| `/images/environment-green-hands.png` | Temporal (`#productos`) section image |
| `/images/featured-solar-person.png` | Productos card `Sopladores Monoetapa` |
| `/images/featured-wind-person.png` | Productos card `Sopladores Multietapa` |
| `/images/featured-amazonas2.png` | Productos card `Soluciones a medida` |
| `/images/cta-green-1.svg` | Defined in Contáctenos data (not currently rendered) |
| `/images/cta-green-2.svg` | Contáctenos card `Oficina Comercial` |
| `/images/cta-green-3.svg` | Contáctenos card `Canales de contacto` |
| `/images/cta-green-4.svg` | Contáctenos card `Bodegas` |
| `get-involved-section-image.jpg` | Defined in Contáctenos data (not directly rendered) |
| `/images/blog-wind.webp` | Blog hero image for `Qué es un compresor centrífugo?` (listing + article) |
| `/images/blog-smart-grid.webp` | Figure in `Qué es un compresor centrífugo?` |
| `/images/blog-solar3.webp` | Blog hero image for `Puesta en marcha segura: checklist esencial` |
| `/images/blog-green.webp` | Figure in `Puesta en marcha segura: checklist esencial` |
