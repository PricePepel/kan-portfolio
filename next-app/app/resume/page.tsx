import type { Metadata } from 'next';
import Link from 'next/link';
import { PrintBootstrap } from './print-bootstrap';
import './resume.css';

export const metadata: Metadata = {
  title: 'Resume — Ruslan Kan',
  description:
    'One-page resume for Ruslan Kan: Lead Software Developer at Bloomin, CTO of samanTA, Minerva University Class of 2030.',
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
    title: 'Lead Software Developer',
    org: 'Bloomin, 7-person EdTech startup',
    location: 'Warsaw, Poland / Chicago, USA',
    dates: 'Jun. 2025 – Present',
    bullets: [
      <>
        Launched <strong>samanTA</strong> (ta.saman.academy), an AI quiz and tutoring Telegram Mini App (React, FastAPI,
        Supabase, OpenAI API): about 80 daily users at its March 2026 launch; <strong>117 unique users, 70 deployed quiz
        bots, and 562 quiz sessions</strong>. Its usage results helped Bloomin win a{' '}
        <strong>€20,000 grant from EdTech4BY</strong>.
      </>,
      'Grounded the platform’s AI “Mini Coach” in each student’s lesson records to keep answers factual: passed all 4 hand-run edge-case tests with zero invented dates, raised context coverage from 1 of 5 to 3 of 5 records, and added a Telegram escalation loop to the educator.',
      'Built privacy-first analytics on PostHog EU (consent banner in 2 languages, no IP addresses stored, server-side HogQL), plus a CEO dashboard for traffic, sessions, and geography.',
      'Rebuilt coach public profiles around a 3D alumni “impact globe” (2 database migrations), covered by Vitest and Playwright tests and shipped through pull-request review; serves 28 coaches in production.',
    ],
  },
  {
    title: 'Web Development Instructor (Volunteer)',
    org: 'ITSTEP Academy',
    location: 'Tashkent, Uzbekistan',
    dates: '2024 – 2025',
    bullets: [
      <>
        Taught HTML, CSS, JavaScript, and React to <strong>80+ students aged 10–17</strong>, mentoring each through a
        first deployed project.
      </>,
    ],
  },
  {
    title: 'Sole Author · Peer-Reviewed Publication',
    org: 'Journal of Fintech, Business, and Development, ISSN 3065-9809',
    location: 'Vol. 2 No. 1, pp. 1–15',
    dates: 'Aug. 2025',
    bullets: [
      <>
        <a href="https://economicjournals.org/index.php/JFBD/article/view/51" target="_blank" rel="noopener noreferrer">
          “Influence of Components of the Artificial Intelligence on the Fin-tech Market of Uzbekistan: Banking and
          Insurance Systems”
        </a>
        : 15-page study of AI in credit scoring, fraud detection, and digital banking, using secondary data and expert
        interviews.
      </>,
    ],
  },
];

const PROJECTS: Project[] = [
  {
    name: 'EasyPay · National Transport Hackathon',
    stack: 'TypeScript, React Native (Expo), SQLite',
    dates: 'Aug. 2026',
    bullets: [
      'Placed 2nd with a 3-person team at Uzbekistan’s national transport hackathon (Ministry of Transport, Yandex Uzbekistan), winning a $2,100 prize; designed the fare-calculation and vehicle-binding API logic for one-tap bus payment at boarding.',
    ],
  },
  {
    name: 'Polymarket Tracker',
    stack: 'Node.js 20, GitHub Actions',
    dates: '2026',
    bullets: [
      'Built a zero-dependency data pipeline on a 5-minute GitHub Actions cron that logged the top 50 Polymarket traders’ trades on 5-minute BTC markets, idempotent via transaction-hash deduplication; ran unattended April–October 2026.',
      'Paper-traded the signal and published the results: 1,493 trades at a 71% hit rate, almost exactly break-even at the prices paid.',
    ],
  },
  {
    name: 'TrainHire (Naviq)',
    stack: 'Next.js 16, React 19, TypeScript, Supabase, Claude API',
    dates: 'Mar. 2026 – Apr. 2026',
    bullets: [
      'Built an intern hiring platform for the UzCombinator program that turns a job description into a 20-lesson AI-generated academy (Claude Sonnet with an OpenAI fallback) and ranks candidates on a rolling 1–10 quiz score across 3 role-scoped portals.',
      'Implemented JWKS-verified auth, XP levels, and idempotent UTC streak keys, covered by 56 Vitest tests.',
    ],
  },
  {
    name: 'OLMA',
    stack: 'Next.js 15, Supabase, Zustand, React Query',
    dates: '2025 – Present',
    bullets: [
      'Shipped a peer-to-peer learning network end to end in 4 months; implemented at School No. 166, where it is in use by 300 active users.',
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
            San Francisco, CA&nbsp;·&nbsp;
            <a href="mailto:ruslan.kan@uni.minerva.edu">ruslan.kan@uni.minerva.edu</a>&nbsp;·&nbsp;
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
              <span>B.S. in Computational Sciences, Computer Science (AI concentration) &amp; Business</span>
              <span>San Francisco → Tokyo → Buenos Aires → Berlin</span>
            </div>
          </div>
          <div className="resume__entry">
            <div className="resume__entry-row">
              <strong>School No. 166, Tashkent</strong>
              <span>Sep. 2015 – Jun. 2026</span>
            </div>
            <div className="resume__entry-row resume__entry-row--italic">
              <span>
                <strong>SAT 1510</strong> · <strong>IELTS 7.5</strong> · Academic Council Leader
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
              <strong>Aloha Mental Arithmetic:</strong> <strong>World Grand Champion</strong> (Moscow, 2018); 3&times; Grand
              Champion of Uzbekistan.
            </li>
            <li>
              <strong>Math olympiads:</strong> 20+ international math olympiad medals (2018–2025).
            </li>
            <li>
              <strong>World Scholar&rsquo;s Cup:</strong> 2&times; WOW Speaker; <strong>#8 scholar overall, Senior
              Division</strong> (2026); 19 medals; Yale finals qualifier (2025).
            </li>
            <li>
              <strong>Languages:</strong> Russian (native), English (fluent, IELTS 7.5).
            </li>
          </ul>
        </section>

        <section className="resume__section">
          <h2>Technical Skills</h2>
          <ul className="resume__plain-list">
            <li><strong>Programming:</strong> TypeScript, JavaScript, Python, SQL, HTML/CSS</li>
            <li><strong>Frameworks:</strong> React, Next.js, Node.js, FastAPI, React Native (Expo), Tailwind CSS</li>
            <li><strong>Data &amp; Infrastructure:</strong> PostgreSQL, Supabase, REST APIs, AWS, Git, GitHub Actions, Docker, Vercel, Render</li>
            <li><strong>AI &amp; APIs:</strong> OpenAI API, Anthropic Claude API, Telegram Bot API, PostHog</li>
            <li><strong>Testing:</strong> Vitest, Playwright</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
