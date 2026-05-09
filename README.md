# Kan — AI integration specialist for SaaS

Personal portfolio + complete launch kit. Next.js 15 (App Router) + React 19 + Tailwind v4 + GSAP. Cabinet Grotesk + JetBrains Mono. OKLCH design system, warm amber identity + blue-violet atmospheric. View Transitions API, GSAP ScrollTrigger, programmatic OG image.

## Repository structure

```
Portfolio/
├── PRODUCT.md                  — brand context, anti-references, design principles
├── LAUNCH.md                   — week-by-week operational launch plan (read first)
├── README.md                   — this file
│
├── next-app/                   — the live website
│   ├── app/                    — Next.js App Router
│   ├── components/             — Hero, Navigation, SelectedWork (View Transitions),
│   │                             Process (GSAP scroll-pin), ConsoleSignature
│   └── lib/cases.ts            — case study data + writeups
│
├── github-readme/              — content to push to GitHub for credibility
│   ├── profile-readme.md       — paste into github.com/PricePepel/PricePepel
│   └── case-studies/           — push as a new public repo: kan-case-studies
│       ├── README.md
│       ├── naviq.md
│       ├── samanta.md
│       ├── polymarket.md
│       └── kenmore.md
│
└── posts/                      — marketing content drafts, ready to ship
    ├── x-thread-polymarket.md  — week 1
    ├── x-thread-naviq.md       — week 2
    ├── x-thread-samanta.md     — week 3
    ├── x-thread-kenmore.md     — week 4
    ├── linkedin-launch.md      — day 1
    └── hn-freelancer-reply.md  — first of every month
```

## Run the site locally

```bash
cd next-app
npm install
npm run dev
```

Open http://localhost:3030.

## Launch sequence

See `LAUNCH.md` for the full week-by-week plan. The short version:

1. **Week 0**: banking unblock, Calendly setup, GitHub profile + case-studies repo, X / LinkedIn profile setup.
2. **Week 1**: post Polymarket X thread + LinkedIn launch.
3. **Week 2**: post Naviq X thread.
4. **Week 3**: post samanTA X thread + first HN Freelancer reply.
5. **Week 4**: post Kenmore X thread + assess.
6. **Week 5–8**: convert first inbound DM, ship trial sprint, collect testimonial, raise prices.

## Live pricing

| Tier | Time | From |
|---|---|---|
| Trial sprint | 5–7 days | $1,000 |
| AI feature integration | 2–3 weeks | $1,500 |
| Internal AI tools (most builds) | 3–5 weeks | $3,500 |
| AI-first MVP | 5–8 weeks | $7,500 |

50% at kickoff, 50% at handover. Quote within 48h after a discovery call.

## Design system

| Token | OKLCH | Role |
|---|---|---|
| `--bg-base` | `oklch(7.5% 0.008 70)` | Warm-tinted dark base |
| `--text` | `oklch(96% 0.008 80)` | Body text |
| `--accent` | `oklch(72% 0.13 60)` | Amber identity (CTAs, links, year markers) |
| `--blue` | `oklch(62% 0.16 280)` | Blue-violet atmospheric (aurora, process numerals) |
| `--good` | `oklch(77% 0.17 155)` | Status pulse (Available · Jun '26) |
| Display | Cabinet Grotesk 200/700/800/900 | Headlines, big marks, pillar numerals |
| Mono | JetBrains Mono 400/500 | Eyebrows, chips, sticker labels, orbital text |

Light theme is fully wired: `[data-theme="light"]` token block produces a warm cream / deep amber palette. Theme toggle uses View Transitions API.

## Open TODOs

| Item | Where to act |
|---|---|
| Calendly URL (currently `<sup>todo</sup>`) | After Calendly account setup, edit `next-app/app/page.tsx` contact section |
| Domain decision | DNS, then add to `next-app/app/layout.tsx` metadata |
| Phase 2 price raise (after 2 testimonials) | Edit `PRICING` array in `next-app/app/page.tsx` to $2.5k / $6k / $12k |

## Browser support

Chrome 111+, Safari 15.4+, Firefox 113+, Edge. Uses OKLCH, View Transitions API (graceful fallback), `animation-timeline: view()` (`@supports` fallback), `100dvh`. Respects `prefers-reduced-motion` everywhere with a designed static state, not a frozen-mid-animation glitch.

## Deploy

```bash
cd next-app
npx vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deploys on push to `main`.
