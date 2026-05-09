# Launch plan

**Owner:** Kan (Ruslan)
**Goal:** book first paid trial sprint within 60 days, first full project within 90 days.
**Constraints:** 17 yo, Tashkent, banking gated, 0 testimonials, strong portfolio.

This file orchestrates the launch. Everything you need is in one of the directories below.

```
Portfolio/
├── next-app/                 — live site (already shipped)
├── github-readme/
│   ├── profile-readme.md     — paste into github.com/PricePepel/PricePepel
│   └── case-studies/         — push to a new public repo: kan-case-studies
│       ├── README.md
│       ├── naviq.md
│       ├── samanta.md
│       ├── polymarket.md
│       └── kenmore.md
└── posts/
    ├── x-thread-naviq.md         — week 1
    ├── x-thread-samanta.md       — week 2
    ├── x-thread-polymarket.md    — week 3 (lowest friction, public repo)
    ├── x-thread-kenmore.md       — week 4
    ├── linkedin-launch.md        — post once, day 1
    └── hn-freelancer-reply.md    — post on the 1st of every month
```

---

## Sequence (week-by-week)

### Week 0 — Setup (this week)

The non-content prerequisites. Don't skip; without these, the content posts have nowhere to land.

- [ ] **Banking unblock**: Payoneer account with parent-guarantor signature. 5–10 days to verify. *Without this, you cannot legally receive client payment from US/EU.*
- [x] **Calendly account**: live at https://calendly.com/kan-ai/30min. Wired into nav, hero, pricing footer, and contact pill on the portfolio site.
- [ ] **GitHub profile README**: create new repo `github.com/PricePepel/PricePepel` (matching your username makes it your public bio). Paste contents of `github-readme/profile-readme.md`. Add a profile photo (any clean headshot or a clean avatar). Add bio: "AI integration for SaaS founders. Anthropic + OpenAI + Next.js + Supabase. Tashkent, GMT+5." Add location, link to portfolio.
- [ ] **GitHub case-studies repo**: create new public repo `github.com/PricePepel/kan-case-studies`. Push the contents of `github-readme/case-studies/`. Pin it on your profile.
- [ ] **Pin 4 repositories** on your profile: kan-case-studies + polymarket-tracker + 2 others (any substantive repo, not itstep-sql-practices).
- [ ] **X / Twitter profile setup**: bio "AI integration for SaaS · Claude/OpenAI · Tashkent · GMT+5", link to portfolio, profile photo, header image.
- [ ] **LinkedIn profile**: confirm photo + headline + about section match the brand. Headline: "AI integration specialist for SaaS founders · Anthropic + OpenAI + Next.js."

When all checked: you're ready to post.

### Week 1 — First post + LinkedIn launch

- [ ] **Day 1 (Monday morning UTC)**: post `posts/x-thread-polymarket.md` to X. Why this one first: the repo is already public, the metrics are real, and the audience that follows trader/quant Twitter overlaps with builder Twitter.
- [ ] **Day 1 (afternoon)**: post `posts/linkedin-launch.md` to LinkedIn.
- [ ] **Day 1 (evening)**: cross-post the X thread top tweet to Threads + Bluesky. (Use the `crosspost` skill if installed, otherwise manual copy.)
- [ ] **Day 2–7**: reply to 10 substantive AI/dev tweets per day. Substance wins: reply with code, links, specific corrections. No "great post" replies. Goal: get a 3-week-out signal where strangers' replies recognize your handle.

### Week 2 — Naviq post

- [ ] **Tuesday morning UTC**: post `posts/x-thread-naviq.md`.
- [ ] Cross-post.
- [ ] Continue reply discipline.
- [ ] Watch DMs. By end of week 2 you should have your first inbound questions (not necessarily clients yet, but conversation).

### Week 3 — samanTA post + first HN attempt

- [ ] **Tuesday**: post `posts/x-thread-samanta.md`.
- [ ] **First of next month**: post `posts/hn-freelancer-reply.md` as a top-level comment on the "Ask HN: Freelancer? Seeking Freelancer?" thread (posted at exactly 18:00 UTC on the 1st by user `whoishiring`).
- [ ] Continue reply discipline.

### Week 4 — Kenmore post + assess

- [ ] **Tuesday**: post `posts/x-thread-kenmore.md`. The Kenmore case is the "off-stack" credibility builder; some readers will appreciate the WordPress range.
- [ ] **Assess metrics**: how many followers? how many DMs? any inbound trial-sprint inquiries? Adjust cadence based on what's working.

### Week 5–8 — Convert + raise

- [ ] First trial sprint (likely lands here).
- [ ] After delivery: ask client for a 2-paragraph testimonial. Add to portfolio + LinkedIn featured + GitHub README.
- [ ] After 2 testimonials: raise prices to Phase 2 ($2,500 / $6,000 / $12,000). Edit `next-app/app/page.tsx` PRICING array.

---

## Operational rules

1. **Never lie about age.** If asked, "I'm 17, my contracts are co-signed by a parent guarantor." Most clients won't ask.
2. **Never lead with Claude Code in pitches.** It's not hidden; it's just not the lede. Lead with the work, the speed, the outcome. If a CTO asks about your dev workflow, be transparent.
3. **Never use Upwork or Fiverr.** Wrong audience, wrong price anchor, age-gated for some categories.
4. **Reply to founder questions in Discord with code, not opinions.** Anthropic Discord, Claude Code Discord, OpenAI dev forum, LangChain Discord. Solve their problem in the reply. The DM follows.
5. **Write postmortems for every project, even unpaid ones.** Each one compounds.

---

## Decision log

When you change strategy, log it here briefly.

- 2026-05-09: prices set to Phase 1 anchors ($1,500 / $3,500 / $7,500 + $1,000 trial sprint). Live site updated. GitHub + LinkedIn linked. Calendly pending setup.
- 2026-05-10: Calendly live at https://calendly.com/kan-ai/30min, wired across the site. Vercel deploy live at kan-portfolio-pricepepels-projects.vercel.app (auth-protection still on, needs disabling).

---

## Related

- [Portfolio README](README.md)
- [Pricing strategy doc (Obsidian)](Projects/Planned/portfolio-pricing-strategy.md)
- [PRODUCT.md](PRODUCT.md) — brand context
