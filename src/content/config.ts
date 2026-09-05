import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().optional(),
    /*
      Un articulo con draft: true no se construye. Sale del indice, de la
      paginacion, de los listados por etiqueta y del sitemap, y su URL devuelve
      404. El archivo se queda en el repositorio, listo para volver.
      El filtro vive en src/utils/insights.ts.
    */
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
