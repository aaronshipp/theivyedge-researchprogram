# Content Editing Guide

All user-facing text in the Research Explorer lives in **one file**:

```
src/data/content.ts
```

Edit that file, run a build check, and you're done. No other files need to change for text updates.

---

## Quick Start

1. Open `src/data/content.ts` in any code editor
2. Find the section you want to change (sections are labeled with comments)
3. Edit the text between the quotes
4. Run `npm run build` — if it succeeds, your changes are safe
5. Run `npm run dev` to preview at `http://localhost:5173`

---

## File Structure

The file is organized by scene, in the order users experience them:

| Section | What it controls |
|---|---|
| `intro` | Landing screen — heading, subtext, CTA button |
| `questions[0]` | Q1 "The Tool" — prompt + 4 options |
| `questions[1]` | Q2 "The Scale" — prompt + 2 options |
| `questions[2]` | Q3 "The Outcome" — prompt + 4 options |
| `questions[3]` | Q4 "The Crew" — prompt + 2 options |
| `questions[4]` | Q5 "The Fuel" — prompt + 2 options |
| `synthesis` | Loading animation scan lines |
| `result` | Result screen labels + CTA |
| `archetypes` | 8 archetype names, descriptions, fields |
| `projectConcepts` | 96 project concepts (8 archetypes × 4 outcomes × 3 variations) |
| `modifiers` | Description + gap hook text (crew × fuel combos) |
| `mentorNetwork` | University badge names |

---

## Common Edits

### Change a quiz question

Find the question in the `questions` array (Q1 is index 0, Q5 is index 4):

```ts
// Q1 — "The Tool" (Scene 2)
{
  id: 'tool',
  prompt: 'Choose your instrument of change.',  // ← edit this
  options: [
    { id: 'stem_bio', icon: '🔬', label: 'Microscope / DNA Helix', description: 'Biology, Chemistry, Life Sciences' },
    //                        ↑ emoji   ↑ card title                  ↑ card subtitle
  ],
},
```

You can freely change: `prompt`, `icon`, `label`, `description`.

**Do not change** the `id` values (`stem_bio`, `cs_eng`, etc.) — they're used by the archetype mapping logic.

### Change an archetype name or description

Find the archetype in the `archetypes` object:

```ts
bio_innovator_micro: {
  name: 'The Bio-Innovator',           // ← shown as the big heading on result screen
  baseDescription: 'You see biology…', // ← main paragraph
  mentorProfile: 'stem_bio',           // ← used internally, don't change
  fields: ['Molecular Biology', 'Biochemistry', 'Genetics'],  // ← discipline badges
},
```

### Change a project concept

Each archetype+outcome combination has **3 variations** — one is chosen at random each time a user sees the result. Find the archetype key in `projectConcepts`, then the outcome type:

```ts
projectConcepts: {
  bio_innovator_micro: {
    paper: [
      'A research paper on CRISPR…',           // variation 1
      'A comparative analysis of enzyme…',      // variation 2
      'A meta-analysis of mRNA stability…',     // variation 3
    ],
    prototype: [ /* 3 variations */ ],
    media: [ /* 3 variations */ ],
    policy: [ /* 3 variations */ ],
  },
```

You can edit any variation text, or change the number of variations per slot (the random picker adapts automatically). Keep at least 1 per slot.

### Change the Calendly URL

Two options:

1. **Environment variable** (recommended for production): Set `VITE_CALENDLY_URL` in your `.env` file:
   ```
   VITE_CALENDLY_URL=https://calendly.com/your-actual-url
   ```

2. **Fallback URL** in the content file (used when env var is not set):
   ```ts
   result: {
     calendlyFallbackUrl: 'https://calendly.com/ivy-edge/strategy-session',
   },
   ```

### Change the university badges

Edit the `mentorNetwork.universities` array:

```ts
mentorNetwork: {
  universities: ['Harvard', 'Columbia', 'Yale', 'MIT', 'Stanford'],
},
```

### Change synthesis loading text

Edit the `synthesis.scanLines` array. Lines appear one at a time during the loading animation:

```ts
synthesis: {
  scanLines: [
    'Scanning Ivy Edge Mentor Network...',
    'Accessing Harvard / Columbia / MIT nodes...',
    'Cross-referencing Research Vectors...',
    'Synthesizing Your Archetype...',
  ],
},
```

You can add or remove lines — the animation timing adjusts automatically.

---

## What NOT to Change

These values are used as keys by the application logic. Changing them will break the quiz:

| Field | Example values |
|---|---|
| Option `id` values | `stem_bio`, `cs_eng`, `micro`, `macro`, `paper`, `prototype`, etc. |
| Archetype object keys | `bio_innovator_micro`, `platform_builder_macro`, etc. |
| `projectConcepts` keys | Must match archetype keys exactly |
| `modifiers` keys | `independent_curiosity`, `collaborative_impact`, etc. |
| `mentorProfile` values | `stem_bio`, `cs_eng`, `humanities` |

If you need to change these keys (e.g., adding a new archetype), you'll also need to update the TypeScript types in `src/types/index.ts` and the mapping in `src/data/archetypes.ts`.

---

## Testing Changes

```bash
# Type-check — catches missing fields or typos in structure
npm run build

# Preview locally
npm run dev
```

Walk through all 5 questions to verify your text appears correctly on every screen, especially the result screen where archetype name, description, project concept, fields, and gap hook all come together.

---

## Adding or Removing Answer Options

This requires code changes beyond just editing `content.ts`:

1. Add/remove the option in the `questions` array in `content.ts`
2. Update the corresponding TypeScript union type in `src/types/index.ts`
3. If the change affects Q1 or Q2, update the archetype mapping in `src/data/archetypes.ts`
4. If the change affects Q3, add/remove project concepts for all 8 archetypes
5. If the change affects Q4 or Q5, add/remove modifier combinations

For most content updates (changing wording, swapping emojis, editing descriptions), you only need to edit `content.ts`.
