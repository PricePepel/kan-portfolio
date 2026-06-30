'use client';

/**
 * ComputeField — the dissolving "number-storm" behind the whole page.
 *
 * One fixed, full-viewport Remotion <Player> (the mental-math compute
 * composition). A single page-level scroll progress drives its intensity:
 * dense at the top (the championship obsession), fracturing and decaying to
 * near-nothing by the end (selfhood — open space, the circle). Opacity and
 * the radial mask both shrink with scroll.
 *
 * Single Player instance. SSR mounted-guard. Reduced motion → a static,
 * low-intensity frame. On small screens the ceiling is lowered (parent
 * opacity multiplies the scroll-driven child opacity) to protect scroll perf.
 */

import { useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion';
import { Player } from '@remotion/player';
import {
  Compute,
  COMPUTE_FPS,
  COMPUTE_DURATION,
  COMPUTE_WIDTH,
  COMPUTE_HEIGHT,
} from '@/remotion/Compute';

const PLAYER_BASE = {
  component: Compute,
  durationInFrames: COMPUTE_DURATION,
  fps: COMPUTE_FPS,
  compositionWidth: COMPUTE_WIDTH,
  compositionHeight: COMPUTE_HEIGHT,
  controls: false as const,
  clickToPlay: false as const,
  doubleClickToFullscreen: false as const,
  acknowledgeRemotionLicense: true as const,
  style: { width: '100%', height: '100%' },
};

export function ComputeField() {
  const [mounted, setMounted] = useState(false);
  // Once the field has dissolved (late chapters), swap the live Player for a
  // static frame so it stops rendering ~30 fps off-screen-of-the-narrative.
  const [live, setLive] = useState(true);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = v < 0.84;
    setLive((prev) => (prev === next ? prev : next));
  });

  // Obsession → selfhood: dense through the hero/lamppost/Moscow/Crown, then
  // decaying to near-nothing by the builder/journey/contact close.
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.45, 0.65, 0.85, 1],
    [0.9, 0.85, 0.7, 0.4, 0.16, 0.05, 0.02],
  );
  // The visible disc shrinks as the storm calms.
  const inner = useTransform(scrollYProgress, [0, 1], ['34%', '2%']);
  const outer = useTransform(scrollYProgress, [0, 1], ['94%', '52%']);
  const mask = useMotionTemplate`radial-gradient(120% 95% at 50% 38%, #000 ${inner}, transparent ${outer})`;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Reduced motion: a single calm static frame, no scroll binding.
  if (reduced) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none max-md:opacity-50"
        style={{
          opacity: 0.16,
          maskImage: 'radial-gradient(110% 90% at 50% 38%, #000 22%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(110% 90% at 50% 38%, #000 22%, transparent 80%)',
        }}
      >
        <Player {...PLAYER_BASE} initialFrame={48} autoPlay={false} />
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 select-none max-md:opacity-60"
      style={{
        opacity,
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    >
      {live ? (
        <Player {...PLAYER_BASE} loop autoPlay />
      ) : (
        <Player {...PLAYER_BASE} initialFrame={48} autoPlay={false} />
      )}
    </motion.div>
  );
}
