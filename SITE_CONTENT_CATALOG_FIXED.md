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
- Tagline paragraph: `Impulsamos la sostenibilidad mediante soluciones innovadoras para un ma��ana mǭs verde.`
- Social icons reuse sr-only text: `enlace social`
- Navigation columns:
  * `Empresa`: `Acerca de`, `Blog`, `Empleos`, `Socios`, `Empleos`
  * `Soluciones`: `Marketing`, `Anal��tica`, `Comercio`, `Informaci��n`
  * `Soporte`: `Precios`, `Gu��as`, `Preguntas frecuentes`, `Contacto`
  * `Recursos`: `Reclamos`, `Privacidad`, `TǸrminos`
- Footer closing strip text:
  * `&copy; <year> Continental Andes. Todos los derechos reservados`
  * `Hecho por vbartalis` (link target `https://github.com/vbartalis`)

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
- Title: `Sopladores Centr��fugos | Continental Andes Blowers`
- Meta description: `Web Site creado con Astro y TailwindCSS`

### Sections

#### Hero (`#hero`)
- Headline sequence:
  * `Transformamos el`
  * `Aire`
  * `` (empty `headline3`)
  * `en una herramienta.`
- Subheading lines:
  * `Mǭs de 45.000 mǭquinas instaladas a nivel mundial.`
  * `Sopladores Centr��fugos Monoetapa y Multietapa.`
  * `` (empty `subheading3`)
- Primary button: `Solicitar asesor��a`
- Assets:
  * Video poster/background: `/images/hero-hero3.jpg`
  * Mobile background override: `/images/slider-bg3.webp`
  * Data constant `backgroundImage`: `hero-background-image.jpg`
  * Lazy-load video sources derived from `/videos/parte1.webm` and `/videos/parte1.mp4`

#### Servicios (`#servicios`)
- Section title: `Servicios`
- Subheading copy:
  * `Acompa��amos todo el ciclo de vida de cada mǭquina:`
  * `Instalaci��n, mantenci��n y soporte.`
  * `Garantizamos eficiencia, seguridad y continuidad operacional en cada proyecto.`
- Service cards (alt text `Imagen del servicio`):
  1. `Puesta en Marcha`  -  `Chequeo de montaje y condici��n inicial, configuraci��n, calibraci��n y ajuste de parǭmetros de operaci��n para equipos nuevos o reacondicionados.`  -  image `/images/services-solar3.png`
  2. `Mantenimiento de Equipos`  -  `Planes preventivos, predictivos y proactivos para asegurar la disponibilidad y desempe��o de sus sopladores.`  -  image `/images/services-wind.png`
  3. `Contratos de Mantenimiento`  -  `Servicios programados segǧn su necesidad (mensual, trimestral o semestral) para continuidad sin detenciones.`  -  image `/images/services-hydro.png`
  4. `Ingenier��a de Proyectos`  -  `Dise��o, fabricaci��n y montaje de sistemas de aire o gas, control e instrumentaci��n y regulaci��n de caudal.`  -  image `/images/services-storage.png`
  5. `Repuestos`  -  `Disponibilidad de piezas y componentes originales para minimizar tiempos de parada.`  -  image `/images/services-respuestos_400_533.jpg`
  6. `Capacitaci��n TǸcnica`  -  `Formaci��n para personal de operaci��n y mantenci��n enfocada en seguridad y eficiencia.`  -  image `/images/services-green.png`
- Unused data strings: call-to-action `Asegure la continuidad operacional con nuestro soporte experto.`, button label `Solicitar informaci��n`

#### Industrias (`#industrias`)
- Section title: `Industrias`
- Subheading:
  * `Aplicaciones en `
  * `mǧltiples industrias`
  * `Los equipos Continental Blowers son pieza fundamental en diversos procesos industriales, asegurando eficiencia, confiabilidad y continuidad operacional.`
