const imgMineria = "/images/aplicacion_mineria.webp";
const imgBiogas = "/images/aplicacion_biogas.webp";
const imgAgua = "/images/aplicacion_tratamiento_agua.webp";
const imgCelulosa = "/images/aplicacion_celulosa.webp";
const imgAlimentos = "/images/aplicacion_alimentaria.webp";
const imgPetroquimica = "/images/aplicacion_petroquimica.webp";
const imgCemento = "/images/aplicacion_cemento.webp";

export const areasSectionData = {
  title: "Industrias",
  subheading: {
    text1_1: "Aplicaciones en ",
    text1_2: "Múltiples Industrias",
    text2:
      "Los equipos Continental Blowers son pieza fundamental en diversos procesos industriales, asegurando eficiencia, confiabilidad y continuidad operacional.",
  },
  areas: [
    {
      title: "Minería",
      visual: imgMineria,
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
      items: [
        "Booster en generación de energía con biogás",
        "Sopladores para sistema de quema de biogás",
        "Booster en la generación de biometano",
      ],
    },
    {
      title: "Tratamiento de Agua",
      visual: imgAgua,
      items: [
        "Sopladores para aireación en reactores biológicos",
        "Sopladores para manejo de biogás",
        "Oxidación y agitación",
      ],
    },
    {
      title: "Celulosa y Papel",
      visual: imgCelulosa,
      items: [
        "Tratamiento de riles (residuo industrial líquido)",
        "Sopladores para aireación",
        "Bombas de vacío",
      ],
    },
    {
      title: "Industria Alimentaria",
      visual: imgAlimentos,
      items: [
        "Sopladores para transporte neumático",
        "Bombas de vacío",
        "Tratamiento de riles",
      ],
    },
    {
      title: "Industria Petroquímica",
      visual: imgPetroquimica,
      items: ["Sopladores para desulfurización de gases"],
    },
    {
      title: "Cemento y Manejo de Materiales",
      visual: imgCemento,
      items: ["Sopladores para combustión", "Sopladores para fluidización","Sopladores para transporte neumático"],
    },
  ],
};
