# X thread — Kenmore Appliance Support

**When to post:** Week 4, Tuesday 13:00 UTC.
**Case study to link:** github.com/PricePepel/kan-case-studies/blob/main/kenmore.md

This one is the off-stack credibility builder. Most readers expect "AI integration specialist" to mean Next.js+Anthropic only. Showing range across a legacy WordPress build is the move.

---

## Hook (tweet 1)

> Shipped a 116-page WordPress site for a US appliance repair business in 2026. No page builder, no Elementor, no Docker.
>
> Custom theme + custom plugin, hand-written PHP, full handover, client maintains it themselves now.
>
> Why this still works in 2026. 🧵

## Tweet 2 — context

> Client: regional appliance repair operator.
>
> Old site: 5-page WordPress install, ranking on nothing.
>
> Goal: capture both transactional ("repair in Chicago") and informational ("washer error code F21") search.
>
> Scope: 100+ pages, self-serve content updates after handover.

## Tweet 3 — the multiplier

> 116 error code pages by hand in WP admin = ~30 hours of clicking.
>
> Custom plugin (kenmore-content-importer) bulk-loads from CSV: 4 hours to write, saves all future content authoring forever.
>
> Client adds rows → re-runs import → new pages live in seconds.

## Tweet 4 — Custom Post Types

> Four CPTs: `service`, `error_code`, `city`, `guide`.
>
> One taxonomy: `appliance_type` → drives the URL structure `/error-codes/{appliance}/{slug}/`.
>
> A WordPress page hierarchy with 116 nested children would have been operationally a nightmare. CPTs let each entry be a discrete object with its own schema, taxonomy, and template.

## Tweet 5 — local SEO depth

> 6 city pages, each with:
> - ZIP codes covered
> - suburb name list
> - service hours
> - neighborhood-specific copy
> - JSON-LD `LocalBusiness` schema with `areaServed`
>
> Schema validates against schema.org. Google parses it correctly.

## Tweet 6 — informational depth

> 116 error code pages indexed under `/error-codes/{appliance}/`.
>
> Each: error code, plain-English meaning, common causes, DIY troubleshoot, "call a repair tech if..." escalation.
>
> Long-tail traffic loves this. Site started ranking within 4 weeks of indexation.

## Tweet 7 — wp-now over Docker

> Local dev on wp-now (npm). Spins up a WP instance in 5 seconds, no MySQL container, no docker-compose.
>
> For a 4-person team, Docker is right.
> For a solo build, wp-now wins on iteration speed.
>
> Match the tool to the team size.

## Tweet 8 — Hostinger File Manager deploy

> Hot take: no CI/CD pipeline.
>
> ZIP upload via Hostinger File Manager. Deliberately simple.
>
> The client wanted a deploy they could understand and execute themselves if I'm unavailable. CI/CD that requires me as bus-factor is worse than the boring path.

## Tweet 9 — SEO posture

> Rank Math handles XML sitemap, redirects, basic meta.
>
> Everything else (page titles, descriptions, schema, internal linking) is theme-controlled.
>
> Plugin-controlled SEO is brittle: depends on the plugin author's roadmap. Theme-controlled SEO ships with the theme and survives any plugin migration.

## Tweet 10 — handover

> Full handover: theme code + plugin code + CSV templates + deploy instructions.
>
> Client adds a new error code by editing CSV and re-importing. No developer needed.
>
> The job isn't "ship a site." The job is "ship a system the client can run."

## Tweet 11 — full writeup

> Architecture, decisions, and the actual CSV schema:
> github.com/PricePepel/kan-case-studies/blob/main/kenmore.md
>
> Stack: WordPress core, custom PHP theme, custom PHP plugin, Rank Math, wp-now, Montserrat tokens, Kenmore blue #008cc7.

## Tweet 12 — closer

> Range matters. Same person, same year: a Telegram-bot AI tutor (samanTA), a B2B SaaS with Anthropic (Naviq), a Polymarket scraper, and a 116-page WP build.
>
> Booking June 2026 onward. [portfolio URL]

---

## Posting checklist

- [ ] Tuesday 13:00 UTC.
- [ ] This thread will get less engagement than the AI ones (smaller WP-on-X audience). That's fine; it's positioning, not hype.
- [ ] If a WP dev engages, follow back. WP-side referrals are cheap and high-converting.
- [ ] LinkedIn version: lead with "no CI/CD, ZIP upload deploy" — the contrarian angle gets the click.
