# Timeline

> Every entry is dated and attributed. Items marked **(unconfirmed)** could not be verified against a primary source.
>
> 中文版 → [timeline.zh-CN.md](timeline.zh-CN.md)

## 2026

### September

| Date | Event | Source |
|---|---|---|
| **2026-09-08** | **Meta announces Muse** — "the world's first personal AI agent built for everyone"; Muse Secure VM, Muse Spark 1.3, Stripe Link protections, US rollout | `about.fb.com` announcement (published date on the page) |
| 2026-09-23 | App Store listing referenced with a `09232026` UTM parameter — evidence that the store entry went live around this date | App Store URL parameters **(medium confidence)** |
| **2026-09-29** | **"The Future Is for Everyone: Muse for Small Business"** — business connectors, US + Canada availability | Meta Newsroom related post |
| 2026-09-30 | The main announcement page carries a "last updated" date of 2026-09-30 | `about.fb.com` page metadata |

### October

| Date | Event | Source |
|---|---|---|
| **2026-10-06** | **TIME publishes its privacy investigation** — hourly dossiers, non-users mapped through other people's agents, nightly analysis, cross-VM shared lessons, the limits of "forget". Reported then: **4M users, 5M+ downloads, #1 on the US App Store**; Meta's spokesperson did not dispute the findings | TIME / The Information |
| 2026-10-08 | **This repository's first capture.** Stars, availability and connector list independently re-verified (including through a proxy exit, since Meta domains and GitHub intermittently drop direct connections from this host) | This repo |
| 2026-10-08 | **The small-business announcement is updated**: its own page metadata now reports `dateModified` 2026-10-08T15:52:57Z (published 2026-09-29), and the launch announcement's "Related News" card switched from `September 29, 2026 / September 29, 2026` to `September 29, 2026 / October 8, 2026`. The main announcement's own "last updated" is still 2026-09-30. Body-level edits were not diffed (no earlier copy of that page) | `about.fb.com` page metadata (read 2026-10-09) |
| **2026-10-12** | **Meta announces the Muse Wonder series — Muse Wonder and Muse Wonder Full**, "our most capable models to date", built on the groundwork of Muse Spark: state-of-the-art on personal and professional agentic tasks, expert domains (**law, finance, health**) and frontier coding, plus two new behaviours — **Active Memory** (important context carried across conversations and retrieved when relevant) and **Active Focus** (keeps working a hard goal, tries other approaches, recovers from errors, checks in before acting). Availability on day one: **Muse Wonder through the Meta Model API and Muse Code; Muse Wonder Full for Muse Code subscribers**; Muse Wonder "will soon power more of Muse, rolling out first to subscribers". Safety work is framed by Meta's Superintelligence Scaling Framework, with a fuller safety report "available soon"; the research blog adds that the series was trained at Meta's gigawatt-scale Prometheus data center | `about.fb.com` announcement (published 2026-10-12T17:08:05Z, modified 17:16:59Z) + `research.meta.ai/blog/muse-wonder` (2026-10-12) |
| 2026-10-12 | The launch announcement's "Recent News" sidebar rotated: the Muse Wonder item was added and "Expanding Instagram's School Partnership Program to Help Teens Stay Informed" dropped off. The launch page's own dates did not move (published 2026-09-08, updated 2026-09-30) — its page hash changed only because of that sidebar | `about.fb.com` launch page diffed against the Internet Archive capture of 2026-10-12T14:16Z |
| 2026-10-13 | The launch page's "Recent News" sidebar rotated **again** — "Leading Tech Companies Join Global Law Enforcement in Major Crackdown on West African Scam Networks" added, "Find Your Community With Forum, a Dedicated App for Facebook Groups" dropped. The page's own dates and `wordCount` 861 did not move, so its hash changed with the sidebar alone | `about.fb.com` launch page diffed against this host's own copy of 2026-10-13 08:25 local (similarity 0.99326) |

## Officially "coming soon" as of 2026-10-08

| Item | Status |
|---|---|
| **Muse Confidential VM** — whole-VM encryption with a user-held key ("not even Meta can access it") | Announced for later in 2026, **not shipped** |
| Shop Pay support | Coming soon |
| 1Password support | Coming soon |
| AI glasses integration | Coming soon |
| Muse in markets beyond the US + Canada | No timeline (*"measured approach"*) |

## Why this timeline matters

Two dates carry the real story: **2026-09-29** (Muse opens to small businesses with 15+ connectors — the monetization push) and **2026-10-06** (TIME documents the data practices behind it). The capability and the data collection shipped together, and the privacy-hardened VM is still a promise.

---

Data tables and sources: [`data.md`](data.md) · curated links: [`resources.md`](resources.md)
