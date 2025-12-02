# Índice de contenidos del sitio Continental Andes

> Este índice reúne todas las frases, leyendas, etiquetas y llamados visibles o definidos en el proyecto. Los acentos y caracteres especiales fueron normalizados tomando como referencia el contexto del contenido.

## 1. Metadatos y elementos globales

### Layout base (`src/layouts/Layout.astro`)
- Título SEO configurable; la página principal usa “Sopladores Centrifugos | Continental Andes Blowers”.
- Meta descripción global: “Sopladores Continental Blowers en Chile y Latinoamérica”.
- Idioma declarado: `lang="es"`.
- Recursos incluidos en cada vista: favicon `/favicon.svg`, Google Fonts `https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap`, hoja `/style/custom.css`.
- El layout inyecta permanentemente el encabezado (Navbar) y el pie (Footer).

### Blog layout (`src/layouts/BlogLayout.astro`)
- Encabezado del artículo muestra el título recibido (h1) y, cuando existe, la descripción (`SubTitle`).
- Línea temporal: “Publicado: {fecha}”, “Actualizado: {fecha}”.
- Migas de pan visibles y en JSON-LD: “Inicio / Blog / {título del artículo}”.
- Galería opcional con la imagen destacada usando `alt={title}`.

## 2. Navegación y elementos persistentes

### Encabezado principal (`src/layouts/Navbar.astro`)
- Elementos de menú en orden: “Home”, “Productos”, “Servicios”, “Proceso”, “Testimonios”, “Misión”, “Artículos”.
- Botón destacado (BtnLink) con texto “Get Started”, apunta a `#cta`.
- Logotipo con `alt="Logo"`.
- Interruptor de tema con etiqueta accesible “cambiar tema”.
- Botón hamburguesa para móviles con etiqueta oculta “togglenav”.

### Pie de página (`src/layouts/Footer.astro`)
- Identidad mostrada como “Continental Andes”.
- Eslogan: “Impulsamos la sostenibilidad mediante soluciones innovadoras para un mañana más verde.”
- Enlaces sociales comparten la etiqueta accesible “enlace social”.
- Columnas:
  - “Empresa”: “Acerca de”, “Blog”, “Empleos”, “Socios”, “Empleos”.
  - “Soporte”: “Precios”, “Guías”, “Preguntas frecuentes”, “Contacto”.
  - “Recursos”: “Reclamos”, “Privacidad”, “Términos”.
- Franja inferior: “© {año} Continental Andes. Todos los derechos reservados (v0.1)” y “Hecho por Pixory”.

### Botón flotante de WhatsApp (`src/components/WhatsAppButton.astro`)
- Etiqueta accesible: “Abrir WhatsApp”.
- Mensaje precargado: “Hola, necesito mas informacion”.

### Textos auxiliares y de accesibilidad
- Placeholders y botones del formulario (`EmailForm`): “tucorreo@ejemplo.com”, botón “Comenzar”.
- Botón de tarjeta de persona en móviles: “Llamar”.
- Etiquetas de los iconos sociales: “enlace social”.
- Paginación del blog usa `aria-label`: “Página anterior” y “Página siguiente”.

## 3. Página principal (`src/pages/index.astro`)

### Hero (`#hero`)
- Mensaje principal en cuatro fragmentos: “Transformamos el”, “Aire”, “”, “en una herramienta.”
- Subtítulos secuenciales: “Más de 45.000 máquinas instaladas a nivel mundial.” / “Somos el soporte de Continental Blowers en Chile” / “y en la Región Andina.”
- Texto de botón definido en datos: “Solicitar asesoría”.

