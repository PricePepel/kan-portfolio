'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export interface MarqueeItem {
  label: string;
  icon?: ReactNode;
}

interface MarqueeStripProps {
  items: MarqueeItem[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export function MarqueeStrip({
  items,
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
}: MarqueeStripProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setInView(entry.isIntersecting);
      },
      { rootMargin: '120px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (!items.length) return null;

  const animationName = direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right';

  return (
    <div
      ref={ref}
      role="marquee"
      aria-label="Marquee"
      tabIndex={-1}
      className="marquee-strip relative w-full overflow-hidden select-none"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
      }}
      data-pause-on-hover={pauseOnHover ? 'true' : 'false'}
      data-paused={!inView ? 'true' : 'false'}
    >
      <div
        className="marquee-track flex w-max items-center gap-3"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            className="inline-flex items-center gap-2 rounded-full whitespace-nowrap"
            style={{
              border: '1px solid var(--line-2)',
              padding: '10px 20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--text-mute)',
              background: 'var(--bg-elev)',
            }}
            aria-hidden={i >= items.length ? 'true' : undefined}
          >
            {item.icon && <span aria-hidden="true">{item.icon}</span>}
            {item.label}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-strip[data-pause-on-hover='true']:hover .marquee-track,
        .marquee-strip[data-paused='true'] .marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </div>
  );
}
