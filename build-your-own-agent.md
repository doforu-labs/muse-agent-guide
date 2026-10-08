# Build your own Muse-style personal agent — a verified guide

> **What this is:** the practical path from "Muse is closed-source and US-only" to "I run something similar myself."
>
> **How it was written:** by reading the reference implementation's own repository — [`CopilotKit/openmuse`](https://github.com/CopilotKit/openmuse) at commit `1ac68f3` (2026-10-06, MIT), including its `README.md`, `docs/VERIFICATION.md` and `docs/FEATURES.md`. Where a step is quoted from the project it is marked as such. **We did not deploy it end-to-end on the hardware in this repo** — treat the setup section as documented-and-sourced, not as our smoke test.
>
> 中文版 → [build-your-own-agent.zh-CN.md](build-your-own-agent.zh-CN.md)

---

## 1. What Muse gives you, and what you have to rebuild

Muse is not one feature — it is five, and the interesting part is that four of them are not the model.

| Muse capability | What you must rebuild | Hard part |
|---|---|---|
| **Muse Secure VM** — an isolated Linux box with a full browser, per user | A container/VM per user + a browser it can actually drive | Multi-tenant isolation, and keeping a browser session alive and cleanable |
| **Approval gates** — asks before sending, paying, connecting | A policy layer between the model and the tools | Defining what is *never* automatic |
| **Long-running goals** — keeps working after you close the app | A task queue + worker that survives restarts | Idempotency (a retried payment is a disaster) |
| **Connected apps** — 15+ small-business connectors | OAuth + per-connector adapters | Credential storage and revocation |
| **Muse Spark 1.3** — the model | Any capable tool-calling model, or a local one | Model quality — but this is the *least* differentiating piece |

The honest conclusion: **the model is the commodity, the "computer" and the permission layer are the product.**

---

## 2. Reference implementation: openmuse (MIT)

- **What it is:** a self-hostable personal-agent app that brings its own agent computer — a persistent Chromium plus an optional Linux workspace, with a server, a task worker and a browser worker.
- **Status, in the project's own words:** *"Alpha, for self-hosting and building on. Open-ended reasoning, live Google accounts, and CopilotKit Rich Threads require their own configuration."*
- **Licence:** MIT. **Stack:** TypeScript monorepo (pnpm workspaces) + Expo for mobile.

## 3. Setup (as documented by the project)

**Requirements, verbatim:** *"Node 24 LTS, pnpm 11.19.0, and a CopilotKit Intelligence project key. The local sample app needs no model, Google account, or Docker."*

```bash
git clone https://github.com/CopilotKit/OpenMuse.git openmuse
cd openmuse
pnpm install --frozen-lockfile

npx copilotkit@latest login          # CopilotKit Intelligence key
npx copilotkit@latest project select

pnpm dev                             # sample app (no model / account / Docker needed)
pnpm dev:web                         # web client
```

Optional pieces, each documented as its own step:

```bash
# browser worker (the agent's real browser)
pnpm --dir apps/worker exec playwright install chromium
pnpm dev:browser

# the containerised "computer"
docker build -t openmuse-computer:local apps/computer
```

## 4. Architecture map: their repo → the concept

| Concept | In the repo | Notes |
|---|---|---|
| API / orchestration | `apps/server` | Production: `pnpm build:server` + `pnpm start` |
| Long-running tasks | `apps/worker` | Production: `pnpm start:worker` |
| The agent's computer | `apps/computer` | Container image built from this app |
| Clients | `apps/mobile` (+ web) | Expo → web / iOS / Android bundles |
| Domain logic & connectors | `packages/{domain,backends,integrations}` | Where you would add your own connectors |
| Infrastructure | `infra/`, `render.yaml` | Deployment scaffolding |

**Scaling detail worth stealing** (from the project README): for a separate task worker, both processes share `DATABASE_URL`, secrets and `DATA_DIR`, and the API sets `TASK_WORKER_ENABLED=false`; **PGlite cannot be opened by separate processes**, and workers coordinate through SQL leases. Run **one API instance**.

## 5. What is actually verified (so you know what you're standing on)

From the project's `docs/VERIFICATION.md`, dated **2026-09-16**:

- **154 automated tests pass**, with no failures or skips, across the API, task engine, integrations, computer lifecycle, Docker runner and conversation queue.
- **A real Chromium lifecycle test passes** — navigation, read, failed-profile cleanup, same-UUID reopen, text truncation, storage behaviour.
- **A real Docker "computer" smoke test passes** in an isolated context.
- Expo exports web, iOS and Android bundles — *"these exports do not produce signed native binaries"*.
- A recorded **native iPhone acceptance flow**: ask for Hacker News highlights → fully terminate and relaunch the app → summarise CopilotKit → **Take control** of the browser.

That is a rare thing in this space: a project that tells you exactly what has and has not been proven.

## 6. Pitfalls before you start

1. **Alpha means alpha.** Version pins (Node 24 LTS, pnpm 11.19.0) are not decorative — a frozen lockfile is used for a reason.
2. **PGlite is single-process.** If you want a separate worker, you need a real database server.
3. **Three installable surfaces, three failure modes:** browser worker (Playwright Chromium), computer (Docker), mobile (Expo/exports). Start with the sample app, then add them one at a time.
4. **You own the secrets now.** Muse's pitch is that it holds credentials so the agent can use them without reading them; self-hosting means you are the one who must get that boundary right.
5. **Roadmap, not shipped** (per the project): automatic reservations and payments, voice, device push, health/bank/social connectors, generated executable tools.

## 7. What you give up by leaving Muse

| You lose | You gain |
|---|---|
| A managed VM you never have to patch | Full control over what the agent may do |
| WhatsApp as the front door | No hourly dossiers on you and your contacts |
| 15+ ready connectors, maintained | Your data stays on your own hardware |
| Stripe Link purchase protections | No per-seat subscription |
| Someone else's uptime | **You** are the uptime |

## 8. Decision checklist (do this before writing code)

1. **Approval boundary:** list the actions that must *never* be automatic. Payments, sending, and adding a new connection are Muse's defaults — start there.
2. **Data location:** local-first, or a cloud VM? Until a user-held-key VM exists in your stack, self-hosting *is* the privacy ceiling.
3. **Front door:** mobile app, web, or a chat platform. The sample app exists precisely so you can answer this cheaply.
4. **Scope discipline:** pick *one* goal-loop to automate first (Muse's own docs use the school-trip email and Hacker News as examples). A personal agent that does three things reliably beats one that does thirty badly.

## 9. Alternatives, briefly

- **[HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness)** (★15.9k, MIT, Python) — if you want the *harness* abstraction rather than an app.
- **Bring-your-own-agent:** an existing coding agent (Claude Code, Codex) + a browser tool + a scheduler gets you surprisingly far, and is the least code — but you will be building the isolation and permission layers yourself, badly, at first.

---

**Sources:** openmuse repository at `1ac68f3` — `README.md`, `docs/VERIFICATION.md`, `docs/FEATURES.md`, `ROADMAP.md` (read 2026-10-08); Muse facts from [`data.md`](data.md).
**Corrections welcome:** if a step here is wrong or outdated, open an issue — this page is only as good as its sources.
