/**
 * Compute — the "calculating" hero background.
 *
 * A deterministic Remotion composition: a faint matrix of digits that
 * continuously recompute while a sky-blue "solve" wave sweeps through and
 * locks values, plus a few mental-math equations that reveal their answer
 * with a spring pop. Evolves the old binary loader into Kan's mental-math
 * identity. Rendered live (autoplay + loop) via @remotion/player.
 *
 * Rules followed (remotion-best-practices):
 *  - All motion is driven by useCurrentFrame() + interpolate()/spring().
 *    NO CSS transitions/animations — they don't render deterministically.
 *  - Colors read from the page's CSS variables, so it tracks the theme.
 *  - Loop is seamless: every animated quantity is a function of frame % P,
 *    and per-element opacity fades to 0 at both ends of its sub-cycle.
 */

import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from 'remotion';

export const COMPUTE_FPS = 30;
export const COMPUTE_DURATION = 300; // 10s seamless loop
export const COMPUTE_WIDTH = 1600;
export const COMPUTE_HEIGHT = 900;

const COLS = 12;
const ROWS = 7;

// Deterministic pseudo-random in [0,1) — no Math.random() in render.
function rand(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

// Mental-math problems revealed one at a time.
const EQUATIONS: { q: string; a: string }[] = [
  { q: '47 × 83', a: '3 901' },
  { q: '√ 1764', a: '42' },
  { q: '17²', a: '289' },
  { q: '9 376 ÷ 8', a: '1 172' },
  { q: '13 × 13 × 13', a: '2 197' },
  { q: '2¹⁰', a: '1 024' },
];

function DigitMatrix() {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Wave position travels top→bottom across the loop and wraps.
  const wave = ((frame % durationInFrames) / durationInFrames) * (ROWS + 2) - 1;
  const bucket = Math.floor(frame / 4); // digits re-roll every 4 frames

  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const i = r * COLS + c;
      const digit = Math.floor(rand(i * 100 + bucket) * 10);
      // Distance of this row from the solve wave.
      const d = Math.abs(r - wave);
      const active = interpolate(d, [0, 1.4], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      });
      cells.push(
        <span
          key={i}
          style={{
            color: active > 0.35 ? 'var(--accent)' : 'var(--text-faint)',
            opacity: interpolate(active, [0, 1], [0.16, 0.92]),
            fontWeight: active > 0.35 ? 700 : 400,
            textAlign: 'center',
            transform: `scale(${interpolate(active, [0, 1], [1, 1.18])})`,
          }}
        >
          {digit}
        </span>,
      );
    }
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        placeItems: 'center',
        padding: '90px 120px',
        fontFamily: 'var(--font-mono), monospace',
        fontSize: 40,
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '0.04em',
      }}
    >
      {cells}
    </div>
  );
}

function Equation({
  index,
  slotX,
  slotY,
}: {
  index: number;
  slotX: string;
  slotY: string;
}) {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Each slot runs the full equation list, offset so the three slots
  // never reveal at the same instant.
  const sub = durationInFrames / 2; // two equations per slot per loop
  const offset = index * (sub / 3);
  const local = ((frame - offset) % durationInFrames + durationInFrames) % durationInFrames;
  const cycle = Math.floor(local / sub);
  const t = local % sub; // frame within this card's lifetime

  const eq = EQUATIONS[(index * 2 + cycle) % EQUATIONS.length];

  // Fade in → hold → fade out (0 at both ends = seamless across the loop).
  const opacity = interpolate(
    t,
    [0, sub * 0.12, sub * 0.78, sub * 0.96],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.bezier(0.16, 1, 0.3, 1) },
  );

  // Answer pops in around 45% of the lifetime with a gentle overshoot.
  const reveal = spring({
    fps,
    frame: t - sub * 0.42,
    config: { damping: 14, stiffness: 110, mass: 0.7 },
    durationInFrames: Math.round(sub * 0.4),
  });
  const answerOpacity = interpolate(reveal, [0, 1], [0, 1], { extrapolateRight: 'clamp' });
  const answerY = interpolate(reveal, [0, 1], [14, 0]);
  const lift = interpolate(t, [0, sub], [10, -10]);

  return (
    <div
      style={{
        position: 'absolute',
        left: slotX,
        top: slotY,
        opacity,
        transform: `translateY(${lift}px)`,
        fontFamily: 'var(--font-mono), monospace',
        fontVariantNumeric: 'tabular-nums',
        display: 'flex',
        alignItems: 'baseline',
        gap: 18,
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ fontSize: 34, color: 'var(--text-mute)', letterSpacing: '0.02em' }}>
        {eq.q}
      </span>
      <span style={{ fontSize: 34, color: 'var(--text-faint)' }}>=</span>
      <span
        style={{
          fontSize: 38,
          fontWeight: 700,
          color: 'var(--accent)',
          opacity: answerOpacity,
          transform: `translateY(${answerY}px)`,
          display: 'inline-block',
        }}
      >
        {eq.a}
      </span>
    </div>
  );
}

function Caret() {
  const frame = useCurrentFrame();
  // 2 Hz blink, deterministic.
  const on = Math.floor(frame / 15) % 2 === 0;
  return (
    <div
      style={{
        position: 'absolute',
        left: '8%',
        bottom: '12%',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        fontFamily: 'var(--font-mono), monospace',
        fontSize: 24,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-faint)',
      }}
    >
      <span>solving</span>
      <span style={{ opacity: on ? 1 : 0, color: 'var(--accent)' }}>▌</span>
    </div>
  );
}

export const Compute: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
      <DigitMatrix />
      <Equation index={0} slotX="9%" slotY="20%" />
      <Equation index={1} slotX="52%" slotY="38%" />
      <Equation index={2} slotX="22%" slotY="64%" />
      <Caret />
    </AbsoluteFill>
  );
};
