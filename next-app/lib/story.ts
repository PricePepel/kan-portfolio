/**
 * story.ts — the narrative spine of the site.
 *
 * "The Death of the World Champion": Ruslan Kan's arc from obsession
 * (mental-arithmetic championship) to selfhood (a world learner — the
 * best podium is a circle). Copy is adapted from his personal statement,
 * tightened for the web. Edit copy here; the page renders it.
 *
 * Mirrors the data-driven pattern of lib/cases.ts.
 */

export type ChapterMotif =
  | 'hero'
  | 'compute-full'
  | 'compute-fracture'
  | 'crown-spike'
  | 'dissolve'
  | 'circle-draw'
  | 'builder'
  | 'photo-grid'
  | 'circle-close';

export type PhotoAspect = 'portrait' | 'landscape' | 'square' | 'wide';

export interface PhotoSlot {
  /** Resolves to /photos/<slot>.jpg|.webp. Drop the file to swap in. */
  slot: string;
  alt: string;
  caption?: string;
  aspect: PhotoAspect;
}

export type ChapterLayout =
  | 'hero'
  | 'text'
  | 'photo-left'
  | 'photo-right'
  | 'photo-grid'
  | 'asymmetric'
  | 'delegate'; // rendered by a specialized component (Trajectory / SelectedWork / CircleClose)

export interface StoryChapterData {
  id: string; // section anchor id
  num: string; // "00".."08"
  kicker: string; // mono eyebrow label
  headline: string;
  lede?: string; // single standout sentence (clip-path reveal)
  body?: string[]; // paragraphs
  pull?: string; // pull-quote
  motif: ChapterMotif;
  /** Advisory compute-field intensity target for this chapter [enter, exit]. */
  intensity: [number, number];
  layout: ChapterLayout;
  photos: PhotoSlot[];
}

