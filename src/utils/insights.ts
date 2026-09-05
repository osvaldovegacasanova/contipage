import { getCollection } from "astro:content";

/**
 * Articulos por pagina en la paginacion de Insights.
 *
 * Vive aqui y no en la propia pagina porque `getStaticPaths` se ejecuta fuera
 * del ambito del componente: una constante declarada en el frontmatter de la
 * pagina no existe ahi dentro, y el build falla con "PAGE_SIZE is not defined".
 * Lo que si alcanza son los imports.
 */
export const ARTICULOS_POR_PAGINA = 6;

/**
 * Articulos de Insights visibles en el sitio, del mas nuevo al mas antiguo.
 *
 * Un articulo con `draft: true` en su frontmatter queda fuera de todo: del
 * indice, de la paginacion, de los listados por etiqueta, del sitemap y de su
 * propia URL, que pasa a devolver 404. El archivo sigue en el repositorio y
 * vuelve a publicarse quitando ese campo.
 *
 * Existe como funcion y no como filtro suelto porque la coleccion se consulta
 * en cuatro paginas distintas, y un `getCollection` sin filtrar en cualquiera
 * de ellas volveria a mostrar lo que se quiso esconder. Toda pagina nueva que
 * liste articulos debe usar esta funcion y no `getCollection` directamente.
 */
export async function articulosPublicados() {
  const articulos = await getCollection("insights", ({ data }) => data.draft !== true);
  return articulos.sort((a, b) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate));
}
