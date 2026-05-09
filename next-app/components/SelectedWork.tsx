'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, X } from '@phosphor-icons/react';
import { CASES, type CaseStudy, type CaseSlug } from '@/lib/cases';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

/**
 * Bigmark — the typographic glyph carried by every case study.
 * Renders the bigmarkHTML (which contains optional <sub>) as JSX
 * pieces; no dangerouslySetInnerHTML.
 */
function Bigmark({
  caseStudy,
  variant,
  dataAttr
}: {
  caseStudy: CaseStudy;
  variant: 'tile' | 'detail';
  dataAttr: 'data-bigmark' | 'data-detail-bigmark';
}) {
  const fontFamily =
    caseStudy.bigmarkFamily === 'mono'
      ? 'var(--font-mono)'
      : caseStudy.bigmarkFamily === 'serif'
        ? "'Cabinet Grotesk', serif"
        : 'var(--font-display)';

  const fontSize =
    variant === 'detail'
      ? 'clamp(120px, 24vw, 280px)'
      : caseStudy.bentoSpan.includes('col-span-2')
        ? 'clamp(120px, 18vw, 240px)'
        : 'clamp(80px, 10vw, 140px)';

  const className =
    variant === 'tile'
      ? `select-none transition-transform duration-700 ease-out group-hover:scale-105 ${
          caseStudy.bigmarkFamily === 'serif' ? 'italic' : ''
        }`
      : `select-none ${caseStudy.bigmarkFamily === 'serif' ? 'italic' : ''}`;

  // Render N + <sub>v</sub> for Naviq; plain glyph otherwise.
  const isNaviq = caseStudy.slug === 'naviq';
  const props = { [dataAttr]: '' } as Record<string, string>;

  return (
    <span
      {...props}
      className={className}
      style={{
        fontFamily,
        fontWeight: 800,
        fontSize,
        lineHeight: 0.85,
        letterSpacing: '-0.06em',
        color: caseStudy.bigmarkColor,
        whiteSpace: 'nowrap'
      }}
    >
      {isNaviq ? (
        <>
          N
          <sub
            style={{
              fontSize: '0.42em',
              verticalAlign: 'sub',
              marginLeft: '0.04em',
              letterSpacing: '-0.02em'
            }}
          >
            v
          </sub>
        </>
      ) : (
        caseStudy.bigmarkHTML
      )}
    </span>
  );
}

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeSlug, setActiveSlug] = useState<CaseSlug | null>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  // Tracks whether THIS component pushed a hash entry; set to true on open
  // and consumed on close so we always pop our own entry rather than leaving it.
  const ownsHistoryEntryRef = useRef(false);

  // Card stacking on scroll: each tile reveals with subtle scale-in + fade
  useGSAP(
    () => {
      const tiles = gsap.utils.toArray<HTMLElement>('.case-tile');
      tiles.forEach((tile) => {
        gsap.fromTo(
          tile,
          { y: 60, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: tile,
              start: 'top 85%',
              once: true
            }
          }
        );
      });
    },
    { scope: sectionRef }
  );

  // Hash sync — runs on mount AND on popstate. We never push history from here;
  // popstate is the single source of truth for activeSlug.
  useEffect(() => {
    const sync = () => {
      const m = window.location.hash.match(/^#case\/([a-z]+)$/);
      if (m) {
        const slug = m[1] as CaseSlug;
        if (CASES.some((c) => c.slug === slug)) {
          setActiveSlug(slug);
          return;
        }
      }
      setActiveSlug(null);
      ownsHistoryEntryRef.current = false;
    };
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  // Body scroll lock when modal open
  useEffect(() => {
    document.body.style.overflow = activeSlug ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeSlug]);

  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsVT =
    typeof document !== 'undefined' &&
    typeof (document as any).startViewTransition === 'function' &&
    !reduced;

  const openCase = useCallback((slug: CaseSlug, sourceEl?: HTMLElement | null) => {
    if (sourceEl) lastFocusRef.current = sourceEl;
    const sourceMark = sourceEl?.querySelector('[data-bigmark]') as HTMLElement | null;

    const apply = () => {
      // Push exactly one history entry per open. closeCase calls history.back()
      // to pop it, so the browser back-button cleanly closes the modal.
      history.pushState({ case: slug }, '', `#case/${slug}`);
      ownsHistoryEntryRef.current = true;
      setActiveSlug(slug);
    };

    if (supportsVT) {
      if (sourceMark) sourceMark.style.viewTransitionName = 'case-bigmark';
      (document as any).startViewTransition(() => {
        if (sourceMark) sourceMark.style.viewTransitionName = '';
        apply();
      });
    } else {
      apply();
    }
  }, [supportsVT]);

  const closeCase = useCallback(() => {
    // If we own the history entry we pushed on open, popping it via history.back()
    // will trigger our popstate listener which clears activeSlug.
    // If we don't own it (deep link), just clear state and replace the URL.
    if (ownsHistoryEntryRef.current) {
      ownsHistoryEntryRef.current = false;
      history.back();
    } else {
      history.replaceState({}, '', window.location.pathname + window.location.search);
      setActiveSlug(null);
    }
    // Restore focus on next frame
    requestAnimationFrame(() => lastFocusRef.current?.focus());
  }, []);

  // ESC to close + focus trap
  useEffect(() => {
    if (!activeSlug) return;
    const dialog = document.getElementById('caseDetailDialog');
    if (!dialog) return;

    const focusables = () =>
      Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
      );

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeCase();
        return;
      }
      if (e.key !== 'Tab') return;
      const els = focusables();
      if (els.length === 0) return;
      const first = els[0];
      const last = els[els.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    // Move focus to the close button on open
    requestAnimationFrame(() => {
      const closeBtn = dialog.querySelector<HTMLButtonElement>('button[data-close-btn]');
      closeBtn?.focus();
    });
    return () => document.removeEventListener('keydown', onKey);
  }, [activeSlug, closeCase]);

  const activeCase = activeSlug ? CASES.find((c) => c.slug === activeSlug) : null;

  return (
    <>
      <section
        ref={sectionRef}
        id="work"
        className="relative px-6 py-32 md:px-10 md:py-48"
      >
        <div className="mx-auto max-w-[1400px]">
          <header className="mb-16 flex flex-col gap-5">
            <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
              <span className="rule-draw inline-block h-px w-7 bg-[var(--accent)]" />
              ( 02 / selected work · 2025 )
            </span>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                lineHeight: 1.0,
                letterSpacing: '-0.035em',
                fontWeight: 700,
                textWrap: 'balance'
              }}
            >
              Recent builds.{' '}
              <span style={{ color: 'var(--text-faint)', fontWeight: 300 }}>
                Four shipped, more under NDA.
              </span>
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-3 md:[grid-auto-flow:dense]">
            {CASES.map((c) => (
              <CaseTile key={c.slug} caseStudy={c} onOpen={openCase} />
            ))}
          </div>
        </div>
      </section>

      {activeCase && (
        <CaseDetail caseStudy={activeCase} onClose={closeCase} />
      )}
    </>
  );
}

