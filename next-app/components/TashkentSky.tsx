/**
 * Tashkent Sky — content-as-texture
 *
 * Renders the actual sky over Tashkent (41.3°N, 69.3°E) at a fixed
 * instant (2026-05-11 21:47 UTC+5) using bright-star positions from
 * the Yale Bright Star Catalogue. Stars projected stereographically
 * with the local zenith at the center.
 *
 * This is the page's third-order differentiation move: replaces the
 * decorative film-grain overlay with a quiet, verifiable astronomical
 * fact tied to where the page's author lives. Position: fixed; opacity:
 * very low so the texture sits beneath all readable content without
 * interfering. Server-rendered, no runtime motion, no JS state.
 */

import { BRIGHT_STARS } from '@/lib/bright-stars';
import {
  TASHKENT,
  julianDate,
  raDecToAltAz,
  stereographic
} from '@/lib/sky';

interface ProjectedStar {
  cx: number;
  cy: number;
  r: number;
  opacity: number;
  name: string;
  nameRu?: string;
  bayer: string;
}

const { year, month, day, hour, minute } = TASHKENT.instantUtc;
const JD = julianDate(year, month, day, hour, minute);

// Compute projected positions once at module load (server-side)
const STARS: ProjectedStar[] = BRIGHT_STARS.flatMap((s) => {
  const { alt, az } = raDecToAltAz(s.raHours, s.decDeg, TASHKENT.latDeg, TASHKENT.lonDeg, JD);
  const p = stereographic(alt, az);
  if (!p) return [];
  // Magnitude -> apparent radius/opacity. Brightest stars get largest dots.
  // Hipparcos magnitudes here range from -1.46 (Sirius) to ~2.9.
  const m = Math.max(-1.5, Math.min(3.5, s.mag));
  const brightness = 1 - (m + 1.5) / 5; // 1 (Sirius) → ~0.2 (Sadalmelik)
  return [{
    cx: p.x,
    cy: p.y,
    r: 0.8 + brightness * 1.6,            // 0.8 → 2.4 px in viewBox units
    opacity: 0.35 + brightness * 0.55,    // 0.35 → 0.90
    name: s.name,
    nameRu: s.nameRu,
    bayer: s.bayer
  }];
});

export function TashkentSky() {
  // viewBox is the stereographic unit disc, scaled. Sky disc inscribes a
  // square centered on the page; corners fall slightly below the horizon
  // and stay dark — which is the right look for a sky.
  // SVG transforms unit-disc coordinates to a 600×600 viewBox.
  const SCALE = 280;
  const CENTER = 300;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[0] select-none"
      style={{
        // Subtle radial vignette darkening the horizon so the sky doesn't
        // bleed into surface content
        background:
          'radial-gradient(ellipse 70% 80% at 50% 45%, transparent 0%, transparent 50%, oklch(7.5% 0.008 70 / 0.4) 100%)'
      }}
    >
      <svg
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.5 }}
      >
        <defs>
          {/* Soft glow for the brightest stars (Sirius, Vega, Arcturus...) */}
          <filter id="sky-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.9" />
          </filter>
        </defs>

        <g transform={`translate(${CENTER}, ${CENTER})`}>
          {STARS.map((s, i) => {
            const x = s.cx * SCALE;
            const y = s.cy * SCALE;
            // Brightest few stars get a soft glow halo
            const halo = s.r > 1.8;
            return (
              <g key={`${s.name}-${i}`}>
                {halo && (
                  <circle
                    cx={x}
                    cy={y}
                    r={s.r * 2.2}
                    fill="oklch(95% 0.02 70)"
                    opacity={s.opacity * 0.18}
                    filter="url(#sky-glow)"
                  />
                )}
                <circle
                  cx={x}
                  cy={y}
                  r={s.r}
                  fill="oklch(95% 0.02 70)"
                  opacity={s.opacity}
                >
                  <title>{`${s.bayer} · ${s.name}${s.nameRu ? ` · ${s.nameRu}` : ''}`}</title>
                </circle>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
