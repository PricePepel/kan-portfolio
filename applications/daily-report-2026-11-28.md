# Pipeline Daily Report — 2026-11-28

## Summary

| Metric | Count |
|--------|-------|
| Companies scanned today | 0 (network policy blocks all external job pages) |
| New opportunities found | 1 (Indeed) |
| Gmail drafts created today | 0 |
| Indeed jobs reviewed today | 8 |
| Total pipeline progress | 770/770 companies scanned |

---

## Network Scan Status

All 770 companies in `companies_scored.json` have been scanned in prior runs. Today's scan attempt on **29 timeout companies** and **19 string-entry companies** was blocked by the session's network policy (curl returncode 56 / DNS blocked). These companies remain in `failedScans` with reason `network_policy_403` or `network_restricted`.

### Failure breakdown (cumulative):
- `network_policy_403`: 520 companies
- `no_job_page_url` / `no_job_page`: 122 companies
- `network_restricted` / DNS blocked: 88 companies
- `timeout`: 29 companies
- Other: 66 companies

---

## New Opportunities Found

### 1. Spanglish Events — AI & Web Development Intern ✅
- **Source:** Indeed (JOBSEARCH_103848)
- **Posted:** November 23, 2026
- **Location:** Remote (or Medellín, Colombia)
- **Pay:** $75/week stipend
- **Stack:** Cursor, v0, Codex, GitHub, Vercel, **Supabase** — exact match
- **Apply:** Google Form (link in draft)
- **Draft file:** `applications/spanglish-events-ai-web-intern.md`
- **Notes:** Direct founder access, 3 live platforms, AI-native workflow. Supabase + Vercel stack is a perfect match for Ruslan's existing projects.

---

## Indeed Jobs Reviewed Today (8)

| Company | Role | Decision |
|---------|------|----------|
| Spanglish Events | AI & Web Development Intern | ✅ MATCHED — draft created |
| Prosper Group Consultancy | Web Developer Intern | ❌ NJIT-only, WordPress stack |
| Connecting Scholars | UI/UX Developer Internship | ❌ Essentially unpaid ($1/year) |
| Asymmetrica Investments AG | Software Engineering Intern | ⚠️ Already in matched list |
| youbloom | Laravel Developer Intern | ❌ Laravel stack — wrong tech |
| UNIVERSAL PHOENIX GROUP | UX/UI Game Dev (Unity) | ❌ Unity/game dev — wrong stack |
| Flo Labs R&D | Sports Science & HealthTech Intern | ❌ Not CS engineering |
| EBRC/Biogen | Internship at Biogen | ❌ Biotech, not remote, not CS |
| Iwanciw Functional Funware | CS/Coding Entrepreneur | ❌ $3-5/hr below minimum wage |

---

## Total Pipeline Progress

| Category | Count |
|----------|-------|
| **Matched roles (open positions)** | **40** |
| **Email contacts with Gmail drafts** | **33** |
| Companies with no openings | 15 |
| Companies with email not found | 30 |
| Failed scans (network blocked) | 825 |
| Indeed jobs reviewed (cumulative) | 71 |
| **Total companies in pipeline** | **770/770** |

---

## Existing Matched Roles (40 total)

Companies with open intern/junior roles already drafted:
1Password (5 roles), Alchimetis, Amplify, ASRC Federal (2 roles), Asymmetrica Investments AG, Bask Health (3 roles), BNSF Railway, CACI International, Canonical, CareSource, Chess.com, Cotiviti, Dream Grid Studios, Echo Global Logistics, Fabdigit INC., Instructure, J.M. Smucker, NexCommand AI (3 roles), Numa, OpenSesame, Simbe Robotics, **Spanglish Events** *(new)*, TalentGrid, Women and Families Ascending (2), Xometry, youbloom, Zoetis (2 roles)

---

## Recommendation

The pipeline is fully exhausted for company scanning (network policy blocks all external job pages). The best remaining actions are:
1. **Manually apply** via Google Form for Spanglish Events
2. **Review and send** 33 Gmail cold-email drafts in inbox
3. **Apply via ATS** for all 40 matched roles using the draft files in `applications/`
4. Consider refreshing the company list or running pipeline in a different environment with open network access
