/**
 * Atmospheric backdrop for the hero: aurora halo + ribbons + sphere
 * + drifting metaball field + counter-rotating orbital text rings.
 * Pure SVG/CSS. No client-side JS required.
 */
export function HeroAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[clamp(560px,72vw,1040px)] -translate-x-1/2 -translate-y-1/2"
    >
      {/* Halo */}
      <div
        className="halo-pulse absolute -inset-[28%] z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, oklch(62% 0.16 280 / 0.22) 0%, oklch(62% 0.16 280 / 0.06) 28%, transparent 58%)',
          filter: 'blur(30px)'
        }}
      />

      {/* Metaball field — drifting blobs merged via SVG goo filter */}
      <svg
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute left-1/2 top-1/2 z-[1] aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 opacity-95 [mix-blend-mode:screen]"
        style={{ filter: 'drop-shadow(0 0 60px oklch(62% 0.16 280 / 0.45))' }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
          <radialGradient id="metaballGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(72% 0.16 280 / 0.95)" />
            <stop offset="100%" stopColor="oklch(55% 0.18 280 / 0.6)" />
          </radialGradient>
        </defs>
        <g filter="url(#goo)">
          <circle className="mb-1" cx="300" cy="300" r="68" fill="url(#metaballGrad)" style={{ transformOrigin: '300px 300px' }} />
          <circle className="mb-2" cx="300" cy="300" r="46" fill="url(#metaballGrad)" style={{ transformOrigin: '300px 300px' }} />
          <circle className="mb-3" cx="300" cy="300" r="38" fill="url(#metaballGrad)" style={{ transformOrigin: '300px 300px' }} />
          <circle className="mb-4" cx="300" cy="300" r="28" fill="url(#metaballGrad)" style={{ transformOrigin: '300px 300px' }} />
          <circle className="mb-5" cx="300" cy="300" r="22" fill="url(#metaballGrad)" style={{ transformOrigin: '300px 300px' }} />
        </g>
      </svg>

      {/* Glass sphere — obsidian core */}
      <div
        className="sphere-drift absolute inset-[14%] z-[2] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 55%, oklch(15% 0.03 280) 0%, oklch(8% 0.02 280) 55%, oklch(3% 0.01 280) 100%)',
          boxShadow:
            '0 60px 140px -40px oklch(62% 0.16 280 / 0.5), inset 0 -40px 90px -10px oklch(3% 0.01 70 / 0.85), inset 0 0 80px 0 oklch(62% 0.16 280 / 0.1)',
          isolation: 'isolate'
        }}
      />

      {/* Orbital text rings — kinetic typography */}
      <svg
        viewBox="0 0 800 800"
        className="absolute left-1/2 top-1/2 z-[4] aspect-square w-[100%] max-w-[1040px] -translate-x-1/2 -translate-y-1/2 overflow-visible"
      >
        <defs>
          <path
            id="orbital-outer-path"
            d="M 400,400 m -340,0 a 340,340 0 1,1 680,0 a 340,340 0 1,1 -680,0"
          />
          <path
            id="orbital-inner-path"
            d="M 400,400 m -240,0 a 240,240 0 1,1 480,0 a 240,240 0 1,1 -480,0"
          />
        </defs>
        <g className="orbital-cw">
          <text
            className="font-mono uppercase"
            style={{
              fontFamily: 'JetBrains Mono, ui-monospace, monospace',
              fontSize: '14px',
              letterSpacing: '0.18em',
              fontWeight: 500,
              fill: 'oklch(72% 0.13 60)',
              opacity: 0.78
            }}
          >
            <textPath href="#orbital-outer-path" startOffset="0">
              ANTHROPIC&#8194;·&#8194;OPENAI&#8194;·&#8194;NEXT.JS&#8194;·&#8194;SUPABASE&#8194;·&#8194;CLAUDE&#8194;·&#8194;VERCEL&#8194;·&#8194;TYPESCRIPT&#8194;·&#8194;POSTGRES&#8194;·&#8194;FASTAPI&#8194;·&#8194;TELEGRAM&#8194;·&#8194;
            </textPath>
          </text>
        </g>
        <g className="orbital-ccw">
          <text
            className="font-mono uppercase"
            style={{
              fontFamily: 'JetBrains Mono, ui-monospace, monospace',
              fontSize: '14px',
              letterSpacing: '0.18em',
              fontWeight: 500,
              fill: 'oklch(62% 0.16 280)',
              opacity: 0.62
            }}
          >
            <textPath href="#orbital-inner-path" startOffset="0">
              TASHKENT&#8194;·&#8194;GMT+5&#8194;·&#8194;SHIPPING&#8194;JUN&#8194;&apos;26&#8194;·&#8194;FLAT&#8194;FEE&#8194;·&#8194;NO&#8194;RETAINER&#8194;·&#8194;QUOTE&#8194;IN&#8194;48H&#8194;·&#8194;ONE&#8194;CLIENT&#8194;AT&#8194;A&#8194;TIME&#8194;·&#8194;
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
}
