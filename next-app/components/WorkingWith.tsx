'use client';

interface Affiliation {
  org: string;
  role: string;
  since: string;
  detail: string;
  href?: string;
}

const AFFILIATIONS: Affiliation[] = [
  {
    org: 'Saman AI Academy',
    role: 'Lead Software Developer',
    since: '2025 →',
    detail:
      'Three product pillars in production, two of them in daily external use. Stack: Anthropic, OpenAI, Next.js, Supabase.',
    href: 'https://saman.academy',
  },
  {
    org: 'ITSTEP Tashkent',
    role: 'Web Development Instructor',
    since: '2024 →',
    detail: '80+ students, ages 10–17. Evening classes alongside school and Saman.',
  },
  {
    org: 'Academic Council',
    role: 'President',
    since: '2025 →',
    detail: '900 students. School-wide policy + initiative leadership.',
  },
  {
    org: 'AI in Banking · Working Paper',
    role: 'Co-author',
    since: '2026',
    detail: 'With a PhD supervisor. First academic publication in progress.',
  },
  {
    org: 'Minerva University',
    role: 'Class of 2030',
    since: 'Aug 2026',
    detail: 'Admitted. Computer Science. Six cities in four years, San Francisco first.',
    href: 'https://www.minerva.edu',
  },
];

export function WorkingWith() {
  return (
    <section id="working-with" className="relative px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-16 flex flex-col gap-5">
          <span className="inline-flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
            <span className="rule-draw-on-scroll inline-block h-px w-7 bg-[var(--accent)]" />
            ( 05 / working with )
          </span>
          <h2
            className="font-bold tracking-tight max-w-4xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              fontWeight: 700,
              textWrap: 'balance',
            }}
          >
            Five lines on the CV.{' '}
            <span style={{ color: 'var(--text-faint)', fontWeight: 300 }}>
              All current, all verifiable.
            </span>
          </h2>
        </header>

        <ul
          className="flex flex-col"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          {AFFILIATIONS.map((a) => {
            const Body = (
              <div
                className="working-with-row group grid grid-cols-1 items-start gap-x-10 gap-y-4 py-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_auto] md:py-14"
                style={{ borderBottom: '1px solid var(--line)' }}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.06em',
                      color: 'var(--text-mute)',
                    }}
                  >
                    {a.since}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(28px, 3.6vw, 44px)',
                      fontWeight: 700,
                      letterSpacing: '-0.025em',
                      lineHeight: 1.05,
                      color: 'var(--text)',
                      textWrap: 'balance',
                    }}
                  >
                    {a.org}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '17px',
                      fontWeight: 500,
                      color: 'var(--accent)',
                    }}
                  >
                    {a.role}
                  </span>
                </div>

                <p
                  className="max-w-[42ch]"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: 'var(--text-mute)',
                  }}
                >
                  {a.detail}
                </p>

                {a.href && (
                  <span
                    aria-hidden="true"
                    className="working-with-arrow self-start font-mono uppercase"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.06em',
                      color: 'var(--text-mute)',
                      transition: 'color 280ms cubic-bezier(.16, 1, .3, 1), transform 280ms cubic-bezier(.16, 1, .3, 1)',
                    }}
                  >
                    Visit ↗
                  </span>
                )}

                <style jsx>{`
                  .working-with-row:hover .working-with-arrow {
                    color: var(--accent);
                    transform: translate(4px, -4px);
                  }
                  @media (prefers-reduced-motion: reduce) {
                    .working-with-arrow {
                      transition: color 200ms linear !important;
                    }
                    .working-with-row:hover .working-with-arrow {
                      transform: none !important;
                    }
                  }
                `}</style>
              </div>
            );

            return (
              <li key={a.org}>
                {a.href ? (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px]"
                    style={{ outlineColor: 'var(--accent)' }}
                  >
                    {Body}
                  </a>
                ) : (
                  Body
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
