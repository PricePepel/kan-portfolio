'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';

// viewBox is 1100 x 320. Tracks are horizontal lines at fixed y.
const MAIN_Y = 165;
const BRANCH_Y = 260;
const PILL_Y = 60;
const PILL_X = 860;

interface TimelineEvent {
  x: number;
  date: string;
  label: string;
  pinch?: boolean;
}

const PAST: TimelineEvent[] = [
  { x: 60,  date: '2024',     label: 'itstep · teaching' },
  { x: 170, date: '2025',     label: 'naviq · shipped' },
  { x: 280, date: '2025',     label: 'samanTA · shipped' },
  { x: 390, date: '2025',     label: 'council · president' },
  { x: 490, date: '2026.feb', label: 'polymarket' },
  { x: 580, date: '2026.apr', label: 'kenmore · client' },
  { x: 670, date: '2026.may', label: 'minerva · admit', pinch: true },
];

const FUTURE: TimelineEvent[] = [
  { x: 710,  date: '2026.aug', label: 'san francisco' },
  { x: 790,  date: '2027',     label: 'tokyo' },
  { x: 890,  date: '2028',     label: 'buenos aires' },
  { x: 980,  date: '2029',     label: 'berlin' },
  { x: 1060, date: '2030',     label: 'graduate', pinch: true },
];

// Scroll progress budget breakdown:
//  0.00 - 0.05  grid ticks fade in
//  0.05 - 0.40  main track draws + 7 past events activate sequentially
//  0.42 - 0.50  pill scales in at center, above pivot
//  0.50 - 0.62  amber arcs draw out from pill to admit + graduate
//  0.55 - 0.70  pivot vertical + branch track draw
//  0.70 - 0.95  5 future events activate sequentially
const PAST_RANGE: [number, number] = [0.05, 0.40];
const FUTURE_RANGE: [number, number] = [0.70, 0.95];

function eventStart(range: [number, number], i: number, total: number): number {
  const [a, b] = range;
  return a + ((b - a) * i) / Math.max(total - 1, 1);
}

