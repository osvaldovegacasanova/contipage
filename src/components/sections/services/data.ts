const img1 = "/images/puesta_en_marcha2.webp";
const img2 = "/images/mantenimiento.webp";
const img3 = "/images/services-hydro.png";
const img4 = "/images/services-storage.png";
const img5 = "/images/services-respuestos_400_533.jpg";
const img6 = "/images/capacidad_tecnica.webp";
const img_ingenieria = "/images/slider42-02.jpg";

export const servicesSectionData = {
  title: "Servicios",
  subheading: {
    text1_1: "Máxima eficiencia con la mayor fiabilidad mecánica del mercado",
    text1_2: "Puesta en marcha, instalación, mantención y soporte.",
    text2:
      "La mayor disponibilidad operacional - Garantizamos eficiencia, seguridad y continuidad operacional en cada proyecto.",
      
  },
  services: [
    {
      title: "Ingeniería de Proyectos",
      briefDescription:
        "Diseño, fabricación y montaje de sistemas de suministro de aire o gas, control e instrumentación, sistemas de regulación de caudal.",
      visual: img_ingenieria,
    },
    {
      title: "Puesta en Marcha",
      briefDescription:
        "Chequeo de montaje y condición inicial de equipos nuevos y reacondicionados, configuración, calibración y ajuste de parámetros de operación.",
      visual: img1,
    },
    {
      title: "Mantenimiento de Equipos",
      briefDescription:
        "Planes preventivos, predictivos, proactivos y correctivos para asegurar la disponibilidad y desempeño de sus sopladores.",
      visual: img2,
    },
    {
      title: "Contratos de Mantenimiento",
      briefDescription:
        "Servicios programados según su necesidad (trimestral, semestral o anual) para continuidad sin detenciones.",
      visual: img3,
    },

    {
      title: "Repuestos",
      briefDescription:
        "Disponibilidad de componentes y accesorios originales para máxima confiabilidad.",
      visual: img5,
    },
    {
      title: "Capacitación Técnica",
      briefDescription:
        "Formación para personal de operación y mantención enfocada en seguridad y eficiencia.",
      visual: img6,
    },
  ],
  callToAction:
    "Asegure la continuidad operacional con nuestro soporte experto.",
  buttonText: "Solicitar información",
};
