const imgMineria = "/images/aplicacion_mineria.webp";
const imgBiogas = "/images/aplicacion_biogas.webp";
const imgAgua = "/images/aplicacion_tratamiento_agua.webp";
const imgCelulosa = "/images/aplicacion_celulosa.webp";
const imgAlimentos = "/images/aplicacion_alimentaria.webp";
const imgPetroquimica = "/images/aplicacion_petroquimica.webp";
const imgCemento = "/images/aplicacion_cemento.webp";

interface IndustryArea {
  title: string;
  visual: string;
  items: string[];
  href?: string;
  alt?: string;
  objectPosition?: string;
}

export const areasSectionData = {
  title: "Industrias",
  subheading: {
    text1_1: "Aplicaciones en ",
    text1_2: "Múltiples Industrias",
    text2:
      "Los equipos Continental Industrie son pieza fundamental en diversos procesos industriales, asegurando eficiencia, confiabilidad y continuidad operacional.",
  },
  areas: [
    {
      title: "Minería",
      visual: imgMineria,
      // href: "/mineria", // Temporarily hidden
      alt: "Aplicaciones de sopladores y compresores centrífugos en la industria minera para flotación, transporte neumático y biolixiviación",
      items: [
        "Sopladores para flotación de minerales",
        "Sopladores para transporte neumático",
        "Sopladores para combustión",
        "Sopladores para biolixiviación",
      ],
    },
    {
      title: "Manejo de Biogás",
      visual: imgBiogas,
      alt: "Sistemas de sopladores para generación de energía con biogás y producción de biometano",
      items: [
        "Booster en generación de energía con biogás",
        "Sopladores para sistema de quema de biogás",
        "Booster en la generación de biometano",
      ],
    },
    {
      title: "Tratamiento de Agua",
      visual: imgAgua,
      alt: "Equipos de aireación para tratamiento de aguas residuales y reactores biológicos",
      items: [
        "Sopladores para aireación en reactores biológicos",
        "Sopladores para manejo de biogás",
        "Oxidación y agitación",
      ],
    },
    {
      title: "Celulosa y Papel",
      visual: imgCelulosa,
      alt: "Sopladores y bombas de vacío para la industria de celulosa, papel y tratamiento de riles",
      items: [
        "Tratamiento de riles (residuo industrial líquido)",
        "Sopladores para aireación",
        "Bombas de vacío",
      ],
    },
    {
      title: "Industria Alimentaria",
      visual: imgAlimentos,
      alt: "Soluciones de transporte neumático y bombas de vacío para procesos de la industria alimentaria",
      items: [
        "Sopladores para transporte neumático",
        "Bombas de vacío",
        "Tratamiento de riles",
      ],
    },
    {
      title: "Industria Petroquímica",
      visual: imgPetroquimica,
      alt: "Sopladores especializados para desulfurización de gases en procesos petroquímicos",
      items: ["Sopladores para desulfurización de gases"],
    },
    {
      title: "Cemento y Manejo de Materiales",
      visual: imgCemento,
      alt: "Equipos de soplado para combustión, fluidización y transporte neumático en industria cementera",
      objectPosition: "top",
      items: ["Sopladores para combustión", "Sopladores para fluidización","Sopladores para transporte neumático"],
    },
  ],
};
