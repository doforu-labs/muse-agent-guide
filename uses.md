# Uses & recipes — what people actually do with Muse

> **Read this first:** Muse is available in the **US + Canada only (18+)**, so nobody outside those markets — including this repository's maintainer — can open an account and test prompts live. Everything below is therefore **written to documented behaviour**, and each group is tagged with where it comes from: **[official]** (Meta's own examples), **[connector]** (from the small-business connector line), or **[pattern]** (a general agent-use pattern that follows from the design).
>
> 中文版 → [uses.zh-CN.md](uses.zh-CN.md)

---

## The five rules that make any personal agent work

1. **Ask for the outcome, not the steps.** *"Cut my subscription spend by $50/month"* beats *"open settings and cancel Netflix"* — the agent picks the path, and can find better options.
2. **Always ask for the plan before the action.** *"Draft a plan first, don't do anything yet."* Two minutes of review prevents most disasters, and it's how the approval gates are designed to be used.
3. **Name your constraint.** Budget, deadline, tone, "cheapest", "no new accounts". An agent without constraints optimises for the wrong thing.
4. **Use the approval gate as a feature, not a nuisance.** Decide once which actions must always come back to you: sending, paying, connecting a new app.
5. **Teach it once.** It keeps what you tell it — *"I never book before 10am"* pays off for months. This is also exactly what you should think about before sharing personal context (see the privacy section of the [README](README.md)).

---

## 1. Saving money 💸

| Recipe | How to ask | Notes |
|---|---|---|
| **Subscription audit** | "Find every recurring charge you can in my email, total them by month, and list what you'd cancel first — **don't cancel anything yet**." | [pattern] The review step is the point: you approve the list, it executes. |
| **Price-drop watch** | "Watch this item; if it drops below $X, tell me. If it's within 30 days of my purchase and covered, file the price-drop claim." | [official] Link's protections include price-drop refunds, and Muse is the first agent covered by them. |
| **Plan comparison** | "I pay $Y/month for Z. Find cheaper equivalents, list what I'd lose, then stop." | [pattern] Works because it can browse and read real plan pages. |
| **Renewal calendar** | "Build me a list of every renewal in the next 12 months with the date and amount." | [pattern] One-off, saves the annual "what did I forget" panic. |
| **"Cancel this for me"** | "Cancel this subscription. Show me the plan first, and ask me before you confirm." | [pattern] Retention flows are dark patterns; make it ask. |

## 2. Email & messages ✉️

| Recipe | How to ask | Notes |
|---|---|---|
| **Triage with rules** | "Every weekday at 8am: sort unread mail into (a) needs me today, (b) waiting on someone else, (c) FYI. Draft replies for (a), don't send." | [official] "sort your email" is Meta's own headline example. |
| **Follow-up chaser** | "Anything I sent that hasn't been answered in 5 days — draft a polite nudge for each." | [pattern] The "don't send" default keeps you in the loop. |
| **Meeting prep** | "For tomorrow's 10am, give me: who they are, our last three exchanges, and three questions to ask." | [pattern] Reads mail *and* the web. |
| **Unsubscribe sweep** | "List the newsletters I haven't opened this year and unsubscribe from the ones I approve." | [pattern] Good first task — low risk, immediate payoff. |
| **Inbox-zero policy** | "From now on, if I say 'archive this', move it and remember the sender's category." | [pattern] Shows the "it remembers" behaviour. |

## 3. Travel, bookings & food 🍽️

| Recipe | How to ask | Notes |
|---|---|---|
| **Restaurant booking with constraints** | "Book a table for 4 on Friday ~7pm, quiet enough to talk, within 20 minutes' walk, vegetarian options. Show me options first." | [official] "books reservations" is in Meta's own list. |
| **Disruption recovery** | "My flight was cancelled. Find the earliest alternative, tell me the cost difference, then wait for my go-ahead." | [pattern] Book-then-drop in real time is where agents shine. |
| **Trip skeleton** | "Build a 3-day Tokyo plan with one anchor per day, walking distance between stops, and a rain backup." | [pattern] Ask for anchors, not a minute-by-minute schedule. |
| **Recurring order** | "Every second Monday, order the usual coffee beans — ask if the price moved more than 10%." | [pattern] Standing orders are the highest-value automation. |
| **Menu adaptation** | "Take the recipe I saved and rebuild it for a dairy-free guest." | [official] Meta's example: recipe → adjusted dinner menu. |

## 4. Shopping 🛒

