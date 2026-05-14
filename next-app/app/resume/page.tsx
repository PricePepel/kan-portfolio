import type { Metadata } from 'next';
import Link from 'next/link';
import { PrintBootstrap } from './print-bootstrap';
import './resume.css';

export const metadata: Metadata = {
  title: 'Resume — Ruslan Kan',
  description:
    'One-page resume for Ruslan Kan: Lead Software Developer & co-founder at Saman AI Academy (EU EdTech4BY accelerator), incoming Minerva University Class of 2030.',
};

type Bullet = string | React.ReactNode;
type Role = {
  title: string;
  org: string;
  location: string;
  dates: string;
  bullets: Bullet[];
};
type Project = {
  name: string;
  stack: string;
  dates: string;
  bullets: Bullet[];
};

const EXPERIENCE: Role[] = [
  {
    title: 'Lead Software Developer & Co-founder',
    org: 'Saman AI Academy · EU EdTech4BY accelerator portfolio',
    location: 'Tashkent, Uzbekistan',
    dates: 'Jun. 2025 – Present',
    bullets: [
      <>
        Built <strong>samanTA</strong> (ta.saman.academy) AI quiz/tutor platform:{' '}
        <strong>117 users, 70 deployed school bots, 562 quiz sessions, 59.8% completion, 77.6% avg score</strong> since
        launch on Telegram + web cabinet (FastAPI / Supabase / OpenAI).
      </>,
      <>
        Shipped <strong>Saman CRM</strong> coach cockpit (saman.academy): 5-tab dashboard, AI Concierge (GPT-4o context
        document + GPT-4o-mini Telegram nudges), Stripe $9.99/mo Premium paywall, public coach landing pages.
      </>,
      <>
        Closed <strong>$5K seed</strong> from <strong>EU EdTech4BY accelerator</strong>;{' '}
        <strong>$15K second tranche</strong> under review.
      </>,
      <>
        Own engineering across three production surfaces (samanTA, CRM, Rankings) sharing one FastAPI backend on Supabase;
        co-lead product strategy with CEO, COO/CPO, and CTO.
      </>,
    ],
  },
  {
    title: 'Web Development Instructor (Volunteer)',
    org: 'ITSTEP Academy',
    location: 'Tashkent, Uzbekistan',
    dates: '2024 – 2025',
    bullets: [
      <>
        Taught HTML/CSS, JavaScript, and React to <strong>80+ students aged 10–17</strong> across multiple cohorts; built
        lesson plans and mentored first deployed projects.
      </>,
    ],
  },
  {
    title: 'Sole Author · Peer-Reviewed Publication',
    org: 'Journal of Fintech, Business, and Development (JFBD), ISSN 3065-9809',
    location: 'Vol. 2 No. 1, pp. 1–15',
    dates: 'Aug. 2025',
    bullets: [
      <>
        <a href="https://economicjournals.org/index.php/JFBD/article/view/51" target="_blank" rel="noopener noreferrer">
          “Influence of Components of the Artificial Intelligence on the Fin-tech Market of Uzbekistan: Banking and
          Insurance Systems”
        </a>{' '}
        (15-page analysis of AI as a mechanism for structural change, inclusion, and trust in financial systems).
      </>,
      'Surveyed AI adoption across credit scoring, fraud detection, biometric authentication, and digital banking in Uzbekistan; combined secondary data with expert interviews and proposed a government-strategy framework.',
    ],
  },
];

