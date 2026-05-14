'use client';

import { ArrowUpRight } from '@phosphor-icons/react';

interface OversizedEmailLinkProps {
  email: string;
}

export function OversizedEmailLink({ email }: OversizedEmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      aria-label={`Email ${email}`}
      className="oversized-email-link group inline-flex max-w-full flex-wrap items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px]"
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(36px, 8vw, 120px)',
        letterSpacing: '-0.03em',
        lineHeight: 0.9,
        color: 'var(--accent)',
        textDecoration: 'underline',
        textDecorationThickness: '2px',
        textUnderlineOffset: '8px',
        wordBreak: 'break-word',
        outlineColor: 'var(--accent)',
        transition: 'transform 320ms cubic-bezier(.16, 1, .3, 1)',
      }}
    >
      <span>{email}</span>
      <span
        className="oversized-email-arrow shrink-0"
        aria-hidden="true"
        style={{
          transition: 'transform 320ms cubic-bezier(.16, 1, .3, 1)',
        }}
      >
        <ArrowUpRight size={48} weight="bold" />
      </span>

      <style jsx>{`
        .oversized-email-link:hover {
          transform: scale(0.98);
        }
        .oversized-email-link:hover .oversized-email-arrow {
          transform: translate(6px, -6px);
        }
        @media (prefers-reduced-motion: reduce) {
          .oversized-email-link,
          .oversized-email-arrow {
            transition: none !important;
          }
          .oversized-email-link:hover,
          .oversized-email-link:hover .oversized-email-arrow {
            transform: none !important;
          }
        }
      `}</style>
    </a>
  );
}
