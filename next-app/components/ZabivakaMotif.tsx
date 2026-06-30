/**
 * ZabivakaMotif — the plush relic from Moscow 2018.
 *
 * A small framed portrait of Zabivaka with a caption that carries the
 * thematic weight: the relic of when competition brought people together.
 * Reused in the Moscow chapter and the closing Circle chapter.
 */

import { PhotoFrame } from '@/components/PhotoFrame';

interface ZabivakaMotifProps {
  caption?: string;
  className?: string;
}

export function ZabivakaMotif({
  caption = 'Zabivaka — the relic of when competition united people',
  className,
}: ZabivakaMotifProps) {
  return (
    <div className={`mx-auto w-full max-w-[280px] ${className ?? ''}`}>
      <PhotoFrame slot="05-zabivaka" alt="Zabivaka, the plush World Cup mascot" aspect="portrait" caption={caption} />
    </div>
  );
}
