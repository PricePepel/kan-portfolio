'use client';

/**
 * PhotoFrame — the photo placeholder + swap-in system.
 *
 * Resolves /photos/<slot>.jpg. If the file isn't there yet, it renders an
 * intentional, theme-aware placeholder (dashed frame + mono slot label) so
 * the layout reads as designed, not broken. Dropping a real file at
 * public/photos/<slot>.jpg swaps it in with zero code change.
 *
 * Wrapped in `.reveal-on-scroll` so it animates via the existing global
 * IntersectionObserver (ScrollReveal) — no new observer.
 */

import { useEffect, useRef, useState } from 'react';
import { ImageSquare } from '@phosphor-icons/react';
import type { PhotoAspect } from '@/lib/story';

const ASPECT: Record<PhotoAspect, string> = {
  portrait: '4 / 5',
  landscape: '3 / 2',
  square: '1 / 1',
  wide: '16 / 9',
};

interface PhotoFrameProps {
  slot: string;
  alt: string;
  aspect: PhotoAspect;
  caption?: string;
  priority?: boolean;
  className?: string;
}

export function PhotoFrame({ slot, alt, aspect, caption, priority, className }: PhotoFrameProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // An eager image can 404 before React hydrates and attaches onError, so the
  // error event is missed. Catch the already-broken case on mount.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <figure className={`reveal-on-scroll m-0 ${className ?? ''}`}>
      <div
        className="relative w-full overflow-hidden rounded-[14px]"
        style={{
          aspectRatio: ASPECT[aspect],
          background: 'var(--bg-elev-2)',
          border: '1px solid var(--line)',
          boxShadow: '0 18px 40px -24px var(--accent-glow)',
        }}
      >
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={`/photos/${slot}.jpg`}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, transparent 0 11px, var(--bg-elev) 11px 12px)',
            }}
            aria-label={alt}
          >
            <span
              className="grid h-12 w-12 place-items-center rounded-full"
              style={{ border: '1px dashed var(--line-2)', color: 'var(--text-faint)' }}
            >
              <ImageSquare size={20} weight="light" />
            </span>
            <span
              className="px-3 text-center"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-faint)',
              }}
            >
              {slot}
            </span>
          </div>
        )}
        {/* dashed inner edge so even a loaded photo keeps the framed feel */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-2 rounded-[10px]"
          style={{ border: failed ? '1px dashed var(--line-2)' : 'none' }}
        />
      </div>
      {caption && (
        <figcaption
          className="mt-3"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'var(--text-faint)',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
