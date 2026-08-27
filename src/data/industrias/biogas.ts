import type { IndustryPage } from "./types";

// Process images are real photography, sourced from "images/2. BIOGÁS" and
// processed to WebP under public/images/biogas/. Only the hero still uses a
// generic asset (flagged with imagePlaceholder: true): that folder ships no
// cover shot, and reusing a process photo up top was ruled out.
// Process names follow the taxonomy tree and descriptions/bullets the HUB body
// of "HUBS POR INDUSTRIA CONTINENTAL.md" (estructura revisada con Carlos, 2026-08-20).

export const biogas: IndustryPage = {
  slug: "sopladores-para-biogas",
  navLabel: "Manejo de Biogás",
  seoTitle: "Sopladores para Biogás | Booster de Generación, Quema y Biometano | Continental Andes",
  metaDescription:
    "Sopladores y boosters centrífugos ATEX Continental Industrie para manejo de biogás: generación de energía, quema en antorcha, biometano y oxidación de lixiviados. Caudal variable y presión constante en la región andina.",
  hero: {
    eyebrow: "Industrias",
    title: "Sopladores para",
    titleAccent: "Manejo de Biogás",
    intro:
      "Sopladores y boosters para la captación, quema y valorización de biogás. Soluciones seguras y estancas para generación de energía y producción de biometano, con la presión estable que exige cada tecnología.",
    image: "/images/aplicacion_biogas.webp",
    alt: "Sopladores centrífugos Continental Industrie aplicados al manejo y valorización de biogás",
    imagePlaceholder: true,
  },
  processesHeading: {
    title: "Procesos donde nuestros",
    titleAccent: "sopladores son clave",
    bajada: "Equipos seguros, sin fugas y con certificación ATEX.",
    intro:
      "Los sopladores centrífugos multietapa Continental Industrie cumplen con la normativa ATEX e incorporan ejes de acero inoxidable y sellos especializados de alta seguridad contra fugas y corrosión interna. Encargados de presurizar el biogás desde la salida del biodigestor, operan con caudal variable y presión constante para adaptarse eficientemente a las exigencias de los procesos.",
  },
  processes: [
    {
      name: "Booster en generación de energía con biogás",
      description:
        "El biogás de rellenos sanitarios y biodigestores debe presurizarse antes de llegar a los motores que generan electricidad. Los sopladores centrífugos multietapa de Continental Industrie actúan como booster, entregando el caudal y presión que exige el motor con máxima confiabilidad.",
      highlights: [
        "Caudal de biogás variable",
        "Presión constante",
        "Sistema de sellado y rodamientos especiales según aplicación",
        "Eje fabricado en acero inoxidable",
        "Recubrimiento anticorrosivo específico para biogás",
        "Conjunto booster especificado bajo norma ATEX",
      ],
      image: "/images/biogas/generacion-energia.webp",
      alt: "Booster centrífugo multietapa para presurización de biogás hacia motores de generación eléctrica",
    },
    {
      name: "Sopladores para sistema de quema de biogás",
      description:
        "Para reducir el alto impacto ambiental del biogás metano —uno de los más nocivos para la atmósfera— los rellenos sanitarios lo queman para reducir a CO2, de esta forma se reduce el efecto invernadero. Los sopladores Continental Industrie impulsan el gas hasta la antorcha de forma continua y con alta disponibilidad.",
      highlights: [
        "Caudal de biogás variable",
        "Presión constante",
        "Sistema de sellado y rodamientos especiales según aplicación",
        "Eje fabricado en acero inoxidable",
        "Recubrimiento anticorrosivo específico para biogás",
        "Conjunto booster especificado bajo norma ATEX",
      ],
      image: "/images/biogas/quema.webp",
      alt: "Soplador centrífugo para sistema de quema de biogás en antorcha de relleno sanitario",
    },
    {
      name: "Booster en la generación de biometano",
      description:
        "Además de electricidad, el biogás puede purificarse hasta convertirse en biometano, transformándose en un combustible renovable útil para flotas vehiculares, red de gas de ciudad, calderas, entre otros. Los sopladores Continental Industrie aportan la presión estable que exige esta tecnología emergente en Chile, cerrando el ciclo del carbono al transformar un residuo orgánico en energía.",
      highlights: [
        "Caudal de biogás variable",
        "Presión constante",
        "Sistema de sellado de rodamientos especiales según aplicación",
        "Eje mandatorio fabricado en acero inoxidable",
        "Recubrimiento anticorrosivo específico",
        "Conjunto Booster especificado bajo norma Atex",
      ],
      image: "/images/biogas/biometano.webp",
      alt: "Booster centrífugo para la generación y purificación de biometano",
    },
    {
      name: "Sopladores para oxidación y agitación",
      description:
        "En las plantas de rellenos sanitarios, el lixiviado generado bajo el relleno se recolecta en estanques donde se requiere oxidar compuestos disueltos o mantener en agitación mediante aireación, antes de continuar su tratamiento en piscinas sucesivas. Los sopladores centrífugos Continental Industrie aportan el aire necesario, con un diseño que resiste ambientes húmedos y corrosivos.",
      highlights: ["Caudal variable y presión constante", "Simplicidad mecánica y alta disponibilidad"],
      image: "/images/biogas/oxidacion.webp",
      alt: "Soplador centrífugo para oxidación y agitación de lixiviados en estanques de relleno sanitario",
    },
  ],
  cta: {
    title: "¿Necesita una solución para su planta de biogás?",
    description:
      "Nuestro equipo técnico dimensiona e integra el booster o soplador ideal para cada etapa del biogás. Cuente con soporte, puesta en marcha y repuestos en toda la región andina.",
    buttonText: "Solicitar asesoría técnica",
    buttonHref: "/contacto",
  },
};
