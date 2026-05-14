'use client';

import { useEffect, useState } from 'react';

const SESSION_KEY = 'kan-loaded-2026-05';
const DURATION_MS = 2400;
const COLS = 4;
const ROWS = 8;
const TOTAL = COLS * ROWS;
const CYCLE_MS = 90;

interface Digit {
  value: '0' | '1';
  locked: boolean;
}

function randomDigit(): '0' | '1' {
  return Math.random() > 0.5 ? '1' : '0';
}

function makeInitialDigits(): Digit[] {
  return Array.from({ length: TOTAL }, () => ({ value: randomDigit(), locked: false }));
}

export function LoadingScreen() {
  const [phase, setPhase] = useState<'hidden' | 'showing' | 'fading'>('hidden');
  const [digits, setDigits] = useState<Digit[]>(makeInitialDigits);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === '1') return;
    } catch {}

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
      return;
    }

    document.body.style.overflow = 'hidden';
    (window as any).__lenis?.stop();
    setPhase('showing');

    const cycleId = window.setInterval(() => {
      setDigits((prev) => prev.map((d) => (d.locked ? d : { ...d, value: randomDigit() })));
    }, CYCLE_MS);

    const lockTimers: number[] = [];
    const lockWindow = DURATION_MS - 400;
    for (let row = ROWS - 1; row >= 0; row--) {
      const delay = ((ROWS - 1 - row) / ROWS) * lockWindow;
      const t = window.setTimeout(() => {
        setDigits((prev) =>
          prev.map((d, i) => {
            const r = Math.floor(i / COLS);
            return r === row ? { value: randomDigit(), locked: true } : d;
          })
        );
      }, delay);
      lockTimers.push(t);
    }

    const fadeTimer = window.setTimeout(() => setPhase('fading'), DURATION_MS - 360);
    const doneTimer = window.setTimeout(() => {
      setPhase('hidden');
      document.body.style.overflow = '';
      (window as any).__lenis?.start();
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
    }, DURATION_MS);

    return () => {
      window.clearInterval(cycleId);
      lockTimers.forEach((t) => window.clearTimeout(t));
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = '';
      (window as any).__lenis?.start();
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="loading-screen fixed inset-0 z-[200] flex items-center justify-center"
      data-fading={phase === 'fading' ? 'true' : 'false'}
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="flex flex-col items-center gap-10">
        <div className="flex items-center gap-3">
          <span
            className="grid h-12 w-12 place-items-center rounded-[6px] font-black"
            style={{
              background: 'var(--text)',
              color: 'var(--bg-base)',
              fontFamily: 'var(--font-display)',
              fontSize: '26px',
            }}
            aria-hidden="true"
          >
            K
          </span>
          <span
            className="font-bold tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            Kan
          </span>
        </div>

        <div
          aria-hidden="true"
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gap: '8px 18px',
            fontVariantNumeric: 'tabular-nums',
            fontFamily: 'var(--font-mono)',
            fontSize: '15px',
            lineHeight: 1,
          }}
        >
          {digits.map((d, i) => (
            <span
              key={i}
              style={{
                color: d.locked ? 'var(--accent)' : 'var(--text-faint)',
                opacity: d.locked ? 1 : 0.5,
                transition: 'color 220ms cubic-bezier(.16, 1, .3, 1), opacity 220ms cubic-bezier(.16, 1, .3, 1)',
                textAlign: 'center',
                fontWeight: d.locked ? 600 : 400,
              }}
            >
              {d.value}
            </span>
          ))}
        </div>

        <span
          className="uppercase"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'var(--text-faint)',
          }}
        >
          Tashkent → Minerva
        </span>
      </div>

      <style jsx>{`
        .loading-screen {
          opacity: 1;
          transition: opacity 360ms cubic-bezier(.16, 1, .3, 1);
        }
        .loading-screen[data-fading='true'] {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
