# Pipeline Daily Report — 2026-11-02

## Summary

- **Companies scanned today:** 30 (next Tier B batch)
- **New opportunities found:** 0
- **Gmail drafts created:** 0 (no verified email contacts found today)
- **Application drafts created:** 0
- **Indeed searches run:** 5
- **Indeed new matches:** 0 (3 results found, all disqualifying)
- **Total pipeline progress:** 769/770 scanned

---

## Scan Results Today

### New Application Drafts

None today.

### Company Batch (30 companies)

All 30 companies from today's Tier B batch were **network blocked** due to the remote session's egress proxy policy — external company website domains return 403 from the CONNECT tunnel. Companies attempted:

| # | Company | Outcome |
|---|---------|---------|
| 1 | Forward Financing | network_policy_403 |
| 2 | Greenback Tax Services | network_policy_403 |
| 3 | Hudl | network_policy_403 |
| 4 | Influx | network_policy_403 |
| 5 | INTUO/Unit4 | skipped (angel.co URL, no direct page) |
| 6 | InVision | network_policy_403 |
| 7 | KeyCDN | network_policy_403 |
| 8 | KissMetrics | skipped (angel.co URL) |
| 9 | LiveMentor | network_policy_403 |
| 10 | Manage Flitter | network_policy_403 |
| 11 | mySociety | network_policy_403 |
| 12 | MySQL | network_policy_403 |
| 13 | Netsparker | network_policy_403 |
| 14 | Niteo | network_policy_403 |
| 15 | Nugg | network_policy_403 |
| 16 | Numbrs | network_policy_403 |
| 17 | Optimile NV | network_policy_403 |
| 18 | Paktor | network_policy_403 |
| 19 | Paylocity | network_policy_403 |
| 20 | Peak | network_policy_403 |
| 21 | PreviousNext | network_policy_403 |
| 22 | Rackspace Technology | network_policy_403 |
| 23 | Red Hat | network_policy_403 |
| 24 | Sherpany AG | network_policy_403 |
| 25 | Shortfundly | skipped (angel.co URL) |
| 26 | Simbiose Ventures | network_policy_403 |
| 27 | Skore | network_policy_403 |
| 28 | Sococo | skipped (indeed.com URL, no direct job page) |
| 29 | Sourcefabric | network_policy_403 |
| 30 | SugarCRM | network_policy_403 |

---

## Indeed Searches Run

| Query | Results |
|-------|---------|
| React Next.js intern (remote, US, internship) | 0 results |
| Python AI ML intern (remote, US, internship) | 0 results |
| Software engineering intern TypeScript (remote, US, internship) | 1 result (Chess.com — already tracked) |
| Software developer intern (remote, US, internship) | 1 result (BNSF Railway — no-sponsorship required) |
| Software intern 2027 (remote, US) | 6 results (BNSF, Eide Bailly, Horace Mann, Headway — all disqualified) |

### New Indeed Matches Today

None — all results were disqualified:

- **BNSF Railway** (Summer 2027, $6,563/month) — Explicitly requires no visa sponsorship (blocks F-1/CPT/OPT). Skip.
- **Eide Bailly CRM Consulting** (Spring 2027, $25/hr) — Requires US work authorization without sponsorship; in-office only (no remote). Skip.
- **Horace Mann Insurance Actuarial** (Summer 2027, $26/hr) — Actuarial exam required; actuarial science focus, not CS/software. Skip.

---

## Pipeline Progress

| Category | Count |
|----------|-------|
| Total companies | 770 |
| Companies scanned (counter) | 769 |
| Matched (roles found) | 15 |
| Email contacts (with drafts) | 33 |
| No openings found | 15 |
| Failed / network restricted | 453 |
| Bounced emails | 1 |
| Remaining unscanned (no URL) | ~308 |

---

## Running Application Tally

| Type | Count |
|------|-------|
| Indeed-sourced job drafts | 10 |
| Cold email drafts (no verified email) | 31 |
| Web-form applications (e.g., Canonical) | 1 |
| **Total drafts** | **42** |

---

## Action Items for User

1. **Pipeline near-complete** — 769/770 companies scanned (by counter). ~308 companies have no job page URL and were never fetchable. Consider these done unless you want to research them manually.

2. **Network policy note** — This remote session cannot reach external company websites. All web scanning must be done locally or from a session with broader network access. Run `scan_emails.sh` locally to complete any remaining companies that do have URLs.

3. **Priority applications still open:**
   - Cotiviti Intern AI Engineer (rolling deadline Dec 22, 2026) — `applications/cotiviti-ai-engineer-intern.md`
   - Alchimetis AI Engineer Intern ($4–5k/month, strong match) — `applications/alchimetis-ai-engineer-intern.md`
   - Fabdigit Engineering Intern ($23–28/hr, remote startup) — `applications/fabdigit-engineering-intern.md`
   - 1Password Developer Intern — Provisioning, Machine Identity, Extension, Credential Brokering, Developer Interfaces (Winter 2027)

4. **31 cold email drafts** — All are drafts without verified email addresses. To send them, find the actual contact email on each company's website and update the draft before sending via Gmail.

5. **Chess.com Engineering Internship** — Existing draft at `applications/chesscom-engineering-intern.md`. Check if still open.
