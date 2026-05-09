import { ArrowRight, ArrowDown, ArrowUpRight, GithubLogo, LinkedinLogo, Calendar } from '@phosphor-icons/react/dist/ssr';
import { Navigation } from '@/components/Navigation';
import { HeroAtmosphere } from '@/components/HeroAtmosphere';
import { SelectedWork } from '@/components/SelectedWork';
import { Process } from '@/components/Process';
import { ConsoleSignature } from '@/components/ConsoleSignature';

const PILLARS = [
  {
    num: '01',
    title: 'AI feature integration',
    body:
      'Anthropic or OpenAI dropped into your existing app. Working endpoints, fallbacks, streaming, and costs you can predict before you ship.',
    chips: ['Claude Sonnet', 'GPT-4o', 'Function calling', 'Streaming']
  },
  {
    num: '02',
    title: 'Internal AI tools',
    body:
      'Admin assistants, internal copilots, ops automations. Built for your team, not a public launch, so we move fast.',
    chips: ['Slack bots', 'RAG', 'Cron agents', 'Dashboards']
  },
  {
    num: '03',
    title: 'AI-first MVPs',
    body:
      'Full Next.js plus Supabase plus LLM stack, end-to-end. Production-ready from week one, not a proof of concept you have to throw away.',
    chips: ['Next.js 16', 'Supabase', 'Stripe', 'Auth']
  }
];