| Recipe | How to ask | Notes |
|---|---|---|
| **Constrained comparison** | "Compare these three. Rank by total cost including shipping to my address. Don't order." | [official] "shops for you" is Meta's own example. |
| **Restock radar** | "Tell me when the household items I buy most are running low (based on order history)." | [pattern] |
| **Gift research** | "Find three gifts for a 12-year-old who likes building games, under $40, arriving before the 20th." | [pattern] Constraints do the work. |
| **Return handling** | "Start the return for this order: print or email the label, tell me where to drop it." | [pattern] Boring, and exactly what you want an agent for. |
| **Checkout safety** | "You may pay up to $50 without asking; anything above, ask." | [pattern] Set the threshold once; Link's one-time-use card limits exposure. |

## 5. Calendar, health & home 📅

| Recipe | How to ask | Notes |
|---|---|---|
| **Fitness plan** | "Build a 3-day-a-week plan for the next 6 weeks around my calendar, adapting to what I actually completed." | [official] "builds fitness plans" is in Meta's list. |
| **Calendar defence** | "Protect 2 hours of focus time every morning; move what conflicts, tell me what you moved." | [official] "manages calendars". |
| **Family logistics** | "Collect every school deadline from my email and put one weekly summary on Sunday." | [pattern] |
| **Meal week** | "Turn my saved recipes into a 5-dinner plan + a single shopping list." | [official] |
| **Renewals & maintenance** | "Remind me about the car service every 6 months and rebook the same garage." | [pattern] |

## 6. Small business (the 15+ connector line) 🏢

These follow from the officially listed connectors — Asana, Box, Canva, Dropbox, Figma, Granola, HighLevel, Intuit QuickBooks, Klaviyo, Lovable, Notion, Shopify, Slack, Stripe, Zoom, plus Facebook / Instagram / Meta ads. **[connector]**

| Recipe | How to ask | Notes |
|---|---|---|
| **Weekly revenue recap** | "Every Monday 8am: last week's revenue from Stripe and Shopify, top 5 products, anything down >20% vs the week before. Post it to me here." | Starter metric, not a dashboard. |
| **Invoice chasing** | "Find invoices overdue >7 days in QuickBooks, draft a polite reminder for each, don't send." | Cash flow, zero risk with the draft-only default. |
| **Support triage** | "Summarise unread Slack threads in #support into: needs a human, blocked, closed. Draft answers for the middle group." | |
| **Ad watch** | "If a Meta ad's cost per result rises more than 30% week-over-week, tell me which one and what changed." | Needs ads access; agent reads the numbers so you don't. |
| **Pipeline nudge** | "Anything in HighLevel with no activity for 14 days — draft a re-engagement message." | |
| **Design hand-off** | "Turn the Figma comments from this week into a checklist in Notion." | |

## 7. Research & documents 📚

| Recipe | How to ask | Notes |
|---|---|---|
| **Cited briefing** | "Give me 10 sources on X, each with a one-line reason it's credible, and flag anything you couldn't verify." | [pattern] Ask for the flag — it's the honest-use habit. |
| **Comparison table** | "Compare A vs B across price / lock-in / limits, and mark which cells you're unsure about." | |
| **Document digest** | "Read this 80-page filing, give me 10 bullets and the three numbers that matter." | |
| **First-draft writing** | "Draft a 200-word reply to this thread in my voice — here are three emails I've written before." | Giving samples beats describing your tone. |

---

## Permission setup, in 5 minutes

Do this **before** your first real task:

1. **Decide the always-ask list:** sending, paying, connecting a new app. (Muse's defaults are already conservative — confirm rather than fight them.)
2. **Review per-connection permissions** in settings; disconnect anything you don't want read.
3. **Know the controls that exist:** instant disconnect, audit trail, VM file export, "forget".
4. **Understand the limits:** "forget" does not guarantee the original message disappears, and dossiers are built hourly about you *and the people you mention* (source: [TIME, 2026-10-06](https://time.com/article/2026/10/06/meta-muse-ai-agent-privacy/)). The honest framing: use it for tasks, not for secrets.
5. **Prefer the local equivalent for anything sensitive** — see [`build-your-own-agent.md`](build-your-own-agent.md).

## Things it will get wrong

- **Retention flows.** Cancellations are designed to be hard; always make it show you the plan.
- **Anything time-critical.** It's an agent with a queue, not a real-time system — verify deadlines yourself.
- **Numbers in summaries.** Ask for the source link for any figure you'll act on; treat prose summaries as leads, not facts.
- **Long, unconstrained tasks.** *"Organise my life"* produces mush. One goal, one loop, review, repeat.
- **Your private context.** There is no undo for something an always-on agent already knows — decide what you feed it on purpose.

---

**Contributing a recipe:** open an issue with *the goal, the exact wording you used, and what happened*. Recipes with real outcomes are worth ten theoretical ones.
