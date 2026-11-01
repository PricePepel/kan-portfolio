# kan-portfolio

Personal site of Ruslan Kan, live at [kan-portfolio-one.vercel.app](https://kan-portfolio-one.vercel.app).

Next.js 15 (App Router), React 19, Tailwind v4 and GSAP, with an OKLCH token system, View Transitions and a programmatic OG image.

## Run it

```bash
cd next-app
npm install
npm run dev
```

Then open http://localhost:3030.

## Design system

| Token | OKLCH | Role |
|---|---|---|
| `--bg-base` | `oklch(7.5% 0.008 70)` | Warm-tinted dark base |
| `--text` | `oklch(96% 0.008 80)` | Body text |
| `--accent` | `oklch(72% 0.13 60)` | Amber identity (links, year markers) |
| `--blue` | `oklch(62% 0.16 280)` | Blue-violet atmosphere (aurora, process numerals) |
| Display | Cabinet Grotesk 200/700/800/900 | Headlines, big marks, pillar numerals |
| Mono | JetBrains Mono 400/500 | Eyebrows, chips, labels |

The light theme is fully wired: a `[data-theme="light"]` token block gives a warm cream and deep amber palette, and the toggle uses the View Transitions API.

## Browser support

Chrome 111+, Safari 15.4+, Firefox 113+, Edge. Uses OKLCH, View Transitions (with a graceful fallback), `animation-timeline: view()` (behind `@supports`) and `100dvh`. `prefers-reduced-motion` gets a designed static state, not a frozen animation.

## Deploy

Pushes to `main` deploy to Vercel. For a manual deploy:

```bash
cd next-app
npx vercel --prod
```

Written up in [kan-case-studies](https://github.com/PricePepel/kan-case-studies).
