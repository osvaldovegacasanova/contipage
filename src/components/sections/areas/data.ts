const imgMineria = "/images/aplicacion_mineria.webp";
const imgBiogas = "/images/aplicacion_biogas.webp";
const imgAgua = "/images/aplicacion_tratamiento_agua.webp";
const imgCelulosa = "/images/aplicacion_celulosa.webp";
const imgAlimentos = "/images/aplicacion_alimentaria.webp";
const imgPetroquimica = "/images/aplicacion_petroquimica.webp";

interface IndustryArea {
  title: string;
  visual: string;
  items: string[];
  /** Short SEO/UX intro shown above the process bullets. */
  intro?: string;
  /** Optional override for the "Sopladores para {title}" H2. */
  seoHeading?: string;
  href?: string;
  alt?: string;
  objectPosition?: string;
}

// Export the interface so TypeScript can properly type the areas array
export type { IndustryArea };

// Card order, titles and items follow the taxonomy agreed with Carlos
// ("HUBS POR INDUSTRIA CONTINENTAL.md", estructura revisada 2026-08-20): 6 industrias.
// "Cemento y Manejo de Materiales" was removed from the taxonomy in that revision.
export const areasSectionData = {
  title: "Industrias",
  subheading: {
    text1_1: "Soluciones de aire y gas ",
    text1_2: "para cada industria y aplicación",
    text2:
      "Sopladores centrífugos Continental Industrie para los procesos más exigentes de la minería, el tratamiento de agua, el biogás y la industria.",
    text2b: "Eficiencia y continuidad operacional comprobadas.",
  },
  areas: [
    {
      title: "Minería",
      visual: imgMineria,
      href: "/sopladores-para-mineria",
      intro:
        "Aire y gas a presión para los procesos críticos de la gran minería. Nuestros sopladores centrífugos aseguran caudal estable y alta eficiencia en faenas de altura y ambientes exigentes.",
      alt: "Aplicaciones de sopladores multietapa en la industria minera para flotación, transporte neumático por vacío y biolixiviación",
      items: [
        "Sopladores para flotación de minerales",
        "Sopladores para transporte neumático por vacío",
        "Sopladores para combustión",
        "Sopladores para biolixiviación",
        "Sopladores para oxidación y agitación",
      ],
    } as IndustryArea,
    {
      title: "Manejo de Biogás",
      visual: imgBiogas,
      href: "/sopladores-para-biogas",
      intro:
        "Sopladores y boosters ATEX para la captación, quema y valorización de biogás. Soluciones seguras y estancas para generación de energía y producción de biometano.",
      alt: "Sistemas de sopladores para generación de energía con biogás y producción de biometano",
      items: [
        "Booster en generación de energía con biogás",
        "Sopladores para sistema de quema de biogás",
        "Booster en la generación de biometano",
        "Sopladores para oxidación y agitación",
      ],
    },
    {
      title: "Tratamiento de Agua",
      visual: imgAgua,
      href: "/sopladores-para-tratamiento-de-agua",
      intro:
        "Equipos de aireación de alta eficiencia para plantas de tratamiento de aguas residuales (PTAR). Oxígeno constante para reactores biológicos, oxidación y agitación.",
      alt: "Equipos de aireación para tratamiento de aguas residuales y reactores biológicos",
      items: [
        "Sopladores para aireación en reactores biológicos",
        "Sopladores para manejo de biogás",
        "Sopladores para oxidación y agitación",
      ],
    },
    {
      title: "Celulosa y Papel",
      visual: imgCelulosa,
      href: "/sopladores-para-celulosa-y-papel",
      intro:
        "Sopladores y bombas de vacío para la industria de celulosa y papel. Confiabilidad en la aireación de riles y vacío constante en líneas de corrugado de operación continua.",
      alt: "Sopladores y bombas de vacío para la industria de celulosa, papel y tratamiento de riles",
      items: [
        "Sopladores para aireación en tratamiento de riles",
        "Bombas de vacío en corrugado de cartón",
      ],
    },
    {
      title: "Industria Alimentaria",
      visual: imgAlimentos,
      href: "/sopladores-para-industria-alimentaria",
      intro:
        "Vacío y aire para la industria alimentaria y de producción animal. Aspiración de líneas de proceso y tratamiento de riles con máxima higiene operacional.",
      alt: "Bombas de vacío y sopladores para aireación de riles en procesos de la industria alimentaria",
      items: ["Bombas de vacío", "Sopladores para tratamiento de riles"],
    },
    {
      title: "Industria Petroquímica",
      visual: imgPetroquimica,
      href: "/sopladores-para-industria-petroquimica",
      intro:
        "Sopladores especializados para procesos petroquímicos exigentes. Soluciones confiables y seguras para la desulfurización de gases y el manejo de fluidos de proceso.",
      alt: "Sopladores especializados para desulfurización de gases en procesos petroquímicos",
      items: ["Sopladores para desulfurización de gases"],
    },
  ],
};