const PRICING = [
  {
    label: 'AI feature',
    time: '2–3 weeks',
    from: '$1,500',
    list: ['Single endpoint or feature', 'Streaming + fallbacks', 'Cost dashboard', '2 wk bug-fix support'],
    featured: false
  },
  {
    label: 'Internal tool',
    time: '3–5 weeks',
    from: '$3,500',
    list: [
      'Admin assistant or copilot',
      'Slack / Discord adapter',
      'RAG over your data',
      'Auth + audit log',
      '2 wk bug-fix support'
    ],
    featured: true
  },
  {
    label: 'AI-first MVP',
    time: '5–8 weeks',
    from: '$7,500',
    list: ['Full Next.js + Supabase + LLM', 'Auth, billing, dashboard', 'Deploy to Vercel', '2 wk bug-fix support'],
    featured: false
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
          <span
            className="inline-flex items-center gap-3 rounded-full border border-[var(--line-2)] bg-[var(--bg-elev)] px-4 py-2 font-mono text-[12px] uppercase tracking-[0.06em]"
          >
            <span className="relative inline-flex h-2 w-2">
              <span
                className="status-pulse absolute inset-0 rounded-full"
                style={{ background: 'var(--good)' }}
                aria-hidden="true"
              />
              <span className="relative inline-block h-2 w-2 rounded-full" style={{ background: 'var(--good)' }} />
            </span>
            Available · Jun &apos;26
          </span>

          <h1
            className="mt-8 font-black tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.25rem, 6.5vw, 6rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              fontWeight: 900,
              textWrap: 'balance'
            }}
          >
            AI integration specialist
            <br />
            for <span style={{ color: 'var(--accent)' }}>SaaS founders.</span>
          </h1>

          <p
            className="mt-7 max-w-[60ch] leading-[1.55] text-[var(--text-mute)]"
            style={{ fontSize: 'clamp(17px, 1.5vw, 20px)' }}
          >
            I ship production AI features for SaaS. Anthropic, OpenAI, Next.js, Supabase. Fast turnaround, flat fee,
            no retainer.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:nicetryskrock@gmail.com"
              className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full px-6 font-mono text-[12px] uppercase tracking-[0.05em] font-medium transition-all duration-300 hover:-translate-y-[1px] active:scale-[0.98]"
              style={{
                background: 'var(--accent)',
                color: 'var(--bg-base)',
                boxShadow: '0 0 0 1px var(--accent), 0 8px 24px -8px var(--accent-glow)'
              }}
            >
              Book a 30-min call
              <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-[var(--line-2)] px-6 font-mono text-[12px] uppercase tracking-[0.05em] font-medium text-[var(--text)] transition-all duration-300 hover:bg-[var(--text)] hover:text-[var(--bg-base)] hover:border-[var(--text)]"
            >
              See work
              <ArrowDown size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          <dl className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-8 border-t border-[var(--line)] pt-10 text-left sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-faint)]">Location</dt>
              <dd className="text-[18px] font-medium tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Tashkent · GMT+5
              </dd>
            </div>
            <div className="flex flex-col gap-1.5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-faint)]">Capacity</dt>
              <dd className="text-[18px] font-medium tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                1 client at a time
              </dd>
            </div>
            <div className="flex flex-col gap-1.5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-faint)]">Reply within</dt>
              <dd className="text-[18px] font-medium tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                24h on weekdays
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ============ PILLARS — What I build ============ */}
      <section id="what" className="relative px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <header className="mb-16 flex flex-col gap-5">
            <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw inline-block h-px w-7 bg-[var(--accent)]" />
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
              Three ways I integrate AI into your product.
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {PILLARS.map((p) => (
              <article
                key={p.num}
                className="group relative flex flex-col gap-4 bg-[var(--bg-base)] p-8 transition-colors duration-500 hover:bg-[var(--bg-elev)] md:p-10"
              >
                <span
                  className="transition-all duration-500 group-hover:-translate-x-0.5 group-hover:text-[var(--accent)]"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(56px, 8vw, 96px)',
                    fontWeight: 200,
                    lineHeight: 0.85,
                    letterSpacing: '-0.04em',
                    color: 'var(--text-faint)',
                    marginBottom: '8px'
                  }}
                >
                  {p.num}
                </span>
                <h3
                  className="font-bold tracking-tight"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '-0.01em' }}
                >
                  {p.title}
                </h3>
                <p className="flex-1 text-[16px] leading-[1.55] text-[var(--text-mute)]">{p.body}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-dashed border-[var(--line-2)] pt-4">
                  {p.chips.map((c) => (
                    <li
                      key={c}
                      className="rounded-[2px] bg-[var(--bg-elev-2)] px-2 py-1 font-mono text-[11px] uppercase tracking-[0.05em]"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SELECTED WORK — Bento + View Transitions ============ */}
      <SelectedWork />

      {/* ============ PROCESS — GSAP scroll-pin ============ */}
      <Process />

      {/* ============ PRICING ============ */}
      <section id="pricing" className="relative px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <header className="mb-16 flex flex-col gap-5">
            <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw inline-block h-px w-7 bg-[var(--accent)]" />
              ( 04 / pricing )
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
              Flat fee. No retainer.
            </h2>
          </header>

          {/* Trial sprint — low-risk first step */}
          <div className="mb-8 flex flex-col items-start justify-between gap-3 rounded-[2px] border border-dashed border-[var(--line-2)] bg-[var(--bg-elev)] p-6 md:flex-row md:items-center md:p-7">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--accent)]">
                <span className="inline-block h-px w-6 bg-[var(--accent)]" />
                Low-risk first step
              </div>
              <p className="text-[15px] leading-[1.5] text-[var(--text)]">
                <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--text-mute)]">Trial sprint</span>
                <span className="mx-2 text-[var(--text-faint)]">·</span>
                <span className="font-bold" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>$1,000</span>
                <span className="mx-2 text-[var(--text-faint)]">·</span>
                <span className="text-[var(--text-mute)]">5–7 days, one focused outcome plus a 30-min walk-through. Credit applies if you continue into a tier below.</span>
              </p>
            </div>
            <a
              href="mailto:nicetryskrock@gmail.com?subject=Trial%20sprint"
              className="shrink-0 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--line-2)] px-5 font-mono text-[12px] uppercase tracking-[0.05em] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Start a sprint
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PRICING.map((tier) => (
              <article
                key={tier.label}
                className={`group relative flex flex-col gap-5 rounded-[2px] border bg-[var(--bg-base)] p-8 transition-all duration-300 hover:-translate-y-1 ${
                  tier.featured ? 'border-[var(--accent)] shadow-[0_32px_64px_-24px_var(--accent-glow)]' : 'border-[var(--line)] hover:border-[var(--text-mute)]'
                }`}
              >
                {tier.featured && (
                  <span
                    className="absolute -top-3 right-4 rounded-[2px] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em]"
                    style={{ background: 'var(--accent)', color: 'var(--bg-base)' }}
                  >
                    Most builds
                  </span>
                )}
                <div className="flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--text-mute)]">
                  <span className="text-[var(--text)]">{tier.label}</span>
                  <span>{tier.time}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--text-mute)]">from</span>
                  <span
                    className="font-bold"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '56px', letterSpacing: '-0.03em', lineHeight: 1 }}
                  >
                    {tier.from}
                  </span>
                </div>
                <ul className="flex flex-col gap-2 border-t border-dashed border-[var(--line-2)] pt-5">
                  {tier.list.map((item) => (
                    <li key={item} className="flex items-baseline gap-2.5 text-[14px] leading-[1.5] text-[var(--text)]">
                      <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-[60ch] text-[15px] leading-[1.6] text-[var(--text-mute)]">
            Paid in two milestones: 50% at kickoff, 50% at handover.{' '}
            <a
              href="mailto:nicetryskrock@gmail.com"
              className="text-[var(--accent)] underline underline-offset-4 hover:text-[var(--text)]"
            >
              Book a free 30-min call
            </a>{' '}
            and I&apos;ll quote a single number within 48 hours.
          </p>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="relative px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <header className="mb-12 flex flex-col gap-5">
            <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw inline-block h-px w-7 bg-[var(--accent)]" />
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
              What are you shipping this quarter?
            </h2>
          </header>

          <a
            href="mailto:nicetryskrock@gmail.com"
            className="group inline-flex max-w-full flex-wrap items-center gap-4 underline underline-offset-[6px] transition-all duration-500 hover:gap-7 hover:text-[var(--text)]"
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
            Tashkent, Uzbekistan · GMT+5. Replies within 24 hours on weekdays. Currently booking projects for{' '}
            <strong className="font-medium text-[var(--text)]">June 2026 onwards</strong>.
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
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-[var(--line-2)] px-5 font-mono text-[12px] uppercase tracking-[0.05em] text-[var(--text)] transition-colors hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg-base)]"
            >
              <Calendar size={16} weight="regular" />
              Calendly<sup className="ml-0.5 text-[9px] lowercase" style={{ color: 'var(--warn)' }}>todo</sup>
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER — editorial email lockup ============ */}
      <footer className="relative border-t border-[var(--line)] pb-10 pt-24 md:pt-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <a
            href="mailto:nicetryskrock@gmail.com"
            className="group block break-all leading-[0.92] tracking-[-0.045em] text-[var(--text)] transition-colors duration-500 hover:text-[var(--accent)]"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 8vw, 132px)'
            }}
          >
            nicetryskrock
            <span className="text-[var(--text-mute)]">@gmail.com</span>
            <ArrowUpRight
              size={48}
              weight="bold"
              className="ml-3 inline-block translate-y-[-0.15em] text-[var(--accent)] transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-[-0.25em] md:ml-5"
            />
          </a>

          <div className="mt-20 flex flex-col gap-5 border-t border-[var(--line)] pt-6 font-mono text-[11px] uppercase tracking-[0.05em] text-[var(--text-mute)] md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-5">
              <span>© 2026 Kan</span>
              <span>Tashkent · Uzbekistan</span>
              <span>Built in Next.js 15</span>
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
