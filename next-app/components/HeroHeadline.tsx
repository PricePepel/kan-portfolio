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
        fontSize: 'clamp(2.9rem, 6.2vw, 5.6rem)',
        lineHeight: 0.95,
        letterSpacing: '-0.04em',
        fontWeight: 900,
        textWrap: 'balance',
      }}
    >
      <span
        style={{
          display: 'block',
          fontWeight: 300,
          color: 'var(--text-mute)',
          letterSpacing: '-0.03em',
        }}
      >
        The Death of the
      </span>
      <span style={{ display: 'block', fontWeight: 900 }}>World Champion.</span>
    </h1>
  );
}
