export type CaseSlug = 'naviq' | 'samanta' | 'poly' | 'kenmore';

export interface CaseStudy {
  slug: CaseSlug;
  year: string;
  client: string;
  tag: string;
  title: string;
  subtitle?: string;
  /** HTML markup for the bigmark glyph (allows <sub>, etc.) */
  bigmarkHTML: string;
  short: string;
  full: string;
  stack: string[];
  sticker: string;
  /** Tailwind classes (or inline-style fallbacks) for the case media tile background */
  mediaStyle: React.CSSProperties;
  /** Color of the bigmark on the tile and detail */
  bigmarkColor: string;
  /** Layout slot in the bento grid */
  bentoSpan: string;
  bentoMinH: string;
  /** Visual treatment for the bigmark family */
  bigmarkFamily?: 'mono' | 'serif' | 'display';
}

export const CASES: CaseStudy[] = [
  {
    slug: 'naviq',
    year: '2025',
    client: 'TrainHire',
    tag: 'Production',
    title: 'Naviq',
    subtitle: '(TrainHire)',
    bigmarkHTML: 'N<sub style="font-size:0.45em;vertical-align:sub;margin-left:0.05em">v</sub>',
    short:
      'Anthropic-powered 80-lesson academy generator. B2B SaaS, RU/EN, three portals. MVP shipped fast: 56 tests green.',
    full:
      "I shipped Naviq (TrainHire), a B2B SaaS that turns a job spec into a full 20-lesson onboarding academy and hands it to interns through a gamified personal cabinet. Stack: Next.js 16 App Router, React 19, TypeScript 5, Tailwind 4, Supabase for auth and Postgres, Zod for validation. The course generator runs on Anthropic Claude with OpenAI as a fallback, then publishes lessons into Notion via the official API. Admins enrol interns from a dedicated portal, watch progress, and route data through Google Sheets, amoCRM, and a Telegram bot. I wired XP on a 10/20/30 step curve, level scaling at 50·n², and idempotent UTC streak keys. 56 Vitest tests pass; MVP is live on dev at naviq.app.",
    stack: ['Next.js 16', 'React 19', 'Supabase', 'Anthropic', 'Vitest'],
    sticker: '[ 80 LESSONS ]',
    // Lined-notebook pattern echoes the 80-lesson curriculum
    mediaStyle: {
      backgroundImage:
        'repeating-linear-gradient(0deg, transparent 0 31px, oklch(35% 0.04 60 / 0.18) 31px 32px), linear-gradient(135deg, var(--bg-base) 0%, oklch(12% 0.02 60) 60%, oklch(16% 0.03 55) 100%)',
      backgroundSize: '32px 32px, auto'
    },
    bigmarkColor: 'oklch(72% 0.14 60)',
    bentoSpan: 'md:col-span-2 md:row-span-2',
    bentoMinH: 'min-h-[420px] md:min-h-[640px]',
    bigmarkFamily: 'display'
  },
  {
    slug: 'samanta',
    year: '2025',
    client: 'samanTA',
    tag: 'EdTech',
    title: 'samanTA',
    bigmarkHTML: '@',
    short:
      'GPT-4o tutor and quiz engine with a Telegram bot front-end. Live tutor flow used by students daily.',
    full:
      "I built samanTA, an AI quiz and tutoring platform that runs across a React + Vite web app, a FastAPI backend on Supabase, and a Python Telegram bot. Coaches assemble single-select, multi-select, and open quizzes; students take them on the web or inside Telegram, and OpenAI generates and grades content. The bot handles linking, quiz delivery, streak tracking, and configurable reminders at 24, 48, 72, 120, and 168 hour cadences, gated by a require_linked_account decorator that resolves the supabase_user_id before any handler runs. Auth uses Supabase JWTs verified via JWKS. A Stripe-gated premium tier gates the AI Concierge. Verification: 56 of 56 unit tests, SQL dry runs, end-to-end smoke tests on a real test user.",
    stack: ['React + Vite', 'FastAPI', 'Supabase', 'OpenAI', 'Telegram'],
    sticker: '[ TELEGRAM ]',
    // Dot grid echoes chat-bubble / quiz-tick texture
    mediaStyle: {
      backgroundImage:
        'radial-gradient(circle at center, oklch(45% 0.06 155 / 0.28) 1.4px, transparent 2px), linear-gradient(135deg, var(--bg-base) 0%, oklch(12% 0.02 155) 60%, oklch(14% 0.03 155) 100%)',
      backgroundSize: '22px 22px, auto'
    },
    bigmarkColor: 'var(--good)',
    bentoSpan: 'md:col-span-1 md:row-span-1',
    bentoMinH: 'min-h-[300px]',
    bigmarkFamily: 'display'
  },
  {
    slug: 'poly',
    year: '2025',
    client: 'Personal',
    tag: 'Markets',
    title: 'Polymarket Tracker',
    bigmarkHTML: 'BTC↗',
    short:
      'Cron-driven scraper plus paper-trader signal layer over the top-50 BTC 5-minute bets. Production cron, hands-off.',
    full:
      "I built Polymarket Tracker, a cron-driven scraper plus paper-trader that watches the top 50 Polymarket CRYPTO accounts trading BTC up-or-down 5-minute markets. Core scanner is a zero-dependency Node 20 script (track.mjs uses native fetch) deployed two ways: a GitHub Actions cron firing every 15 minutes via cron-job.org workflow_dispatch, plus a local Windows Task Scheduler job that writes directly into Obsidian via the Local REST API. State persists in a committed state.json with last-seen timestamps and recent transaction hashes for dedup. A separate signal layer on the same data feeds a paper-trading harness running in PAPER mode. Workflow stays green; observed cron response is HTTP 204, security-audited end to end.",
    stack: ['Node 20', 'GitHub Actions', 'Polymarket API'],
    sticker: '[ 5m CRON ]',
    // Fine ticked grid echoes 5-minute candlestick chart axes
    mediaStyle: {
      backgroundImage:
        'repeating-linear-gradient(90deg, transparent 0 23px, oklch(45% 0.05 25 / 0.18) 23px 24px), repeating-linear-gradient(0deg, transparent 0 23px, oklch(45% 0.05 25 / 0.10) 23px 24px), linear-gradient(135deg, var(--bg-base) 0%, oklch(12% 0.02 25) 60%, oklch(14% 0.03 25) 100%)',
      backgroundSize: '24px 24px, 24px 24px, auto'
    },
    bigmarkColor: 'var(--good)',
    bentoSpan: 'md:col-span-1 md:row-span-1',
    bentoMinH: 'min-h-[300px]',
    bigmarkFamily: 'mono'
  },
  {
    slug: 'kenmore',
    year: '2026',
    client: 'Kenmore',
    tag: 'Client work',
    title: 'Kenmore Appliance Support',
    bigmarkHTML: 'K',
    short:
      'Freelance WordPress build, 116+ pages, custom plugin, full design system. Live with full handover.',
    full:
      "I delivered Kenmore Appliance Support, a self-hosted WordPress site for a US appliance repair business targeting local intent (Kenmore refrigerator repair Chicago) and informational queries (washer error code F21). I scaffolded a custom PHP theme (kenmore-repair) with four CPTs (service, error_code, city, guide), an appliance_type taxonomy powering /error-codes/{appliance}/, and a custom plugin (kenmore-content-importer) that bulk-loaded 116+ error code pages across five appliance lines, 6 city pages with ZIP and suburb data, 11 services, and 10 DIY guides. Local dev ran on wp-now; deploy was ZIP + Hostinger File Manager. Design system: Montserrat, Kenmore blue (#008cc7), inline SVG icons, BreadcrumbList JSON-LD. Shipped 2026-04-09.",
    stack: ['WordPress', 'Custom plugin', 'Montserrat tokens'],
    sticker: '[ 116 PAGES ]',
    mediaStyle: {
      background:
        'linear-gradient(135deg, oklch(97% 0.015 75) 0%, oklch(86% 0.015 70) 100%)'
    },
    bigmarkColor: 'oklch(20% 0.02 30)',
    bentoSpan: 'md:col-span-2 md:row-span-1',
    bentoMinH: 'min-h-[300px]',
    bigmarkFamily: 'serif'
  }
];
