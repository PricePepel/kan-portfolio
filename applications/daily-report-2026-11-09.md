# Daily Pipeline Report – 2026-11-09

## Summary

- **Companies scanned today:** 30 attempted, all blocked by network policy
- **New opportunities found:** 1 (Indeed – TalentGrid, low priority)
- **Gmail drafts created:** 0 (no new verified emails)
- **Indeed jobs found:** 1 new, 1 draft created
- **Total pipeline progress:** 704 / 770 companies processed

---

## Companies Scanned Today (30)

All 30 companies were blocked by the session's network policy (HTTP 403 from proxy). These were all Tier B (score 4) companies without job page URLs in the database — job pages were constructed from their websites.

| Company | URL Attempted | Result |
|---------|--------------|--------|
| Modern Tribe | https://tri.be/careers | network_policy_403 |
| Moveon.org | https://front.moveon.org/careers | network_policy_403 |
| Nav | https://www.nav.com/careers | network_policy_403 |
| Nebulab | https://nebulab.it/careers | network_policy_403 |
| Netlify | https://www.netlify.com/careers | network_policy_403 |
| New Engen | https://newengen.com/careers | network_policy_403 |
| NinjaCat | https://www.ninjacat.io/careers | network_policy_403 |
| Nomics | https://nomics.com/careers | network_policy_403 |
| Oddball | https://oddball.io/careers | network_policy_403 |
| OmniAccess | https://www.omniaccess.com/careers | network_policy_403 |
| OneSky | http://www.oneskyapp.com/careers | network_policy_403 |
| OutMatch | https://outmatch.com/careers | network_policy_403 |
| Overleaf | https://www.overleaf.com/careers | network_policy_403 |
| Payroll Panda | https://www.payrollpanda.my/careers | network_policy_403 |
| Percona | https://percona.com/about-percona/careers | network_policy_403 |
| Perfect Keto | https://perfectketo.com/careers | network_policy_403 |
| Piggy | https://www.joinpiggy.com/careers | network_policy_403 |
| Pipedrive | https://www.pipedrive.com/careers | network_policy_403 |
| Pitch | https://pitch.com/careers | network_policy_403 |
| Pond5 | http://www.pond5.com/careers | network_policy_403 |
| Power Diary | https://www.powerdiary.com/careers | network_policy_403 |
| Raising the floor | https://raisingthefloor.org/careers | network_policy_403 |
| Red Guava | http://www.redguava.com.au/careers | network_policy_403 |
| Rocketrip | https://www.rocketrip.com/careers | network_policy_403 |
| Salesmsg | https://www.salesmessage.com/careers | network_policy_403 |
| Seeq | http://seeq.com/careers | network_policy_403 |
| Sendible | https://www.sendible.com/careers | network_policy_403 |
| SevenAtoms | https://www.sevenatoms.com/careers | network_policy_403 |
| Shield GEO | https://shieldgeo.com/careers | network_policy_403 |
| Sitemate Technologies | https://sitemate.com/careers | network_policy_403 |

---

## Indeed Search Results

**Searches run:**
- "React Next.js TypeScript intern" (remote, US) → 0 results
- "Python FastAPI AI ML software engineer intern" (remote, US) → 0 results
- "software engineering intern 2027" (remote, US) → 2 results
- "full stack developer intern" (remote, US) → 0 results
- "AI intern developer junior" (remote, US) → 0 results
- "web developer React intern" (remote, US) → 2 results
- "software intern TypeScript Python" (remote, US) → 1 result
- "software engineer intern AI startup 2027" (remote, US) → 0 results
- "junior software engineer entry level AI startup" (remote, US) → 0 results

**New jobs found (not previously tracked):**

| Job | Company | Location | Pay | Relevance |
|-----|---------|----------|-----|-----------|
| AI Native Analyst Intern (Summer 2027) | TalentGrid | Remote | N/A | LOW – requires US work auth + wrong grad year |

> Other results: Ryder System IT Intern (not tech), Zimmer Biomet HR Intern (not tech), 
> Pluto IT .NET Intern (not matching skills), Start Software Game Developer (full-time, not intern)

**Draft created:** `applications/talentgrid-ai-analyst-intern.md`  
(⚠️ Low priority — 2 hard disqualifiers: US work auth + graduation timeline mismatch)

---

## Gmail Drafts Created Today

**None.** All 33 existing email contacts already have drafts. No new verified email
addresses were found today (all scans blocked by network policy).

---

## Pipeline Status

| Category | Count |
|----------|-------|
| Total companies | 770 |
| Companies processed | 704 |
| Remaining | 66 |
| Matched (open roles / emails) | 20 |
| Email contacts with drafts | 33 |
| No openings found | 15 |
| Network policy blocked | 674 |
| JS-rendered (need manual check) | 9 |
| Redirected | 4 |
| Not found (404) | 2 |

---

## Network Policy Issue

The session's network policy is blocking outbound HTTPS to company websites (HTTP 403 from proxy). This has affected 674+ companies across all runs. The remaining 66 unscanned companies will also likely be blocked.

**Recommendation:** To complete the pipeline scan, consider:
1. Running the scan locally where network access is unrestricted
2. Using a WebFetch-capable session instead of curl
3. Manually checking the remaining 66 companies via browser

---

## Remaining Companies (66 unscanned)

Tier B (score 4) — all require manual or unrestricted-network scan:
Sitemate Technologies, Smartly.io, Snapfix, Softr.io, SparkPost, SpeedyBrand, Stonly,
Strapi, Supermetrics, SuperHuman, SwagBucks, Swiftype, Sysdig, Taiga.io, Teamwork.com,
Tessitura, TextNow, Thin Margin, Thumbtack, Tipalti, TomTom, Toptal, Totango,
Tresorit, Tribe, Triple Whale, Triplebyte, Truenal, TrustArc, Typeform, Unbounce,
Unibuddy, Userback, Usermaven, Uscreen, Vanta, Veed.io, Venngage, Vestiaire Collective,
Vidalytics, Vidyard, Vimcal, Vitally, Vividly, Volt.io, Weaviate, Webflow, Whatfix,
Whimsical, WorkOS, Workable, Writer, Xano, Xero, YarnBuddy, Yotpo, Zapier, Zoho
