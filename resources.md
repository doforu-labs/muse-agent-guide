# Resource List

> Categorised links for **Muse** (Meta's personal AI agent). Types are labelled; star counts are the 2026-10-08 snapshot.
> A background job re-checks link liveness periodically — when a fetch fails from this host it retries through a proxy rather than reporting a dead link.
>
> 中文版 → [resources.zh-CN.md](resources.zh-CN.md)

## 1. Primary sources (official)

| Resource | What it gives you |
|---|---|
| [Introducing Muse (announcement)](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/) | The launch: positioning, Secure VM, payment and privacy design (published 2026-09-08, updated 2026-09-30) |
| [ai.meta.com/muse](https://ai.meta.com/muse/) | Product page: features, FAQ, download links |
| [muse.ai](https://muse.ai/) | Web entry point |
| [muse.ai/business](https://muse.ai/business) | Small-business line: 15+ connectors and the availability FAQ (US + Canada, 18+) |
| `introducing.muse.ai` | "How We Designed Muse" — design rationale |
| `security.muse.ai` | "How We Built Safety Into Muse" — security and privacy engineering |
| [Muse Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3) | The underlying model, built for agentic work |
| [Muse Code](https://dev.meta.ai/products/muse-code) | Programming-workflow sibling product |
| [Permissions help page](https://www.meta.com/help/1385290430137537/) | Per-connection permission settings |
| [Link purchase protections](https://support.link.com/questions/what-s-covered-with-protections) | What is actually covered: lost/damaged items, price drops, return fees |
| [App Store](https://apps.apple.com/us/app/muse-from-meta/id6760173601) · [Google Play](https://play.google.com/store/apps/details?id=com.facebook.aura) | Clients |

## 2. Investigation & in-depth coverage

| Resource | Why it is worth reading |
|---|---|
| [TIME — "Meta's Muse AI Agent Is Building a Dossier On You"](https://time.com/article/2026/10/06/meta-muse-ai-agent-privacy/) | **The one to read.** Based on Muse's internal instructions: hourly dossiers, nightly analysis, the edges of "forget" |
| The Information — Muse passes 3M weekly actives | Primary source for the growth numbers TIME cites |
| Meta's own FAQ (on the product pages) | The official definitions that separate *agent*, *assistant*, *chatbot* |
| [Ginger Labs — Muse capabilities and how to use it](https://gingerlabs.ai/blog/meta-muse-agent-capabilities-and-how-to-use-it) | Third-party walkthrough |
| [Manager Today (Chinese) — what Muse is and how to use it](https://www.managertoday.com.tw/articles/view/72980) | 5 official use cases + free/paid tiers |
| YouTube — "Meta Muse full walkthrough" (Chinese) | Registration through real usage, filmed |
| YouTube — "10 practical Muse use cases" | Social posting, furniture sourcing, restaurant booking |

## 3. Open-source ecosystem

### Closest open equivalents

- **[CopilotKit/openmuse](https://github.com/CopilotKit/openmuse)** ★4.2k · MIT · TypeScript
  A personal-agent app that **brings its own agent computer**: persistent Chromium plus an optional Linux workspace; its own server / task worker / browser worker; works with any agent harness; iOS, Android and web clients. Read `docs/VERIFICATION.md` (what has been proven) and `ROADMAP.md` (what has not: graphical desktop, automatic checkout).
- **[HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness)** ★15.9k · MIT · Python
  Open agent harness with a built-in personal agent ("Ohmo").

### Tools built around Muse itself

| Project | ★ | What it does |
|---|---|---|
| [avirtual/clodex](https://github.com/avirtual/clodex) | 124 | Manage fleets of Claude Code / Codex / Muse agents |
| [Wode44398/muse-bridge](https://github.com/Wode44398/muse-bridge) | 13 | One message deploys Claude Code onto your Muse VM |
| [bex-co/muse-code-acp](https://github.com/bex-co/muse-code-acp) | 10 | **Unofficial** ACP adapter — drive Muse Code from Zed, VS Code and other Agent Client Protocol editors (npm `@bex-co/muse-code-acp`) |
| [theglitcharchitect/muse-skills](https://github.com/theglitcharchitect/muse-skills) | 3 | 23 Muse agent skills + a decision layer |
| [wlsdks/muse-agent](https://github.com/wlsdks/muse-agent) | 5 | Personal agent that keeps context across sessions |
| [jkxiongxin/muse-agent](https://github.com/jkxiongxin/muse-agent) | 2 | Chinese knowledge-base assistant |
| [JJenglert1/esp32-muse-agent](https://github.com/JJenglert1/esp32-muse-agent) | 21 | ESP32 hardware experiments |

### Tracked, not yet vetted

A newly created repository that matches the ecosystem search but has no track record yet. Listed so the watchdog's "new repo" reports have an answer — **not** a recommendation.

- [kiragamingofficial95-cmd/nexus-ai](https://github.com/kiragamingofficial95-cmd/nexus-ai) — ★0 · MIT · Python, created 2026-10-08. A Windows desktop assistant (CustomTkinter): an "agent web-scan → structured Markdown report" task, reader-view browsing, PC control behind confirmation dialogs; its README routes BYOK chat to `meta/muse-spark-1.3`. The relevance is at the *model* level (it calls Muse Spark through an OpenAI-compatible API), not the Muse-agent level, the account publishes many small projects, and the repository is one day old — so it stays out of the table above until it has a track record.

### Excluded on purpose

A keyword match is not a recommendation. Repositories whose description/README are essentially an **invite or affiliate link** are left out — they are promotions, not ecosystem projects.

- Checked 2026-10-08 with the GitHub API: [`Git-FED/museAi-Chat`](https://github.com/Git-FED/museAi-Chat) — ★2, 1 fork, licence *NOASSERTION* (i.e. no licence), topics `do not touch`; the description and README lead with an invite code (`5F2V31` → `muse.ai/join`), and the same code is stamped across ~20 other repositories on that account. Not listed here; the watchdog re-reports it as "new", so this note is the answer.

### Topics & infrastructure

- GitHub topics: [`muse-code`](https://github.com/topics/muse-code) · [`muse-spark`](https://github.com/topics/muse-spark)
- Model access: [Muse Spark 1.3 on OpenRouter](https://openrouter.ai/meta/muse-spark-1.3) — model ids `meta/muse-spark-1.3` and `meta/muse-spark-1.3-contributor`; the same list carries 1.1, 1.2 and `meta/muse-glimmer-30b`. Read off OpenRouter's public model list and the model page (HTTP 200), 2026-10-08.
- Agent infrastructure: [CopilotKit](https://github.com/CopilotKit) · the AG-UI protocol (used by openmuse for its event stream)

## 4. Building one yourself — a recommended path

1. Read **openmuse**'s architecture (server + worker + persistent Chromium) to see how an "agent computer" is actually built;
2. Compare with **OpenHarness** for how the harness layer is abstracted;
3. Decide **your approval boundary**: which actions must never happen without a human (payments, sending, new connections). Muse turned this into a product-level default — it is the part people underestimate;
4. Decide **where the data lives**: local or cloud VM. Until Confidential VM ships, self-hosting is the higher-privacy ceiling.

## 5. The English/Chinese gap

As of 2026-10-08, systematic English-language coverage of Muse is dominated by press articles, and **systematic Chinese coverage is close to nonexistent** — mostly short-form video walkthroughs and scattered posts. What is missing in both languages is the combination this repository attempts: *official facts + the controversy + an ecosystem list + reproducible sources*.

---

**Inclusion criteria:** directly relevant to Muse / personal agents, and reachable. Referral / affiliate promotion repos are excluded even when they match the keyword. Found a dead link or a better resource? Open an issue.
