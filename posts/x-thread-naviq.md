# X thread — Naviq (TrainHire)

**When to post:** Week 2, Tuesday 13:00 UTC.
**Case study to link:** github.com/PricePepel/kan-case-studies/blob/main/naviq.md

---

## Hook (tweet 1)

> Built a B2B SaaS that turns a job spec into a 20-lesson onboarding academy in minutes. Anthropic primary, OpenAI fallback, Notion publishing, 56 Vitest tests green, idempotent UTC streak keys.
>
> Three architecture decisions that mattered most. 🧵

## Tweet 2 — context

> Client onboards interns into specific roles. Old process: a coach manually wrote 20 lessons per role, dragged them into Notion, sent intern access individually.
>
> 3–4 hours per intern per cohort.
>
> Goal: one admin, 50 interns, one afternoon.

## Tweet 3 — decision 1

> **Anthropic primary, OpenAI fallback. Not load-balanced.**
>
> Claude has stronger structured-output following for the curriculum schema. OpenAI is only invoked on Claude failure (rate-limit, malformed JSON, validation rejection).
>
> Load-balancing would create "two slightly different curricula."

## Tweet 4 — fallback flow

> Generation goes: Claude call → Zod validator → if invalid, retry with tightened prompt → if still invalid, OpenAI fallback → Zod validator again → persist or error.
>
> The schema validator is the gate. Bad output never reaches the database.

## Tweet 5 — decision 2

> **Idempotent UTC streak keys.**
>
> Every streak event is keyed by `(user_id, utc_date)` with a unique constraint at the DB level.
>
> A user crossing midnight mid-session doesn't double-count. A device clock change can't game the streak.

## Tweet 6 — why this matters

> First version used local timezone. Broke for one tester travelling Tashkent → Bangkok mid-cohort.
>
> Reworked the key as UTC + DB constraint. This is the kind of bug that's invisible until a real user surfaces it; doing it right the first time saves a Sev-2 in production.

## Tweet 7 — decision 3

> **Notion as the lesson reading surface, not custom UI.**
>
> Interns read in Notion: familiar interface, mobile-friendly, search built in.
>
> The cabinet only handles enrolment, progress, XP, streaks.
>
> Cut ~2 weeks of UI work. Focus stayed on the engagement loop.

## Tweet 8 — XP curve math

> XP awards on a 10/20/30 step curve (start, mid, complete).
>
> Level scaling: `50 · n²`. Level 5 = 1,250 XP. Level 10 = 5,000 XP.
>
> Quadratic on purpose: prevents grinding-fatigue at low levels and progression cliffs at high levels.

## Tweet 9 — testing

> 56 Vitest tests covering:
> - course generator output validation
> - XP curve math
> - streak idempotency
> - intern enrolment flow
> - RLS policy enforcement
>
> Edge cases: malformed Claude response, Notion rate-limit, double enrolment, mid-session timezone change.

## Tweet 10 — full case writeup

> Architecture diagram, decisions, and full stack list:
> github.com/PricePepel/kan-case-studies/blob/main/naviq.md
>
> Stack: Next.js 16, React 19, Supabase, Anthropic, OpenAI, Notion API, Zod, Vitest.

## Tweet 11 — closer

> Build like this on retainer-free flat fee. Currently booking AI integration projects from $1.5k (single feature) to $7.5k (full MVP) plus a $1k trial sprint.
>
> June 2026 onward. DM or [portfolio URL].

---

## Posting checklist

- [ ] Same cadence as Polymarket thread (13:00 UTC Tuesday).
- [ ] Reply substantively to first 5 comments.
- [ ] LinkedIn version: 3-paragraph condensation focused on the three decisions, with case-study link.
- [ ] If Anthropic devrel engages, reply once, polite, no sales pitch — they remember names.
