import svg1 from "./assets/green-1.svg?raw";
import svg2 from "./assets/green-2.svg?raw";
import svg3 from "./assets/green-3.svg?raw";
import svg4 from "./assets/green-4.svg?raw";

export const getInvolvedSection = {
  title: "Contáctenos",
  subheading1_1: "Nos contactaremos ",
  subheading1_2: "con usted a la brevedad",
  initiatives: [
    {
      title: "Oficina Comercial",
      description:
        "Avenida Italia 850, Providencia, Santiago, Chile.",
      visual: svg2,
    },
    {
      title: "Bodegas",
      description:
        "Pdte. Jorge Alessandri Rodríguez 11491, San Bernardo.",
      visual: svg4,
    },
    {
      title: "Canales de contacto",
      description:
        "Tel/Fax: (+56 2) 2 461 94 18 · cba@continentalandes.com",
      visual: svg3,
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Envíenos su consulta técnica o comercial",
  button: "Escríbanos",
};
