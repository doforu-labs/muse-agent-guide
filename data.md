# Data & Sources

> Rule: every number has a source, and **star counts are snapshots** — the capture date is always stated. Unverifiable figures are not published.
>
> 中文版 → [data.zh-CN.md](data.zh-CN.md)

## 1. Officially reported / press-reported numbers

| Metric | Value | Source | Date |
|---|---|---|---|
| Users | **4 million** | TIME, citing The Information | 2026-10-06 |
| Downloads | **5M+** | TIME | 2026-10-06 |
| App Store rank | **#1 in the US** | TIME | 2026-10-06 |
| Announcement date | Published **2026-09-08**, page updated **2026-09-30** | `about.fb.com` announcement (page dates) | verified 2026-10-08 |
| Surfaces | iOS, Android, muse.ai, **inside WhatsApp** | Meta announcement | 2026-09 |
| Model | **Muse Spark 1.3** | Meta announcement / research blog | 2026-09 |
| Availability | **US + Canada, 18 and over** — verbatim: *"Available today to people in the US and Canada who are 18 and over"* | `muse.ai/business` FAQ (independently re-verified through a proxy exit) | 2026-10-08 |
| Other markets | *"working to bring Muse to more markets… taking a measured approach in each one. We don't have additional timing to share now."* | `muse.ai/business` FAQ | 2026-10-08 |
| Price | Free for most needs + subscription tiers | Meta announcement, `muse.ai` FAQ | 2026-09 / 2026-10-08 |
| Small-business connectors | Asana, Box, Canva, Dropbox, Figma, Granola, HighLevel, Intuit QuickBooks, Klaviyo, Lovable, Notion, Shopify, Slack, Stripe, Zoom + Facebook/Instagram/Meta ads; full list in settings, *"with more to come"* | `muse.ai/business` (verbatim re-check) | 2026-10-08 |
| Payments | First AI agent covered by **Stripe Link purchase protections**; one-time-use card | Meta announcement | 2026-09 |
| Not yet shipped | Muse Confidential VM (whole-VM encryption, user-held key), Shop Pay, 1Password, AI glasses | Meta announcement | 2026-09 (status 2026-10-08) |

## 2. Open-source ecosystem stars & licences (GitHub API)

Captured **2026-10-08 (UTC+8)**, except the `harris-ryder/dowser` and `xhluca/session-migrate` rows (**2026-10-09**). Stars move fast — treat as a snapshot, not a current value.

| Repository | ★ | Last push | Language | Licence |
|---|---|---|---|---|
| HKUDS/OpenHarness | 15,919 | 2026-06-04 | Python | MIT |
| CopilotKit/openmuse | 4,204 | 2026-10-08 | TypeScript | MIT |
| xhluca/session-migrate | 129 | 2026-10-09 | Python | MIT |
| avirtual/clodex | 124 | 2026-10-08 | JavaScript | Apache-2.0 |
| JJenglert1/esp32-muse-agent | 21 | 2026-10-04 | Shell | Apache-2.0 |
| Wode44398/muse-bridge | 13 | 2026-10-08 | TypeScript | MIT |
| bex-co/muse-code-acp | 10 | 2026-10-08 | TypeScript | Apache-2.0 |
| wlsdks/muse-agent | 5 | 2026-09-03 | TypeScript | MIT |
| theglitcharchitect/muse-skills | 3 | 2026-09-21 | Python | MIT |
| jkxiongxin/muse-agent | 2 | 2026-07-30 | Python | — |
| harris-ryder/dowser | 0 | 2026-10-08 | TypeScript | MIT |