function CaseTile({
  caseStudy,
  onOpen
}: {
  caseStudy: CaseStudy;
  onOpen: (slug: CaseSlug, el: HTMLElement | null) => void;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  return (
    <a
      ref={ref}
      href={`#case/${caseStudy.slug}`}
      aria-label={`Open ${caseStudy.title} case study`}
      className={`case-tile group relative flex flex-col overflow-hidden rounded-[2px] border border-[var(--line)] transition-colors hover:border-[var(--accent)] ${caseStudy.bentoSpan} ${caseStudy.bentoMinH}`}
      onClick={(e) => {
        e.preventDefault();
        onOpen(caseStudy.slug, ref.current);
      }}
    >
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden"
        style={caseStudy.mediaStyle}
        aria-hidden="true"
      >
        <span
          className="absolute left-4 top-4 inline-flex items-center rounded-[2px] border border-[var(--line-2)] bg-[oklch(7.5%_0.008_70_/_0.6)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--text-faint)] backdrop-blur-sm"
          style={
            caseStudy.slug === 'kenmore'
              ? { background: 'oklch(20% 0.02 30)', color: 'oklch(97% 0.015 75)', borderColor: 'oklch(20% 0.02 30)' }
              : undefined
          }
        >
          {caseStudy.sticker}
        </span>
        <Bigmark caseStudy={caseStudy} variant="tile" dataAttr="data-bigmark" />
      </div>
      <div className="flex flex-col gap-2 bg-[var(--bg-base)] p-5">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-mute)]">
          <span style={{ color: 'var(--accent)' }}>{caseStudy.year}</span>
          <span>{caseStudy.client}</span>
          <span className="ml-auto rounded-[2px] border border-[var(--line-2)] px-2 py-1 text-[var(--text)]">
            {caseStudy.tag}
          </span>
        </div>
        <h3
          className="font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-display)', fontSize: '22px', letterSpacing: '-0.02em' }}
        >
          {caseStudy.title}
          {caseStudy.subtitle && (
            <span style={{ color: 'var(--text-mute)', fontWeight: 500 }}> {caseStudy.subtitle}</span>
          )}
        </h3>
        <p className="text-[14px] leading-[1.55] text-[var(--text-mute)]">{caseStudy.short}</p>
        <span className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--accent)] transition-all group-hover:gap-2">
          Read case <ArrowUpRight size={12} weight="bold" />
        </span>
      </div>
    </a>
  );
}

