import img1 from "./assets/solar-person.png";
import img2 from "./assets/wind-person.png";
import img3 from "./assets/amazonas2.png";

export const projectsSection = {
  title: "Productos",
  subheading1_1: "Sopladores centrífugos ",
  subheading1_2: "monoetapa y multietapa",
  projects: [
    {
      title: "Sopladores Monoetapa",
      description:
        "Equipos compactos y eficientes para diversas aplicaciones industriales. Ficha técnica disponible en nuestro sitio web.",
      location: "Región andina",
      visual: img1,
    },
    {
      title: "Sopladores Multietapa",
      description:
        "Alto rendimiento y confiabilidad para mayores demandas de caudal y presión. Consulte la ficha técnica en línea.",
      location: "Región andina",
      visual: img2,
    },
    {
      title: "Soluciones a medida",
      description:
        "Diseño y suministro de sistemas completos de aire o gas, control e instrumentación según requerimientos.",
      location: "Proyectos en Latinoamérica",
      visual: img3,
    },
  ],
  callToAction: "Consulte por disponibilidad y especificaciones",
  button: "Ver productos",
};
