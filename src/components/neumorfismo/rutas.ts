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
    // Sin submenu, pero se marca activa tambien en las paginas de industria: sin
    // esto, estando en un hub no quedaria ningun enlace resaltado en la barra.
    tambien: industrias.map((i) => i.slug.replace("sopladores-para-", "")),
  },
  { href: "/#servicios", texto: "Servicios", clave: "servicios" },
  { href: "/#sopladores", texto: "Sopladores", clave: "sopladores" },
  { href: "/#nosotros", texto: "Nosotros", clave: "nosotros" },
  { href: "/#temporal", texto: "Mision", clave: "mision" },
  { href: "/insights", texto: "Insights", clave: "insights" },
  { href: "/contacto", texto: "Contacto", clave: "contacto" },
];