function CaseDetail({ caseStudy, onClose }: { caseStudy: CaseStudy; onClose: () => void }) {
  return (
    <div
      id="caseDetailDialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="caseDetailTitle"
      className="fixed inset-0 z-[200] overflow-y-auto bg-[var(--bg-base)]"
    >
      <button
        type="button"
        data-close-btn
        onClick={onClose}
        aria-label="Close case detail"
        className="fixed right-6 top-6 z-[210] grid h-12 w-12 place-items-center rounded-full border border-[var(--line-2)] bg-[var(--bg-elev)] text-[var(--text)] transition-all duration-200 hover:rotate-90 hover:border-[var(--text)] hover:bg-[var(--bg-elev-2)] active:scale-95 md:right-10 md:top-10"
      >
        <X size={20} weight="bold" />
      </button>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-14 md:px-10 md:py-20">
        <div
          className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[2px] border border-[var(--line)] md:sticky md:top-20 md:aspect-[4/3]"
          style={caseStudy.mediaStyle}
        >
          <Bigmark caseStudy={caseStudy} variant="detail" dataAttr="data-detail-bigmark" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--text-mute)]">
            <span style={{ color: 'var(--accent)' }}>{caseStudy.year}</span>
            <span>{caseStudy.client}</span>
            <span className="rounded-[2px] border border-[var(--line-2)] px-2.5 py-1 text-[var(--text)]">
              {caseStudy.tag}
            </span>
          </div>
          <h2
            id="caseDetailTitle"
            className="font-bold tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              textWrap: 'balance'
            }}
          >
            {caseStudy.title}
            {caseStudy.subtitle && (
              <span style={{ color: 'var(--text-mute)', fontWeight: 500 }}> {caseStudy.subtitle}</span>
            )}
          </h2>
          <p
            className="leading-[1.55] text-[var(--text-mute)]"
            style={{ fontSize: 'clamp(17px, 1.6vw, 19px)', maxWidth: '65ch' }}
          >
            {caseStudy.full}
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {caseStudy.stack.map((s) => (
              <li
                key={s}
                className="rounded-[2px] bg-[var(--bg-elev-2)] px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.05em] text-[var(--text)]"
              >
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-[2px] border border-dashed border-[var(--line-2)] p-6 font-mono text-[13px] tracking-[0.02em] text-[var(--text-mute)]">
            Want a deeper walkthrough or the repo?{' '}
            <a
              href="mailto:nicetryskrock@gmail.com"
              className="text-[var(--accent)] underline underline-offset-4 hover:text-[var(--text)]"
            >
              Email me
            </a>
            .
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-2 inline-flex w-fit items-center gap-2 font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--text-mute)] transition-colors hover:text-[var(--accent)]"
          >
            <span aria-hidden="true">←</span> All work
          </button>
        </div>
      </div>
    </div>
  );
}
