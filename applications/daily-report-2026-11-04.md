# Pipeline Daily Report — 2026-11-04

## Summary

- **Companies scanned today:** 30 (next priority batch: 30 Tier B with job pages)
- **New opportunities found:** 0 (no qualifying new roles)
- **Gmail drafts created today:** 1 (Tortuga — contact@tortugabackpacks.com)
- **Application drafts created:** 1 (tortuga-cold-email.md)
- **Indeed searches run:** 7
- **Indeed new matches:** 0 (all results disqualified or already tracked)
- **Total pipeline progress:** 543/770 scanned

---

## Scan Results Today

### New Application Drafts

| Company | Email | Type | File |
|---------|-------|------|------|
| Tortuga | contact@tortugabackpacks.com | Cold email (verified from prior scan) | applications/tortuga-cold-email.md |

### Company Batch (30 companies — network blocked)

All 30 companies were **network blocked** — the remote session's egress proxy
returns 403 on CONNECT to arbitrary external domains.

| # | Company | Tier | Score | Outcome |
|---|---------|------|-------|---------|
| 1 | Sulvo | B | 4 | network_policy_403 |
| 2 | Tenable | B | 4 | network_policy_403 |
| 3 | Time Doctor | B | 4 | network_policy_403 |
| 4 | Timely | B | 4 | network_policy_403 |
| 5 | Toggl | B | 4 | network_policy_403 |
| 6 | Toptal | B | 4 | network_policy_403 |
| 7 | Twilio | B | 4 | network_policy_403 |
| 8 | Upwork | B | 4 | network_policy_403 |
| 9 | UserTesting | B | 4 | network_policy_403 |
| 10 | Venafi, Inc | B | 4 | network_policy_403 |
| 11 | Vervoe | B | 4 | network_policy_403 |
| 12 | Whitespectre | B | 4 | network_policy_403 |
| 13 | Zemanta | B | 4 | network_policy_403 |
| 14 | Conveyal | B | 3 | network_policy_403 |
| 15 | Crossover | B | 3 | network_policy_403 |
| 16 | DataCite | B | 3 | network_policy_403 |
| 17 | Demio | B | 3 | network_policy_403 |
| 18 | doopoll | B | 3 | network_policy_403 |
| 19 | Elastic | B | 3 | network_policy_403 |
| 20 | Fastly | B | 3 | network_policy_403 |
| 21 | fournova | B | 3 | network_policy_403 |
| 22 | FoxAndSheep | B | 3 | network_policy_403 |
| 23 | Foxio | B | 3 | network_policy_403 |
| 24 | General Assembly | B | 3 | network_policy_403 |
| 25 | GrapheneDB | B | 3 | network_policy_403 |
| 26 | Haystack | B | 3 | network_policy_403 |
| 27 | Healthfinch | B | 3 | network_policy_403 |
| 28 | Holstee | B | 3 | network_policy_403 |
| 29 | ICUC | B | 3 | network_policy_403 |
| 30 | Jolly Good Code | B | 3 | network_policy_403 |

---

## Indeed Searches Run

| Query | Results |
|-------|---------|
| React Next.js software engineer intern (remote, internship) | 0 |
| Python AI ML full stack developer intern (remote, internship) | 0 |
| Software engineering intern AI startup 2027 (remote, internship) | 0 |
| Software engineer intern remote (no type filter) | 6 results |
| Web developer intern TypeScript (remote, internship) | 0 |
| Junior developer remote entry level | 2 results |
| Software intern (remote) | 9 results |
| Developer intern (remote) | 2 results |

### New Indeed Results — All Disqualified

| Company | Role | Job ID | Reason Disqualified |
|---------|------|--------|---------------------|
| NexCommand AI | AI Engineer (Intern) | JOBSEARCH_102374 | Already tracked |
| Chess.com | Engineering Internship | JOBSEARCH_102375/102382 | Already tracked |
| Fabdigit INC. | Engineering Intern | JOBSEARCH_102376 | Already tracked |
| BNSF Railway | Summer Intern 2027 | JOBSEARCH_102377/102386/102393 | Already disqualified (no visa sponsorship) |
| Cotiviti | Associate Manager AGI Research | JOBSEARCH_102378 | Full-time manager role, not intern |
| SOLV Energy | Design Engineer II | JOBSEARCH_102379 | Full-time, high-voltage engineering — not relevant |
| Career Mentor Group | Junior DevOps Engineer | JOBSEARCH_102380 | Full-time ($48-58k), DevOps focused — not intern |
| Propel America | Senior Director | JOBSEARCH_102381 | Senior leadership role — not applicable |
| TalentGrid | AI Native Analyst Intern | JOBSEARCH_102383/102392 | Already disqualified (US work auth required, in-person) |
| CareSource | 2027 Summer Internship — Data Science | JOBSEARCH_102385 | Requires Rising Junior/Senior class standing; Ruslan would be rising sophomore in Summer 2027 |
| Cotiviti | Intern — Generative AI/Agentic AI | JOBSEARCH_102388 | Application window closed 08/15/2026 |
| Boston Medical Center | Cybersecurity & AI/Data Governance Intern | JOBSEARCH_102390 | Poor tech stack match (DevOps/security/Linux focus); $15-17/hr; likely US auth required |
| NPSS | Network and Security Operations Center Intern 1 | JOBSEARCH_102387 | Part-time, $10-12/hr, security operations — poor match |
| ISS World | TA People Data Automation Specialist | JOBSEARCH_102391 | SkillBridge program for DoD military members only |

---

## Pipeline Progress

| Category | Count |
|----------|-------|
| Total companies | 770 |
| Companies scanned (counter) | 543 |
| Matched (open roles found) | 15 |
| Email contacts | 33 |
| No openings found | 15 |
| Failed / network restricted | 513 |
| Bounced emails | 1 |
| Remaining unprocessed | ~227 |

---

## Running Application Tally

| Type | Count |
|------|-------|
| Indeed-sourced job drafts | 10 |
| Cold email drafts | 32 |
| Web-form applications (e.g., Canonical) | 1 |
| Gmail drafts ready | 26 |
| **Total drafts** | **43** |

---

## Notes & Action Items

1. **Network policy blocks all job page scans** from this remote session. The
   ~35 remaining companies with job pages (beyond today's batch) + 243
   companies without job pages face the same constraint. To scan them, run
   the pipeline locally where outbound HTTPS is unrestricted.

2. **Priority applications still open:**
   - Cotiviti Intern AI Engineer, Early-Career — LLM Context & Data Layer
     (rolling deadline Dec 22, 2026) — `applications/cotiviti-ai-engineer-intern.md`
   - Alchimetis AI Engineer Intern ($4–5k/month) —
     `applications/alchimetis-ai-engineer-intern.md`
   - Fabdigit Engineering Intern ($23–28/hr) —
     `applications/fabdigit-engineering-intern.md`
   - 1Password Developer Intern (5 open roles, Winter 2027)
   - Chess.com Engineering Internship (AI/ML or Product track)
   - NexCommand AI — AI Engineer Intern (remote, 3 months)

3. **26 Gmail drafts are ready** in your outbox (including today's Tortuga
   draft). Review and send when ready.

4. **Tortuga note:** This is a small travel-backpack e-commerce brand (1-10
   employees). Low tech-stack match but verified contact email. Low priority —
   send only if the other 25 priority drafts are out.
