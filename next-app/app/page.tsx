import { ArrowRight, ArrowDown, ArrowUpRight, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { Navigation } from '@/components/Navigation';
import { HeroAtmosphere } from '@/components/HeroAtmosphere';
import { SelectedWork } from '@/components/SelectedWork';
import { Process } from '@/components/Process';
import { ConsoleSignature } from '@/components/ConsoleSignature';

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

          <h1
            className="mt-8 tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.25rem, 6.5vw, 6rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              fontWeight: 900,
              textWrap: 'balance'
            }}
          >
            <span className="hero-line hero-line-1">Production AI,</span>
            <span className="hero-line hero-line-2">
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'var(--text-mute)',
                  letterSpacing: '-0.035em'
                }}
              >
                shipped before
              </span>{' '}
              <span style={{ fontWeight: 900 }}>university.</span>
            </span>
          </h1>

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

        </div>
      </section>

      {/* ============ PILLARS — What I build ============ */}
      <section id="what" className="relative px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <header className="mb-16 flex flex-col gap-5">
            <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw-on-scroll inline-block h-px w-7 bg-[var(--accent)]" />
              ( 01 / what i build )
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

          {/* Editorial 3-row stack — no cards, no chip racks, alternating anchor */}
          <ol className="flex flex-col">
            {PILLARS.map((p, i) => {
              const anchorRight = i % 2 === 1;
              return (
                <li
                  key={p.num}
                  className="relative grid grid-cols-12 items-start gap-x-6 gap-y-6 border-t border-[var(--line)] py-12 md:gap-x-10 md:py-20 last:border-b last:border-[var(--line)]"
                >
                  {/* Massive numeral — anchors left on odd rows, right on even */}
                  <span
                    aria-hidden="true"
                    className={`col-span-12 ${anchorRight ? 'md:col-span-3 md:col-start-10 md:order-2 md:text-right' : 'md:col-span-3'} self-start`}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(72px, 12vw, 184px)',
                      fontWeight: 100,
                      lineHeight: 0.78,
                      letterSpacing: '-0.05em',
                      color: 'var(--text-faint)'
                    }}
                  >
                    {p.num}
                  </span>

                  {/* Heading + body — opposite side from numeral */}
                  <div className={`col-span-12 ${anchorRight ? 'md:col-span-8 md:col-start-1 md:order-1' : 'md:col-span-8 md:col-start-5'} flex flex-col gap-4`}>
                    <h3
                      className="font-bold tracking-tight text-[var(--text)]"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(26px, 3.2vw, 40px)',
                        lineHeight: 1.05,
                        letterSpacing: '-0.025em',
                        fontWeight: 700,
                        textWrap: 'balance'
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="max-w-[62ch] text-[var(--text-mute)]"
                      style={{ fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.6 }}
                    >
                      {p.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ============ SELECTED WORK — Bento + View Transitions ============ */}
      <SelectedWork />

      {/* ============ PROCESS — GSAP scroll-pin (moved up for lab-recruiter flow) ============ */}
      <Process />

      {/* ============ ABOUT — Who I am ============ */}
      <section id="about" className="relative px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-20">
          {/* Eyebrow + quick facts */}
          <div>
            <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw-on-scroll inline-block h-px w-7 bg-[var(--accent)]" />
              ( 04 / about )
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
          <div className="flex flex-col gap-6 border-t border-[var(--line)] pt-8 md:border-none md:pt-0">
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
              By day I&rsquo;m Lead Software Developer at{' '}
              <a
                href="https://saman.academy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text)] underline decoration-[var(--line-2)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                Saman AI Academy
              </a>
              : three product pillars in production, two of them in daily external use. Evenings I teach web development to 80+ students at ITSTEP, ages 10 to 17. The rest of the time I lead my school&rsquo;s Academic Council (900 students) and co-author a paper on AI in banking with a PhD supervisor.
            </p>

            <p className="max-w-[58ch] text-[16px] leading-[1.7] text-[var(--text-mute)] md:text-[17px]">
              Minerva in August. Class of 2030, computer science. The program is interdisciplinary by design: AI, systems, the connecting tissue between fields. Six cities in four years, San Francisco first.
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
              ( 05 / contact )
            </span>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
                fontWeight: 700
              }}
            >
              Let&rsquo;s talk.
            </h2>
          </header>

          <a
            href="mailto:nicetryskrock@gmail.com"
            className="group inline-flex max-w-full flex-wrap items-center gap-4 underline underline-offset-[6px] transition-colors duration-300 hover:text-[var(--text)]"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 5vw, 64px)',
              letterSpacing: '-0.02em',
              color: 'var(--accent)',
              textDecorationThickness: '2px',
              wordBreak: 'break-word'
            }}
          >
            nicetryskrock@gmail.com
            <ArrowUpRight size={32} weight="bold" className="shrink-0" />
          </a>

          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.6] text-[var(--text-mute)]">
            Tashkent, Uzbekistan · GMT+5. Replies within 24 hours on weekdays. Heading to{' '}
            <strong className="font-medium text-[var(--text)]">Minerva</strong> in August, class of 2030.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            <a
              href="https://github.com/PricePepel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-[var(--line-2)] px-5 font-mono text-[12px] uppercase tracking-[0.05em] text-[var(--text)] transition-colors hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg-base)]"
            >
              <GithubLogo size={16} weight="regular" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ruslan-kan-207692384/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-[var(--line-2)] px-5 font-mono text-[12px] uppercase tracking-[0.05em] text-[var(--text)] transition-colors hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg-base)]"
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
