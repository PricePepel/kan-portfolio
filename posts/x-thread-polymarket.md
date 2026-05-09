# X thread — Polymarket Tracker

**When to post:** Week 1, Tuesday 13:00 UTC (best engagement window for tech Twitter — US morning, EU afternoon).
**Repo to link:** github.com/PricePepel/polymarket-tracker

Why this thread first: the repo is already public, the metrics are real, and the audience that follows trader/quant Twitter overlaps with builder Twitter.

---

## Hook (tweet 1)

> I built a paper-trading harness that watches the top 50 Polymarket CRYPTO accounts trading BTC up-or-down 5-minute markets.
>
> Zero dependencies. Two crons. State as a committed JSON file. 6 months green.
>
> Here is the architecture and a few things that surprised me. 🧵

## Tweet 2

> The premise: do the wallets that consistently top the Polymarket leaderboards have predictive signal on BTC short-term direction?
>
> Polymarket's API gives you positions per wallet, but no aggregation, no historical state, no signal layer.
>
> So I built it.

## Tweet 3 — architecture

> Single Node 20 script (`track.mjs`), native fetch only, no axios, no SDK. Deploys two ways for redundancy:
>
> - GitHub Actions cron, every 15 minutes
> - Windows Task Scheduler running locally, writing to Obsidian via Local REST API
>
> Both write to the same dedup-aware state.

## Tweet 4 — state design

> State lives in a committed `state.json`. Not a database.
>
> Means:
> - no DB to keep alive
> - no migration to manage
> - full audit trail comes free via `git log`
> - forking the repo gives you the data alongside the code
>
> Unconventional. Right call for a solo personal tool.

## Tweet 5 — signal layer

> Separate file: `signal-layer.mjs`. Same Node 20 runtime, same zero-dep policy.
>
> Consumes the scraper output, never touches Polymarket itself.
>
> Derives a directional consensus from the top-50 wallets' positions, weighted by wallet ROI. Runs paper trades against that signal.

## Tweet 6 — paper mode locked

> The paper-trading harness has two modes: `PAPER` and `LIVE`. PAPER is the default; LIVE requires conscious work to wire in real execution.
>
> If you build something like this, lock the live mode behind an env var with extra steps. The "I accidentally went live" failure mode is unfunny.

## Tweet 7 — what surprised me

> The top wallets DO have signal. Not enough to print money against fees, but the hit rate on 5-minute direction is meaningfully above 50% if you weight by historical wallet ROI rather than equal-weighting the top 50.
>
> Naive aggregation buries the signal. Weighting matters.

## Tweet 8 — deployment story

> GitHub Actions reliable but slow on cold starts. Windows Task Scheduler is dumb but instant.
>
> Both run, both write to the dedup state. If one fails silently, the other catches up on the next tick. The state file rejects duplicates.
>
> Belt and suspenders, no extra ops cost.

## Tweet 9 — observability

> Cron response monitored: HTTP 204 means "workflow_dispatch ack, no body, success." That's the heartbeat.
>
> If I see a non-204 in the GitHub Actions log, I know within 15 minutes. Plain workflow logs, no observability stack.

## Tweet 10 — security

> Audited end-to-end before going live:
> - no secrets in committed state
> - no sensitive data in logs
> - dedup logic prevents replay if a malicious wallet replays old txs
>
> All cheap. All saved me from a bug I would have shipped without thinking.

## Tweet 11 — repo

> Code, state history, and signal-layer notes are all public:
> github.com/PricePepel/polymarket-tracker
>
> Star it if interesting. PRs welcome. Fork it for your own market.

## Tweet 12 — closer (soft pitch)

> I ship things like this for SaaS founders: AI features, cron scrapers, internal tools, full MVPs.
>
> Stack: Anthropic, OpenAI, Next.js, Supabase, Node, FastAPI.
>
> Booking June 2026 onward. Trial sprint $1k for 5–7 days. DM or [portfolio URL].

---

## Posting checklist

- [ ] Schedule for Tuesday 13:00 UTC
- [ ] Pin the thread to your profile for 7 days
- [ ] Reply to the first 5 substantive comments within 1 hour
- [ ] Cross-post tweet 1 + tweet 11 (with repo link) to Threads + Bluesky as a shorter version
- [ ] LinkedIn version: condense to a 4-paragraph post linking to the repo (not the thread)