- Area cards (alt text `Imagen del servicio`):
  1. `Tratamiento de Aguas Servidas`  -  `Aireaci��n y procesos biol��gicos en plantas de agua potable y aguas residuales.`  -  image `/images/services-hydro.png`
  2. `Miner��a`  -  `Suministro de aire para transporte neumǭtico, filtraci��n y procesos metalǧrgicos.`  -  image `/images/services-storage.png`
  3. `Industra Alimentaria`  -  `Aplicaciones sanitarias, aire de proceso y control de atm��sferas.`  -  image `/images/services-smart-grid.png`
  4. `Qu��mica y Petroqu��mica`  -  `Aireaci��n, agitaci��n y soporte a reacciones y tratamientos de gases.`  -  image `/images/services-solar3.png`
  5. `Cemento y Materiales`  -  `Transporte neumǭtico y fluidizaci��n en silos y hornos.`  -  image `/images/services-wind.png`
  6. `Pulpa y Papel`  -  `Aire de procesos, secado y soporte a l��neas de producci��n.`  -  image `/images/services-green.png`

#### Productos (`#innovacion`)
- Section title: `Productos`
- Subheading lines:
  * `Sopladores Centr�fugos`
  * ` Monoetapa y Multietapa`
- Innovations (images rendered via `LazyImage` with alt `banner image`):
  1. `Compresor Centr�fugo Monoetapa`
     ```
     Los compresores radiales tipo TC de Continental Industrie son equipos de flujo modernos para la compresi�n de grandes cantidades de aire o gas, desde 2,500 hasta 35,000 m3/h, con una presi�n de hasta 1,3 bar g.
Gracias a las tolerancias de alta precisi�n y al control continuo de los par�metros mediante la aplicaci�n de nuevas t�cnicas de tecnolog�a aeroespacial, el mecanizado 3D de las palas del impulsor asegura una alta eficiencia de compresi�n (m�s del 85%) y un alto rendimiento general.
     ```
     Visual: `/images/singlestage_draw.jpg`
  2. `Compresor Centr�fugo Multietapa`  -  `Como resultado de nuestra preocupaci�n por mejorar nuestro desempe�o e invirtiendo gran parte de nuestros recursos en la investigaci�n, Continental Industrie puede ofrecerle una gama completa de m�quinas, que pueden suministrar desde 1.000 a 65.000 m3/hr de aire seco, limpio y sin pulsaciones alcanzando presiones relativas de hasta 1,8 bares o en vac�o de hasta 6.700 mmH2O (WG).`  -  visual `/images/innovations-inno-panel.webp`
  3. `Impulsores de Gas`  -  `Como resultado de nuestra preocupaci�n por mejorar nuestro desempe�o e invirtiendo gran parte de nuestros recursos en la investigaci�n, Continental Industrie puede ofrecerle una gama completa de m�quinas, que pueden suministrar desde 1.000 a 65.000 m3/hr de aire seco, limpio y sin pulsaciones alcanzando presiones relativas de hasta 1,8 bares o en vac�o de hasta 6.700 mmH2O (WG).`  -  visual `/images/innovations-inno-wind.webp`
- Unused data strings: call-to-action `Solicite una puesta en marcha con nuestro equipo`, button label `Solicitar asesor�a`, visual string `innovations-section-image.jpg`

#### Testimonios (`#testimonios`)
- Section title: `Testimonios`
- Subheading lines:
  * `Profesionales con amplia`
  * ` experiencia en la industria`
- Testimonials (card alt `profile picture`):
  1. `Carlos Suǭrez`  -  occupation `Ventas`  -  quote `"c.suarez@continentalandes.com �� +56 9 9679 4151"`  -  image `/images/testimonials-person1.png`
  2. `Miguel Urbina`  -  occupation `Repuestos`  -  quote `"m.urbina@continentalandes.com �� +56 9 6645 0740"`  -  image `/images/testimonials-person2.png`
  3. `Vanessa Pajares`  -  occupation `Servicios`  -  quote `"v.pajares@continentalandes.com �� +56 9 6659 0216"`  -  image `/images/testimonials-person3.png`
