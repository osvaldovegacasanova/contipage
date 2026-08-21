import type { IndustryPage } from "./types";

// NOTE: Images below are PLACEHOLDERS reusing existing site assets
// (flagged with imagePlaceholder: true). Swap for real process photography.
// Process names follow the taxonomy tree and descriptions/bullets the HUB body
// of "HUBS POR INDUSTRIA CONTINENTAL.md" (estructura revisada con Carlos, 2026-08-20).
// Hero, processesHeading and CTA copy are site-authored, pending review by Karina.
// Single-process hub: the alternating module layout renders one module only.

export const petroquimica: IndustryPage = {
  slug: "sopladores-para-industria-petroquimica",
  navLabel: "Industria Petroquímica",
  seoTitle: "Sopladores para Industria Petroquímica | Desulfurización de Gases | Continental Andes",
  metaDescription:
    "Sopladores centrífugos monoetapa Continental Industrie para la industria petroquímica: desulfurización de gases en procesos como la producción de negro de humo (carbon black). Gran tamaño, presión constante y control integrado.",
  hero: {
    eyebrow: "Industrias",
    title: "Sopladores para",
    titleAccent: "Industria Petroquímica",
    intro:
      "Sopladores centrífugos monoetapa de gran tamaño y presión para procesos petroquímicos exigentes. Soluciones confiables y seguras para los sistemas de desulfurización de gases, con sistemas de control integrados.",
    image: "/images/aplicacion_petroquimica.webp",
    alt: "Sopladores centrífugos Continental Industrie para procesos de la industria petroquímica",
    imagePlaceholder: true,
  },
  processesHeading: {
    title: "Procesos donde nuestros",
    titleAccent: "sopladores son clave",
    intro:
      "Los procesos petroquímicos exigen equipos de gran caudal y presión constante. Dimensionamos e integramos el soplador correcto para asegurar continuidad operacional y seguridad.",
  },
  processes: [
    {
      name: "Sopladores para desulfurización de gases",
      description:
        "En procesos como la producción de negro de humo (carbon black), es necesario extraer el alto contenido de azufre de las fracciones más pesadas del petróleo. Los sopladores centrífugos monoetapa Continental Industrie, de gran tamaño y presión, son clave en estos sistemas de desulfurización.",
      highlights: [
        "Caudal de aire variable según demanda",
        "Presión constante",
        "Libre de pulsaciones",
        "Bajo nivel de ruido",
        "Simplicidad mecánica",
        "Alta disponibilidad y confiabilidad",
        "Sistemas de control integrados",
      ],
      image: "/images/singlestage_draw.webp",
      alt: "Soplador centrífugo monoetapa para desulfurización de gases en procesos petroquímicos",
      imagePlaceholder: true,
    },
  ],
  cta: {
    title: "¿Necesita una solución para su planta?",
    description:
      "Nuestro equipo técnico dimensiona e integra el soplador ideal para cada proceso petroquímico. Cuente con soporte, puesta en marcha y repuestos en toda la región andina.",
    buttonText: "Solicitar asesoría técnica",
    buttonHref: "/#contacto",
  },
};
