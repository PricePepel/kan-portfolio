import { ArrowRight, ArrowDown, ArrowUpRight, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { Navigation } from '@/components/Navigation';
import { HeroAtmosphere } from '@/components/HeroAtmosphere';
import { SelectedWork } from '@/components/SelectedWork';
import { Process } from '@/components/Process';
import { ConsoleSignature } from '@/components/ConsoleSignature';
import { HeroHeadline } from '@/components/HeroHeadline';
import { MarqueeStrip } from '@/components/MarqueeStrip';
import { OversizedEmailLink } from '@/components/OversizedEmailLink';
import { Trajectory } from '@/components/Trajectory';
import { WorkingWith } from '@/components/WorkingWith';
import { ServiceFlowDiagram } from '@/components/ServiceFlowDiagram';

const TECH_KEYWORDS = [
  { label: 'Anthropic API' },
  { label: 'Next.js 15' },
  { label: 'Supabase' },
  { label: 'OpenAI' },
  { label: 'TypeScript' },
  { label: 'React 19' },
  { label: 'GSAP' },
  { label: 'Tailwind v4' },
  { label: 'Streaming' },
  { label: 'Function Calling' },
  { label: 'AI Agents' },
  { label: 'Production AI' },
];

const PILLARS = [
  {
    num: '01',
    title: 'Production AI patterns',
    body:
      'Where LLMs meet real systems. Streaming, fallbacks, function calling, predictable cost. The unglamorous half of AI engineering that decides whether a feature stays in the product.'
  },
  {
    num: '02',
    title: 'Internal tools I build for myself',
    body:
      'Admin copilots, ops automations, scrapers, agents on a cron. Built fast for one user, no public launch. The fastest way I learn a new technique.'
  },
  {
    num: '03',
    title: 'AI-first MVPs',
    body:
      'Full-stack: Next.js, Supabase, an LLM, billing, auth. End-to-end systems that hold up in production, not a proof of concept to throw away.'
  }
];

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <ConsoleSignature />
      <Navigation />

      {/* ============ HERO — Cinematic Center ============ */}
      <section
        id="hero"
        className="relative flex min-h-[100dvh] items-center justify-center px-6 pb-20 pt-32 md:px-10 md:pt-40"
      >
        <HeroAtmosphere />
        <div className="relative z-[5] mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--text-mute)]">
            <span className="rule-draw inline-block h-px w-7 bg-[var(--accent)]" />
            ( 00 / now )
          </span>

          <span
            className="mt-5 inline-flex items-center gap-3 rounded-full border border-[var(--line-2)] bg-[var(--bg-elev)] px-4 py-2 font-mono text-[12px] uppercase tracking-[0.06em]"
          >
            <span className="relative inline-flex h-2 w-2">
              <span
                className="status-pulse absolute inset-0 rounded-full"
                style={{ background: 'var(--good)' }}
                aria-hidden="true"
              />
              <span className="relative inline-block h-2 w-2 rounded-full" style={{ background: 'var(--good)' }} />
            </span>
            Building · 2026
          </span>

          <HeroHeadline />

          <p
            className="mt-7 max-w-[60ch] leading-[1.55] text-[var(--text-mute)]"
            style={{ fontSize: 'clamp(17px, 1.5vw, 20px)' }}
          >
            I ship production AI features and tools: Anthropic, OpenAI, Next.js, Supabase. Four projects live across
            SaaS, edtech, market analysis, and freelance WordPress. All written up in public.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#work"
              className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full px-6 font-mono text-[12px] uppercase tracking-[0.05em] font-medium transition-[transform] duration-300 hover:-translate-y-[1px] active:scale-[0.98]"
              style={{
                background: 'var(--accent)',
                color: 'var(--bg-base)',
                boxShadow: '0 0 0 1px var(--accent), 0 8px 24px -8px var(--accent-glow)'
              }}
            >
              See work
              <ArrowDown size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="https://github.com/PricePepel/kan-case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-[var(--line-2)] px-6 font-mono text-[12px] uppercase tracking-[0.05em] font-medium text-[var(--text)] transition-[background-color,color,border-color] duration-300 hover:bg-[var(--text)] hover:text-[var(--bg-base)] hover:border-[var(--text)]"
            >
              Read case studies
              <ArrowUpRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-16 w-full md:mt-20">
            <MarqueeStrip items={TECH_KEYWORDS} speed={50} />
          </div>

        </div>
      </section>

      {/* ============ TRAJECTORY — Two-track timeline ============ */}
      <Trajectory />

      {/* ============ PILLARS — What I build ============ */}
      <section id="what" className="relative px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <header className="mb-16 flex flex-col gap-5">
            <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw-on-scroll inline-block h-px w-7 bg-[var(--accent)]" />
              ( 02 / what i build )
            </span>
            <h2
              className="font-bold tracking-tight max-w-4xl"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
                fontWeight: 700,
                textWrap: 'balance'
              }}
            >
              Three areas I keep returning to.
            </h2>
          </header>

          {/* Service flow diagram — 3 pillar nodes converging into a pill */}
          <ServiceFlowDiagram />
        </div>
      </section>

      {/* ============ SELECTED WORK — Bento + View Transitions ============ */}
      <SelectedWork />

      {/* ============ PROCESS — GSAP scroll-pin ============ */}
      <Process />

      {/* ============ WORKING WITH — Five affiliations ============ */}
      <WorkingWith />

      {/* ============ ABOUT — Who I am ============ */}
      <section id="about" className="relative px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-20">
          {/* Eyebrow + quick facts */}
          <div>
            <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw-on-scroll inline-block h-px w-7 bg-[var(--accent)]" />
              ( 06 / about )
            </span>
            <h2
              className="mt-5 font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
                fontWeight: 700,
                textWrap: 'balance'
              }}
            >
              Kan, 17,<br />
              <span style={{ color: 'var(--text-faint)', fontWeight: 300 }}>Tashkent.</span>
            </h2>

            <dl className="mt-10 flex flex-col gap-5 border-t border-[var(--line)] pt-8">
              <div className="flex items-baseline justify-between gap-6 border-b border-dashed border-[var(--line-2)] pb-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-faint)]">Stage</dt>
                <dd className="text-right text-[14px] text-[var(--text)]" style={{ fontFamily: 'var(--font-display)' }}>
                  11th grade · finishing Jun 2026
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-dashed border-[var(--line-2)] pb-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-faint)]">Working at</dt>
                <dd className="text-right text-[14px] text-[var(--text)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Saman AI Academy · Lead dev
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-dashed border-[var(--line-2)] pb-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-faint)]">Teaching</dt>
                <dd className="text-right text-[14px] text-[var(--text)]" style={{ fontFamily: 'var(--font-display)' }}>
                  80+ students at ITSTEP
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-dashed border-[var(--line-2)] pb-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-faint)]">Leading</dt>
                <dd className="text-right text-[14px] text-[var(--text)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Academic Council, 900 students
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-dashed border-[var(--line-2)] pb-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-faint)]">Writing</dt>
                <dd className="text-right text-[14px] text-[var(--text)]" style={{ fontFamily: 'var(--font-display)' }}>
                  AI in banking · with PhD supervisor
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-faint)]">Next</dt>
                <dd className="text-right text-[14px] text-[var(--text)]" style={{ fontFamily: 'var(--font-display)' }}>
                  Minerva · Class of 2030
                </dd>
              </div>
            </dl>
          </div>

          {/* Narrative */}
          <div className="flex flex-col gap-6 border-t border-[var(--line)] pt-8 md:border-none md:pt-0 md:justify-center">
            <p
              className="reveal-on-scroll text-[var(--text)]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 2.6vw, 32px)',
                lineHeight: 1.3,
                letterSpacing: '-0.015em',
                fontWeight: 500,
                textWrap: 'balance'
              }}
            >
              Four AI products shipped before applying to university. I write code because the questions are more interesting than the alternatives.
            </p>

            <p className="max-w-[58ch] text-[16px] leading-[1.7] text-[var(--text-mute)] md:text-[17px]">
              Lead Software Developer at{' '}
              <a
                href="https://saman.academy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text)] underline decoration-[var(--line-2)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                Saman AI Academy
              </a>
              : three product surfaces in production, two in daily external use. Evenings I teach web development to 80+ students at ITSTEP. The rest is the Academic Council (900 students) and a co-authored paper on AI in banking.
            </p>

            <p className="max-w-[58ch] text-[16px] leading-[1.7] text-[var(--text-mute)] md:text-[17px]">
              I play midfield. I take digicam photos. I make astrophysics content on the side. Russian and English, fluent in both.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="relative px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <header className="mb-12 flex flex-col gap-5">
            <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw-on-scroll inline-block h-px w-7 bg-[var(--accent)]" />
              ( 07 / contact )
            </span>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 6vw, 76px)',
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                fontWeight: 700,
                textWrap: 'balance'
              }}
            >
              I ship production AI.{' '}
              <span style={{ color: 'var(--text-faint)', fontWeight: 300 }}>
                Three sentences get the fastest reply.
              </span>
            </h2>
          </header>

          <OversizedEmailLink email="nicetryskrock@gmail.com" />

          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.6] text-[var(--text-mute)]">
            Tashkent, Uzbekistan · GMT+5. Replies within 24 hours on weekdays. Heading to{' '}
            <strong className="font-medium text-[var(--text)]">Minerva</strong> in August, class of 2030.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            <a
              href="https://github.com/PricePepel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-[3px] border border-[var(--line-2)] px-5 font-mono text-[12px] uppercase tracking-[0.05em] text-[var(--text)] transition-colors hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg-base)]"
            >
              <GithubLogo size={16} weight="regular" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ruslan-kan-207692384/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-[3px] border border-[var(--line-2)] px-5 font-mono text-[12px] uppercase tracking-[0.05em] text-[var(--text)] transition-colors hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg-base)]"
            >
              <LinkedinLogo size={16} weight="regular" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER — meta row + Tashkent sky coordinates ============ */}
      <footer className="relative border-t border-[var(--line)] pb-10 pt-16 md:pt-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div
            className="flex flex-col gap-5 font-mono text-[11px] uppercase tracking-[0.05em] text-[var(--text-mute)] md:flex-row md:items-center md:justify-between"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            <div className="flex flex-wrap gap-5">
              <span>© 2026 Kan</span>
              <span>Tashkent · 41.3°N · 69.3°E</span>
              <span>Built in Next.js 15</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 normal-case tracking-normal text-[var(--text-faint)]">
              <span
                style={{ fontVariantNumeric: 'tabular-nums' }}
                title="The sky pattern behind this page is the actual sky over Tashkent at this instant, projected stereographically."
              >
                sky: 2026-05-11 · 21:47 UTC+5
              </span>
            </div>
            <a
              href="#hero"
              className="inline-flex min-h-[44px] items-center text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              <span aria-hidden="true">↑</span>&nbsp; Back to top
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