- Unused data strings: call-to-action `Contǭcte a nuestro equipo para asesor��a tǸcnica`, button label `Contactar`, visual string `customer-testimonials-image.jpg`

#### Temporal (`#productos`)
- Section title: `Temporal`
- Subheading lines:
  * `Continental Andes Blowers en la`
  * ` Regi��n Andina`
- Body copy:
  ```
  Somos la oficina de Continental Industrie para Chile, Perǧ, Argentina, Bolivia y Ecuador.
Mǭs de 25 a��os de experiencia nos permiten comprender las condiciones espec��ficas de cada industria y proyecto.
  ```
- Impact list (rendered with leading checkmark icon):
  * `Cobertura: Chile, Perǧ, Argentina, Bolivia, Ecuador`
  * `+25 a��os en la regi��n`
  * `Procesos: PTAR, biogǭs, miner��a e industria`
  * `Objetivos: eficiencia, seguridad y continuidad operacional`
- Primary button: `Contactar`
- Unused data string: call-to-action `Con��zcanos y cuente con nuestro soporte`
- Visual: `/images/environment-green-hands.png` (alt `impacto ambiental`)

#### Articulos (`#articulos`)
- Section title: `Productos`
- Subheading lines:
  * `Sopladores centr��fugos `
  * `monoetapa y multietapa`
- Project cards (alt `Imagen del proyecto`):
  1. `Sopladores Monoetapa`  -  `Equipos compactos y eficientes para diversas aplicaciones industriales. Ficha tǸcnica disponible en nuestro sitio web.`  -  location label `Regi��n andina`  -  image `/images/featured-solar-person.png`
  2. `Sopladores Multietapa`  -  `Alto rendimiento y confiabilidad para mayores demandas de caudal y presi��n. Consulte la ficha tǸcnica en l��nea.`  -  location `Regi��n andina`  -  image `/images/featured-wind-person.png`
  3. `Soluciones a medida`  -  `Dise��o y suministro de sistemas completos de aire o gas, control e instrumentaci��n segǧn requerimientos.`  -  location `Proyectos en LatinoamǸrica`  -  image `/images/featured-amazonas2.png`
- Card button text: `Leer mǭs`
- Unused data strings: call-to-action `Consulte por disponibilidad y especificaciones`, button label `Ver productos`

#### Contǭctenos (`#cta`)
- Section title: `Contǭctenos`
- Subheading lines:
  * `Nos contactaremos `
  * `con usted a la brevedad`
- Initiatives (icon images rendered with empty alt):
  1. `Oficina Comercial`  -  `Avenida Italia 850, Providencia, Santiago, Chile.`  -  icon `/images/cta-green-2.svg`
  2. `Bodegas`  -  `Pdte. Jorge Alessandri Rodr��guez 11491, San Bernardo.`  -  icon `/images/cta-green-4.svg`
  3. `Canales de contacto`  -  `Tel/Fax: (+56 2) 2 461 94 18 �� cba@continentalandes.com`  -  icon `/images/cta-green-3.svg`
- Email form:
  * Placeholder: `tucorreo@ejemplo.com`
  * Submit button (desktop text): `Comenzar`
  * Mobile-only icon button (no readable text)
- Unused data strings: call-to-action `Env��enos su consulta tǸcnica o comercial`, button label `Escr��banos`, visual string `get-involved-section-image.jpg`
- Additional asset defined but unused: `/images/cta-green-1.svg`

## Page: `/fonts`

### SEO
- Title: `Catǭlogo de fuentes`
- Meta description: `Web Site creado con Astro y TailwindCSS`

### Sections

#### Encabezado
- `Catǭlogo de fuentes`
- `Vista rǭpida de las familias y pesos usados en el sitio.`
- `Primaria: font-sans -> Raleway (Google Fonts) + stack por defecto.`
- `Monoespaciada: font-mono -> stack por defecto de Tailwind.`

