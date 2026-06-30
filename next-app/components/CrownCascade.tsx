'use client';

/**
 * CrownCascade — Chapter 03, "The Crown."
 *
 * The 300-second win, made visual: a big countdown ticks 300 → 0 as you
 * scroll, a "WORLD CHAMPION" stamp lands at zero, and the subsequent cascade
 * of wins (Moscow → Central Asia → Beijing → Bangkok → USA) draws in along a
 * single track. Same scroll-budget engine as Trajectory/ServiceFlowDiagram
 * (useScroll + useTransform + pathLength) — no new animation machinery.
 */

import { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';

interface Win {
  x: number;
  date: string;
  label: string;
  crown?: boolean;
}

const WINS: Win[] = [
  { x: 70, date: '2018', label: 'moscow · world champion', crown: true },
  { x: 290, date: '2019', label: 'central asia' },
  { x: 510, date: '2019', label: 'beijing' },
  { x: 730, date: '2022', label: 'usa · amo' },
  { x: 950, date: '2025', label: 'thailand' },
];

const WIN_RANGE: [number, number] = [0.52, 0.94];

function winStart(i: number): number {
  const [a, b] = WIN_RANGE;
  return a + ((b - a) * i) / Math.max(WINS.length - 1, 1);
}

export function CrownCascade() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [count, setCount] = useState(300);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 40%'],
  });

  const seconds = useTransform(scrollYProgress, [0.05, 0.48], [300, 0], {
    clamp: true,
  });
  useMotionValueEvent(seconds, 'change', (v) => setCount(Math.max(0, Math.round(v))));

  const stampOpacity = useTransform(scrollYProgress, [0.44, 0.52], [0, 1]);
  const stampScale = useTransform(scrollYProgress, [0.44, 0.54], [1.4, 1]);
  const trackLength = useTransform(scrollYProgress, [0.52, 0.94], [0, 1]);
  const countdownOpacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0.25]);

  const displayCount = reduced ? 0 : count;

  return (
    <div ref={ref} className="relative">
      {/* Countdown + stamp */}
      <div className="relative flex min-h-[260px] flex-col items-center justify-center md:min-h-[320px]">
        <motion.div
          className="flex flex-col items-center"
          style={{ opacity: reduced ? 0.25 : countdownOpacity }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontVariantNumeric: 'tabular-nums',
              fontWeight: 600,
              fontSize: 'clamp(80px, 18vw, 220px)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--accent)',
            }}
          >
            {displayCount}
          </span>
          <span
            className="mt-1 uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: 'var(--text-faint)',
            }}
          >
            seconds on the clock
          </span>
        </motion.div>

        <motion.span
          className="absolute inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3"
          style={{
            background: 'var(--accent)',
            color: 'var(--bg-base)',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(16px, 2vw, 22px)',
            letterSpacing: '-0.01em',
            boxShadow: '0 0 40px var(--accent-glow)',
            opacity: reduced ? 1 : stampOpacity,
            scale: reduced ? 1 : stampScale,
          }}
        >
          World Champion
        </motion.span>
      </div>

      {/* Cascade track */}
      <div className="relative mt-6 hidden md:block">
        <svg
          viewBox="0 0 1020 120"
          preserveAspectRatio="xMidYMid meet"
          className="block w-full overflow-visible"
          aria-hidden="true"
        >
          <motion.line
            x1={30}
            x2={990}
            y1={60}
            y2={60}
            stroke="var(--line-2)"
            strokeWidth={1}
            style={reduced ? undefined : { pathLength: trackLength }}
            initial={reduced ? undefined : { pathLength: 0 }}
          />
          {WINS.map((w, i) => (
            <CascadeTick key={w.label} win={w} start={winStart(i)} scrollYProgress={scrollYProgress} reduced={reduced} />
          ))}
        </svg>

        {WINS.map((w, i) => (
          <CascadeLabel key={`l-${w.label}`} win={w} start={winStart(i)} scrollYProgress={scrollYProgress} reduced={reduced} />
        ))}
      </div>

      {/* Mobile cascade list */}
      <ol className="mt-8 flex flex-col gap-4 md:hidden" style={{ borderLeft: '1px solid var(--line-2)' }}>
        {WINS.map((w) => (
          <li key={`m-${w.label}`} className="relative pl-5">
            <span
              className="absolute -left-[5px] top-2 inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: w.crown ? 'var(--accent)' : 'var(--text-mute)' }}
              aria-hidden="true"
            />
            <span className="block uppercase" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', color: 'var(--text-faint)' }}>
              {w.date}
            </span>
            <span className="block lowercase" style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '0.04em', color: w.crown ? 'var(--accent)' : 'var(--text)' }}>
              {w.label}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CascadeTick({
  win,
  start,
  scrollYProgress,
  reduced,
}: {
  win: Win;
  start: number;
  scrollYProgress: MotionValue<number>;
  reduced: boolean | null;
}) {
  const peak = start + 0.012;
  const settle = start + 0.025;
  const opacity = useTransform(scrollYProgress, [start - 0.01, start], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [start - 0.005, peak, settle], [1, 2.2, 1]);
  const half = win.crown ? 16 : 11;

  return (
    <motion.line
      x1={win.x}
      x2={win.x}
      y1={60 - half}
      y2={60 + half}
      stroke={win.crown ? 'var(--accent)' : 'var(--text-mute)'}
      strokeWidth={win.crown ? 2 : 1}
      style={reduced ? undefined : { opacity, scaleY, transformOrigin: `${win.x}px 60px`, transformBox: 'fill-box' }}
    />
  );
}

function CascadeLabel({
  win,
  start,
  scrollYProgress,
  reduced,
}: {
  win: Win;
  start: number;
  scrollYProgress: MotionValue<number>;
  reduced: boolean | null;
}) {
  const opacity = useTransform(scrollYProgress, [start - 0.01, start], [0, 1]);
  const y = useTransform(scrollYProgress, [start - 0.01, start], [8, 0]);
  const leftPercent = (win.x / 1020) * 100;

  return (
    <motion.div
      className="absolute -translate-x-1/2 text-center"
      style={{
        left: `${leftPercent}%`,
        top: `${((60 - 44) / 120) * 100}%`,
        opacity: reduced ? 1 : opacity,
        y: reduced ? 0 : y,
      }}
    >
      <span className="block uppercase" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', color: 'var(--text-faint)', lineHeight: 1.2 }}>
        {win.date}
      </span>
      <span className="block whitespace-nowrap lowercase" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.04em', color: win.crown ? 'var(--accent)' : 'var(--text)', marginTop: '4px', fontWeight: win.crown ? 600 : 400 }}>
        {win.label}
      </span>
    </motion.div>
  );
}