### Productos (`#productos`)
- Encabezado: “Productos”.
- Subtítulo: “Sopladores Centrífugos Monoetapa y Multietapa”.
- Tarjetas:
  1. “Sopladores Monoetapa” — descripción larga sobre compresores radiales tipo TC (caudales 2.500–35.000 m³/h, presión 1,3 bar g, mecanizado 3D, eficiencia >85%) y etiqueta “Productos”.
  2. “Sopladores Multietapa” — texto sobre gama de máquinas 1.000–65.000 m³/h, presiones hasta 1,8 bar, vacío hasta 6.700 mmH₂O.
  3. “Sopladores de Gas” — texto sobre manejo de gases de proceso con operación continua y eficiencia energética.
- Llamado definido en datos: “Consulte por disponibilidad y especificaciones”. Botón previsto: “Ver productos”.

### Servicios (`#servicios`)
- Título: “Servicios”.
- Subtítulo: “Somos el Soporte Oficial de Continental Blowers para la Región Andina: Instalación, mantención y soporte.”
- Párrafo: “Acompañamos todo el ciclo de vida de cada máquina. Garantizamos eficiencia, seguridad y continuidad operacional en cada proyecto.”
- Servicios listados:
  1. “Ingeniería de Proyectos” — “Diseño, fabricación y montaje de sistemas de suministro de aire o gas, control e instrumentación, sistemas de regulación de caudal.”
  2. “Puesta en Marcha” — “Chequeo de montaje y condición inicial de equipos nuevos y reacondicionados, configuración, calibración y ajuste de parámetros de operación.”
  3. “Mantenimiento de Equipos” — “Planes preventivos, predictivos y proactivos para asegurar la disponibilidad y desempeño de sus sopladores.”
  4. “Contratos de Mantenimiento” — “Servicios programados según su necesidad (mensual, trimestral o semestral) para continuidad sin detenciones.”
  5. “Repuestos” — “Disponibilidad de piezas y componentes originales para minimizar tiempos de parada.”
  6. “Capacitación Técnica” — “Formación para personal de operación y mantención enfocada en seguridad y eficiencia.”
- Mensaje de acción definido: “Asegure la continuidad operacional con nuestro soporte experto.” Botón previsto: “Solicitar información.”

### Nosotros (`#nosotros`)
- Título: “Nosotros”.
- Subtítulo: “Somos un equipo líder altamente especializado y con demostrada experiencia para satisfacer los requerimientos de la industria. Capacitamos a tu equipo en la Operación y Mantención de cada planta.”
- Equipo:
  1. “Carlos Suárez” — rol “Ventas” — correo `c.suarez@continentalandes.com` — teléfono “+56 9 9679 4151”.
  2. “Miguel Urbina” — “Repuestos” — `m.urbina@continentalandes.com` — “+56 9 6645 0740”.
  3. “Vanessa Pajares” — “Servicios” — `v.pajares@continentalandes.com` — “+56 9 6659 0216”.
- Botón móvil individual: “Llamar”.

### Industrias (`#industrias`)
- Encabezado: “Industrias”.
- Subtítulo en dos partes: “Aplicaciones en Múltiples Industrias” + “Los equipos Continental Blowers son pieza fundamental en diversos procesos industriales, asegurando eficiencia, confiabilidad y continuidad operacional.”
- Tarjetas:
  1. “Tratamiento de Aguas Servidas” — “Aireación y procesos biológicos en plantas de agua potable y aguas residuales.”
  2. “Minería” — “Suministro de aire para transporte neumático, filtración y procesos metalúrgicos.”
  3. “Industra Alimentaria” — “Aplicaciones sanitarias, aire de proceso y control de atmósferas.”
  4. “Química y Petroquímica” — “Aireación, agitación y soporte a reacciones y tratamientos de gases.”
  5. “Cemento y Materiales” — “Transporte neumático y fluidización en silos y hornos.”
  6. “Pulpa y Papel” — “Aire de procesos, secado y soporte a líneas de producción.”

