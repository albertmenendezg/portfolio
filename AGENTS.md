# AGENTS.md

## Stack

Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind v4 · Framer Motion · Lucide React · react-i18next · React Hook Form

## Critical architecture

- **Static export** — `next.config.ts` sets `output: "export"`. No API routes, server actions, or server components beyond the root layout. All components are `"use client"`.
- **Single-page smooth-scroll** — anchor-based navigation on one page (`src/app/page.tsx` renders all sections).
- **Data flow** — no HTTP requests. Personal data in `src/data/portfolio.ts`, UI strings in `src/i18n/locales/{en,es}.json`. Components read from these files directly.
- **Dark mode** — `.dark` class on `<html>`, persisted to `localStorage` key `"theme"`. Tailwind v4 dark variant: `@custom-variant dark (&:where(.dark, .dark *))`.
- **i18n** — `i18n.changeLanguage("en"|"es")` persisted to `localStorage` key `"lang"`. Restored on load via `src/i18n/I18nProvider.tsx`.
- **Images** — `unoptimized: true` in config (static export req).

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server on `localhost:3000` |
| `npm run build` | Static export to `out/` (includes TS type-check) |
| `npm run lint` | ESLint (`eslint-config-next/core-web-vitals` + `typescript`) |

No test framework configured.

## Deployment

Push to `master` → GitHub Actions (`.github/workflows/deploy.yml`): `npm ci` → `npm run build` → `aws s3 sync out/ s3://$BUCKET --delete` → CloudFront invalidation.

## Conventions

- Path alias `@/*` → `src/*`
- Import order: external libs → `@/data`/`@/context`/`@/i18n` → local components
- No semicolons · 2-space indent · single quotes · trailing commas (ESLint-enforced)
- Props typed as `interface Props {}`; prefer `unknown` over `any`
- Framer Motion pattern: `initial={{ opacity: 0, y: 20 }}` + `whileInView` + `viewport={{ once: true }}`
- Accent: `emerald-400`/`emerald-500`

## Adding a feature

1. Component → `src/components/`
2. Data (if any) → `src/data/portfolio.ts`
3. Strings → `src/i18n/locales/en.json` and `es.json`
4. Verify: `npm run dev && npm run build`
