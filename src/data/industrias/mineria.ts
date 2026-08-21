import type { IndustryPage } from "./types";

// NOTE: Images below are PLACEHOLDERS reusing existing site assets
// (flagged with imagePlaceholder: true). Swap for real process photography.
// Process names follow the taxonomy tree and descriptions/bullets the HUB body
// of "HUBS POR INDUSTRIA CONTINENTAL.md" (estructura revisada con Carlos, 2026-08-20).

export const mineria: IndustryPage = {
  slug: "sopladores-para-mineria",
  navLabel: "Minería",
  seoTitle: "Sopladores para Minería | Flotación, Transporte Neumático y Biolixiviación | Continental Andes",
  metaDescription:
    "Sopladores y compresores centrífugos Continental Industrie para minería: flotación de minerales, transporte neumático por vacío, combustión, biolixiviación y oxidación. Alta disponibilidad sobre los 3.000 m en la región andina.",
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
      name: "Sopladores para flotación de minerales",
      description:
        "En minería, la flotación por espuma separa los minerales de la ganga mediante diferencias hidrofóbicas, proceso que requiere aire inyectado. Los sopladores centrífugos Multietapas Continental Industrie lideran este proceso ofreciendo simplicidad operacional y una eficiencia superior.",
      highlights: [
        "Caudal de aire variable según demanda",
        "Presión constante",
        "Libre de pulsaciones",
        "Bajo nivel de ruido",
        "Simplicidad mecánica",
        "Alta disponibilidad y confiabilidad",
      ],
      image: "/images/aplicacion_mineria.webp",
      alt: "Soplador centrífugo multietapa para aireación de celdas de flotación de minerales",
      imagePlaceholder: true,
    },
    {
      name: "Sopladores para transporte neumático por vacío",
      description:
        "Los sopladores centrífugos multietapa de Continental Industrie, fabricados en hierro fundido, ofrecen máxima eficiencia, alta fiabilidad mecánica y un diseño simple que resiste mejor el paso de partículas en sistemas de transporte neumático por vacío, siendo ideales en sistemas de limpieza por aspiración centralizada.",
      highlights: [
        "Aire limpio y libre de aceite",
        "Libre de pulsaciones",
        "Caudal variable",
        "Simplicidad mecánica",
        "Alta disponibilidad",
      ],
      image: "/images/multistage_draw.webp",
      alt: "Compresor centrífugo multietapa para transporte neumático por vacío y aspiración centralizada en minería",
      imagePlaceholder: true,
    },
    {
      name: "Sopladores para combustión",
      description:
        "Sobre los 3.000 metros de altitud, los ventiladores convencionales no logran entregar la presión que requieren los quemadores de calderas, hornos y sistemas de lecho fluidizado. Los sopladores centrífugos de Continental Industrie suministran el carburante con la presión y el caudal requerido por este proceso.",
      highlights: [
        "Presión constante",
        "Caudal variable según demanda",
        "Control preciso de aire de combustión",
        "Alta disponibilidad sobre los 3.000 mt. sobre el mar",
      ],
      image: "/images/singlestage_draw.webp",
      alt: "Soplador centrífugo para aire de combustión en calderas, hornos y lecho fluidizado de faenas de altura",
      imagePlaceholder: true,
    },
    {
      name: "Sopladores para biolixiviación",
      description:
        "La biolixiviación utiliza microorganismos para extraer cobre y metales de minerales de baja ley, en pilas ubicadas a la intemperie y a gran altitud, donde los ventiladores convencionales no alcanzan la presión necesaria. Al ser un proceso dependiente de oxígeno, los sopladores de Continental Industrie aportan un caudal de aire uniforme sobre toda la pila, con la robustez mecánica que exigen estas condiciones extremas.",
      highlights: [
        "Caudal variable y Presión constante",
        "Aireación uniforme sobre pilas de lixiviación",
        "Simplicidad mecánica y Robustez mecánica",
        "Alta disponibilidad y confiabilidad en condiciones ambientales desfavorables (polvo, intemperie, altitud)",
        "Sistema de filtrado a medida",
        "Opción de modificación de direccionamiento de descarga",
        "Baja necesidad de mantenimiento",
        "Opción cabina de insonorización o containerizado plug and play",
      ],
      image: "/images/aplicacion_biogas.webp",
      alt: "Sistema de aireación para pilas de biolixiviación de minerales de baja ley",
      imagePlaceholder: true,
    },
    {
      name: "Sopladores para oxidación y agitación",
      description:
        "Ciertos procesos de tratamiento requieren oxidar compuestos disueltos o mantener en agitación estanques y reactores. Los sopladores centrífugos de Continental Industrie aportan el aire necesario, con un diseño que resiste ambientes húmedos y corrosivos.",
      highlights: [
        "Caudal variable y presión constante",
        "Sistemas de control y variador de frecuencia disponibles",
        "Simplicidad mecánica y alta disponibilidad",
      ],
      image: "/images/aplicacion_tratamiento_agua.webp",
      alt: "Soplador centrífugo para procesos de oxidación y agitación en estanques y reactores mineros",
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
