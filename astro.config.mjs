import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://continentalandes.com",
  base: "",
  integrations: [
    tailwind(),
    react(),
    // El sitemap se genera en cada build a partir de las rutas reales. Antes era
    // un archivo estatico en public/ que quedo congelado en enero con una sola
    // URL, mientras el sitio crecia a diecisiete paginas.
    sitemap({
      // Paginas internas que robots.txt bloquea, mas la confirmacion del
      // formulario, que no es contenido que deba aparecer en buscadores.
      filter: (pagina) => !/\/(colores|fonts|separadores|contacto\/gracias)\/?$/.test(pagina),
    }),
  ],
  build: {
    inlineStylesheets: "always",
  },
});
