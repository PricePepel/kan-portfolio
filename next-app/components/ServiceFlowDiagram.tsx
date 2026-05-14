'use client';

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';
import { CheckCircle, Cpu, Wrench, RocketLaunch } from '@phosphor-icons/react';

interface Pillar {
  icon: ReactNode;
  num: string;
  title: string;
  body: string;
}

interface ServiceFlowDiagramProps {
  pillars?: Pillar[];
  convergenceLabel?: string;
}

const DEFAULT_PILLARS: Pillar[] = [
  {
    icon: <Cpu size={20} weight="regular" />,
    num: '01',
    title: 'Production AI patterns',
    body: 'Streaming, fallbacks, function calling, predictable cost. The unglamorous half of AI that decides whether a feature ships.',
  },
  {
    icon: <Wrench size={20} weight="regular" />,
    num: '02',
    title: 'Internal tools',
    body: 'Admin copilots, ops automations, scrapers, agents on a cron. Built fast for one user. The fastest way to learn a new technique.',
  },
  {
    icon: <RocketLaunch size={20} weight="regular" />,
    num: '03',
    title: 'AI-first MVPs',
    body: 'Full-stack: Next.js, Supabase, an LLM, billing, auth. End-to-end systems that hold up in production, not POCs.',
  },
];

export function ServiceFlowDiagram({
  pillars = DEFAULT_PILLARS,
  convergenceLabel = 'Production AI · shipped',
}: ServiceFlowDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
  const pillScale = useTransform(scrollYProgress, [0.45, 0.9], [0.82, 1]);
  const pillOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-[1100px]">
      {/* Pillar cards */}
      <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {pillars.map((p, i) => (
          <PillarCard key={p.num} pillar={p} index={i} scrollYProgress={scrollYProgress} reduced={reduced} />
        ))}
      </div>

      {/* SVG flow — desktop only, in-flow below cards */}
      <svg
        aria-hidden="true"
        className="pointer-events-none mt-[-8px] hidden w-full md:block"
        style={{ height: '220px' }}
        viewBox="0 0 1100 220"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Glow layer — wider, blurred */}
        <g style={{ filter: 'blur(8px)', opacity: 0.5 }}>
          <motion.path
            d="M 183 0 C 183 60, 550 80, 550 140"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            style={reduced ? undefined : { pathLength }}
            initial={reduced ? undefined : { pathLength: 0 }}
          />
          <motion.path
            d="M 550 0 L 550 140"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            style={reduced ? undefined : { pathLength }}
            initial={reduced ? undefined : { pathLength: 0 }}
          />
          <motion.path
            d="M 917 0 C 917 60, 550 80, 550 140"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            style={reduced ? undefined : { pathLength }}
            initial={reduced ? undefined : { pathLength: 0 }}
          />
        </g>

        {/* Sharp connector lines */}
        <motion.path
          d="M 183 0 C 183 60, 550 80, 550 140"
          fill="none"
          stroke="var(--line-2)"
          strokeWidth="1"
          strokeLinecap="round"
          style={reduced ? undefined : { pathLength }}
          initial={reduced ? undefined : { pathLength: 0 }}
        />
        <motion.path
          d="M 550 0 L 550 140"
          fill="none"
          stroke="var(--line-2)"
          strokeWidth="1"
          strokeLinecap="round"
          style={reduced ? undefined : { pathLength }}
          initial={reduced ? undefined : { pathLength: 0 }}
        />
        <motion.path
          d="M 917 0 C 917 60, 550 80, 550 140"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={reduced ? undefined : { pathLength }}
          initial={reduced ? undefined : { pathLength: 0 }}
        />
        {/* Convergence stem */}
        <motion.path
          d="M 550 140 L 550 195"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={reduced ? undefined : { pathLength }}
          initial={reduced ? undefined : { pathLength: 0 }}
        />
      </svg>

      {/* Mobile vertical connector */}
      <div
        className="pointer-events-none mx-auto my-6 block h-12 w-px md:hidden"
        style={{ background: 'linear-gradient(to bottom, var(--line-2), var(--accent))' }}
        aria-hidden="true"
      />

      {/* Convergence pill */}
      <div className="relative z-10 mt-6 flex justify-center md:-mt-4">
        <motion.span
          className="inline-flex items-center gap-3 rounded-full px-7 py-4"
          style={{
            background: 'var(--accent)',
            color: 'var(--bg-base)',
            boxShadow: '0 0 36px var(--accent-glow)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(15px, 1.6vw, 19px)',
            letterSpacing: '-0.01em',
            scale: reduced ? 1 : (pillScale as unknown as number),
            opacity: reduced ? 1 : (pillOpacity as unknown as number),
          }}
        >
          <span
            aria-hidden="true"
            className="grid h-6 w-6 place-items-center rounded-full"
            style={{ background: 'var(--bg-base)', color: 'var(--accent)' }}
          >
            +
          </span>
          {convergenceLabel}
        </motion.span>
      </div>
    </div>
  );
}

function PillarCard({
  pillar,
  index,
  scrollYProgress,
  reduced,
}: {
  pillar: Pillar;
  index: number;
  scrollYProgress: MotionValue<number>;
  reduced: boolean | null;
}) {
  const start = index * 0.08;
  const end = 0.25 + index * 0.08;
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [24, 0]);
  const isLast = index === 2;

  return (
    <motion.div
      role="article"
      className="relative flex flex-col gap-3 overflow-hidden rounded-md p-5 md:p-6"
      style={{
        background: 'var(--bg-elev)',
        border: '1px solid var(--line-2)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        opacity: reduced ? 1 : (opacity as unknown as number),
        y: reduced ? 0 : (y as unknown as number),
      }}
    >
      {isLast && (
        <span
          aria-hidden="true"
          className="absolute right-3 top-3"
          style={{ color: 'var(--good)' }}
        >
          <CheckCircle size={18} weight="fill" />
        </span>
      )}
      <span style={{ color: 'var(--accent)' }} aria-hidden="true">
        {pillar.icon}
      </span>
      <span
        className="uppercase"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.08em',
          color: 'var(--text-mute)',
        }}
      >
        {pillar.num} / pillar
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '20px',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          color: 'var(--text)',
        }}
      >
        {pillar.title}
      </h3>
      <p
        style={{
          fontSize: '13.5px',
          lineHeight: 1.55,
          color: 'var(--text-mute)',
        }}
      >
        {pillar.body}
      </p>
    </motion.div>
  );
}
