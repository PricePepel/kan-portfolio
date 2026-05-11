'use client';

import { useEffect } from 'react';

export function PrintBootstrap() {
  useEffect(() => {
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const trigger = target.closest('[data-print-trigger]');
      if (!trigger) return;
      e.preventDefault();
      window.print();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
