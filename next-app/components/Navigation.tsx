'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon, ArrowUpRight } from '@phosphor-icons/react';

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') setTheme(stored);
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme, mounted]);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    if (typeof document !== 'undefined' && (document as any).startViewTransition) {
      (document as any).startViewTransition(() => setTheme(next));
    } else {
      setTheme(next);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[60] backdrop-blur-md" style={{ background: 'oklch(7.5% 0.008 70 / 0.72)', borderBottom: '1px solid var(--line)' }}>
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-6 py-3 md:px-10">
        <a href="#hero" aria-label="Kan, home" className="flex min-h-[44px] items-center gap-2 px-1 -mx-1">
          <span className="grid h-7 w-7 place-items-center rounded-[6px] text-[14px] font-black" style={{ background: 'var(--text)', color: 'var(--bg-base)', fontFamily: 'var(--font-display)' }}>
            K
          </span>
          <span className="font-bold tracking-tight" style={{ fontSize: '16px', fontFamily: 'var(--font-display)' }}>Kan</span>
        </a>
        <nav className="ml-auto hidden gap-7 font-mono text-[12px] uppercase tracking-[0.05em] text-[var(--text-mute)] md:flex" aria-label="Primary">
          <a href="#work" className="transition-colors hover:text-[var(--text)]">Work</a>
          <a href="#process" className="transition-colors hover:text-[var(--text)]">Process</a>
          <a href="#pricing" className="transition-colors hover:text-[var(--text)]">Pricing</a>
          <a href="#contact" className="transition-colors hover:text-[var(--text)]">Contact</a>
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          title="Toggle light/dark"
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line-2)] text-[var(--text-mute)] transition-all duration-200 hover:rotate-12 hover:border-[var(--blue)] hover:text-[var(--blue)]"
        >
          {mounted ? (theme === 'dark' ? <Moon size={16} weight="regular" /> : <Sun size={16} weight="regular" />) : <Moon size={16} weight="regular" />}
        </button>
        <a
          href="mailto:nicetryskrock@gmail.com"
          className="ml-2 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--line-2)] px-4 font-mono text-[12px] uppercase tracking-[0.05em] transition-colors hover:bg-[var(--text)] hover:text-[var(--bg-base)]"
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--good)' }} aria-hidden="true" />
          Book a call
          <ArrowUpRight size={12} weight="bold" />
        </a>
      </div>
    </header>
  );
}
