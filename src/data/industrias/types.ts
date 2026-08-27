// Shared types for industry landing pages (/sopladores-para-*).
// One IndustryPage object drives one page via src/pages/[industria].astro.

export interface IndustryProcess {
  /** Process name, used as the module H2. e.g. "Flotación de minerales" */
  name: string;
  /** SEO/UX copy describing how Continental blowers are used in this process. */
  description: string;
  /** Optional supporting bullets (equipment, benefits, specs). */
  highlights?: string[];
  /** Image path (string under /public) or imported asset. */
  image: string;
  /** Descriptive, keyword-aware alt text. */
  alt: string;
  /** Set true while using a placeholder image pending final photography. */
  imagePlaceholder?: boolean;
}

export interface IndustryPage {
  /** URL slug without leading slash. e.g. "sopladores-para-mineria" */
  slug: string;
  /** Short label for nav submenu and breadcrumb. e.g. "Minería" */
  navLabel: string;
  /** <title> content. */
  seoTitle: string;
  /** <meta name="description">. */
  metaDescription: string;
  hero: {
    /** Small overline above the H1. e.g. "Industrias" */
    eyebrow: string;
    /** Plain part of the H1. */
    title: string;
    /** Highlighted (gradient) part of the H1. */
    titleAccent: string;
    /** Lead paragraph under the H1. */
    intro: string;
    image: string;
    alt: string;
    imagePlaceholder?: boolean;
  };
  /** Section heading above the alternating process modules. */
  processesHeading: {
    /** Conservados sin renderizar: el encabezado en píldora se retiró del diseño. */
    title: string;
    titleAccent: string;
    /**
     * Frase destacada que abre la sección, en cuerpo grande. Corresponde a
     * "Bajada" en el documento de taxonomía.
     *
     * Mientras algún hub no la defina, la página parte `intro` en la primera
     * frase para obtenerla, que es como funcionaba antes.
     */
    bajada?: string;
    /** Párrafo de apoyo bajo la bajada. "Intro" en el documento de taxonomía. */
    intro: string;
  };
  /** Processes rendered as alternating image + text modules. */
  processes: IndustryProcess[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}