export const STORY: StoryChapterData[] = [
  {
    id: 'hero',
    num: '00',
    kicker: 'a world learner from Tashkent',
    headline: 'The Death of the World Champion',
    lede:
      "I'm Ruslan Kan — half-Korean, half-Uzbek, fluent in neither and raised between both. This is how I stopped chasing crowns and started chasing conversations.",
    motif: 'hero',
    intensity: [0.85, 0.85],
    layout: 'hero',
    photos: [],
  },
  {
    id: 'lamppost',
    num: '01',
    kicker: 'Tashkent · where it began',
    headline: 'It began with a lamppost.',
    body: [
      'Someone had taped an ad for mental-arithmetic classes to a lamppost in Tashkent. Out of acute wonder-boredom, I signed up — my Korean immigrant family needed no convincing beyond the word "arithmetic."',
      'Five months later I was on a plane to Moscow for my first International Mental Arithmetic Olympiad.',
    ],
    pull: 'Wonder-boredom. The best reason I have ever had.',
    motif: 'compute-full',
    intensity: [0.85, 0.7],
    layout: 'photo-right',
    photos: [
      { slot: '01-lamppost-ad', alt: 'The taped mental-arithmetic ad on a Tashkent lamppost', aspect: 'square' },
      { slot: '02-young-kan', alt: 'Ruslan as a young competitor', caption: 'before the first contest', aspect: 'portrait' },
    ],
  },
  {
    id: 'moscow',
    num: '02',
    kicker: 'Moscow · 2018',
    headline: 'The wall, and the circle that tore it down.',
    lede:
      'The Olympiad coincided with the World Cup. I told myself I had room for only one contest — and walled off everything else. An accident tore that wall down.',
    body: [
      "Near Red Square I stumbled into a celebration: Croatian fans toasting their team's impossible run — joined, of all people, by the Russians and the English they had just beaten. Rivals teasing each other over who admired Croatia more.",
      'I drifted into the circle and started translating — English to Russian and back, even parsing a little Croatian slang. "To hell with the linguistics," someone laughed, and soon we were dancing like old friends.',
      'Before we parted, the Russians pressed their plush mascot into my hands. Zabivaka. For the translation, they said. Looking back, an omen.',
    ],
    pull: 'A relic of when competition brought people together, instead of keeping them apart.',
    motif: 'compute-fracture',
    intensity: [0.6, 0.45],
    layout: 'asymmetric',
    photos: [
      { slot: '03-moscow-redsquare', alt: 'Red Square, Moscow, summer 2018', aspect: 'landscape' },
      { slot: '04-fans-celebrating', alt: 'Croatian, Russian and English fans celebrating together', caption: 'rivals in one circle', aspect: 'wide' },
    ],
  },
  {
    id: 'crown',
    num: '03',
    kicker: 'the cascade · 2018 onward',
    headline: 'Three hundred seconds.',
    lede:
      'The Olympiad itself lasted five minutes. In those 300 seconds we strained every nerve — vast sets of numbers, accuracy to the decimal. I won.',
    body: [
      '"World Champion" arrived with a near-guaranteed full ride to Moscow State University. That night I thought I saw my path with perfect certainty.',
      'Then came the others: Central Asia, Beijing, Thailand, the American Mathematics Olympiad. Hundreds of problems solved in milliseconds; number theory, combinatorics, probability. The cups piled up.',
    ],
    motif: 'crown-spike',
    intensity: [0.9, 0.55],
    layout: 'delegate',
    photos: [
      { slot: '06-podium-crown', alt: 'On the podium, mental-arithmetic championship', aspect: 'landscape' },
    ],
  },
  {
    id: 'turn',
    num: '04',
    kicker: 'the turn',
    headline: 'Then the world changed.',
    body: [
      'First COVID. Then the war in Ukraine. Then a New Cold War.',
      'Questions surfaced. Did I want to be "the World Champion" behind an Iron Curtain 2.0? Can anyone be the world champion in a deglobalizing, multipolar world — or only ever a world champion of their own shard of it?',
    ],
    pull: 'Are the article and the capital letter even the point?',
    motif: 'dissolve',
    intensity: [0.3, 0.2],
    layout: 'text',
    photos: [
      { slot: '07-iron-curtain', alt: 'A divided, desaturated world', aspect: 'wide' },
    ],
  },
  {
    id: 'perspective',
    num: '05',
    kicker: 'perspective',
    headline: 'The best podium is a circle.',
    lede: 'Championship was never about domination. It was about dialogue.',
    body: [
      'The point was never to stand above the world. It is to stand within one — to translate, to connect, to keep learning with people whose flags and alphabets differ from mine, but whose laughter syncs to my beat.',
      'I still love the race of ideas, the click of a solved proof, the breathless five minutes where everything sharpens. But I no longer chase crowns. I chase conversations.',
    ],
    pull: 'No longer the World Champion. A world learner.',
    motif: 'circle-draw',
    intensity: [0.15, 0.08],
    layout: 'photo-left',
    photos: [
      { slot: '08-circle-people', alt: 'A circle of people, not a podium', aspect: 'square' },
    ],
  },
  {
    id: 'builder',
    num: '06',
    kicker: 'what I build now',
    headline: 'I still solve things — for other people now.',
    lede:
      'Lead developer and co-founder at Bloomin (formerly Saman AI Academy). Production AI, shipped before university.',
    body: [
      'samanTA, an AI tutor and quiz engine: 117 users, 70 deployed school bots, thousands of quiz sessions. The Bloomin coach platform, TrainHire/Naviq, OLMA, and a hands-off Polymarket paper-trader. A peer-reviewed paper on AI in Uzbekistan’s fintech market — written at 17.',
    ],
    motif: 'builder',
    intensity: [0.08, 0.05],
    layout: 'delegate',
    photos: [],
  },
  {
    id: 'rest',
    num: '07',
    kicker: 'the rest of me',
    headline: 'Off the board.',
    body: [
      'I play midfield. I shoot on a digicam. I make astrophysics content on the side. And I translate — between languages, and between people. Russian and English, fluent in both.',
    ],
    motif: 'photo-grid',
    intensity: [0.05, 0.03],
    layout: 'photo-grid',
    photos: [
      { slot: '09-football', alt: 'Playing midfield', caption: 'midfield', aspect: 'portrait' },
      { slot: '10-digicam', alt: 'A frame shot on a digicam', caption: 'digicam', aspect: 'landscape' },
      { slot: '11-astro', alt: 'Astrophysics content', caption: 'the sky', aspect: 'square' },
      { slot: '12-translator', alt: 'Translating between people', caption: 'in between', aspect: 'portrait' },
    ],
  },
  {
    id: 'contact',
    num: '09',
    kicker: 'the circle',
    headline: 'Here I am — carrying a plush, looking for the next circle.',
    lede:
      'If your flag or your alphabet differs from mine, even better. Let us talk.',
    motif: 'circle-close',
    intensity: [0.04, 0],
    layout: 'delegate',
    photos: [
      { slot: '05-zabivaka', alt: 'Zabivaka, the plush relic', caption: 'the relic', aspect: 'portrait' },
    ],
  },
];

/** Identity words for the hero marquee. */
export const IDENTITY_WORDS: { label: string }[] = [
  { label: '한국인' },
  { label: 'Korean' },
  { label: 'Oʻzbek' },
  { label: 'Uzbek' },
  { label: 'Русский' },
  { label: 'Russian' },
  { label: 'English' },
  { label: 'Tashkent' },
  { label: 'Moscow' },
  { label: 'Minerva' },
  { label: 'world learner' },
  { label: 'the circle, not the podium' },
];
