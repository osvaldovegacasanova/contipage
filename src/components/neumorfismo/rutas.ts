import { industrias } from "../../data/industrias";

// Traduce rutas del sitio real a sus equivalentes dentro del experimento, para
// que al navegar la versión neumórfica no se salte de vuelta al sitio actual.
//
// Los hubs usan la forma corta del slug: /sopladores-para-mineria -> /neumorfismo/mineria

export const neuHub = (slug: string) => `/neumorfismo/${slug.replace("sopladores-para-", "")}`;

export const NEU_HOME = "/neumorfismo/home";
export const NEU_CONTACTO = `${NEU_HOME}#contacto`;
export const NEU_BLOG = "/neumorfismo/blog";
export const NEU_SISTEMA = "/neumorfismo";

/** Enlaces de la barra del experimento, en el orden en que conviene recorrerlo. */
export const enlacesNeu = [
  { href: NEU_SISTEMA, texto: "Sistema", clave: "sistema" },
  { href: NEU_HOME, texto: "Home", clave: "home" },
  ...industrias.map((i) => ({
    href: neuHub(i.slug),
    texto: i.navLabel,
    clave: i.slug.replace("sopladores-para-", ""),
  })),
  { href: NEU_BLOG, texto: "Blog", clave: "blog" },
];
