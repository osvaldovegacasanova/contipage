export const getInvolvedSection = {
  title: "Contáctenos",
  subheading1_1: "Nos contactaremos ",
  subheading1_2: "con usted a la brevedad",
  initiatives: [
    {
      title: "Oficina Comercial",
      description:
        "Avenida Italia 850, Providencia, Santiago, Chile.",
      icon: "office" as const,
    },
    {
      title: "Bodegas",
      description:
        "Pdte. Jorge Alessandri Rodríguez 11491, San Bernardo.",
      icon: "warehouse" as const,
    },
    {
      title: "Contacto",
      description: "",
      icon: "contact" as const,
      contacts: [
        {
          type: "phone" as const,
          label: "Tel: (+56 2) 2 461 94 18",
          value: "+56224619418",
          href: "tel:+56224619418"
        },
        {
          type: "email" as const,
          label: "cba@continentalandes.com",
          value: "cba@continentalandes.com",
          href: "mailto:cba@continentalandes.com"
        }
      ]
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Envíenos su consulta técnica o comercial",
  button: "Escríbanos",
  emailFormHidden: true,
};
