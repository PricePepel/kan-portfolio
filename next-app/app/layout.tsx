import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SmoothScroll } from '@/components/SmoothScroll';
import { LoadingScreen } from '@/components/LoadingScreen';

const OG_DESC =
  'Production AI, shipped before university. Four projects live across SaaS, edtech, market analysis, and a WordPress build. Tashkent → Minerva, class of 2030.';

export const metadata: Metadata = {
  title: 'Kan · Builder. Tashkent → Minerva.',
  description:
    'I ship production AI features and tools. Anthropic, OpenAI, Next.js, Supabase. Four projects live, all written up in public. Heading to Minerva University in August 2026, class of 2030.',
  openGraph: {
    title: 'Kan · Builder. Tashkent → Minerva.',
    description: OG_DESC,
    type: 'website',
    siteName: 'Kan'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kan · Builder. Tashkent → Minerva.',
    description: OG_DESC
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230284c7'/%3E%3Ctext x='16' y='23' font-family='Gabarito,system-ui,sans-serif' font-weight='900' font-size='21' text-anchor='middle' fill='%23ffffff'%3EK%3C/text%3E%3C/svg%3E",
        type: 'image/svg+xml'
      }
    ]
  }
};

// theme-color matches --bg-base (light ≈ #f6f9fb, dark-sky ≈ #16203a)
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#16203a' },
    { media: '(prefers-color-scheme: light)', color: '#f6f9fb' }
  ],
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden w-full max-w-full">
        <a href="#hero" className="skip-link">Skip to content</a>
        <ScrollReveal />
        <SmoothScroll />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
