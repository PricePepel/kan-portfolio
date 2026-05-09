'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Step {
  num: string;
  title: string;
  body: string;
  time: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Discovery call',
    body: '30 minutes. We scope the feature, surface risks, and agree on what gets shipped.',
    time: '~30 min'
  },
  {
    num: '02',
    title: 'Fixed scope, flat fee',
    body: 'A one-page brief with deliverable, timeline, and a single number. No retainer, no change orders.',
    time: '~48 h'
  },
  {
    num: '03',
    title: 'Ship in N weeks',
    body: 'Daily commits to a shared repo. Async updates over Slack or email. Demo every Friday.',
    time: '2–6 wk'
  },
  {
    num: '04',
    title: 'Handover',
    body: 'Code, docs, deploys, costs. Yours to own. I stay reachable for two weeks of bug-fix support.',
    time: '+2 wk'
  }
];

export function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll-pin: sticky title left, steps scroll up right
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 880px)', () => {
        const stickyEl = sectionRef.current?.querySelector<HTMLElement>('.process-sticky');
        const stepsCol = sectionRef.current?.querySelector<HTMLElement>('.process-steps');
        if (!stickyEl || !stepsCol) return;

        // Pin the title column for the duration of the steps scroll
        ScrollTrigger.create({
          trigger: sectionRef.current!,
          start: 'top top+=80',
          endTrigger: stepsCol,
          end: 'bottom bottom-=120',
          pin: stickyEl,
          pinSpacing: false
        });

        // Stagger fade-in for each step on enter
        const steps = gsap.utils.toArray<HTMLElement>('.process-step');
        steps.forEach((s) => {
          gsap.fromTo(
            s,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: 'expo.out',
              scrollTrigger: { trigger: s, start: 'top 78%', once: true }
            }
          );
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-20">
        {/* Sticky title */}
        <div className="process-sticky">
          <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
            <span className="rule-draw inline-block h-px w-7 bg-[var(--accent)]" />
            ( 03 / process )
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
            How we ship together.
          </h2>
          <p className="mt-6 max-w-[42ch] text-[16px] leading-[1.6] text-[var(--text-mute)]">
            Four chapters from the first call to handover. Same shape every project.
          </p>
        </div>

        {/* Steps */}
        <ol className="process-steps flex flex-col gap-16 border-t border-[var(--line)] pt-12 md:gap-20">
          {STEPS.map((s) => (
            <li
              key={s.num}
              className="process-step relative flex flex-col gap-3 pt-2"
            >
              <span
                className="absolute -top-3 left-0 inline-block h-px bg-[var(--blue)]"
                style={{ width: '24px' }}
              />
              <span
                className="font-mono"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(40px, 6vw, 64px)',
                  fontWeight: 200,
                  lineHeight: 0.85,
                  letterSpacing: '-0.04em',
                  color: 'var(--blue)'
                }}
              >
                {s.num}
              </span>
              <h3
                className="font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-display)', fontSize: '24px', letterSpacing: '-0.01em' }}
              >
                {s.title}
              </h3>
              <p className="max-w-[55ch] text-[15px] leading-[1.6] text-[var(--text-mute)]">{s.body}</p>
              <span className="mt-2 inline-flex w-fit items-center rounded-full border border-[var(--line-2)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.05em] text-[var(--text)]">
                {s.time}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
