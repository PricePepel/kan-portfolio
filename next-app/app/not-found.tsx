'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowLeft } from '@phosphor-icons/react';
import { Navigation } from '@/components/Navigation';

const CHARS = ['4', '0', '4'];

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const chars = containerRef.current?.querySelectorAll('.four-oh-four-char');
    const subtitle = containerRef.current?.querySelector('.four-subtitle');
    const cta = containerRef.current?.querySelector('.four-cta');
    const whisper = containerRef.current?.querySelector('.four-whisper');

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

    tl.fromTo(
      chars!,
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.9, stagger: 0.18 }
    )
      .fromTo(
        subtitle!,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        cta!,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        '-=0.2'
      )
      .fromTo(
        whisper!,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.1'
      );
  }, { scope: containerRef });

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Navigation />

      <div
        ref={containerRef}
        className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6"
      >
        <h1
          className="flex select-none"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(180px, 38vw, 480px)',
            lineHeight: 0.85,
            letterSpacing: '-0.06em',
            color: 'var(--text-faint)',
          }}
          aria-label="404"
        >
          {CHARS.map((char, i) => (
            <span
              key={i}
              className="four-oh-four-char inline-block"
              style={{
                clipPath: 'inset(0 100% 0 0)',
                opacity: 0,
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        <div
          className="four-subtitle mt-8 flex flex-col items-center gap-4"
          style={{ opacity: 0 }}
        >
          <span className="inline-block h-px w-10 bg-[var(--accent)]" />
          <p
            className="text-center uppercase tracking-[0.08em] text-[var(--text-mute)]"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
            }}
          >
            Page not found
          </p>
        </div>

        <a
          href="/"
          className="four-cta mt-10 inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-[var(--line-2)] px-6 font-mono text-[12px] uppercase tracking-[0.05em] text-[var(--text)] transition-colors duration-200 hover:border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg-base)]"
          style={{ opacity: 0 }}
        >
          <ArrowLeft size={14} weight="bold" />
          Back to home
        </a>

        <p
          className="four-whisper mt-16 text-center text-[var(--text-faint)]"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.04em',
            opacity: 0,
          }}
        >
          The stars are still here.
        </p>
      </div>
    </main>
  );
}
