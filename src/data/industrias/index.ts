import type { IndustryPage } from "./types";
import { mineria } from "./mineria";

// Registry of industry landing pages. Add a new page by importing its
// IndustryPage object and appending it here — the dynamic route, nav submenu
// and sitemap pick it up automatically.
export const industrias: IndustryPage[] = [mineria];

export const industriasBySlug = new Map(industrias.map((i) => [i.slug, i]));
