'use client';

import { useEffect } from 'react';

export function ConsoleSignature() {
  useEffect(() => {
    try {
      const k = 'background:#c28a3d;color:#11100d;font-weight:800;padding:6px 10px;border-radius:3px;font-family:ui-monospace,monospace;font-size:14px;';
      const body = 'color:#c28a3d;font-family:ui-monospace,monospace;font-size:12px;line-height:1.6;';
      const mute = 'color:#7a6b58;font-family:ui-monospace,monospace;font-size:11px;line-height:1.6;';
      console.log(
        '%c K %c  Kan · AI integration specialist for SaaS\n' +
          '%c  Anthropic, OpenAI, Next.js, Supabase. Production AI features, shipped fast.\n' +
          "   Booking June 2026 onward. Tashkent · GMT+5.\n" +
          '   nicetryskrock@gmail.com\n\n' +
          '%c  PS: rebuilt in Next.js 15 + GSAP + Tailwind v4. Found a bug? Tell me.',
        k,
        body,
        body,
        mute
      );
    } catch {}
  }, []);
  return null;
}
