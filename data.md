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

Captured **2026-10-08 (UTC+8)**. Stars move fast — treat as a snapshot, not a current value.

| Repository | ★ | Last push | Language | Licence |
|---|---|---|---|---|
| HKUDS/OpenHarness | 15,919 | 2026-06-04 | Python | MIT |
| CopilotKit/openmuse | 4,204 | 2026-10-08 | TypeScript | MIT |
| avirtual/clodex | 124 | 2026-10-08 | JavaScript | Apache-2.0 |
| JJenglert1/esp32-muse-agent | 21 | 2026-10-04 | Shell | Apache-2.0 |
| Wode44398/muse-bridge | 13 | 2026-10-07 | TypeScript | MIT |
| bex-co/muse-code-acp | 10 | 2026-10-08 | TypeScript | Apache-2.0 |
| wlsdks/muse-agent | 5 | 2026-09-03 | TypeScript | MIT |
| theglitcharchitect/muse-skills | 3 | 2026-09-21 | Python | MIT |
| jkxiongxin/muse-agent | 2 | 2026-07-30 | Python | — |

**Search volume:** GitHub search `muse agent in:name,description` returned **`total_count = 594`** (2026-10-08, re-checked twice). The overwhelming majority are unrelated to "Meta Muse, personal agent"; only the 9 relevant repositories are listed in the table above. The +1 over the first capture of that day is a single newly created repository, `kiragamingofficial95-cmd/nexus-ai` — re-running the query with a `user:kiragamingofficial95-cmd` filter returns exactly that one repository, which is how the increment was attributed. It is recorded as "new, not yet vetted" in [`resources.md`](resources.md) rather than listed here.

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

## 4. How to reproduce this data

```bash
# stars / licence (requires an authenticated gh)
gh api graphql -f query='query { r: repository(owner:"CopilotKit", name:"openmuse"){ stargazerCount pushedAt primaryLanguage{name} licenseInfo{spdxId} } }'

# related repository count
gh api -X GET search/repositories -f 'q=muse agent in:name,description' -f per_page=1 --jq '.total_count'
```

> Note on this host: both Meta domains and GitHub intermittently drop direct connections. Verifications here were retried through a proxy exit when a direct fetch failed — a failed fetch is **not** treated as a dead link or a content change.

Chronology: [`timeline.md`](timeline.md) · curated links: [`resources.md`](resources.md)
