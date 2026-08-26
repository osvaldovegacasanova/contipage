import type { IndustryPage } from "./types";

// Process images are real photography, sourced from "images/3. TRATAMIENTO DE
// AGUA" and processed to WebP under public/images/agua/. Only the hero still
// uses a generic asset (flagged with imagePlaceholder: true): that folder ships
// no cover shot, same call as the Biogás hub.
// Process names follow the taxonomy tree and descriptions/bullets the HUB body
// of "HUBS POR INDUSTRIA CONTINENTAL.md" (estructura revisada con Carlos, 2026-08-20).

export const tratamientoAgua: IndustryPage = {
  slug: "sopladores-para-tratamiento-de-agua",
  navLabel: "Tratamiento de Agua",
  seoTitle: "Sopladores para Tratamiento de Agua | Aireación de Reactores Biológicos | Continental Andes",
  metaDescription:
    "Sopladores centrífugos Continental Industrie para plantas de tratamiento de aguas servidas: aireación en reactores de lodos activados, manejo de biogás, oxidación y agitación. Alta eficiencia energética y caudal variable.",
  hero: {
    eyebrow: "Industrias",
    title: "Sopladores para",
    titleAccent: "Tratamiento de Agua",
    intro:
      "Equipos de aireación de alta eficiencia para plantas de tratamiento de aguas residuales (PTAR). Oxígeno constante para reactores biológicos, oxidación y agitación, con un diseño que resiste ambientes húmedos y corrosivos.",
    image: "/images/aplicacion_tratamiento_agua.webp",
    alt: "Sopladores centrífugos Continental Industrie para plantas de tratamiento de aguas residuales",
    imagePlaceholder: true,
  },
  processesHeading: {
    title: "Procesos donde nuestros",
    titleAccent: "sopladores son clave",
    intro:
      "Cada etapa del tratamiento de aguas servidas tiene requerimientos específicos de caudal y presión. Dimensionamos e integramos el equipo correcto para asegurar continuidad operacional y eficiencia energética.",
  },
  processes: [
    {
      name: "Sopladores para aireación en reactores biológicos",
      description:
        "En el tratamiento de aguas servidas, la aireación mantiene activa la degradación bacteriana de la materia orgánica en los reactores de lodos activados. Los sopladores centrífugos de Continental Industrie entregan el caudal de aire variable y presión constante que exigen estos reactores biológicos, combinando bajo consumo energético con simplicidad mecánica.",
      highlights: [
        "Alta eficiencia energética",
        "Caudal variable. Sistemas inteligentes para la entrega de caudal exacto según demanda",
        "Presión constante",
        "Bajo consumo energético y simplicidad mecánica",
        "Alta disponibilidad",
        "Operación simple",
      ],
      image: "/images/agua/reactores-biologicos.webp",
      alt: "Soplador centrífugo para aireación de reactores de lodos activados en plantas de aguas servidas",
    },
    {
      name: "Sopladores para manejo de biogás",
      description:
        "Los lodos de las plantas de aguas servidas se llevan a biodigestores, donde se descomponen de forma anaeróbica generando metano y un digestato. Los sopladores Continental Industrie impulsan y acondicionan estos gases para apoyar el proceso del biogas, cerrando el ciclo energético de la planta.",
      highlights: [
        "Caudal de biogás variable",
        "Presión constante",
        "Sistema de sellado y rodamientos especiales según aplicación",
        "Eje fabricado en acero inoxidable",
        "Recubrimiento anticorrosivo específico",
        "Conjunto booster especificado bajo norma ATEX",
      ],
      image: "/images/agua/manejo-biogas.webp",
      alt: "Soplador centrífugo para manejo de biogás de biodigestores en plantas de tratamiento de agua",
    },
    {
      name: "Sopladores para oxidación y agitación",
      description:
        "Ciertos procesos de tratamiento requieren oxidar compuestos disueltos o mantener en agitación estanques y reactores mediante burbujeo de aire. Los sopladores centrífugos de Continental Industrie aportan el aire necesario, con un diseño que resiste ambientes húmedos y corrosivos.",
      highlights: [
        "Caudal variable y presión constante",
        "Simplicidad mecánica y Alta disponibilidad",
        "Suministro de sistemas de seguridad y control de caudal",
      ],
      image: "/images/agua/oxidacion.webp",
      alt: "Soplador centrífugo para procesos de oxidación y agitación por burbujeo en estanques y reactores",
    },
  ],
  cta: {
    title: "¿Necesita una solución para su planta de tratamiento?",
    description:
      "Nuestro equipo técnico dimensiona e integra el soplador ideal para cada etapa del tratamiento de aguas. Cuente con soporte, puesta en marcha y repuestos en toda la región andina.",
    buttonText: "Solicitar asesoría técnica",
    buttonHref: "/#contacto",
  },
};
