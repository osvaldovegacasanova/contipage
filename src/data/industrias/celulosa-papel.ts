import type { IndustryPage } from "./types";

// Process images are real photography, sourced from "images/4. CELULOSA Y PAPEL"
// and processed to WebP under public/images/celulosa/. Only the hero still uses
// a generic asset (flagged with imagePlaceholder: true): that folder ships no
// cover shot, same call as the Biogás and Agua hubs.
// Process names follow the taxonomy tree and descriptions/bullets the HUB body
// of "HUBS POR INDUSTRIA CONTINENTAL.md" (estructura revisada con Carlos, 2026-08-20).
// Hero, processesHeading and CTA copy are site-authored, pending review by Karina.

export const celulosaPapel: IndustryPage = {
  slug: "sopladores-para-celulosa-y-papel",
  navLabel: "Celulosa y Papel",
  seoTitle: "Sopladores para Celulosa y Papel | Aireación de Riles y Bombas de Vacío | Continental Blowers Andes",
  metaDescription:
    "Sopladores y bombas de vacío centrífugas Continental Industrie para la industria de celulosa y papel: aireación en tratamiento de riles y vacío en corrugado de cartón. Bajo consumo energético y operación continua.",
  hero: {
    eyebrow: "Industrias",
    title: "Sopladores para",
    titleAccent: "Celulosa y Papel",
    intro:
      "Sopladores y bombas de vacío para la industria de celulosa y papel. Confiabilidad en el tratamiento biológico de riles y vacío constante en líneas de corrugado, con equipos preparados para operación continua a gran escala.",
    image: "/images/aplicacion_celulosa.webp",
    alt: "Sopladores y bombas de vacío Continental Industrie para la industria de celulosa y papel",
    imagePlaceholder: true,
  },
  processesHeading: {
    title: "Procesos donde nuestros",
    titleAccent: "sopladores son clave",
    bajada: "Robustez mecánica que resiste altas temperaturas y concentraciones de polvo.",
    intro:
      "La industria de celulosa y papel combina aireación biológica de gran volumen con aplicaciones de vacío de alta precisión y sin fluctuaciones que comprometan la calidad del papel en el proceso de corrugado. En Continental Industrie dimensionamos e integramos el equipo correcto para cada etapa, asegurando un bajo consumo energético y continuidad operacional para plantas de mediano y gran tamaño.",
  },
  processes: [
    {
      name: "Sopladores para aireación en tratamiento de riles",
      description:
        "La industria de celulosa y papel genera altos volúmenes de RILES (Residuos Industriales Líquidos) que deben tratarse mediante sistemas de aireación biológica antes de su disposición. Los sopladores Continental Industrie entregan el aire requerido en los procesos, con alta fiabilidad operativa y bajo consumo energético.",
      highlights: [
        "Caudal variable según demanda",
        "Presión constante",
        "Mejor relación entre bajo consumo energético y simplicidad mecánica",
        "Alta disponibilidad para operación continua a gran escala",
      ],
      image: "/images/celulosa/tratamiento-riles.webp",
      alt: "Soplador centrífugo para aireación biológica en tratamiento de riles de plantas de celulosa y papel",
    },
    {
      name: "Bombas de vacío en corrugado de cartón",
      description:
        "En la fabricación de cartón corrugado, el papel se adhiere a un rodillo caliente y perforado mediante vacío, lo que permite dar forma a las canaletas del corrugado. Las bombas de vacío centrífugas Continental Industrie generan este vacío a presión constante, sin resaltos que puedan romper el papel, tolerando además las altas temperaturas y el polvo propios del proceso.",
      highlights: [
        "Vacío constante, sin fluctuaciones de presión",
        "Caudal variable",
        "Mecanismos robustos: resistentes a altas temperaturas y ambientes con polvo",
        "Boca de entrada opuesta al eje de conducción",
        "Filtros de limpieza específicos para las partículas de polvo que genera el cartón",
      ],
      image: "/images/celulosa/corrugado-carton.webp",
      alt: "Bomba de vacío centrífuga para líneas de corrugado de cartón",
    },
  ],
  cta: {
    title: "¿Necesita una solución para su planta?",
    description:
      "Nuestro equipo técnico dimensiona e integra el soplador o la bomba de vacío ideal para cada proceso de celulosa y papel. Cuente con soporte, puesta en marcha y repuestos en toda la región andina.",
    buttonText: "Solicitar asesoría técnica",
    buttonHref: "/contacto",
  },
};