#### Sans (Raleway)
- Weight values iterated: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
- Each card displays:
  * Label: `font: font-sans -> weight: {valor}`
  * Badge: `Raleway {valor}`
  * Sample sentence: `The quick brown fox salta sobre el perro perezoso.`
  * Sample string: `Aǭ BbǸ CcǸ DdǸ �%Ǹ Ff Gg Hh Ii Jj Kk Ll Mm Nn �'�� Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz �?" 0123456789`

#### Monoespaciada (font-mono)
- Label text: `font: font-mono`
- Code sample:
  ```ts
  function ejemplo(a: number, b: number) {
    const suma = a + b; // ǭǸ����ǧ �� �'
    return `Resultado: ${suma}`;
  }
  ```

#### Gu��a de uso
- Bullet list:
  * `Usa font-sans para t��tulos y cuerpo de texto.`
  * `Usa font-mono solo para c��digo o datos tabulares.`
  * `Puedes ajustar el peso con clases como font-light, font-normal, font-semibold, font-bold.`

#### T��tulos por secci��n
- Rows rendered with title, font, weight, sizes, ref:
  * `Hero (h1 principal)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: text-3xl`, `sm: text-4xl`, `md: text-6xl`, `lg: text-7xl`  -  referencia `src/components/sections/hero/Hero.astro:54`
  * `Servicios (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/services/KeyServices.astro:14`
  * `Industrias (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/areas/KeyAreas.astro:15`
  * `Productos destacados (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/productos/Productos.astro:16`
  * `Innovaci��n (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/proceso/Proceso.astro:18`
  * `Impacto ambiental (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/environment/EnvironmentalImpact.astro:19`
  * `Testimonios (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/testimonials/CustomerTestimonials.astro:16`
  * `CTA (Title2)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: inherit (sin text-*)`  -  referencia `src/components/sections/cta/GetInvolved.astro:16`
  * `T��tulos de tarjetas (Title3)`  -  font `Raleway (font-sans)`  -  peso `font-bold` (`700`)  -  tamaños `base: text-2xl`  -  referencia `src/components/shared/Title3.astro:12`
  * `Blog ��ndice y tag (h1)`  -  font `Raleway (font-sans)`  -  peso `font-extrabold` (`800`)  -  tamaños `base: text-4xl`, `md: text-5xl`  -  referencia `src/pages/blog/index.astro:16`, `src/pages/blog/tag/[tag].astro:18`
  * `Blog art��culo (h1)`  -  font `Raleway (font-sans)`  -  peso `font-extrabold` (`800`)  -  tamaños `base: text-4xl`, `md: text-5xl`  -  referencia `src/layouts/BlogLayout.astro:43`
  * `Subt��tulo comǧn (SubTitle2)`  -  font `Raleway (font-sans)`  -  peso `font-extrabold` (`800`)  -  tamaños `base: text-lg`, `md: text-4xl`  -  referencia `src/components/shared/SubTitle2.astro:13`
- Nota al pie: `Nota: Title2 no define tama��o expl��cito; hereda el tama��o base. En Hero y Blog los tama��os se fijan con utilidades text-* por breakpoint.`

## Page: `/colores`

### SEO
- Title: `Paleta de colores`
- Meta description: `Web Site creado con Astro y TailwindCSS`

### Sections

#### Encabezado
- `Paleta de colores`
- `Muestra de colores definidos en Tailwind (swatch y c��digo HEX).`

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
- Intro paragraph: `Noticias, gu��as y art��culos tǸcnicos sobre sopladores y compresores centr��fugos.`

#### Filtros de etiquetas
- Default link text: `Todas`
- Tag badges render as `#{tag}`

#### Listado de art��culos
- Each card shows:
  * Blog post image (alt is the post `title`)
  * Title (from content collection)
  * Description (from frontmatter)
  * Date formatted via `toLocaleDateString()`

#### Paginaci��n (solo si `totalPages > 1`)
- Aria-labels: `Pǭgina anterior`, `Pǭgina siguiente`
- Pagination link text:
  * Previous button: `��`
  * Page numbers: `1`, `2`, ...
  * Next button: `��`

