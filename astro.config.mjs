import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://continentalandes.com",
  base: "",
  integrations: [tailwind(), react()],
});
