'use client';

import { useEffect } from 'react';

export function ConsoleSignature() {
  useEffect(() => {
    try {
      const k = 'background:#0284c7;color:#ffffff;font-weight:800;padding:6px 10px;border-radius:6px;font-family:ui-monospace,monospace;font-size:14px;';
      const body = 'color:#0284c7;font-family:ui-monospace,monospace;font-size:12px;line-height:1.6;';
      const mute = 'color:#64748b;font-family:ui-monospace,monospace;font-size:11px;line-height:1.6;';
      console.log(
        '%c K %c  Kan · Builder. Tashkent → Minerva.\n' +
          '%c  17, finishing school. Four AI projects shipped, all written up.\n' +
          "   Anthropic, OpenAI, Next.js, Supabase. Minerva class of 2030.\n" +
          '   nicetryskrock@gmail.com\n\n' +
          '%c  PS: built in Next.js 15 + GSAP + Tailwind v4. Found a bug? Tell me.',
        k,
        body,
        body,
        mute
      );
    } catch {}
  }, []);
  return null;
}
