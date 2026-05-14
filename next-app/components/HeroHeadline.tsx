'use client';

import { useEffect, useRef } from 'react';
import { animate, text, stagger } from 'animejs';

export function HeroHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const split = text.splitText(el, {
      chars: { wrap: 'clip' },
    });

    animate(split.chars, {
      y: ['100%', '0%'],
      opacity: [0, 1],
      duration: 900,
      delay: stagger(18),
      ease: 'outExpo',
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h1
      ref={ref}
      className="mt-8 tracking-tight"
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(3.25rem, 6.5vw, 6rem)',
        lineHeight: 0.92,
        letterSpacing: '-0.04em',
        fontWeight: 900,
        textWrap: 'balance',
      }}
    >
      <span style={{ display: 'block' }}>Production AI,</span>
      <span style={{ display: 'block' }}>
        <span
          style={{
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--text-mute)',
            letterSpacing: '-0.035em',
          }}
        >
          shipped before
        </span>{' '}
        <span style={{ fontWeight: 900 }}>university.</span>
      </span>
    </h1>
  );
}
