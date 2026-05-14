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
    title: 'Sit with the problem',
    body: 'Read the docs, the repos, the prior art. The right question is usually sharper than the first sketch.',
    time: '1–3 days'
  },
  {
    num: '02',
    title: 'Smallest end-to-end slice',
    body: 'A working flow from input to output beats four perfect components in isolation. Get the loop running first.',
    time: 'Week 1'
  },
  {
    num: '03',
    title: 'Ship in public',
    body: 'Daily commits to a shared repo, weekly write-ups. The work compounds because it stays visible.',
    time: '2–6 wk'
  },
  {
    num: '04',
    title: 'Document and move on',
    body: 'Postmortem the week after handover. Open-source what is safe to open. Two weeks later it teaches someone else.',
    time: '+1 wk'
  }
];

export function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll-pin: sticky title left, steps scroll up right.
  // The pin is the entire motion of this section — it is structural and
  // communicates "this is a sequence." The previous step entrance fade-up
  // was removed in the same pass as SelectedWork's tile scroll-reveal;
  // two scroll-fade systems competed and gave the page a uniform
  // "everything-fades-up" rhythm.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 880px)', () => {
        const stickyEl = sectionRef.current?.querySelector<HTMLElement>('.process-sticky');
        const stepsCol = sectionRef.current?.querySelector<HTMLElement>('.process-steps');
        if (!stickyEl || !stepsCol) return;

        ScrollTrigger.create({
          trigger: sectionRef.current!,
          start: 'top top+=80',
          endTrigger: stepsCol,
          end: 'bottom bottom-=120',
          pin: stickyEl,
          pinSpacing: false
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
            <span className="rule-draw-on-scroll inline-block h-px w-7 bg-[var(--accent)]" />
            ( 04 / how i work )
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
            How I approach a build.
          </h2>
          <p className="mt-6 max-w-[42ch] text-[16px] leading-[1.6] text-[var(--text-mute)]">
            Four chapters from problem to handover. Same shape every project: the slow part comes first.
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
