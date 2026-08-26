import { industrias } from "../../data/industrias";

// Enlaces de la barra de navegacion. Apuntan a las rutas reales del sitio: la
// version neumorfica reemplaza al diseno anterior en su lugar, no convive con el
// en una carpeta aparte.
export const enlacesNav = [
  { href: "/#hero", texto: "Home", clave: "home" },
  {
    href: "/#industrias",
    texto: "Industrias",
    clave: "industrias",
    hijos: industrias.map((i) => ({
      href: `/${i.slug}`,
      texto: i.navLabel,
      clave: i.slug.replace("sopladores-para-", ""),
    })),
  },
  { href: "/#servicios", texto: "Servicios", clave: "servicios" },
  { href: "/#sopladores", texto: "Sopladores", clave: "sopladores" },
  { href: "/#nosotros", texto: "Nosotros", clave: "nosotros" },
  { href: "/#temporal", texto: "Mision", clave: "mision" },
  { href: "/blog", texto: "Insights", clave: "blog" },
];