## Page: `/blog/page/[page]`

### SEO
- Title format: `Blog �� Pǭgina {page}`
- Meta description: `Web Site creado con Astro y TailwindCSS`

### Sections
- Heading: `Blog`
- Subtitle: `Pǭgina {page} de {totalPages}`
- Tag filter identical to `/blog`
- Card layout identical to `/blog`
- Pagination controls identical (`��`, `Pǭgina anterior`, `Pǭgina siguiente`), with previous link pointing to `/blog` cuando `page - 1 === 1`

## Page: `/blog/tag/[tag]`

### SEO
- Title format: `Blog �� #{tagParam}`

### Sections
- Heading: `#{tagParam}`
- Subtitle: `Art��culos etiquetados con �?o{tagParam}�??.`
- Tag filter identical a `/blog`, destacando la etiqueta activa con `bg-primary text-accent-light border-primary`
- Empty state message: `No hay art��culos con esta etiqueta.`

## Blog Article Layout (`src/layouts/BlogLayout.astro`)
- Article heading inherits post `title`
- Optional subtitle prefixes: `Publicado: {fecha}` y `Actualizado: {fecha}`
- Breadcrumb nav text: `Inicio / Blog / {title}`
- Hero image alt usa el `title` del art��culo

## Blog Content Collection (`src/content/blog`)

### `primer-articulo.md`
- Frontmatter:
  * `title`: `��QuǸ es un compresor centr��fugo?`
  * `description`: `Introducci��n tǸcnica a los principios de operaci��n, componentes y ventajas de los compresores centr��fugos.`
  * `pubDate`: `2025-01-15`
  * `heroImage`: `/images/blog-wind.webp`
  * `tags`: `compresores`, `centr��fugo`, `ingenier��a`
  * `author`: `Continental Andes Blowers`
- Body content:
  * Heading: `��QuǸ es un compresor centr��fugo?`
  * Lead paragraph: `Una gu��a clara para entender sus principios y ventajas.`
  * Figure:
    - Image: `/images/blog-smart-grid.webp`
    - Alt text: `Esquema moderno de red energǸtica`
    - Caption: `Visualizaci��n moderna de sistemas energǸticos.`
  * Paragraph: `Los compresores centr��fugos son mǭquinas turbocompresoras que transfieren energ��a al fluido mediante un **impulsor** de alta velocidad. A continuaci��n se describen sus conceptos fundamentales y ventajas operativas.`
  * `## Principio de operaci��n`
    - Paragraph: `El gas ingresa axialmente al impulsor y se acelera radialmente por la acci��n de las palas. En el difusor, la velocidad se convierte en presi��n.`
  * `## Componentes principales`
    - List items: `Impulsor`, `Difusor`, `Carcasa`, `Sello y rodamientos`
  * `## Ventajas clave`
    - List items: `Flujo continuo y estable`, `Menor vibraci��n y mantenimiento`, `Alta eficiencia en rangos de caudal elevados`
  * `## Aplicaciones`
    - Paragraph: `PTAR, biogǭs, miner��a e industria de procesos, entre otras.`

### `puesta-en-marcha.md`
- Frontmatter:
  * `title`: `Puesta en marcha segura: checklist esencial`
  * `description`: `Lista de verificaci��n para una puesta en marcha segura y eficiente de sopladores y compresores.`
  * `pubDate`: `2025-01-20`
  * `heroImage`: `/images/blog-solar3.webp`
  * `tags`: `puesta en marcha`, `mantenimiento`, `seguridad`
  * `author`: `Equipo de Servicios`
