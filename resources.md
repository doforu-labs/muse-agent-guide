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
| [Muse for Small Business (announcement)](https://about.fb.com/news/2026/09/introducing-muse-small-business/) | The business expansion: 15+ connectors, US + Canada availability (published 2026-09-29, last updated 2026-10-08) |
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
| [mahdi-salmanzade/meta-muse-teardown](https://github.com/mahdi-salmanzade/meta-muse-teardown) (GitHub, ★3, no licence) | Independent static teardown of the **Muse 3.0 macOS** build (`com.meta.endo`), plus Android and iOS samples: which connectors can reach iMessage, WhatsApp, Photos, mail, screen capture and computer control, with dated audit documents, evidence excerpts and reproduction scripts. Static analysis only — the author notes no native uploads were observed and the decrypted iOS instructions stay unauthenticated |
| [tenex-labs/muse-personal-agent-start-kit](https://github.com/tenex-labs/muse-personal-agent-start-kit) (GitHub, ★0, no licence, created 2026-10-08) | A beginner-oriented starter kit from **JJ Englert / Tenex** (organisation created 2025-06; its `daily-brief` repo has ★53): a first win ("choose a movie tonight"), then setup of memory, SOUL, connections and Feed, ten paste-ready everyday workflows (wardrobe, movies, food, health, calendar, birthdays, weekend, shopping, forms, travel), routine templates, and a contributing guide. The written guide works offline; the playable-demo page at `https://tenex-labs.github.io/muse-personal-agent-start-kit/` answered 200 on 2026-10-08, while the `…-start-kit-safe` path its README links answered 404 that day. Zero stars and no licence file — a community guide, not a vetted tool |

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
| [Wode44398/muse-bridge](https://github.com/Wode44398/muse-bridge) | 13 | One message deploys Claude Code onto your Muse VM; the repo now also ships *dimensio*, a multi-model agent workspace |
| [bex-co/muse-code-acp](https://github.com/bex-co/muse-code-acp) | 10 | **Unofficial** ACP adapter — drive Muse Code from Zed, VS Code and other Agent Client Protocol editors (npm `@bex-co/muse-code-acp`) |
| [theglitcharchitect/muse-skills](https://github.com/theglitcharchitect/muse-skills) | 3 | 23 Muse agent skills + a decision layer |
| [wlsdks/muse-agent](https://github.com/wlsdks/muse-agent) | 5 | Personal agent that keeps context across sessions |
| [jkxiongxin/muse-agent](https://github.com/jkxiongxin/muse-agent) | 2 | Chinese knowledge-base assistant |
| [JJenglert1/esp32-muse-agent](https://github.com/JJenglert1/esp32-muse-agent) | 21 | ESP32 hardware experiments |
| [harris-ryder/dowser](https://github.com/harris-ryder/dowser) | 0 | Read-only MCP connector built for the [Muse Connector Platform](https://muse.ai/platform): six tools (class-action settlements, CPSC recalls, unused card credits, expiring points, birthday freebies, "what's new"), each also a REST endpoint; MIT · TypeScript · created 2026-09-19, last push 2026-10-08 |

### Tracked, not yet vetted

A newly created repository that matches the ecosystem search but has no track record yet. Listed so the watchdog's "new repo" reports have an answer — **not** a recommendation.

- [kiragamingofficial95-cmd/nexus-ai](https://github.com/kiragamingofficial95-cmd/nexus-ai) — ★0 · MIT · Python, created 2026-10-08. A Windows desktop assistant (CustomTkinter): an "agent web-scan → structured Markdown report" task, reader-view browsing, PC control behind confirmation dialogs; its README routes BYOK chat to `meta/muse-spark-1.3`. The relevance is at the *model* level (it calls Muse Spark through an OpenAI-compatible API), not the Muse-agent level, the account publishes many small projects, and the repository is one day old — so it stays out of the table above until it has a track record.
- [KimFischer99/Museion-Agent-SDK](https://github.com/KimFischer99/Museion-Agent-SDK) — ★0 · Python, created 2026-10-07, last push 2026-10-08. Its README (v0.1.2) says it is "developed based on Muse": a *proactive* agent runtime — scheduled reminders, opt-in news research (hourly Bing News RSS), persistent interests, and delivery to a local inbox or your own HTTPS webhook; the Python package is `proactive-sdk`, and analysis backends can be a model API, Pi or Hermes. Licensing is stated only in the README — original SDK code MIT, Muse-derived skill references keep their source notices, third-party redistribution flagged as not fully verified (GitHub detects no standard licence file). Zero stars, zero forks, one day old, from an account with 33 public repositories — tracked here, not in the table above, until it has a track record.
- [RobertoAgent/roberto-agent-plugins](https://github.com/RobertoAgent/roberto-agent-plugins) — ★0 · Apache-2.0 · JavaScript, created 2026-10-08. A plugin collection that connects other agents to Roberto, a personal AI agent (`robertoagent.com`; on 2026-10-08 that site and the MCP authorization-server well-known URL both answered 200): a ChatGPT / Codex package, a Cursor / Grok Bot plugin, and a `meta-muse/` connector that documents the calls an agent may make against Muse with Read / Write / Sensitive-write classes. The relevance is that it treats Muse as one of its integration targets rather than being built on Muse — the organisation is a month old with 2 public repositories, this repository has a single commit, and every package points at the same hosted server. Tracked here, not in the table above, until it has a track record.
- [zorahrel/agent-harness](https://github.com/zorahrel/agent-harness) — ★0 · MIT · JavaScript, created 2026-08-10, last push 2026-10-08, 0 forks. Renamed from `claude-harness`: a set of hand-written instruction files (skills in `SKILL.md` format, rules, workflows) for coding agents that run unattended for hours, listing **Muse** alongside Claude Code, Codex, OpenClaw and jcode; the README is Italian-first with an English section. The Muse-specific parts are concrete: Muse reads the skills from `~/.agents/skills/`; `RULES.md` treats Muse's `request_user_input` as the way an agent should ask its user to choose; and `docs/menus-that-ask.md` records a month-long measurement of messages sent to agents, noting that Muse offered that menu in one of the author's last six sessions while a non-interactive `muse exec` run leaves nobody to answer. The relevance is at the *harness* level — Muse Code is one of its supported agents, not something it is built on. Zero stars, zero forks, none of its 12 GitHub topics mention Muse; tracked here, not in the table above, until it has a track record.
- [TIMPICKLE/agent-orchestration-tutorial](https://github.com/TIMPICKLE/agent-orchestration-tutorial) — ★0 · no licence file · created 2026-10-08, last push 2026-10-08. A Chinese-language course for beginners on agent orchestration: its description lists 32 short lessons, real project scenarios, **Meta Muse** and Multica case studies, and offline exercises. The Muse angle is that Muse appears as a worked case study of orchestrating agents, not that the project builds on Muse Code; zero stars and one day old — tracked here, not in the table above, until it has a track record.
- [michomochobondol/muse-command-agent](https://github.com/michomochobondol/muse-command-agent) — ★0 · no description · no licence, created 2026-10-08. An **empty repository**: the GitHub API returns no contents, no branches and no commits, so there is neither a README nor a description to evaluate. Only the name matches the ecosystem search — nothing is verifiable about its relevance yet. Listed so the watchdog's "new repo" report has an answer; it will be re-checked if it gains content.
- [sabuncolek-maker/spider-workspace](https://github.com/sabuncolek-maker/spider-workspace) — ★0 · no licence · created 2026-10-08, 2 commits. An Indonesian-language **telemetry dashboard** for "agent Muse" activity: a static GitHub Pages front end (`index.html` / `app.js` / `style.css`) that polls `state.json` every 7 seconds and moves a "spider" across a node map, along the chain `muse.db → Bridge → state.json → git commit/push → GitHub Pages`. Its README documents the state→node mapping, a stale-snapshot rule (3-minute threshold) and an explicit "observer effect" rule for the `db` tool (badged SYSTEM; the spider holds position rather than guessing). Re relevance to *Meta Muse*: **not verifiable from the repository** — it never names Meta, and its `muse.db` / "SPIDER Bridge" naming may be a personal agent of the author's own. Zero stars, no licence file; the account was created 2026-01-24 and its 5 public repositories are all self-published in October 2026. Tracked here, not in the table above, until it has a track record.
- [JamSuite/eval-coding-agent-harness](https://github.com/JamSuite/eval-coding-agent-harness) — ★0 · Apache-2.0 · created 2026-10-08, 24 commits, one contributor (`dorsma`), no topics. A **promptfoo test harness** for skill authors: it "tells a skill author whether an edit to a `SKILL.md` changed what a coding agent writes" by running the agent repeatedly under conditions that differ only in the skill body, then reporting the change with its uncertainty and with the other explanations ruled out. Hosts: Claude Code, Codex, OpenCode, Antigravity CLI and **Muse Code** (engine: promptfoo). Muse-specific and concrete: Muse Code is one of the hosts under test, and the README records Muse Code 1.4.4 installed in its dev container — Meta's product page lists macOS and Windows builds only, yet the installer succeeds on Linux, and `muse login` is listed as the login step. Status is *bootstrapping* (`PROMPTS.md` holds the build plan). The relevance is at the *harness* level — Muse Code is evaluated, not built on — the organisation `JamSuite` (created 2025-02-25) has 3 public repositories and no followers, and the repository is a day old; tracked here, not in the table above, until it has a track record.

### Excluded on purpose

A keyword match is not a recommendation. Repositories whose description/README are essentially an **invite or affiliate link**, that point at a binary download which contradicts their own description, or whose *name alone* matches the search while the README has no Muse content, are left out — they are promotions, unrelated projects or worse, not ecosystem projects.

- Checked 2026-10-08 with the GitHub API: [`Git-FED/museAi-Chat`](https://github.com/Git-FED/museAi-Chat) — ★2, 1 fork, licence *NOASSERTION* (i.e. no licence), topics `do not touch`; the description and README lead with an invite code (`5F2V31` → `muse.ai/join`), and the same code is stamped across ~20 other repositories on that account. Not listed here; the watchdog re-reports it as "new", so this note is the answer.

- Checked 2026-10-08 with the GitHub API: [`mentholated-roll141/Muse-Glimmer`](https://github.com/mentholated-roll141/Muse-Glimmer) — ★1, 1 fork, **no releases**, licence *NOASSERTION* (the `LICENSE` file is MIT, the README claims Apache-2.0). The README sells itself as "Meta's 30B Muse Glimmer" running on your own machine, but its download button points at `assets/v1.4.zip` — **487 KB**, where the same page says the archive is "several gigabytes" and the model 15-20 GB — and its troubleshooting section tells users to *"Bypass antivirus temporarily if needed"*. The model name is real (OpenRouter lists `meta/muse-glimmer-30b`, Hugging Face `meta-models/Muse-Glimmer-30B`); this repository is not a build of it. Not listed here; the watchdog re-reports it as "new", so this note is the answer.

### Topics & infrastructure

- GitHub topics: [`muse-code`](https://github.com/topics/muse-code) · [`muse-spark`](https://github.com/topics/muse-spark)
- Model access: [Muse Spark 1.3 on OpenRouter](https://openrouter.ai/meta/muse-spark-1.3) — model ids `meta/muse-spark-1.3` and `meta/muse-spark-1.3-contributor`; the same list carries 1.1, 1.2 and `meta/muse-glimmer-30b`. Read off OpenRouter's public model list and the model page (HTTP 200), 2026-10-08.
- Agent infrastructure: [CopilotKit](https://github.com/CopilotKit) · the AG-UI protocol (used by openmuse for its event stream)
- Keyword false positive, checked 2026-10-08 with the GitHub API: [`MVReddy/MuseAgentTaskRepo`](https://github.com/MVReddy/MuseAgentTaskRepo) — ★0 · Python · no licence, created 2026-09-27, last push 2026-10-08. The repository name matches the ecosystem search, but its README is "Daily Python experiments: sample Google Ask agents, improved every day" — a generic agent-practice repo with no Muse content. Not listed as an ecosystem project; noted so the watchdog's "new repo" report has an answer.

## 4. Building one yourself — a recommended path

1. Read **openmuse**'s architecture (server + worker + persistent Chromium) to see how an "agent computer" is actually built;
2. Compare with **OpenHarness** for how the harness layer is abstracted;
3. Decide **your approval boundary**: which actions must never happen without a human (payments, sending, new connections). Muse turned this into a product-level default — it is the part people underestimate;
4. Decide **where the data lives**: local or cloud VM. Until Confidential VM ships, self-hosting is the higher-privacy ceiling.

## 5. The English/Chinese gap

As of 2026-10-08, systematic English-language coverage of Muse is dominated by press articles, and **systematic Chinese coverage is close to nonexistent** — mostly short-form video walkthroughs and scattered posts. What is missing in both languages is the combination this repository attempts: *official facts + the controversy + an ecosystem list + reproducible sources*.

---

**Inclusion criteria:** directly relevant to Muse / personal agents, and reachable. Referral / affiliate promotion repos are excluded even when they match the keyword. Found a dead link or a better resource? Open an issue.