### Proceso (`#proceso`)
- Encabezado: “Proceso”.
- Subtítulo: “Sopladores Centrífugos Monoetapa y Multietapa”.
- Bloques descriptivos:
  1. “Compresor Centrífugo Monoetapa” — texto en dos párrafos sobre capacidad 2.500–35.000 m³/h, presión 1,3 bar g, tolerancias de precisión y mecanizado 3D.
  2. “Compresor Centrífugo Multietapa” — descripción sobre oferta completa 1.000–65.000 m³/h, presiones hasta 1,8 bar o vacío hasta 6.700 mmH₂O.
  3. “Sopladores de Gas” — “Nuestro catálogo incluye soluciones para manejo de gases de proceso, con configuraciones que permiten trabajar en continuo manteniendo estabilidad operativa y eficiencia energética, incluso en ambientes exigentes.”
- Llamado definido: “Solicite una puesta en marcha con nuestro equipo.” Botón: “Solicitar asesoría.”

### Misión (`#temporal`, EnvironmentalImpact)
- Título de sección: “Misión”.
- Subtítulo: “Continental Andes Blowers en la Región Andina”.
- Descripción multilinea: “Somos la oficina de Continental Industrie para Chile, Perú, Argentina, Bolivia y Ecuador. / Más de 25 años de experiencia nos permiten comprender las condiciones específicas de cada industria y proyecto.”
- Tabla de puntos:
  - “Cobertura: Chile, Perú, Argentina, Bolivia, Ecuador”.
  - “Más de 25 años en la región”.
  - “Procesos: PTAR, biogás, minería e industria”.
  - “Objetivos: eficiencia, seguridad y continuidad operacional”.
- Botón visible: “Contactar”. Texto de apoyo en datos: “Conózcanos y cuente con nuestro soporte”.

### Contáctenos (`#cta`, GetInvolved)
- Título: “Contáctenos”.
- Subtítulo: “Nos contactaremos con usted a la brevedad”.
- Tarjetas:
  1. “Oficina Comercial” — “Avenida Italia 850, Providencia, Santiago, Chile.”
  2. “Bodegas” — “Pdte. Jorge Alessandri Rodríguez 11491, San Bernardo.”
  3. “Canales de contacto” — “Tel/Fax: (+56 2) 2 461 94 18 • cba@continentalandes.com”.
- Formulario:
  - Placeholder del campo: “tucorreo@ejemplo.com”.
  - Botón: “Comenzar”.
- Textos definidos adicionales: “Envíenos su consulta técnica o comercial” y botón “Escríbanos”.

### Testimonios (componente disponible en `src/components/sections/testimonials`)
- Título: “Testimonios”.
- Subtítulo: “Profesionales con amplia experiencia en la industria”.
- Tarjetas:
  1. “Carlos Suárez” — “Ventas” — cita “c.suarez@continentalandes.com • +56 9 9679 4151”.
  2. “Miguel Urbina” — “Repuestos” — cita “m.urbina@continentalandes.com • +56 9 6645 0740”.
  3. “Vanessa Pajares” — “Servicios” — cita “v.pajares@continentalandes.com • +56 9 6659 0216”.
- Llamado configurado: “Contácte a nuestro equipo para asesoría técnica”. Botón: “Contactar.”

## 4. Blog y listados

### Índice principal (`/blog`)
- Encabezado: “Blog”.
- Bajada: “Noticias, guías y artículos técnicos sobre sopladores y compresores centrífugos.”
- Selector de etiquetas: chip “Todas” + chips dinámicos `#{tag}`.
- Tarjetas muestran título del post, descripción, fecha `toLocaleDateString()`.
- Paginación (cuando aplica):
  - Botones con flechas « y » y `aria-label` “Página anterior” / “Página siguiente”.
  - Números de página; el botón activo muestra fondo primario.

### Paginación (`/blog/page/[page]`)
- Encabezado repite “Blog”.
- Párrafo informativo: “Página {page} de {totalPages}”.

