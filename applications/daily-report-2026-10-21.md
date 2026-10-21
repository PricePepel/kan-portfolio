# Daily Pipeline Report — 2026-10-21

## Summary

| Metric | Count |
|--------|-------|
| Total pipeline | 770 companies |
| Scanned to date | 425 (55.2%) |
| Remaining | 345 |
| Today's attempts | 30 |
| Today's successes | 0 (network policy blocked all curl) |
| Today's Gmail drafts | 0 |
| Indeed searches run | 4 |
| Indeed new matches | 0 (all repeats from prior runs) |

## Today's Activity

### Companies Attempted (30)

All 30 companies returned HTTP 403 from the outbound proxy — network policy restricts direct website access to arbitrary company domains.

**Tier A (score 6):**
Litmus, Mattermost, NodeSource, Reinteractive

**Tier B (score 5):**
3DprinterOS, 4D Pipeline, ActiveCampaign, Advantage Integrated Solutions, AgileBits, Angie Hospitality, Applied Brain Research, Assembled Brands, Astro HQ, AWeber, BacklotCars, Brave-software, Chekr, CitizenShipper, Close.io, Codebusters, CodeControl, Codeship (acquired by Cloudbees), Coinbase, Collab. Drug Discovery, Collage.com, Comcate Software, CompuCorp, ConnectCPA, Countly, Cozy Cloud

### Gmail Drafts Created (0)

No verified email contacts found today — all web scans blocked by network policy.

### Indeed Job Search — Results

| Role | Company | Type | Pay | Suitable? | Reason |
|------|---------|------|-----|-----------|--------|
| Engineering Intern | Fabdigit INC. | Remote Internship | $23.98–$28.87/hr | ✅ Already drafted | Repeat posting from Oct 18 run |
| Graphic & Web Design Intern | Knockout Warriors | Remote Internship | $1/yr | ❌ Not a match | Design role, not engineering |
| Web Dev & Social Media Intern | Women & Families Ascending Assoc. | Remote Internship | Unpaid | ❌ Not a match | Social work nonprofit, not tech |

**No new Gmail drafts created today.** All Indeed results are identical to prior runs — no new roles have appeared.

## Pipeline State

| Category | Count |
|----------|-------|
| Matched roles (web form/ATS) | 1 |
| Email contacts (verified) | 32 |
| Gmail drafts ready | 32 |
| Indeed applications drafted | 2 |
| No openings found | 6 |
| Failed scans (network policy) | 120 |
| Bounced | 1 |

## Total Progress: 425/770 scanned (55.2%)

## Persistent Issue: Network Policy

The cloud session's outbound proxy continues to block all direct access to company domains (HTTP 403). **120 companies** now have `network_policy_403` failures across 4 runs. The proxy only permits connections to allowlisted services (GitHub, Gmail MCP, etc.).

Confirmed blocked domains today:
- litmus.com, jobs.lever.co, coinbase.com, codecontrol.io, codeship.com
- collaborativedrug.com, compucorp.co.uk
- All major job boards: greenhouse.io, lever.co, workable.com, ashbyhq.com, indeed.com, angel.co, linkedin.com

**Fix required**: Run the pipeline scan in an environment with a permissive network policy, or request the proxy allowlist company career page domains.

## Open Applications

### Gmail Drafts Ready to Send (32 total)

All drafts in `nicetryskrock@gmail.com` Gmail drafts folder ready for manual review and send.

### Indeed Applications Ready

1. **Beyond the Game Health** — Full-Stack Product Dev Intern (Remote) → https://to.indeed.com/aa7lw8r2mbmg
   - Draft: `applications/beyond-the-game-health-cold-email.md`
2. **Fabdigit INC.** — Engineering Intern (Remote, $23.98–28.87/hr) → https://to.indeed.com/aadr6kv6x7p4
   - Draft: `applications/fabdigit-engineering-intern.md`

### ATS Application Ready

- **Canonical** — Graduate Software Engineer → https://canonical.com/careers/7814327

## Recommendations

- **Fix network policy** — 345 companies remain unscanned; all web scans are blocked.
- **2 Indeed internships open** — apply via the links above; drafts are ready.
- **32 Gmail drafts** — review and send from nicetryskrock@gmail.com.
- **1 ATS application** — Canonical (most important: remote, global, competitive pay).
- Consider running pipeline locally (not in cloud session) to bypass network restrictions.
