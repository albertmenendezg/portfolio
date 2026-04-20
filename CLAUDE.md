# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server at http://localhost:3000
npm run build     # Static export to out/
npm run lint      # ESLint (run before committing)
```

No test framework is configured. `npm run build` includes TypeScript compilation.

## Architecture

Single-page portfolio with anchor-based smooth scrolling. Built with Next.js 16 App Router, configured for **static export** (`output: "export"` in next.config.ts) — no server-side features.

**Data flow**: All content lives in `src/data/portfolio.ts` (personal info, experience, skills, certifications). All UI strings live in `src/data/translations.ts` (English + Spanish). Components read from these files; there are no API calls.

**i18n**: `LanguageContext.tsx` holds the active language (`en`/`es`). Every component calls `useLanguage()` to get both the language state and the translation key lookup. The `LanguageSelector` in Navbar toggles this context.

**All components use `"use client"`** — there are no server components beyond the root layout.

**Animation pattern**: Framer Motion throughout. Scroll-triggered via `whileInView` + `viewport={{ once: true }}`. Entry animations: `initial={{ opacity: 0, y: 20 }}`.

**Deployment**: Push to `master` → GitHub Actions builds → uploads to AWS S3 → invalidates CloudFront cache.

## Code Style

- No semicolons, 2-space indent, single quotes, trailing commas
- Path alias `@/*` maps to `src/*`
- Import order: external libs → internal modules (`@/data`, `@/context`) → local components
- Props always typed with an explicit `interface Props {}`
- `unknown` over `any`
- Tailwind v4: use `@import "tailwindcss"` syntax; accent color is `emerald-400/500`, dark base is `gray-900/950`
