import { ArrowDown, ArrowUpRight, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { Navigation } from '@/components/Navigation';
import { ComputeField } from '@/components/ComputeField';
import { HeroHeadline } from '@/components/HeroHeadline';
import { MarqueeStrip } from '@/components/MarqueeStrip';
import { StoryChapter } from '@/components/StoryChapter';
import { ZabivakaMotif } from '@/components/ZabivakaMotif';
import { CrownCascade } from '@/components/CrownCascade';
import { CircleClose } from '@/components/CircleClose';
import { Trajectory } from '@/components/Trajectory';
import { ServiceFlowDiagram } from '@/components/ServiceFlowDiagram';
import { SelectedWork } from '@/components/SelectedWork';
import { OversizedEmailLink } from '@/components/OversizedEmailLink';
import { ConsoleSignature } from '@/components/ConsoleSignature';
import { STORY, IDENTITY_WORDS } from '@/lib/story';

const hero = STORY[0];
const contact = STORY[8];

export default function Home() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      <ConsoleSignature />
      <Navigation />

      {/* The dissolving compute field sits fixed behind every chapter. */}
      <ComputeField />

      {/* ============ 00 · HERO — The Death of the World Champion ============ */}
      <section
        id="hero"
        className="relative z-[1] flex min-h-[100dvh] items-center px-6 pb-24 pt-32 md:px-10 md:pt-40"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, var(--accent-glow) 0%, transparent 55%)',
        }}
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="max-w-[860px]">
            <span className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw inline-block h-px w-7 bg-[var(--accent)]" />
              ( {hero.num} / {hero.kicker} )
            </span>

            <HeroHeadline />

            <p
              className="mt-7 max-w-[58ch] leading-[1.55] text-[var(--text-mute)]"
              style={{ fontSize: 'clamp(17px, 1.6vw, 21px)' }}
            >
              {hero.lede}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#lamppost"
                className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full px-6 font-mono text-[12px] uppercase tracking-[0.05em] font-medium transition-[transform] duration-300 hover:-translate-y-[1px] active:scale-[0.98]"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg-base)',
                  boxShadow: '0 8px 24px -10px var(--accent-glow)',
                }}
              >
                Read the story
                <ArrowDown size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href="/resume"
                className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-[var(--line-2)] px-6 font-mono text-[12px] uppercase tracking-[0.05em] font-medium text-[var(--text)] transition-[background-color,color,border-color] duration-300 hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg-base)]"
              >
                Résumé
                <ArrowUpRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="mt-16 w-full md:mt-24">
            <MarqueeStrip items={IDENTITY_WORDS} speed={42} />
          </div>
        </div>
      </section>

      {/* ============ 01 · THE LAMPPOST ============ */}
      <StoryChapter chapter={STORY[1]} />

      {/* ============ 02 · MOSCOW 2018 — the gift is the relic ============ */}
      <StoryChapter chapter={STORY[2]}>
        <ZabivakaMotif className="md:ml-[20%]" />
      </StoryChapter>

      {/* ============ 03 · THE CROWN — 300 seconds ============ */}
      <StoryChapter chapter={STORY[3]}>
        <CrownCascade />
      </StoryChapter>

      {/* ============ 04 · THE TURN ============ */}
      <StoryChapter chapter={STORY[4]} />

      {/* ============ 05 · PERSPECTIVE — the best podium is a circle ============ */}
      <StoryChapter chapter={STORY[5]}>
        <CircleClose size={260} className="mt-4" />
      </StoryChapter>

      {/* ============ 06 · THE BUILDER — three areas + four builds ============ */}
      <section id="builder" className="relative z-[1] px-6 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1400px]">
          <header className="mb-14 flex flex-col gap-5 md:mb-16">
            <span className="inline-flex items-center gap-3 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw-on-scroll inline-block h-px w-7 bg-[var(--accent)]" />
              ( 06 / what i build now )
            </span>
            <h2
              className="tracking-tight max-w-4xl"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 5vw, 60px)',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                fontWeight: 800,
                textWrap: 'balance',
              }}
            >
              Three areas I keep returning to.
            </h2>
            <p className="max-w-[60ch] text-[16px] leading-[1.7] text-[var(--text-mute)] md:text-[17px]">
              I still solve things — for other people now. Lead developer and co-founder at Bloomin
              (formerly Saman AI Academy); production AI, shipped before university.
            </p>
          </header>
          <ServiceFlowDiagram />
        </div>
      </section>

      <div className="relative z-[1]">
        <SelectedWork />
      </div>

      {/* ============ 07 · THE REST OF ME ============ */}
      <StoryChapter chapter={STORY[7]} />

      {/* ============ 08 · WHERE I'M HEADED — the journey timeline ============ */}
      <div className="relative z-[1]">
        <Trajectory eyebrowNum="08" eyebrowLabel="where i'm headed" />
      </div>

      {/* ============ 08 · THE CIRCLE / CONTACT ============ */}
      <StoryChapter chapter={contact}>
        <CircleClose size={300} className="mb-12" />

        <OversizedEmailLink email="kan.nadya1978@gmail.com" />

        <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.6] text-[var(--text-mute)]">
          Tashkent, Uzbekistan · GMT+5. Heading to{' '}
          <strong className="font-medium text-[var(--text)]">Minerva</strong> in August — class of 2030,
          then four cities in four years.
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
          <a
            href="https://t.me/PricePepel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2.5 rounded-[3px] border border-[var(--line-2)] px-5 font-mono text-[12px] uppercase tracking-[0.05em] text-[var(--text)] transition-colors hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg-base)]"
          >
            Telegram
          </a>
        </div>
      </StoryChapter>

      {/* ============ FOOTER ============ */}
      <footer className="relative z-[1] border-t border-[var(--line)] pb-10 pt-16 md:pt-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div
            className="flex flex-col gap-5 font-mono text-[11px] uppercase tracking-[0.05em] text-[var(--text-mute)] md:flex-row md:items-center md:justify-between"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            <div className="flex flex-wrap gap-5">
              <span>© 2026 Ruslan Kan</span>
              <span>Tashkent · 41.3°N · 69.3°E</span>
              <span>the circle, not the podium</span>
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
