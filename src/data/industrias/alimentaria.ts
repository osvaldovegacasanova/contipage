import type { IndustryPage } from "./types";

// NOTE: Images below are PLACEHOLDERS reusing existing site assets
// (flagged with imagePlaceholder: true). Swap for real process photography.
// Process names follow the taxonomy tree and descriptions/bullets the HUB body
// of "HUBS POR INDUSTRIA CONTINENTAL.md" (estructura revisada con Carlos, 2026-08-20).
// Hero, processesHeading and CTA copy are site-authored, pending review by Karina.

export const alimentaria: IndustryPage = {
  slug: "sopladores-para-industria-alimentaria",
  navLabel: "Industria Alimentaria",
  seoTitle: "Sopladores para Industria Alimentaria | Bombas de Vacío y Tratamiento de Riles | Continental Andes",
  metaDescription:
    "Bombas de vacío y sopladores centrífugos Continental Industrie para la industria alimentaria y de producción animal: aspiración y limpieza de líneas de proceso y aireación biológica de riles. Diseño higiénico y alta disponibilidad.",
  hero: {
    eyebrow: "Industrias",
    title: "Sopladores para",
    titleAccent: "Industria Alimentaria",
    intro:
      "Vacío y aire para la industria alimentaria y de producción animal. Equipos de diseño higiénico y libre de contaminación para la aspiración de líneas de proceso y el tratamiento biológico de riles con alta carga orgánica.",
    image: "/images/aplicacion_alimentaria.webp",
    alt: "Bombas de vacío y sopladores Continental Industrie para procesos de la industria alimentaria",
    imagePlaceholder: true,
  },
  processesHeading: {
    title: "Procesos donde nuestros",
    titleAccent: "sopladores son clave",
    bajada: "Presión constante sin pulsaciones.",
    // Dos párrafos, como en el documento. El salto de línea los separa al renderizar.
    intro:
      "Cada línea de proceso exige parámetros precisos de caudal, presión y estándares de higiene. En Continental Industrie dimensionamos e integramos el equipo adecuado para garantizar la continuidad operacional y el estricto cumplimiento sanitario.\n" +
      "Nuestros sopladores y extractores de vacío cuentan con diseño 100% libre de aceite (oil-free) y entregan caudal variable y alta disponibilidad para sistemas de aspiración y tratamiento de riles en plantas de alimentos y de producción animal.",
  },
  processes: [
    {
      name: "Bombas de vacío",
      description:
        "En la industria alimentaria y de producción animal, los sistemas de vacío se emplean para la aspiración y limpieza de desechos en líneas de proceso, donde se requiere higiene y ausencia de contacto directo. Las bombas de vacío Continental Industrie ofrecen el caudal preciso que exige este tipo de aplicaciones.",
      highlights: ["Caudal variable", "Alta disponibilidad", "Diseño higiénico, libre de contaminación"],
      image: "/images/aplicacion_alimentaria.webp",
      alt: "Bomba de vacío centrífuga para aspiración y limpieza de líneas de proceso en plantas de alimentos",
      imagePlaceholder: true,
    },
    {
      name: "Sopladores para tratamiento de riles",
      description:
        "La industria alimentaria y de producción animal genera riles con alta carga orgánica que deben tratarse mediante sistemas de aireación biológica antes de su disposición. Los sopladores Continental Industrie entregan el aire requerido en estos procesos con alta fiabilidad operativa.",
      highlights: [
        "Caudal variable según demanda",
        "Presión constante",
        "Mejor relación entre bajo consumo energético y simplicidad mecánica",
        "Alta disponibilidad para operación continua",
      ],
      image: "/images/aplicacion_tratamiento_agua.webp",
      alt: "Soplador centrífugo para aireación biológica de riles en plantas de alimentos y producción animal",
      imagePlaceholder: true,
    },
  ],
  cta: {
    title: "¿Necesita una solución para su planta?",
    description:
      "Nuestro equipo técnico dimensiona e integra la bomba de vacío o el soplador ideal para cada proceso alimentario. Cuente con soporte, puesta en marcha y repuestos en toda la región andina.",
    buttonText: "Solicitar asesoría técnica",
    buttonHref: "/#contacto",
  },
};
