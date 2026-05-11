import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kan · Builder. Tashkent → Minerva.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          // OKLCH not supported in next/og; using sRGB approximations of warm tokens
          background:
            'radial-gradient(ellipse 800px 600px at 30% 35%, rgba(99, 70, 178, 0.35), transparent 60%), #110f0d',
          color: '#f5ede1',
          fontFamily: 'system-ui',
          letterSpacing: '-0.025em'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: '#f5ede1',
              color: '#110f0d',
              fontSize: 36,
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            K
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, opacity: 0.7 }}>Kan</div>
          <div style={{ marginLeft: 'auto', fontSize: 18, opacity: 0.5, fontFamily: 'monospace' }}>
            BUILDING · 2026
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.95,
              maxWidth: 1040,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <span>Production AI,</span>
            <span>
              <span style={{ color: '#c98e3d' }}>shipped before university.</span>
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.6,
              maxWidth: 900,
              lineHeight: 1.4
            }}
          >
            Anthropic, OpenAI, Next.js, Supabase. Four projects live, all written up. Tashkent · GMT+5.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 18,
            fontFamily: 'monospace',
            opacity: 0.55
          }}
        >
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>ANTHROPIC</span>
            <span>·</span>
            <span>OPENAI</span>
            <span>·</span>
            <span>NEXT.JS</span>
            <span>·</span>
            <span>SUPABASE</span>
          </div>
          <div>nicetryskrock@gmail.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