### Listado por etiqueta (`/blog/tag/[tag]`)
- Encabezado: “#{tag}”.
- Subtítulo: “Artículos etiquetados con “#{tag}”.” (comillas curvas).
- Mensajes:
  - Chip “Todas” + chips `#{tag}` con estilo activo.
  - Cuando no hay resultados: “No hay artículos con esta etiqueta.”

### Plantilla de artículo (`/blog/[slug]`)
- Cada artículo hereda el layout comentado en la sección 1 (breadcrumbs, fechas, etc.).

### Etiquetas disponibles en el contenido actual
- `compresores`, `centrífugo`, `ingeniería`, `puesta en marcha`, `mantenimiento`, `seguridad`.

## 5. Artículos publicados (`src/content/blog`)

### “¿Qué es un compresor centrífugo?”
- Descripción: “Introducción técnica a los principios de operación, componentes y ventajas de los compresores centrífugos.”
- Autor: “Continental Andes Blowers”.
- Cuerpo:
  - Título repetido como h1.
  - Subtítulo destacado: “Una guía clara para entender sus principios y ventajas.”
  - Pie de figura: “Visualización moderna de sistemas energéticos.”
  - Párrafo inicial: “Los compresores centrífugos son máquinas turbocompresoras que transfieren energía al fluido mediante un impulsor de alta velocidad. A continuación se describen sus conceptos fundamentales y ventajas operativas.”
  - Sección “Principio de operación”: “El gas ingresa axialmente al impulsor y se acelera radialmente por la acción de las palas. En el difusor, la velocidad se convierte en presión.”
  - Sección “Componentes principales”: lista “Impulsor”, “Difusor”, “Carcasa”, “Sello y rodamientos.”
  - Sección “Ventajas clave”:
    - “Flujo continuo y estable.”
    - “Menor vibración y mantenimiento.”
    - “Alta eficiencia en rangos de caudal elevados.”
  - Sección “Aplicaciones”: “PTAR, biogás, minería e industria de procesos, entre otras.”

### “Puesta en marcha segura: checklist esencial”
- Descripción: “Lista de verificación para una puesta en marcha segura y eficiente de sopladores y compresores.”
- Autor: “Equipo de Servicios”.
- Cuerpo:
  - H1 homónimo.
  - Subtítulo: “Planifique, controle y documente para un arranque sin sorpresas.”
  - Pie de figura: “Checklist visual de arranque en planta.”
  - Introducción: “Una puesta en marcha planificada minimiza riesgos y asegura rendimiento desde el primer día.”
  - Sección “Antes de energizar”: “Verifique alineación y fijaciones.” / “Revise lubricación y niveles.” / “Confirme sentido de giro.”
  - Sección “Pruebas iniciales”: “Monitoree vibración y temperatura.” / “Ajuste parámetros de operación.” / “Registre datos de desempeño.”
  - Sección “Documentación”: “Mantenga registros de pruebas y parámetros para optimización y trazabilidad.”

## 6. Páginas del sistema de diseño

### Paleta de colores (`/colores`)
- Encabezado: “Paleta de colores”.
- Descripción: “Muestra de colores definidos en Tailwind (swatch y código HEX).”
- Para cada grupo se muestra `group.title (group.name)` y tarjetas etiquetadas como `{group.name}-{s.label}` más el bloque `HEX`:
  - Base (`base`): 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, DEFAULT.
  - Base (oscuro) (`base-dark`): 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, DEFAULT.
  - Acento (`accent`): 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, DEFAULT, `accent-light`, `accent-dark`.
  - Primario (`primary`): 50, 100, 200, 300, 400, 500, DEFAULT, 600, 700, 800, 900, 950.
  - Secundario (`secondary`): 50, 100, 200, 300, 400, DEFAULT, 500, 600, 700, 800, 900, 950.
  - CTA (`cta`): 50, 100, 200, 300, 400, DEFAULT, 500, 600, 700, 800, 900, 950.
- Cada tarjeta incluye la etiqueta “HEX” y el valor del color en código hexadecimal.

