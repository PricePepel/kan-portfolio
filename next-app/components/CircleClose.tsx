'use client';

/**
 * CircleClose — the closing motif. A single ring draws itself in as the
 * section scrolls into view (the same pathLength technique as the
 * ServiceFlowDiagram arcs), standing in for "the best podium is a circle."
 *
 * Used twice: a smaller preview in the Perspective chapter, and the full
 * close near Contact. Reuses Framer scroll-budget; reduced-motion renders
 * the ring already complete.
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface CircleCloseProps {
  label?: string;
  size?: number;
  className?: string;
}

export function CircleClose({
  label = 'the best podium is a circle',
  size = 320,
  className,
}: CircleCloseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 55%'],
  });

  const draw = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const labelOpacity = useTransform(scrollYProgress, [0.45, 0.8], [0, 1]);

  // r leaves room for the 2px stroke inside a 100x100 viewBox.
  const R = 46;
  const C = 50;

  return (
    <div ref={ref} className={`relative mx-auto ${className ?? ''}`} style={{ width: size, maxWidth: '100%', aspectRatio: '1 / 1' }}>
      <svg viewBox="0 0 100 100" className="block h-full w-full overflow-visible" aria-hidden="true">
        {/* faint full ring underneath */}
        <circle cx={C} cy={C} r={R} fill="none" stroke="var(--line-2)" strokeWidth={0.6} opacity={0.5} />
        {/* drawn ring */}
        <motion.circle
          cx={C}
          cy={C}
          r={R}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={1.4}
          strokeLinecap="round"
          transform={`rotate(-90 ${C} ${C})`}
          style={reduced ? undefined : { pathLength: draw }}
          initial={reduced ? undefined : { pathLength: 0 }}
        />
      </svg>
      <motion.span
        className="absolute inset-0 flex items-center justify-center px-10 text-center"
        style={{ opacity: reduced ? 1 : labelOpacity }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(15px, 1.6vw, 20px)',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            color: 'var(--text)',
            textWrap: 'balance',
          }}
        >
          {label}
        </span>
      </motion.span>
    </div>
  );
}