const PROJECTS: Project[] = [
  {
    name: 'TrainHire (Naviq)',
    stack: 'Next.js 16, React 19, Supabase, Anthropic Claude, Stripe, HeyGen',
    dates: '2026 – Present',
    bullets: [
      'B2B SaaS that AI-generates 80-lesson training academies tailored to each employer’s internship specialty; three role-scoped portals (Dev, Employer, Intern) with idempotent UTC streak keys and JWKS-verified auth.',
      'Integrates Anthropic Claude Sonnet for lesson generation and HeyGen for AI presenter videos; Stripe employer subscription planned.',
    ],
  },
  {
    name: 'OLMA',
    stack: 'Next.js 15, Supabase, Zustand, React Query',
    dates: '2025 – 2026',
    bullets: [
      'Peer-to-peer learning network with dual-currency skill exchange, clubs, and gamified rankings; MVP shipped end-to-end including auth, social graph, and ranking engine.',
    ],
  },
  {
    name: 'Polymarket Tracker',
    stack: 'Node 20, GitHub Actions cron, Polymarket public API',
    dates: '2026 – Present',
    bullets: [
      'Cron-driven scraper and paper-trader for the top-50 BTC 5-minute prediction-market contracts; runs on GitHub Actions, writes structured logs to an Obsidian-Git repo, security-audited PAPER mode.',
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-toolbar">
        <Link href="/" className="resume-toolbar__link">← Portfolio</Link>
        <a href="#" className="resume-toolbar__btn" data-print-trigger>
          Print / Save as PDF
        </a>
      </div>
      <PrintBootstrap />

      <article className="resume" aria-label="Resume of Ruslan Kan">
        <header className="resume__header">
          <h1>Ruslan Kan</h1>
          <p className="resume__contact">
            Tashkent, Uzbekistan&nbsp;·&nbsp;
            <a href="mailto:kan.nadya1978@gmail.com">kan.nadya1978@gmail.com</a>&nbsp;·&nbsp;
            <a href="https://www.linkedin.com/in/ruslan-kan-207692384/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/ruslan-kan
            </a>
            &nbsp;·&nbsp;
            <a href="https://github.com/PricePepel" target="_blank" rel="noopener noreferrer">
              github.com/PricePepel
            </a>
          </p>
        </header>

        <section className="resume__section">
          <h2>Education</h2>
          <div className="resume__entry">
            <div className="resume__entry-row">
              <strong>Minerva University</strong>
              <span>Aug. 2026 – May 2030</span>
            </div>
            <div className="resume__entry-row resume__entry-row--italic">
              <span>B.S. in Computer Science (incoming, Class of 2030)</span>
              <span>San Francisco → Tokyo → Buenos Aires → Berlin</span>
            </div>
          </div>
          <div className="resume__entry">
            <div className="resume__entry-row">
              <strong>Tashkent High School (11-year system)</strong>
              <span>Sep. 2015 – Jun. 2026</span>
            </div>
            <div className="resume__entry-row resume__entry-row--italic">
              <span>
                <strong>SAT 1510</strong> (Math 800, Verbal 710) · <strong>IELTS 7.5</strong> · Academic Council Leader
                (900+ students)
              </span>
              <span>Tashkent, Uzbekistan</span>
            </div>
          </div>
        </section>

        <section className="resume__section">
          <h2>Experience</h2>
          {EXPERIENCE.map((role) => (
            <div className="resume__entry" key={role.title + role.org}>
              <div className="resume__entry-row">
                <strong>{role.title}</strong>
                <span>{role.dates}</span>
              </div>
              <div className="resume__entry-row resume__entry-row--italic">
                <span>{role.org}</span>
                <span>{role.location}</span>
              </div>
              <ul>
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h2>Independent Projects</h2>
          {PROJECTS.map((p) => (
            <div className="resume__entry" key={p.name}>
              <div className="resume__entry-row">
                <span>
                  <strong>{p.name}</strong> <em>| {p.stack}</em>
                </span>
                <span>{p.dates}</span>
              </div>
              <ul>
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume__section">
          <h2>Selected Achievements</h2>
          <ul className="resume__plain-list">
            <li>
              <strong>Mental arithmetic:</strong> <strong>Grand Champion of the World</strong>; 3&times; Grand Champion of
              Uzbekistan.
            </li>
            <li>
              <strong>Math olympiads · 19+ wins</strong> across AMO, SASMO, SEAMO, AMC, and Math League.
            </li>
            <li>
              <strong>World Scholar&rsquo;s Cup:</strong> 2&times; WOW Speaker at Nationals; <strong>#8 overall Senior
              Division</strong>, Tashkent National Round 2026; 20+ medals/cups across rounds.
            </li>
            <li>
              <strong>Languages:</strong> Russian (native), English (fluent, IELTS 7.5).
            </li>
          </ul>
        </section>

        <section className="resume__section">
          <h2>Technical Skills</h2>
          <ul className="resume__plain-list">
            <li><strong>Languages:</strong> TypeScript, JavaScript, Python, SQL (PostgreSQL), HTML/CSS, PHP</li>
            <li><strong>Frameworks:</strong> Next.js (App Router), React 19, FastAPI, Tailwind, Shadcn/ui, Vite, WordPress</li>
            <li><strong>Backend &amp; Data:</strong> Supabase (Postgres, RLS, Auth, Storage), Stripe, REST API design</li>
            <li><strong>AI &amp; APIs:</strong> Anthropic Claude (Sonnet), OpenAI (GPT-4o / 4o-mini), Telegram Bot API, HeyGen, TanStack Query</li>
            <li><strong>Tools:</strong> Git, GitHub Actions, Vercel, Docker, ESLint</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
