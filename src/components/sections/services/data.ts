import img1 from "./assets/solar3.png";
import img2 from "./assets/wind.png";
// TODO
import img3 from "./assets/hydro.png";
import img4 from "./assets/storage.png";
// TODO
import img5 from "./assets/smart-grid.png";
import img6 from "./assets/green.png";

export const servicesSectionData = {
  title: "Servicios",
  subheading: {
    text1_1: "Acompañamos todo el ciclo de vida - ",
    text1_2: "Instalación, operación y soporte.",
    text2:
      "Garantizamos eficiencia, seguridad y continuidad operacional en cada proyecto.",
  },
  services: [
    {
      title: "Puesta en Marcha",
      briefDescription:
        "Chequeo de montaje y condición inicial, configuración, calibración y ajuste de parámetros de operación para equipos nuevos o reacondicionados.",
      visual: img1,
    },
    {
      title: "Mantenimiento de Equipos",
      briefDescription:
        "Planes preventivos, predictivos y proactivos para asegurar la disponibilidad y desempeño de sus sopladores.",
      visual: img2,
    },
    {
      title: "Contratos de Mantenimiento",
      briefDescription:
        "Servicios programados según su necesidad (mensual, trimestral o semestral) para continuidad sin detenciones.",
      visual: img3,
    },
    {
      title: "Ingeniería de Proyectos",
      briefDescription:
        "Diseño, fabricación y montaje de sistemas de aire o gas, control e instrumentación y regulación de caudal.",
      visual: img4,
    },
    {
      title: "Suministro de Repuestos",
      briefDescription:
        "Disponibilidad de piezas y componentes originales para minimizar tiempos de parada.",
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
