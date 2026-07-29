import type { IndustryPage } from "./types";

// NOTE: Images below are PLACEHOLDERS reusing existing site assets
// (flagged with imagePlaceholder: true). Swap for real process photography.

export const mineria: IndustryPage = {
  slug: "sopladores-para-mineria",
  navLabel: "Minería",
  seoTitle: "Sopladores para Minería | Flotación, Transporte Neumático y Biolixiviación | Continental Andes",
  metaDescription:
    "Sopladores y compresores centrífugos Continental Industrie para minería: flotación de minerales, transporte neumático, combustión y biolixiviación. Alta eficiencia y disponibilidad operacional en la región andina.",
  hero: {
    eyebrow: "Industrias",
    title: "Sopladores para",
    titleAccent: "Minería",
    intro:
      "Aire y gas a presión para los procesos más exigentes de la gran minería. Equipos Continental Industrie diseñados para operación continua, alta eficiencia energética y máxima disponibilidad en faenas de altura y ambientes severos.",
    image: "/images/aplicacion_mineria.webp",
    alt: "Sopladores centrífugos Continental Industrie aplicados en la industria minera de la región andina",
    imagePlaceholder: true,
  },
  processesHeading: {
    title: "Procesos donde nuestros",
    titleAccent: "sopladores son clave",
    intro:
      "Cada proceso minero tiene requerimientos específicos de caudal y presión. Dimensionamos e integramos el equipo correcto para asegurar continuidad operacional y eficiencia.",
  },
  processes: [
    {
      name: "Flotación de minerales",
      description:
        "El aire es un insumo crítico en las celdas de flotación: genera las burbujas que adhieren las partículas minerales y determinan la recuperación del proceso. Nuestros sopladores entregan caudal constante y presión estable, condición indispensable para una separación eficiente y una ley de concentrado uniforme.",
      highlights: [
        "Caudal y presión estables para recuperación consistente",
        "Alta eficiencia energética en operación 24/7",
        "Dimensionamiento según columna de agua y número de celdas",
      ],
      image: "/images/aplicacion_mineria.webp",
      alt: "Soplador centrífugo para aireación de celdas de flotación de minerales",
      imagePlaceholder: true,
    },
    {
      name: "Transporte neumático",
      description:
        "Para el traslado de concentrados y materiales secos, el transporte neumático exige aire limpio y libre de pulsaciones a presión controlada. Los equipos Continental Industrie aseguran un flujo continuo que minimiza atascos y pérdidas, manteniendo la línea de proceso en movimiento.",
      highlights: [
        "Aire limpio y libre de pulsaciones",
        "Presión controlada para líneas largas",
        "Menor mantenimiento frente a soluciones de desplazamiento positivo",
      ],
      image: "/images/multistage_draw.webp",
      alt: "Compresor centrífugo multietapa para transporte neumático de materiales en minería",
      imagePlaceholder: true,
    },
    {
      name: "Combustión",
      description:
        "En hornos, calderas y secadores, el suministro de aire de combustión define la eficiencia térmica y la estabilidad de la llama. Aportamos aire a presión con control preciso de caudal, optimizando el consumo de combustible y reduciendo emisiones.",
      highlights: [
        "Control preciso de aire de combustión",
        "Mayor eficiencia térmica y menor consumo de combustible",
        "Operación confiable en procesos de alta temperatura",
      ],
      image: "/images/singlestage_draw.webp",
      alt: "Soplador centrífugo para suministro de aire de combustión en hornos y calderas de minería",
      imagePlaceholder: true,
    },
    {
      name: "Biolixiviación",
      description:
        "La biolixiviación depende de una aireación controlada que mantenga activa la población bacteriana encargada de liberar el metal. Nuestros sopladores entregan el oxígeno necesario de forma uniforme sobre las pilas, optimizando la cinética de extracción y la recuperación del mineral.",
      highlights: [
        "Aireación uniforme sobre pilas de lixiviación",
        "Oxígeno constante para la actividad bacteriana",
        "Mejor cinética y recuperación de metal",
      ],
      image: "/images/aplicacion_biogas.webp",
      alt: "Sistema de aireación para procesos de biolixiviación de minerales",
      imagePlaceholder: true,
    },
  ],
  cta: {
    title: "¿Necesita una solución para su faena?",
    description:
      "Nuestro equipo técnico dimensiona e integra el soplador ideal para cada proceso minero. Cuente con soporte, puesta en marcha y repuestos en toda la región andina.",
    buttonText: "Solicitar asesoría técnica",
    buttonHref: "/#contacto",
  },
};
