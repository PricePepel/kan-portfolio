'use client';

import { useEffect } from 'react';

/**
 * Viewport-gated reveal observer.
 *
 * Watches every `.rule-draw-on-scroll` and `.reveal-on-scroll` element and
 * adds `.is-visible` the first time it intersects the viewport, then
 * unobserves. This replaces the previous fire-on-paint behavior so that
 * below-fold section eyebrows animate when the user actually sees them,
 * not invisibly behind the scroll position.
 *
 * No state, no re-renders, no per-element listeners. One IntersectionObserver
 * for the entire page; cleaned up on unmount.
 *
 * Respects prefers-reduced-motion via the CSS gate; this script just adds
 * the class. The CSS handles whether the class animates or snaps.
 */
export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.rule-draw-on-scroll, .reveal-on-scroll'
    );
    if (targets.length === 0) return;

    // SSR safety: IntersectionObserver exists in all modern browsers but
    // guard anyway so tests / older runtimes don't trip.
    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      {
        // Trigger as soon as any portion of the element crosses into the
        // viewport, with a small bottom-margin buffer so the reveal lands
        // just before the section becomes the focal point.
        rootMargin: '0px 0px -5% 0px',
        threshold: 0
      }
    );

    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
