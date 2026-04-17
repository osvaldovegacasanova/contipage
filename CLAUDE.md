# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based marketing website for Continental Andes Blowers, a centrifugal blower/compressor supplier operating in Chile, Peru, Argentina, Bolivia, and Ecuador. The site is built with Astro 4.x, React, and TailwindCSS, featuring sections for services, products, testimonials, and a blog system.

## Development Commands

### Core Commands
- `npm run dev` or `npm start` - Start development server
- `npm run build` - Type-check with `astro check`, then build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands directly

### Asset Processing
- `npm run images:blog` - Process blog images from `src/content/blog/assets` to `public/blog` (500×500 WebP, quality 82)
- `npm run prebuild` - Automatically runs `images:blog` before every build
- `npm run videos:encode` - Encode video variants from `public/videos/parte1.mp4`:
  - Desktop WebM (VP9, CRF 32)
  - Mobile MP4 (H.264, 1280px, 24fps, CRF 28)
  - Mobile WebM (VP9, 854px, 24fps, CRF 36)

## Architecture

### Content Management

**Site Configuration**: `src/config/site.ts` defines company name constant used across components.

**Content Catalog**: `SITE_CONTENT_CATALOG.md` provides comprehensive documentation of all site content, including:
- Text for every section (hero, services, products, testimonials, CTA)
- Image paths and alt text
- Navigation structure
- Footer links
- Blog post metadata

Always reference this file when updating site copy or understanding content structure.

### Component Organization

**Section Components** (`src/components/sections/*`):
- Each major homepage section has its own directory (hero, services, areas, productos, proceso, testimonials, environment, cta, nosotros)
- Sub-components live in `components/` subdirectories within each section
- Data is typically hardcoded within section components or imported from local data files

**Shared Components** (`src/components/shared`):
- Reusable UI elements like Title2, Title3, SubTitle2
- Used consistently across sections for typography hierarchy

**Layouts** (`src/layouts`):
- `Layout.astro` - Base layout with navbar, footer, theme switching, mobile menu, and scroll animations
- `BlogLayout.astro` - Wraps Layout for blog posts, adds JSON-LD structured data (Article + BreadcrumbList)

### Styling System

**Tailwind Configuration** (`tailwind.config.mjs`):
- Custom color palette with semantic tokens:
  - `base`/`base-dark` - Background colors for light/dark themes
  - `accent` - Text colors (light/dark variants)
  - `primary` - Blue (#0046ba) - primary brand color
  - `secondary` - Green (#228B22) - secondary brand color
  - `cta` - Gold (#ffd700) - call-to-action elements
- Custom breakpoint: `midmd` at 880px
- Font: Raleway (Google Fonts) as primary sans-serif
- See `/colores` page for complete palette visualization
- See `/fonts` page for typography examples

**Dark Mode**: Uses Tailwind's class-based dark mode. Theme toggle in navbar with localStorage persistence and system preference detection.

**Scroll Animations**: Layout.astro includes custom scroll effects:
- `scroll-blur` - Blur-in effect with translation on scroll into view
- `scroll-breeze` - Subtle parallax shift/skew effect during scrolling
- Applied automatically to `[data-scroll-blur]`, `main img`, and heading elements
- Respects `prefers-reduced-motion`

### Blog System

**Content Collection** (`src/content/blog`):
- Markdown posts with frontmatter: title, description, pubDate, heroImage, tags, author
- Assets stored in `src/content/blog/assets/` (automatically processed to WebP on build)

**Routes**:
- `/blog` - Main blog index with tag filtering
- `/blog/page/[page]` - Paginated blog listing
- `/blog/tag/[tag]` - Filter by tag
- `/blog/[slug]` - Individual post using BlogLayout

**SEO**: BlogLayout adds Article and BreadcrumbList JSON-LD structured data to every post.

### Internationalization

Site language is Spanish (`<html lang="es">`). All content, navigation, and UI text are in Spanish. When editing or adding content, maintain Spanish language throughout.

### Video Handling

The hero section (`src/components/sections/hero/Hero.astro`) uses a background video with:
- Poster image: `/images/hero-hero3.jpg`
- Mobile background override: `/images/slider-bg3.webp`
- Lazy-loaded video sources (WebM and MP4 variants)
- Sources generated via `npm run videos:encode` script

## Key Technical Patterns

**Component Data Flow**: Most section components define their data inline or import from adjacent data files. Content is largely static, not fetched from external sources.

**Image Optimization**: Use Astro's built-in image optimization for most images. Blog images are pre-processed via Sharp. See `scripts/resize-blog-images.mjs` for blog image processing logic.

**TypeScript**: Strict mode. All `.astro` frontmatter is TypeScript.

**Formatting**: Prettier with `prettier-plugin-astro` is available but not enforced via a script. No ESLint configured.

## Common Tasks

- **New section**: Create `src/components/sections/[name]/`, add main component, import in `src/pages/index.astro`.
- **Update copy**: Find the exact component via `SITE_CONTENT_CATALOG.md`, then edit inline strings there.
- **New blog post**: Add `.md` to `src/content/blog/` with frontmatter (title, description, pubDate, heroImage, tags, author). Place hero image in `src/content/blog/assets/` and run `npm run images:blog`.
- **Color changes**: Edit `tailwind.config.mjs`; preview at `/colores`.
- **Verify build**: `npm run build` runs `astro check` + type-check before bundling — always run before committing.
