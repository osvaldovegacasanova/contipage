const imgMono = "/images/singlestage_draw.webp";
const imgMulti = "/images/multistage_draw.webp";
const imgSolar = "/images/innovations-inno-panel.webp";
const imgWind = "/images/innovations-inno-wind.webp";

export const procesoSection = {
  title: "Proceso",
  subheading1_1: "Sopladores Centrífugos",
  subheading1_2: " Monoetapa y Multietapa",
  innovations: [
    {
      title: "Compresor Centrífugo Monoetapa",
      description: `Los compresores radiales tipo TC de Continental Industrie son equipos de flujo modernos para la compresión de grandes cantidades de aire o gas, desde 2.500 hasta 35.000 m3/h, con una presión de hasta 1,3 bar g.
Gracias a las tolerancias de alta precisión y al control continuo de los parámetros mediante la aplicación de nuevas técnicas de tecnología aeroespacial, el mecanizado 3D de las palas del impulsor asegura una alta eficiencia de compresión (más del 85%) y un alto rendimiento general.`,
      visual: imgMono,
    },
    {
      title: "Compresor Centrífugo Multietapa",
      description:
        "Como resultado de nuestra preocupación por mejorar nuestro desempeño e invirtiendo gran parte de nuestros recursos en investigación, Continental Industrie puede ofrecerle una gama completa de máquinas, que pueden suministrar desde 1.000 a 65.000 m3/h de aire seco, limpio y sin pulsaciones alcanzando presiones relativas de hasta 1,8 bares o en vacío de hasta 6.700 mmH2O (WG).",
      visual: imgMulti,
    },
    {
      title: "Sopladores de Gas",
      description:
        "Nuestro catálogo incluye soluciones para manejo de gases de proceso, con configuraciones que permiten trabajar en continuo manteniendo estabilidad operativa y eficiencia energética, incluso en ambientes exigentes.",
      visual: imgWind,
    },
  ],
  visual: imgSolar,
  callToAction: "Solicite una puesta en marcha con nuestro equipo",
  button: "Solicitar asesoría",
};