- Body content:
  * Heading: `Puesta en marcha segura: checklist esencial`
  * Lead paragraph: `Planifique, controle y documente para un arranque sin sorpresas.`
  * Figure:
    - Image: `/images/blog-green.webp`
    - Alt text: `Equipo tǸcnico verificando parǭmetros`
    - Caption: `Checklist visual de arranque en planta.`
  * Paragraph: `Una puesta en marcha planificada minimiza riesgos y asegura rendimiento desde el primer d��a.`
  * `## Antes de energizar`
    - List items: `Verifique alineaci��n y fijaciones`, `Revise lubricaci��n y niveles`, `Confirme sentido de giro`
  * `## Pruebas iniciales`
    - List items: `Monitoree vibraci��n y temperatura`, `Ajuste parǭmetros de operaci��n`, `Registre datos de desempe��o`
  * `## Documentaci��n`
    - Paragraph: `Mantenga registros de pruebas y parǭmetros para optimizaci��n y trazabilidad.`

## Image Inventory

| Asset | Used in section(s) |
| --- | --- |
| `/images/logo_dark.png` | Header logo in Navbar |
| `/images/hero-hero3.jpg` | Hero section video poster/background |
| `/images/slider-bg3.webp` | Hero section mobile background override |
| `hero-background-image.jpg` | Defined in Hero data (not directly rendered) |
| `/images/services-solar3.png` | Servicios card `Puesta en Marcha`; Industrias card `Qu��mica y Petroqu��mica` |
| `/images/services-wind.png` | Servicios card `Mantenimiento de Equipos`; Industrias card `Cemento y Materiales` |
| `/images/services-hydro.png` | Servicios card `Contratos de Mantenimiento`; Industrias card `Tratamiento de Aguas Servidas` |
| `/images/services-storage.png` | Servicios card `Ingenier��a de Proyectos`; Industrias card `Miner��a` |
| `/images/services-respuestos_400_533.jpg` | Servicios card `Repuestos` |
| `/images/services-green.png` | Servicios card `Capacitaci��n TǸcnica`; Industrias card `Pulpa y Papel` |
| `/images/services-smart-grid.png` | Industrias card `Industra Alimentaria` |
| `/images/singlestage_draw.jpg` | Productos/Innovaciones `Compresor Centr�fugo Monoetapa` (también definido como `imgGrid`) |
| `/images/innovations-inno-panel.webp` | Productos/Innovaciones `Compresor Centr�fugo Multietapa` |
| `/images/innovations-inno-wind.webp` | Productos/Innovaciones `Impulsores de Gas` |
| `innovations-section-image.jpg` | Defined in Productos data (not directly rendered) |
| `/images/testimonials-person1.png` | Testimonios card `Carlos Suǭrez` |
| `/images/testimonials-person2.png` | Testimonios card `Miguel Urbina` |
| `/images/testimonials-person3.png` | Testimonios card `Vanessa Pajares` |
| `customer-testimonials-image.jpg` | Defined in Testimonios data (not directly rendered) |
| `/images/environment-green-hands.png` | Temporal (`#productos`) section image |
| `/images/featured-solar-person.png` | Articulos card `Sopladores Monoetapa` |
| `/images/featured-wind-person.png` | Articulos card `Sopladores Multietapa` |
| `/images/featured-amazonas2.png` | Articulos card `Soluciones a medida` |
| `/images/cta-green-1.svg` | Defined in Contǭctenos data (not currently rendered) |
| `/images/cta-green-2.svg` | Contǭctenos card `Oficina Comercial` |
| `/images/cta-green-3.svg` | Contǭctenos card `Canales de contacto` |
| `/images/cta-green-4.svg` | Contǭctenos card `Bodegas` |
| `get-involved-section-image.jpg` | Defined in Contǭctenos data (not directly rendered) |
| `/images/blog-wind.webp` | Blog hero image for `��QuǸ es un compresor centr��fugo?` (listing + article) |
| `/images/blog-smart-grid.webp` | Figure in `��QuǸ es un compresor centr��fugo?` |
| `/images/blog-solar3.webp` | Blog hero image for `Puesta en marcha segura: checklist esencial` |
| `/images/blog-green.webp` | Figure in `Puesta en marcha segura: checklist esencial` |
