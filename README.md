# Ivy Edge Research Explorer

An interactive quiz microsite that guides prospective students through five questions to discover their **Research Archetype** — a personalized identity paired with a tailored project concept — then connects them to a strategy session via Calendly.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build**: Vite 7
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion) + tsParticles
- **Scheduling**: react-calendly

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check + production build
npm run build

# Lint
npm run lint
```

## Environment Variables

Create a `.env` file in the project root:

```
VITE_CALENDLY_URL=https://calendly.com/your-url
```

If not set, the app falls back to the URL defined in `src/data/content.ts`.

## Project Structure

```
src/
├── components/    # Reusable UI components (buttons, cards, animations)
├── scenes/        # 8 full-screen quiz scenes
├── data/
│   ├── content.ts    # All user-facing text (single source of truth)
│   └── archetypes.ts # Quiz answer → archetype mapping
├── hooks/         # Custom hooks (quiz state, typewriter effect)
├── lib/           # Archetype computation logic
├── types/         # TypeScript type definitions
└── index.css      # Tailwind theme + custom utilities
```

## Quiz Flow

1. **Intro** — Landing page
2. **The Tool** — Choose academic discipline (4 options)
3. **The Scale** — Micro or macro focus (2 options)
4. **The Outcome** — Preferred deliverable type (4 options)
5. **The Crew** — Work style preference (2 options)
6. **The Fuel** — Core motivation (2 options)
7. **Synthesis** — Animated loading sequence
8. **Result** — Personalized archetype, project concept, and Calendly CTA

Questions 1 and 2 determine one of **8 archetypes**. Question 3 selects from **96 project concepts**. Questions 4 and 5 customize the description.

## Editing Content

All user-facing text is in `src/data/content.ts`. See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for detailed instructions on editing quiz questions, archetypes, project concepts, and more.

## Deployment (Vercel)

### First-time setup

```bash
# Install Vercel CLI
npm i -g vercel

# Link project (follow prompts to connect your Vercel account)
vercel link

# Set environment variables on Vercel
vercel env add VITE_CALENDLY_URL
```

### Deploy

```bash
# Preview deployment (staging URL)
vercel

# Production deployment
vercel --prod
```

### Git-based deploys

Once the project is linked, pushing to `main` will automatically trigger a production deploy. Pull request branches get preview URLs.

Vercel auto-detects Vite — no build configuration needed. The defaults work out of the box:
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Framework preset**: Vite