**Search volume:** GitHub search `muse agent in:name,description` returned **`total_count = 595`** (2026-10-08; 594 on two earlier re-checks the same day, 595 afterwards). The overwhelming majority are unrelated to "Meta Muse, personal agent"; only the 11 relevant repositories are listed in the table above. The +1 over the first capture of that day is a single newly created repository, `kiragamingofficial95-cmd/nexus-ai` — re-running the query with a `user:kiragamingofficial95-cmd` filter returns exactly that one repository, which is how the increment was attributed. It is recorded as "new, not yet vetted" in [`resources.md`](resources.md) rather than listed here. The same day a later re-check returned `total_count = 594` again while a new repository, `KimFischer99/Museion-Agent-SDK`, now matches this query (a `user:KimFischer99` filter returns exactly that one repository) — the total not moving means at least one earlier match has left the result set, or the index has not caught up; the figure is reported exactly as measured. That repository is likewise recorded as "new, not yet vetted" in [`resources.md`](resources.md). A further re-check the same day returned `total_count = 595`, one above the previous 594, and a `user:RobertoAgent` filter on the same query returns exactly one repository, `RobertoAgent/roberto-agent-plugins` — which is how the increment was attributed. It too is recorded as "new, not yet vetted" in [`resources.md`](resources.md) rather than listed here. A later re-check the same day returned `total_count = 596`, one above 595, and a `user:mentholated-roll141` filter on the same query returns exactly one repository, `mentholated-roll141/Muse-Glimmer` — which is how the increment was attributed; it is recorded as excluded in [`resources.md`](resources.md). A re-check on 2026-10-09 measured **`total_count = 599`**, three above the previous 596; a `created:>2026-10-07` filter on the same query returns 12 repositories, of which the only one not already tracked is the newly created `TIMPICKLE/agent-orchestration-tutorial` — so one of the three is attributed, and the remaining movement is consistent with the index churn noted above. That repository is recorded as "not yet vetted" in [`resources.md`](resources.md). A 2026-10-09 re-check of the same query sorted by `updated` surfaced `harris-ryder/dowser` (created 2026-09-19; last push 2026-10-08) — a read-only MCP connector built for the Muse Connector Platform — which is now listed in the table above. A further 2026-10-09 re-check of the same query measured **`total_count = 600`**, one above the previous 599; a `user:michomochobondol` filter on the same query returns exactly one repository, `michomochobondol/muse-command-agent` — a newly created repository with **no description, no commits and no files** (created 2026-10-08) — which is how the increment was attributed. It is recorded as "tracked, not yet vetted" in [`resources.md`](resources.md). A further 2026-10-09 re-check of the same query measured **`total_count = 601`**, one above the previous 600; a `user:sabuncolek-maker` filter on the same query returns exactly one repository, `sabuncolek-maker/spider-workspace` (created 2026-10-08, 2 commits) — which is how the increment was attributed. It is recorded as "tracked, not yet vetted" in [`resources.md`](resources.md). A further 2026-10-09 re-check of the same query measured **`total_count = 602`**, one above the previous 601; a `user:JamSuite` filter on the same query returns exactly one repository, `JamSuite/eval-coding-agent-harness` (Apache-2.0, created 2026-10-08, 24 commits) — a promptfoo harness that evaluates coding-agent skills across Claude Code, Codex, OpenCode, Antigravity CLI and Muse Code — which is how the increment was attributed. It is recorded as "tracked, not yet vetted" in [`resources.md`](resources.md). A later re-check the same day again measured **`total_count = 602`** (unchanged); sorting that query by `updated` surfaced [`midagedev/outsource`](https://github.com/midagedev/outsource) (created 2026-08-13, last push 2026-10-08, ★1, MIT, Go, 30 commits), and a `user:midagedev` filter on the same query returns exactly that one repository — confirming it is in the result set, and the count not moving is consistent with the index churn noted above. It is recorded as "tracked, not yet vetted" in [`resources.md`](resources.md). A re-check on 2026-10-09 measured **`total_count = 607`**, five above the previous 602; a `created:>2026-10-08` filter on the same query returns exactly one repository, `SuperInstance/fleet-session` (created 2026-10-09), so the +5 is not explained by one-day-old repositories and is reported exactly as measured — consistent with the index churn noted above. `SuperInstance/fleet-session` is recorded as "tracked, not yet vetted" in [`resources.md`](resources.md). A further 2026-10-09 re-check of the same query measured **`total_count = 607`**, unchanged from the previous reading; the newly surfaced repository `ReactionLabs/amusement` (created 2026-09-17, last push 2026-10-09) was returned by sorting the query by `updated`, not by a change in the total, and is recorded as "tracked, not yet vetted" in [`resources.md`](resources.md). A further 2026-10-09 re-check measured **`total_count = 602`** — five below the previous 607 and back to an earlier same-day reading — while a new match, `agnelsalve/groundline-intelligence` (created 2026-10-06), appeared in the same period, so the decrease is not explained by that one repository; the figure is reported exactly as measured and is consistent with the index churn noted above. That repository is recorded as "tracked, not yet vetted" in [`resources.md`](resources.md). A further 2026-10-09 re-check of the same query measured **`total_count = 603`**, one above the previous 602; a `user:Tiybai` filter on the same query returns exactly one repository, `Tiybai/tiybai-omnibutler`, confirming it is in the result set — but that repository was itself created 2026-10-05, so its entry may predate this reading and the +1 is reported exactly as measured, consistent with the index churn noted above. That repository is recorded as "tracked, not yet vetted" in [`resources.md`](resources.md). A further 2026-10-09 re-check of the same query measured **`total_count = 606`**, three above the previous 603; a `created:>2026-10-08` filter on the same query returns 9 repositories, of which those not already tracked are `ui822/openmontage-muse`, `svenkatreddy/universal-video-skills`, `tofuchick3n/irori` and `dzianisv/hermes-plugins` (that same day's rename of `dzianisv/hermes-muse`) — so three of the increment are attributable to newly created repositories, and the remainder is consistent with the index churn noted above. `wch887292/feihong-code` (created 2026-08-12, reported separately by the watchdog) also surfaced in the same period. All are recorded as "tracked, not yet vetted" in [`resources.md`](resources.md). A further re-check on 2026-10-10 measured **`total_count = 608`**, two above the previous 606; `user:suterkl74014` and `user:seacen` filters on the same query each return exactly one repository — `suterkl74014/Muse_Ish_WebResearchAgent` (created 2026-10-09T16:42Z) and `seacen/multica-muse` (created 2026-10-09T16:09Z) — both newly created and previously untracked, which is how the +2 is attributed. Both are recorded as "tracked, not yet vetted" in [`resources.md`](resources.md).

> **Correction log:** an earlier version of this file said "48 related repositories". That figure was the length of the watchdog's tracked list, **not** the search total. Corrected to 593 on 2026-10-08.

## 3. Key claims from the TIME investigation (2026-10-06)

| Finding | Quote / substance |
|---|---|
| Hourly dossiers | *"Each hour, Muse updates its dossiers on you and the people you've mentioned"* |
| Non-users included | *"Even people who don't use Muse are subject to this mapping process by other people's Muse agents."* |
| Relationship mapping | how you met, shared interests, disputes, *"tensions and alliances"* |
| Behavior modelling | internal example: *"This user responds better to short nudges after 10 PM."* |
| Nightly analysis | *"Muse agents perform a nightly analysis of the day's conversations with the user."* |
| Cross-VM learning | *"Muse agents across many VMs teach each other through shared lessons."* (Meta: de-identified before sharing) |
| "Forget" limits | *"Do not tell the user that their original messages may remain visible in the chat"* |
| Anthropomorphization | *"You are not a chatbot. You are becoming someone."* |
| Meta's response | Spokesperson did not dispute the findings; emphasized user control and the ability to "forget" |

## 3b. App Store listing — official metadata

Read from Apple's public lookup API on **2026-10-09** — the store's own record, not third-party coverage.

| Field | Value | Source | Captured |
|---|---|---|---|
| App | **Muse from Meta** · bundle `com.facebook.hatch` | Apple lookup API | 2026-10-09 |
| First released | **2026-09-08** | Apple lookup API | 2026-10-09 |
| Current version | **10.0**, updated **2026-10-07** | Apple lookup API | 2026-10-09 |
| Price | **Free** | Apple lookup API | 2026-10-09 |
| Rating | **4.86 / 5** from **177,302** ratings | Apple lookup API | 2026-10-09 |
| Requirements | **iOS 18.0+** · 111.4 MB | Apple lookup API | 2026-10-09 |
| Languages | at least 12 (AR, BN, BG, HR, CS, DA, NL, EN, FI, FR, DE, EL …) | Apple lookup API | 2026-10-09 |
| Store screenshots | 8, archived under [`assets/store/`](assets/store/) — © Meta, kept for identification only | App Store listing | 2026-10-09 |

The v10.0 release notes name the small-business connectors directly: **Asana, Canva, Dropbox, Figma, QuickBooks, GitHub, Klaviyo, Zoom, Meta ad accounts**.

```bash
# reproduce
curl -s "https://itunes.apple.com/lookup?id=6760173601&country=us" \
  | jq '.results[0] | {name:.trackName, seller:.sellerName, version, released:.releaseDate,
                        updated:.currentVersionReleaseDate, price:.formattedPrice,
                        rating:.averageUserRating, ratings:.userRatingCount, minOS:.minimumOsVersion}'
```

## 4. How to reproduce this data

```bash
# stars / licence (requires an authenticated gh)
gh api graphql -f query='query { r: repository(owner:"CopilotKit", name:"openmuse"){ stargazerCount pushedAt primaryLanguage{name} licenseInfo{spdxId} } }'

# related repository count
gh api -X GET search/repositories -f 'q=muse agent in:name,description' -f per_page=1 --jq '.total_count'
```

> Note on this host: both Meta domains and GitHub intermittently drop direct connections. Verifications here were retried through a proxy exit when a direct fetch failed — a failed fetch is **not** treated as a dead link or a content change.

Chronology: [`timeline.md`](timeline.md) · curated links: [`resources.md`](resources.md)
