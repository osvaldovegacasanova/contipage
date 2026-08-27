import type { IndustryPage } from "./types";

// The process image is real photography, sourced from "images/6. PETROQUÍMICA"
// and processed to WebP under public/images/petroquimica/. Only the hero still
// uses a generic asset (flagged with imagePlaceholder: true): that folder ships
// no cover shot, same call as the Biogás, Agua and Celulosa hubs.
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
    bajada: "Control dinámico de presión y caudal para mayor precisión en procesos de alta exigencia.",
    intro:
      "Los procesos petroquímicos de carbon black requieren sopladores de gran tamaño y confiabilidad. En Continental Industrie dimensionamos e integramos el equipo correcto para entregar el caudal, la presión y los sistemas de control que aseguren la continuidad operacional en condiciones exigentes.",
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
      image: "/images/petroquimica/desulfurizacion.webp",
      alt: "Soplador centrífugo monoetapa para desulfurización de gases en procesos petroquímicos",
    },
  ],
  cta: {
    title: "¿Necesita una solución para su planta?",
    description:
      "Nuestro equipo técnico dimensiona e integra el soplador ideal para cada proceso petroquímico. Cuente con soporte, puesta en marcha y repuestos en toda la región andina.",
    buttonText: "Solicitar asesoría técnica",
    buttonHref: "/contacto",
  },
};
