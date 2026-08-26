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
      // Las mismas paginas internas que robots.txt bloquea.
      filter: (pagina) => !/\/(colores|fonts|separadores)\/?$/.test(pagina),
    }),
  ],
  build: {
    inlineStylesheets: "always",
  },
});