export function Trajectory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 30%'],
  });

  const ticksOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const mainPathLength = useTransform(scrollYProgress, [0.05, 0.40], [0, 1]);
  const arcPathLength = useTransform(scrollYProgress, [0.50, 0.62], [0, 1]);
  const branchPathLength = useTransform(scrollYProgress, [0.55, 0.70], [0, 1]);
  const pillScale = useTransform(scrollYProgress, [0.42, 0.50], [0.7, 1]);
  const pillOpacity = useTransform(scrollYProgress, [0.42, 0.50], [0, 1]);

  const ARC_BACK_D = `M ${PILL_X} ${PILL_Y + 12} C ${PILL_X - 30} ${PILL_Y + 80}, 670 ${MAIN_Y - 80}, 670 ${MAIN_Y - 4}`;
  const ARC_FORWARD_D = `M ${PILL_X} ${PILL_Y + 12} C ${PILL_X + 60} ${PILL_Y + 100}, 1060 ${BRANCH_Y - 110}, 1060 ${BRANCH_Y - 4}`;

  return (
    <section id="trajectory" ref={ref} className="relative px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-12 flex flex-col gap-5 md:mb-16">
          <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
            <span className="rule-draw-on-scroll inline-block h-px w-7 bg-[var(--accent)]" />
            ( 01 / trajectory )
          </span>
          <h2
            className="font-bold tracking-tight max-w-4xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              fontWeight: 700,
              textWrap: 'balance',
            }}
          >
            Tashkent to Minerva.{' '}
            <span style={{ color: 'var(--text-faint)', fontWeight: 300 }}>
              Then four cities in four years.
            </span>
          </h2>
        </header>

        {/* Desktop: SVG timeline */}
        <div className="relative hidden md:block px-4">
          <svg
            viewBox="0 0 1100 320"
            preserveAspectRatio="xMidYMid meet"
            className="block w-full overflow-visible"
            style={{ height: 'auto' }}
            aria-hidden="true"
          >
            <defs>
              <filter id="arc-grain" x="-5%" y="-5%" width="110%" height="110%">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" />
              </filter>
            </defs>

            {/* Background grid ticks — fade in once at start */}
            <motion.g style={reduced ? undefined : { opacity: ticksOpacity }}>
              {Array.from({ length: 78 }, (_, i) => {
                const x = 30 + i * 13.5;
                const isMajor = i % 8 === 0;
                return (
                  <line
                    key={`tick-m-${i}`}
                    x1={x}
                    x2={x}
                    y1={MAIN_Y - (isMajor ? 12 : 6)}
                    y2={MAIN_Y + (isMajor ? 12 : 6)}
                    stroke="var(--line-2)"
                    strokeWidth={isMajor ? 1 : 0.6}
                    opacity={isMajor ? 0.7 : 0.35}
                  />
                );
              })}
              {Array.from({ length: 28 }, (_, i) => {
                const x = 700 + i * 13.5;
                return (
                  <line
                    key={`tick-b-${i}`}
                    x1={x}
                    x2={x}
                    y1={BRANCH_Y - 5}
                    y2={BRANCH_Y + 5}
                    stroke="var(--good)"
                    strokeWidth={0.6}
                    opacity={0.35}
                  />
                );
              })}
            </motion.g>

            {/* Main track horizontal line — draws left to right */}
            <motion.line
              x1={30}
              x2={1075}
              y1={MAIN_Y}
              y2={MAIN_Y}
              stroke="var(--line-2)"
              strokeWidth={1}
              style={reduced ? undefined : { pathLength: mainPathLength }}
              initial={reduced ? undefined : { pathLength: 0 }}
            />

            {/* Branch track horizontal line — green */}
            <motion.line
              x1={670}
              x2={1075}
              y1={BRANCH_Y}
              y2={BRANCH_Y}
              stroke="var(--good)"
              strokeWidth={1.2}
              style={reduced ? undefined : { pathLength: branchPathLength }}
              initial={reduced ? undefined : { pathLength: 0 }}
            />

            {/* Pivot vertical connector */}
            <motion.line
              x1={670}
              x2={670}
              y1={MAIN_Y + 8}
              y2={BRANCH_Y - 8}
              stroke="var(--good)"
              strokeWidth={1}
              opacity={0.7}
              style={reduced ? undefined : { pathLength: branchPathLength }}
              initial={reduced ? undefined : { pathLength: 0 }}
            />

            {/* Amber pill arcs — glow */}
            <g style={{ filter: 'blur(6px)', opacity: 0.55 }}>
              <motion.path
                d={ARC_BACK_D}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={3}
                strokeLinecap="round"
                style={reduced ? undefined : { pathLength: arcPathLength }}
                initial={reduced ? undefined : { pathLength: 0 }}
              />
              <motion.path
                d={ARC_FORWARD_D}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={3}
                strokeLinecap="round"
                style={reduced ? undefined : { pathLength: arcPathLength }}
                initial={reduced ? undefined : { pathLength: 0 }}
              />
            </g>

            {/* Amber pill arcs — sharp with grain */}
            <g filter="url(#arc-grain)">
              <motion.path
                d={ARC_BACK_D}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={1.5}
                strokeLinecap="round"
                style={reduced ? undefined : { pathLength: arcPathLength }}
                initial={reduced ? undefined : { pathLength: 0 }}
              />
              <motion.path
                d={ARC_FORWARD_D}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={1.5}
                strokeLinecap="round"
                style={reduced ? undefined : { pathLength: arcPathLength }}
                initial={reduced ? undefined : { pathLength: 0 }}
              />
            </g>

            {/* Event ticks on main track — sequential left-to-right pulse */}
            {PAST.map((e, i) => (
              <AnimatedEventTick
                key={`tick-evt-m-${i}`}
                event={e}
                y={MAIN_Y}
                start={eventStart(PAST_RANGE, i, PAST.length)}
                scrollYProgress={scrollYProgress}
                reduced={reduced}
                track="main"
              />
            ))}

            {/* Event ticks on branch track */}
            {FUTURE.map((e, i) => (
              <AnimatedEventTick
                key={`tick-evt-b-${i}`}
                event={e}
                y={BRANCH_Y}
                start={eventStart(FUTURE_RANGE, i, FUTURE.length)}
                scrollYProgress={scrollYProgress}
                reduced={reduced}
                track="branch"
              />
            ))}
          </svg>

          {/* HTML event labels over SVG */}
          {PAST.map((e, i) => (
            <AnimatedEventLabel
              key={`lbl-m-${i}`}
              event={e}
              track="main"
              start={eventStart(PAST_RANGE, i, PAST.length)}
              scrollYProgress={scrollYProgress}
              reduced={reduced}
            />
          ))}
          {FUTURE.map((e, i) => (
            <AnimatedEventLabel
              key={`lbl-b-${i}`}
              event={e}
              track="branch"
              start={eventStart(FUTURE_RANGE, i, FUTURE.length)}
              scrollYProgress={scrollYProgress}
              reduced={reduced}
            />
          ))}

          {/* Floating pill */}
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${((PILL_X + 16) / 1100) * 100}%`,
              top: `${(PILL_Y / 320) * 100}%`,
              opacity: reduced ? 1 : pillOpacity,
              scale: reduced ? 1 : pillScale,
            }}
          >
            <span
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2"
              style={{
                background: 'var(--bg-base)',
                border: '1.5px solid var(--accent)',
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                boxShadow: '0 0 24px var(--accent-glow)',
              }}
            >
              minerva · class of 2030
            </span>
          </motion.div>
        </div>

        {/* Mobile fallback */}
        <div className="block md:hidden">
          <ol className="flex flex-col gap-4" style={{ borderLeft: '1px solid var(--line-2)' }}>
            {PAST.map((e, i) => (
              <li key={`m-mob-${i}`} className="relative pl-5">
                <span
                  className="absolute -left-[5px] top-2 inline-block h-2.5 w-2.5 rounded-full"
                  style={{ background: e.pinch ? 'var(--accent)' : 'var(--text-mute)' }}
                  aria-hidden="true"
                />
                <span
                  className="block uppercase"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    color: 'var(--text-faint)',
                  }}
                >
                  {e.date}
                </span>
                <span
                  className="block lowercase"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    color: e.pinch ? 'var(--accent)' : 'var(--text)',
                  }}
                >
                  {e.label}
                </span>
              </li>
            ))}
            <li className="relative pl-5 py-2">
              <span
                className="inline-block rounded-full px-3 py-1.5 uppercase"
                style={{
                  border: '1.5px solid var(--accent)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                }}
              >
                minerva · class of 2030
              </span>
            </li>
            {FUTURE.map((e, i) => (
              <li key={`b-mob-${i}`} className="relative pl-5">
                <span
                  className="absolute -left-[5px] top-2 inline-block h-2.5 w-2.5 rounded-full"
                  style={{ background: 'var(--good)' }}
                  aria-hidden="true"
                />
                <span
                  className="block uppercase"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    color: 'var(--text-faint)',
                  }}
                >
                  {e.date}
                </span>
                <span
                  className="block lowercase"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    color: 'var(--good)',
                  }}
                >
                  {e.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

interface AnimatedEventProps {
  event: TimelineEvent;
  start: number;
  scrollYProgress: MotionValue<number>;
  reduced: boolean | null;
}

function AnimatedEventTick({
  event,
  y,
  track,
  ...rest
}: AnimatedEventProps & { y: number; track: 'main' | 'branch' }) {
  const { start, scrollYProgress, reduced } = rest;
  const peak = start + 0.012;
  const settle = start + 0.025;
  const opacity = useTransform(scrollYProgress, [start - 0.01, start], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [start - 0.005, peak, settle], [1, 2.2, 1]);

  const tickColor = event.pinch
    ? track === 'main' ? 'var(--accent)' : 'var(--good)'
    : track === 'main' ? 'var(--text-mute)' : 'var(--good)';
  const tickWidth = event.pinch ? 2 : 1;
  const halfHeight = event.pinch ? 14 : 12;

  return (
    <motion.line
      x1={event.x}
      x2={event.x}
      y1={y - halfHeight}
      y2={y + halfHeight}
      stroke={tickColor}
      strokeWidth={tickWidth}
      style={
        reduced
          ? undefined
          : {
              opacity,
              scaleY,
              transformOrigin: `${event.x}px ${y}px`,
              transformBox: 'fill-box',
            }
      }
    />
  );
}

function AnimatedEventLabel({
  event,
  track,
  start,
  scrollYProgress,
  reduced,
}: AnimatedEventProps & { track: 'main' | 'branch' }) {
  const peak = start + 0.012;
  const settle = start + 0.025;
  const opacity = useTransform(scrollYProgress, [start - 0.01, start], [0, 1]);
  const scale = useTransform(scrollYProgress, [start - 0.005, peak, settle], [1, 1.35, 1]);

  const isMain = track === 'main';
  const yPercent = isMain ? (MAIN_Y - 42) / 320 : (BRANCH_Y + 22) / 320;
  const leftPercent = (event.x / 1100) * 100;
  const color = event.pinch
    ? isMain ? 'var(--accent)' : 'var(--good)'
    : isMain ? 'var(--text)' : 'var(--good)';

  return (
    <motion.div
      className="absolute -translate-x-1/2"
      style={{
        left: `${leftPercent}%`,
        top: `${yPercent * 100}%`,
        textAlign: 'center',
        opacity: reduced ? 1 : opacity,
        scale: reduced ? 1 : scale,
        transformOrigin: 'center',
      }}
    >
      <span
        className="block uppercase"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.06em',
          color: 'var(--text-faint)',
          lineHeight: 1.2,
        }}
      >
        {event.date}
      </span>
      <span
        className="block whitespace-nowrap lowercase"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.04em',
          color,
          marginTop: '4px',
          lineHeight: 1.2,
          fontWeight: event.pinch ? 600 : 400,
        }}
      >
        {event.label}
      </span>
    </motion.div>
  );
}
