# Ivy Edge Research Explorer

Interactive quiz microsite that matches prospective students to a "Research Archetype" and project concept, then funnels them to a Calendly booking.

## Tech Stack

- Vite 7 + React 19 + TypeScript
- Tailwind CSS v4 (no config file — uses `@theme` directive in `src/index.css`)
- `motion` package (Framer Motion rebrand) — import from `motion/react`
- `@tsparticles/react` v3 + `@tsparticles/slim` for particle background
- `react-calendly` for Calendly integration

## Commands

```bash
npm run dev        # Dev server at http://localhost:5173
npm run build      # TypeScript type-check + Vite production build
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Architecture

8-scene quiz flow managed by `useReducer` in `src/hooks/useQuiz.ts`, routed in `src/App.tsx`:

1. **IntroScene** — Landing page
2. **ToolScene** — Q1: academic discipline (4 options)
3. **ScaleScene** — Q2: micro vs macro (2 options)
4. **OutcomeScene** — Q3: deliverable type (4 options)
5. **CrewScene** — Q4: independent vs collaborative (2 options)
6. **FuelScene** — Q5: curiosity vs impact (2 options)
7. **SynthesisScene** — Loading animation
8. **ResultScene** — Archetype result + Calendly CTA

Archetype mapping: Q1 × Q2 → 8 archetypes (`src/lib/archetypeMapper.ts`, `src/data/archetypes.ts`). Q3 selects from 96 project concepts. Q4/Q5 modify the description text.

## Project Structure

```
src/
├── components/    # Reusable UI (GlowButton, OptionCard, ParticleBackground, etc.)
├── scenes/        # 8 full-screen scene components
├── data/
│   ├── content.ts    # ALL user-facing text (single source of truth)
│   └── archetypes.ts # Tool → archetype ID mapping
├── hooks/         # useQuiz (state), useTypewriter (animation)
├── lib/           # archetypeMapper (computes final result)
├── types/         # TypeScript types for quiz choices
└── index.css      # Tailwind imports + @theme colors + custom utilities
```

## Key Conventions

### Content editing
All user-facing text lives in `src/data/content.ts`. See `CONTENT_GUIDE.md` for detailed editing instructions. Never change option `id` values or archetype object keys — they're used by the mapping logic.

### Tailwind v4
No `tailwind.config.js`. Custom colors and fonts are defined via `@theme {}` in `src/index.css`. Custom utilities go in `@layer utilities {}`.

### Motion animations
Import from `motion/react`. In variant objects, use `'easeOut' as const` (not plain string) to satisfy the `Easing` type.

### tsParticles v3
Use `initParticlesEngine()` in a `useEffect`, then conditionally render `<Particles>` only after the engine is initialized. Do not use the deprecated `init` prop.

## Environment Variables

| Variable | Purpose | Fallback |
|----------|---------|----------|
| `VITE_CALENDLY_URL` | Calendly booking link | `siteContent.result.calendlyFallbackUrl` in content.ts |

Create a `.env` file (gitignored) to set:
```
VITE_CALENDLY_URL=https://calendly.com/your-url
```
