# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server (Next.js)
npm run dev:turbo    # Start development server with Turbopack
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint (next/core-web-vitals + typescript)
npm run type-check   # TypeScript type checking (tsc --noEmit)
npm run format       # Format code with Prettier (includes tailwindcss plugin)
```

No test runner is configured in this project.

## Architecture

This is a **Next.js 16 App Router** marketing website for **Jetset Business Center** (JBC), a premium business center in Business Bay, Dubai. It is a fully static/client-side site deployed on Vercel at `jetsetbc.com`.

### Key architectural decisions

- **App Router** with flat route structure: each route has its own `page.tsx` directly under `app/<route>/`. Service sub-pages live under `app/services/<service>/`. No route groups are used.
- **Metadata**: Base metadata is defined in `app/layout.tsx` with a `title.template` of `"%s | Jetset Business Center"`. Individual pages export their own `metadata` objects. There is no shared `createPageMetadata()` helper.
- **Structured data**: `components/seo/JsonLd.tsx` injects JSON-LD schemas and is rendered in the root layout.
- **Animation**: Framer Motion is used for component-level animations via reusable wrappers in `components/animations/` (FadeIn, SlideIn, ParallaxSection, StaggerContainer, CountUp). The `app/template.tsx` provides page transition animations using Framer Motion.
- **UI components**: Shadcn/ui components live in `components/ui/`. Icon library is Lucide React.
- **Styling**: Tailwind CSS v4 with custom design tokens defined in `app/globals.css` using `@theme` — custom colors (`navy-*`, `gold-*`, `cream-*`, `teal-*`), custom shadows (`luxury-*`, `navy-*`), custom fonts, and animations. Utility classes: `container-custom`, `section-padding`, `glass`, `glass-dark`, `gradient-text`, `bg-gradient-luxury`.
- **Typography**: Three font families — Playfair Display (`font-display`, headings), Inter (`font-body`, body text), Space Grotesk (`font-accent`).
- **Blog**: Blog posts are loaded from `jetset_blogs.json` via `lib/blog-data.ts`. Blog content/markdown rendering uses `react-markdown` with `remark-gfm`.
- **Forms**: Contact and booking forms use `react-hook-form` with `zod` validation.
- **Path alias**: `@/` maps to the project root.

### Route map

| Route | Description |
|---|---|
| `/` | Home page |
| `/about` | Company story |
| `/services` | Services overview |
| `/services/private-offices` | Private office offerings |
| `/services/coworking` | Coworking spaces |
| `/services/meeting-rooms` | Meeting room rentals |
| `/services/business-setup` | Business setup services |
| `/locations` | Locations overview |
| `/locations/prime-tower` | Prime Tower location details |
| `/pricing` | Pricing plans |
| `/gallery` | Photo gallery |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/book-tour` | Tour booking form |
| `/contact` | Contact form |
| `/thank-you` | Post-submission confirmation |
| `/components-demo` | Component showcase (dev only) |

### SEO & config

- Redirects from old WordPress URLs to new routes are defined in `next.config.ts`.
- Sitemap is generated dynamically in `app/sitemap.ts` (includes all static pages and blog posts).
- Remote image domains (Unsplash) are configured in `next.config.ts`.
- Google Search Console verification is in root layout metadata.
