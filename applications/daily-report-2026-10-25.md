# Daily Pipeline Report — 2026-10-25

## Summary

- **Companies scanned today:** 30
- **New email contacts:** 0
- **Gmail drafts created:** 0
- **Indeed jobs found:** 3 (1 relevant, already drafted)
- **Total pipeline progress:** 558 / 770 scanned (72.5%)

---

## Companies Scanned Today

All 30 companies returned network-policy failures (proxy 403) — the cloud execution environment blocks outbound connections to arbitrary external websites. No email contacts or open roles could be extracted from raw HTML.

| Company | URL | Status |
|---------|-----|--------|
| Health Leads' | healthleadsusa.org/careers | failed (403) |
| Let's Encrypt | letsencrypt.org/jobs | failed (403) |
| Linaro | linaro.org/careers | failed (403) |
| Localistico | angel.co/localistico/jobs | failed (403) |
| Logikcull | logikcull.com/jobs | failed (403) |
| LoveToKnow | lovetoknow.com/careers | failed (403) |
| Loyal | loyalhealth.com/careers | failed (403) |
| Lullabot | lullabot.com/jobs | failed (403) |
| Lynx Technology Partners | lynxgrc.com/careers | failed (403) |
| Mapbox | mapbox.com/jobs | failed (403) |
| MariaDB | mariadb.com | failed (403) |
| Mediacurrent | mediacurrent.com/careers | failed (403) |
| Meet Edgar | meetedgar.com/careers | failed (403) |
| MetaLab | metalab.co/careers | failed (403) |
| Metamaterial Technologies | metamaterial.com/join-our-team | failed (403) |
| Meteor | meteor.com/jobs | failed (403) |
| Mobility Labs, Inc. | mobility-labs.com/careers | failed (403) |
| Modus-Create | moduscreate.com/who-we-are | failed (403) |
| Moment | shopmoment.com/careers | failed (403) |
| Moz | moz.com/about/jobs | failed (403) |
| Much Better Adventures | muchbetteradventures.com | failed (403) |
| New Context | newcontext.com/careers | failed (403) |
| NIFTIT | niftit.recruiterbox.com | failed (403) |
| nVisium | nvisium.com/careers | failed (403) |
| O'Reilly Media | oreilly.com/jobs | failed (403) |
| Octopus Deploy | octopus.com/company | failed (403) |
| Olark | olark.com/jobs | failed (403) |
| Olo | olo.com/company/#careers | failed (403) |
| OnTheGoSystems | onthegosystems.com/jobs | failed (403) |
| Open Knowledge | okfn.org/about/jobs | failed (403) |

---

## Indeed Results (2026-10-25)

| Title | Company | Location | Pay | Status |
|-------|---------|----------|-----|--------|
| Engineering Intern | Fabdigit INC. | Remote | $23.98–$28.87/hr | Already drafted |
| DATA ANALYST INTERN | TE Connectivity | Middletown, PA | $20.91–$45.04/hr | Not relevant (not remote, not tech match) |
| Intern — Research & Applied Psychometrics | Ascend Learning | Leawood, KS | N/A | Not relevant (non-tech) |

**Fabdigit** draft already exists at `applications/fabdigit-engineering-intern.md`.

---

## New Gmail Drafts Created Today

None — no new verified email contacts found.

---

## Cumulative Pipeline Status

| Status | Count |
|--------|-------|
| Matched (open roles / ATS found) | 7 |
| Email contacts found | 32 entries across 31 companies |
| No openings | 8 |
| JS-rendered (needs browser) | 8 |
| Redirected | 4 |
| Not found (404/403) | 2 |
| Failed scans (network policy) | 251 |
| Total scanned | **558 / 770** |

---

## Notable Open Opportunities (Still Active)

| Company | Role | URL | Notes |
|---------|------|-----|-------|
| Canonical | Graduate Software Engineer | canonical.com/careers | Remote globally, Python/JS/Go |
| 1Password | Developer Intern x4 — Winter 2027 | indeed | React/TS, Jan–Apr 2027 |
| Amplify | Software Engineering Intern — Summer 2027 | indeed | $30–35/hr, requires US work auth |

---

## Recommendation for Next Run

The cloud execution environment blocks direct HTTP/S to most job pages (proxy policy 403). Scanning remaining ~212 companies will require either:

1. **Manual spot-checks** — visit job pages directly in browser for the top remaining Tier B companies
2. **Script running locally** — clone branch and run `python3 scan_companies.py` on a local machine with unrestricted outbound internet

Top remaining unscanned Tier B companies to prioritize manually:
- Open Knowledge (okfn.org)
- Octopus Deploy (octopus.com)
- Mapbox (mapbox.com/jobs)
- Moz (moz.com/about/jobs)
- Lullabot (lullabot.com/jobs)
