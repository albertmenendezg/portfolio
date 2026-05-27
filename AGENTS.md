# AGENTS.md - Developer Guidelines for This Repository

## Project Overview

This is a Next.js 16 portfolio website built with:
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **i18n**: react-i18next (i18next + react-i18next) with JSON locale files

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on http://localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

### Running a Single Test

**No test framework is currently configured** for this project. Tests can be added by installing Jest, Vitest, or Playwright.

To add tests, run:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

Then add to package.json scripts:
```json
"test": "vitest",
"test:run": "vitest run"
```

## Code Style Guidelines

### General

- Use TypeScript with strict mode enabled (`tsconfig.json: "strict": true`)
- All components use the Next.js App Router
- Client components must include `"use client"` directive at the top
- Use functional components with hooks

### Imports

- Use path alias `@/*` for imports from `./src/*`
- Order imports: external libraries → internal modules → local components
- Example:
  ```typescript
  import { motion } from "framer-motion";
  import { experience } from "@/data/portfolio";
  import { useTranslation } from "react-i18next";
  ```

### Formatting

- 2-space indentation
- Single quotes for strings
- Trailing commas
- No semicolons (ESLint default)
- Run `npm run lint` before committing

### Types

- Always define explicit types for props, function parameters, and return values
- Avoid `any` - use `unknown` when type is uncertain
- Use TypeScript's strict null checking

### Naming Conventions

- **Components**: PascalCase (e.g., `Experience.tsx`, `LanguageSelector.tsx`)
- **Variables/functions**: camelCase
- **Files**: kebab-case (e.g., `globals.css`, `portfolio.ts`)
- **Constants**: UPPER_SNAKE_CASE for global constants

### Component Structure

```typescript
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  onAction?: () => void;
}

export default function ComponentName({ title, onAction }: Props) {
  const [state, setState] = useState<string>("");

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.div>
    </section>
  );
}
```

### i18n

- Translations are stored in `src/i18n/locales/{en,es}.json`
- Components use `useTranslation()` from `react-i18next`:
  ```typescript
  import { useTranslation } from "react-i18next";

  const { t } = useTranslation();
  // Access: t("skills.title"), t("hero.hello")
  ```
- Language switching: `i18n.changeLanguage("en" | "es")` persisted to localStorage key `"lang"`
- The i18n instance is initialized in `src/i18n/i18n.ts` and provided via `I18nProvider` in the root layout

### Tailwind CSS

- Use Tailwind CSS v4 syntax (`@import "tailwindcss"` in CSS)
- Use semantic class names for colors (e.g., `bg-gray-900`, `text-emerald-400`)
- Responsive design: use `sm:`, `md:`, `lg:` prefixes

### Accessibility

- Include `id` attributes for section navigation
- Use semantic HTML elements (`section`, `nav`, `footer`)
- Ensure color contrast meets WCAG standards

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Experience.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Skills.tsx
│   └── ...
├── context/              # React Context providers
│   └── ThemeContext.tsx
├── data/                 # Static data
│   └── portfolio.ts
├── i18n/                 # Internationalization
│   ├── I18nProvider.tsx  # Client component wrapper
│   ├── i18n.ts            # i18next configuration
│   └── locales/
│       ├── en.json       # English translations
│       └── es.json       # Spanish translations
```

## Linting & Type Checking

Before committing, always run:

```bash
npm run lint
```

No separate typecheck command exists; Next.js build includes TypeScript compilation.

## Adding New Features

1. Create components in `src/components/`
2. Add data to appropriate files in `src/data/`
3. Add translations keys to `src/i18n/locales/{en,es}.json`
4. Use `useTranslation()` from `react-i18next` to access translations
5. Test with `npm run dev`
6. Verify with `npm run lint` and `npm run build`
