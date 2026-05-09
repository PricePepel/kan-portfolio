# X thread — samanTA

**When to post:** Week 3, Tuesday 13:00 UTC.
**Case study to link:** github.com/PricePepel/kan-case-studies/blob/main/samanta.md

---

## Hook (tweet 1)

> Three clients, one auth source-of-truth: web app, FastAPI backend, Telegram bot.
>
> The trick was a single Python decorator that resolves Supabase user IDs from Telegram chat IDs before any handler runs. Killed an entire class of "user did X without being properly linked" bugs.
>
> 🧵

## Tweet 2 — what it is

> samanTA is an AI quiz + tutoring platform.
>
> Coaches assemble single-select / multi-select / open-ended quizzes. Students take them on the web or inside Telegram. OpenAI generates and grades.
>
> Live, daily usage, paying users.

## Tweet 3 — three surfaces, one truth

> Three clients sharing one auth source and one data layer:
>
> - React web (Supabase JS sign-in)
> - FastAPI backend (verifies JWT via JWKS)
> - Telegram bot (linked to a Supabase user via /link command)
>
> The bot was the awkward client. Telegram doesn't have OAuth.

## Tweet 4 — the link flow

> Telegram bot has no native auth. Solved with a `/link` command:
>
> 1. User clicks "Link Telegram" on the web → server generates one-time code
> 2. User sends `/link <code>` to the bot
> 3. Server pairs `telegram_chat_id` → `supabase_user_id`
>
> Now every future message from that chat is auth'd.

## Tweet 5 — the decorator

> ```python
> @require_linked_account
> async def take_quiz_handler(update, context):
>     user_id = context.supabase_user_id  # always set
>     ...
> ```
>
> The decorator resolves chat_id → supabase_user_id before the handler runs. If unlinked, returns "you need to /link first".
>
> Business logic NEVER sees an unlinked user.

## Tweet 6 — why a decorator

> First version had inline checks at the top of each handler.
>
> By the third handler I'd already shipped a bug: an early return that skipped the check on a specific code path.
>
> ~40 lines of decorator. Prevents an entire bug class. Done.

## Tweet 7 — JWKS, not round-trips

> Verifying JWTs against Supabase auth on every request would add 100–200ms per call.
>
> JWKS verification (cache the public key, verify signature locally) drops that to <1ms.
>
> Keys rotate; cache TTL matches Supabase's rotation cadence.

## Tweet 8 — reminders as views, not cron-per-user

> Spaced-repetition reminders at 24, 48, 72, 120, 168 hour cadences depending on the schedule the coach picks.
>
> Cron-per-user doesn't scale.
>
> Instead: a `due_reminders` Postgres view that computes "what's due now." Worker polls the view and fires.

## Tweet 9 — adding a cadence

> New reminder cadence = SQL change to the view, not a code deploy.
>
> Coach wants a 336-hour reminder for long-tail revision? Add a row to the cadence table, regenerate the view. No restart, no redeploy.

## Tweet 10 — Stripe gate

> Premium ($9.99/mo) gates the AI Concierge surface (unlimited generated practice quizzes).
>
> Stripe webhook handler is idempotent (reads the event ID, no-ops on replay). Subscription state lives in Postgres, not in app memory.
>
> Webhook test cases: `customer.subscription.created`, `.updated`, `.deleted`, `.trial_will_end`.

## Tweet 11 — full writeup

> Architecture, full code structure, and verification:
> github.com/PricePepel/kan-case-studies/blob/main/samanta.md
>
> Stack: React + Vite, FastAPI, Supabase, OpenAI, python-telegram-bot, Stripe.

## Tweet 12 — closer

> If you have a "users + multi-channel access + AI grading" build sitting on the backlog, that's exactly this shape. Trial sprint at $1k, internal-tool tier at $3.5k.
>
> [portfolio URL]

---

## Posting checklist

- [ ] Tuesday 13:00 UTC.
- [ ] Tweet 5's code snippet is the most retweetable single artifact — make sure the formatting renders cleanly (test in a draft first).
- [ ] If a Python/FastAPI engineer engages, you've earned a follow.
- [ ] LinkedIn version: lead with the decorator pattern, link to the case study.
