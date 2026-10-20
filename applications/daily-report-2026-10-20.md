# Daily Pipeline Report — 2026-10-20

## Summary

| Metric | Count |
|--------|-------|
| Total pipeline | 770 companies |
| Scanned to date | 395 (51.3%) |
| Remaining | 375 |
| Today's attempts | 30 |
| Today's successes | 0 (network policy blocked all curl) |
| Today's Gmail drafts | 0 |
| Indeed searches run | 7 |
| Indeed new matches | 0 new (1 repeat) |

## Today's Activity

### Companies Attempted (30)
All 30 companies returned HTTP 403 from the outbound proxy — network policy restricts direct website access to arbitrary company domains.

Companies attempted (all marked failedScans):

**Tier A (score 6):**
Velaro Inc., WebPunch, When I Work, WizeHire, Wordfence

**Tier B (score 5):**
Acceleration Partners, Accella, Actionable.co, Actyx, AltSchool, AmaZix, Animalz, Articulate, Avaaz, Azumio, Balsamiq, Barrel, BetterDoctor, Bitnami, Bluespark Labs, Bonfire, BriteCore, Cadasta, CafeMedia, ChartMogul, Chef, Chess.com, Civic Actions, Clevertech, Resonanz Group (no job page URL)

### Gmail Drafts Created (0)
No verified email contacts found today — all web scans blocked by network policy.

### Indeed Job Search — Results

| Role | Company | Type | Pay | Suitable? | Reason |
|------|---------|------|-----|-----------|--------|
| Full-Stack Product Dev Intern | Beyond the Game Health | Remote Internship | $1-2/yr (credit) | ✅ Already drafted | Repeat posting (prior run) |
| Software Test Engineer Intern Spring 2027 | CACI International | Remote Part-time | $39,900–79,900/yr | ❌ Not eligible | Requires US work auth + Secret clearance |
| Software Developer AI Trainer | DataAnnotation | Remote Part-time | $40–150/hr | ❌ Geo-restricted | US/Canada/UK/Ireland/AU/NZ only |
| Graphic & Web Design Intern | Knockout Warriors | Remote Internship | $1/yr | ❌ Not a match | Design role, not engineering |
| Web Dev & Social Media Intern | Women & Families Ascending Assoc. | Remote Internship | Unpaid | ❌ Not a match | Social work nonprofit, not tech |
| Vibe Coding Internship | Cliquelog IT Solutions | Remote Internship | Unpaid | ❌ Not a match | Beginner-only training program |
| Gameplay Programming Intern | Sony Interactive Entertainment | Burbank CA | $41.50–50/hr | ❌ Not remote | On-site Burbank only |

**No new Gmail drafts created today.** All Indeed findings were either duplicates of existing drafts, require US work authorization, are geographically restricted, or are not technical matches.

## Pipeline State

| Category | Count |
|----------|-------|
| Matched roles (web form/ATS) | 1 |
| Email contacts (verified) | 32 |
| Gmail drafts ready | 32 |
| Indeed applications drafted | 2 |
| No openings found | 6 |
| Failed scans (network policy) | 90 |
| Bounced | 1 |

## Total Progress: 395/770 scanned (51.3%)

## Persistent Issue: Network Policy

The cloud session's outbound proxy blocks all direct access to company domains (HTTP 403). **90 companies** now have `network_policy_403` failures across 3 runs. The proxy only permits connections to allowlisted services (GitHub, Gmail MCP, etc.).

**Fix required**: run the pipeline scan portion in an environment with a permissive network policy, or request that the proxy allowlist company career page domains.

## Open Applications

### Gmail Drafts Ready to Send (32 total)
All drafts in `nicetryskrock@gmail.com` Gmail drafts folder are ready for manual review and send.

### Indeed Applications Ready
1. **Beyond the Game Health** — Full-Stack Product Dev Intern (Remote) → https://to.indeed.com/aa7lw8r2mbmg
   - Draft at: `applications/beyond-the-game-health-cold-email.md`
2. **Fabdigit INC.** — Engineering Intern (Remote, $23.98–28.87/hr) → https://to.indeed.com/aadr6kv6x7p4
   - Draft at: `applications/fabdigit-engineering-intern.md`

### ATS Application Ready
- **Canonical** — Graduate Software Engineer → https://canonical.com/careers/7814327

## Recommendations
- **Fix network policy** — 375 companies remain unscanned; all web scans are blocked.
- **2 Indeed internships open** — apply via the links above; drafts are ready.
- **32 Gmail drafts** — review and send from nicetryskrock@gmail.com.
- **1 ATS application** — Canonical (most important: remote, global, competitive pay).
- For CACI International (Spring 2027) — skip, requires US Secret clearance + work auth.