### Catálogo de fuentes (`/fonts`)
- Título: “Catálogo de fuentes”.
- Párrafos introductorios:
  - “Vista rápida de las familias y pesos usados en el sitio.”
  - “Primaria: `font-sans` → Raleway (Google Fonts) + stack por defecto.”
  - “Monoespaciada: `font-mono` → stack por defecto de Tailwind.”
  - “Vista rápida de las familias y pesos usados en el sitio.” (párrafo principal) + “Nota: Title2 no define tamaño explícito; hereda el tamaño base...”
- Sección “Sans (Raleway)” muestra por peso:
  - Texto auxiliar: “font: `font-sans` → weight: `{peso}`”.
  - Línea de muestra: “The quick brown fox salta sobre el perro perezoso.”
  - Cadena de caracteres de control: `Aǭ BbǸ CcǸ DdǸ �%Ǹ Ff Gg Hh Ii Jj Kk Ll Mm Nn �'�� Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz �?" 0123456789`.
- Sección “Monoespaciada (font-mono)”:
  - Texto: “font: `font-mono`”.
  - Código de ejemplo:
    ```
    function ejemplo(a: number, b: number) {
      const suma = a + b; // ǭǸ����ǧ �� �'
      return `Resultado: ${suma}`;
    }
    ```
- Sección “Guía de uso”:
  - “Usa `font-sans` para títulos y cuerpo de texto.”
  - “Usa `font-mono` solo para código o datos tabulares.”
  - “Puedes ajustar el peso con clases como `font-light`, `font-normal`, `font-semibold`, `font-bold`.”
- Sección “Títulos por sección” (filas renderizadas):
  1. “Hero (h1 principal)” — “Raleway (font-sans)” — `font-bold (700)` — tamaños `text-3xl / text-4xl / text-6xl / text-7xl`.
  2. “Servicios (Title2)” — “Raleway (font-sans)” — `font-bold (700)` — “inherit”.
  3. “Industrias (Title2)” — igual configuración `font-bold (700)`.
  4. “Productos (Title2)” — igual.
  5. “Proceso (Title2)” — igual.
  6. “Impacto ambiental (Title2)” — igual.
  7. “Testimonios (Title2)” — igual.
  8. “CTA (Title2)” — igual.
  9. “Títulos de tarjetas (Title3)” — `font-bold (700)` — tamaño `text-2xl`.
  10. “Blog índice y tag (h1)” — `font-extrabold (800)` — `text-4xl` / `text-5xl`.
  11. “Blog artículo (h1)” — `font-extrabold (800)` — `text-4xl` / `text-5xl`.
  12. “Subtítulo común (SubTitle2)” — `font-extrabold (800)` — `text-lg` / `text-4xl`.
- Nota final: “Title2 no define tamaño explícito; hereda el tamaño base. En Hero y Blog los tamaños se fijan con utilidades `text-*` por breakpoint.”

### Muestrario de separadores (`/separadores`)
- Título: “Separadores de Sección”.
- Descripción: “Opciones de color para texto, líneas y fondos que podemos usar en las etiquetas que separan secciones.”
- Variantes descritas:
  1. “Clásico” — “Uso actual con tonos neutros, ideal para fondos claros.”
  2. “Primario” — “Azul corporativo con alto contraste para secciones clave.”
  3. “Secundario” — “Verde de soporte, funciona bien con contenidos sobre sostenibilidad.”
  4. “Oscuro” — “Pensado para secciones en modo oscuro o fondos fotográficos.”
  5. “Minimal” — “Sin fondo, solo borde sutil y texto desaturado.”
- Etiquetas mostradas repetidamente en los ejemplos: “Servicios”, “Industrias”, “Productos”, “Testimonios”, “Contáctenos”.
- Detalle plegable por variante:
  - Encabezado: “Clases utilizadas”.
  - Campos: “Contenedor: {clases}”, “Texto: {clase}”, “Línea decorativa: {clase}”, “Fondo tarjeta: {clase}”.
