import type { IndustryPage } from "./types";
import { mineria } from "./mineria";
import { biogas } from "./biogas";
import { tratamientoAgua } from "./tratamiento-agua";
import { celulosaPapel } from "./celulosa-papel";
import { alimentaria } from "./alimentaria";
import { petroquimica } from "./petroquimica";

// Registry of industry landing pages. Add a new page by importing its
// IndustryPage object and appending it here — the dynamic route, nav submenu
// and sitemap pick it up automatically.
// Order mirrors the homepage industry cards (src/components/sections/areas/data.ts),
// which in turn follow the taxonomy agreed with Carlos (6 industrias).
export const industrias: IndustryPage[] = [
  mineria,
  biogas,
  tratamientoAgua,
  celulosaPapel,
  alimentaria,
  petroquimica,
];

export const industriasBySlug = new Map(industrias.map((i) => [i.slug, i]));
