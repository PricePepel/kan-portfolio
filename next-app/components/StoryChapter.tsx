/**
 * StoryChapter — the presentational shell every narrative chapter shares.
 *
 * Renders the mono eyebrow ( NN / kicker ), the display headline, an optional
 * clip-path-revealed lede, body paragraphs, and a pull-quote — then arranges
 * the chapter's PhotoFrames according to `layout`. For `delegate` chapters
 * (Trajectory / SelectedWork / CircleClose) it renders the header and yields
 * to `children`.
 *
 * Reuses the existing reveal classes (.rule-draw-on-scroll, .reveal-on-scroll)
 * driven by the global ScrollReveal observer — no new animation wiring.
 */

import type { ReactNode } from 'react';
import type { StoryChapterData } from '@/lib/story';
import { PhotoFrame } from '@/components/PhotoFrame';

function ChapterHeader({ chapter }: { chapter: StoryChapterData }) {
  return (
    <header className="flex flex-col gap-5">
      <span className="inline-flex items-center gap-3 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-[var(--text-mute)]">
        <span className="rule-draw-on-scroll inline-block h-px w-7 bg-[var(--accent)]" />
        ( {chapter.num} / {chapter.kicker} )
      </span>
      <h2
        className="tracking-tight"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 60px)',
          lineHeight: 1.02,
          letterSpacing: '-0.03em',
          fontWeight: 800,
          textWrap: 'balance',
          maxWidth: '20ch',
        }}
      >
        {chapter.headline}
      </h2>
    </header>
  );
}

function ChapterProse({ chapter }: { chapter: StoryChapterData }) {
  return (
    <div className="flex flex-col gap-6">
      {chapter.lede && (
        <p
          className="reveal-on-scroll text-[var(--text)]"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(19px, 2.3vw, 28px)',
            lineHeight: 1.35,
            letterSpacing: '-0.01em',
            fontWeight: 500,
            textWrap: 'balance',
          }}
        >
          {chapter.lede}
        </p>
      )}
      {chapter.body?.map((p, i) => (
        <p key={i} className="max-w-[60ch] text-[16px] leading-[1.75] text-[var(--text-mute)] md:text-[17px]">
          {p}
        </p>
      ))}
      {chapter.pull && (
        <blockquote
          className="mt-2 border-l-2 pl-5"
          style={{ borderColor: 'var(--accent)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 2.6vw, 32px)',
              lineHeight: 1.25,
              letterSpacing: '-0.015em',
              fontWeight: 300,
              color: 'var(--text)',
              textWrap: 'balance',
            }}
          >
            {chapter.pull}
          </p>
        </blockquote>
      )}
    </div>
  );
}

interface StoryChapterProps {
  chapter: StoryChapterData;
  children?: ReactNode;
}

export function StoryChapter({ chapter, children }: StoryChapterProps) {
  const { id, layout, photos } = chapter;
  const sectionCls = 'relative z-[1] px-6 py-28 md:px-10 md:py-44';
  const container = 'mx-auto max-w-[1400px]';

  // delegate: header + specialized component
  if (layout === 'delegate') {
    return (
      <section id={id} className={sectionCls}>
        <div className={container}>
          <div className="mb-12 md:mb-16">
            <ChapterHeader chapter={chapter} />
            <div className="mt-7 max-w-[64ch]">
              <ChapterProse chapter={chapter} />
            </div>
          </div>
          {children}
        </div>
      </section>
    );
  }

  // text-only
  if (layout === 'text') {
    return (
      <section id={id} className={sectionCls}>
        <div className={container}>
          <div className="max-w-[820px] md:ml-[6%]">
            <ChapterHeader chapter={chapter} />
            <div className="mt-7">
              <ChapterProse chapter={chapter} />
            </div>
            {photos[0] && (
              <div className="mt-12 max-w-[640px]">
                <PhotoFrame {...photos[0]} />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // photo-grid
  if (layout === 'photo-grid') {
    return (
      <section id={id} className={sectionCls}>
        <div className={container}>
          <div className="max-w-[760px]">
            <ChapterHeader chapter={chapter} />
            <div className="mt-7">
              <ChapterProse chapter={chapter} />
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((p, i) => (
              <div key={p.slot} style={{ marginTop: i % 2 === 1 ? '2.5rem' : undefined }}>
                <PhotoFrame {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // asymmetric — text col + offset stacked photos
  if (layout === 'asymmetric') {
    return (
      <section id={id} className={sectionCls}>
        <div className={`${container} grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12`}>
          <div className="md:col-span-6 md:pt-10">
            <ChapterHeader chapter={chapter} />
            <div className="mt-7">
              <ChapterProse chapter={chapter} />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:col-span-6">
            {photos.map((p, i) => (
              <div key={p.slot} className={i === 1 ? 'md:ml-[12%]' : undefined}>
                <PhotoFrame {...p} priority={i === 0} />
              </div>
            ))}
            {children}
          </div>
        </div>
      </section>
    );
  }

  // photo-left / photo-right
  const photoFirst = layout === 'photo-left';
  return (
    <section id={id} className={sectionCls}>
      <div className={`${container} grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14`}>
        <div className={photoFirst ? 'md:order-2' : undefined}>
          <ChapterHeader chapter={chapter} />
          <div className="mt-7">
            <ChapterProse chapter={chapter} />
          </div>
        </div>
        <div className={`flex flex-col gap-8 ${photoFirst ? 'md:order-1' : ''}`}>
          {photos.map((p, i) => (
            <div key={p.slot} className={i === 1 ? 'md:ml-[10%]' : undefined}>
              <PhotoFrame {...p} />
            </div>
          ))}
          {children}
        </div>
      </div>
    </section>
  );
}
