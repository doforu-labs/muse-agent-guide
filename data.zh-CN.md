# 数据与来源

> 规则:每个数字必须有来源;**星数随抓取时间变化**,以标注时间为准。无法核实的数字不入表。

## 一、Muse 官方与媒体报道的数字

| 指标 | 数值 | 来源 | 抓取/发布日期 |
|---|---|---|---|
| 用户数 | **400 万**(4 million users) | TIME 援引 The Information | 2026-10-06 |
| 下载量 | **500 万+** | TIME | 2026-10-06 |
| App Store 排名 | **美国区第 1** | TIME | 2026-10-06 |
| 官方公告日期 | 公告发布 **2026-09-08**(页面标注 last updated 2026-09-30) | `about.fb.com` 公告页元数据 | 2026-10-08 抓取 |
| 发布形态 | iOS / Android / muse.ai;**WhatsApp 内可用** | Meta 官方公告 | 2026-09 |
| 底层模型 | **Muse Spark 1.3** | Meta 官方公告 | 2026-09 |
| 可用地区 | **美国 + 加拿大**(18 岁以上) | `muse.ai/business` FAQ 原话 "Available today to people in the US and Canada who are 18 and over"(2026-10-08 经营者代理独立复核) | 2026-10-08 抓取 |
| 其它市场 | 官方:"we're taking a measured approach in each market",无时间表 | `muse.ai/business` FAQ | 2026-10-08 抓取 |
| 定价 | 基础免费 + 订阅档(官方:免费版满足多数人) | Meta 官方公告 / `muse.ai` FAQ | 2026-09 / 2026-10-08 |
| 小企业连接器 | Asana、Box、Canva、Dropbox、Figma、Granola、HighLevel、Intuit QuickBooks、Klaviyo、Lovable、Notion、Shopify、Slack、Stripe、Zoom,外加 Facebook / Instagram / Meta ads;完整清单在设置中查看,官方称"with more to come" | [`muse.ai/business`](https://muse.ai/business) 逐字复核 | 2026-10-08 抓取 |
| 支付保护 | 首个被 **Stripe Link 购买保护**覆盖的 AI agent | Meta 官方公告 | 2026-09 |
| 待上线 | Muse Confidential VM(整机加密,密钥仅用户持有)、Shop Pay、1Password | Meta 官方公告 | 2026-09 |
| Muse Code 发布渠道 | 公开渠道 `api.meta.ai/muse-code/channels/muse-stable` 在本机直连返回 **HTTP 200**(未走代理),版本 **1.4.6-R6000.1**(`state: public`、urgency `none`、`min_version` 为 null);其 manifest 列出 **7 个产物** —— `x86_macos` 375,752,688 B、`aarch64_macos` 355,369,136 B、`x86_linux`(`muse-x86-linux`)**360,958,168 B**、`aarch64_linux` **323,098,728 B**、通用 macOS `.pkg` 278,908,807 B、`x86_windows` 463,719,160 B、`aarch64_windows` 425,084,664 B —— 各带自己的 sha256,另有一个 `msp_schema_fingerprint` | Meta 官方渠道与 manifest 文件,本机直连抓取 | 2026-10-12 |

## 二、开源生态星数(GitHub API 抓取)

抓取时间:**2026-10-10**(UTC+8)—— 当天用一次 GraphQL 查询重读全部行。星数变化快,请以实时值为准。

| 仓库 | ★ | 最后推送 | 语言 | 许可 |
|---|---|---|---|---|
| HKUDS/OpenHarness | 15,955 | 2026-06-04 | Python | MIT |
| CopilotKit/openmuse | 4,461 | 2026-10-10 | TypeScript | MIT |
| xhluca/session-migrate | 130 | 2026-10-09 | Python | MIT |
| avirtual/clodex | 124 | 2026-10-10 | JavaScript | Apache-2.0 |
| JJenglert1/esp32-muse-agent | 23 | 2026-10-04 | Shell | Apache-2.0 |
| Wode44398/muse-bridge | 14 | 2026-10-08 | TypeScript | MIT |
| bex-co/muse-code-acp | 10 | 2026-10-09 | TypeScript | Apache-2.0 |
| wlsdks/muse-agent | 5 | 2026-09-03 | TypeScript | MIT |
| theglitcharchitect/muse-skills | 3 | 2026-09-21 | Python | MIT |
| jkxiongxin/muse-agent | 2 | 2026-07-30 | Python | — |
| harris-ryder/dowser | 0 | 2026-10-09 | TypeScript | MIT |

> **2026-10-12 复核 —— 仅 `CopilotKit/openmuse`**(GitHub REST API,本机直连读取两次):★ **4,708**(2026-10-10 为 4,461)、**640 forks**、`pushed_at` **2026-10-12T05:35:29Z**。但这次推送**没有动默认分支** —— `main` 仍指向 **`1ac68f39`**(2026-10-06),也就是 [`build-your-own-agent.md`](build-your-own-agent.md) 通篇依据的那个 commit。仓库现有 **39 个分支**(主要是 `renovate/*` 依赖 PR 与 `jerel/*` 功能分支),而 `/releases` 返回**空列表 —— 从未发布过 release**。实用结论:该仓库 `pushed_at` 变新只代表分支活动,不代表 `main` 上有新代码。同日读数:18 watchers、51 个未关闭 issue。

> **2026-10-12 当日稍晚复核 —— 新增一条生态条目 `czg86389-hub/muse2api`**(GitHub GraphQL API,本机直连):★ **382**、**108 fork**、**35 次提交**、**5 位贡献者**(作者本人加四位)、**从未发布 release**、**MIT**、Python,创建于 **2026-09-25T14:22:55Z**、最后推送 **2026-10-11T02:48:52Z**。它**不在**上面那份 2026-10-10 快照里 —— 仓库从 2026-09-25 就存在,只是本轮复核才浮现,所以这行记在这里而不是上表。同期读取其 README 得到的形态:把 muse.ai 网页端逆向封装成 OpenAI 兼容 API(对话含 `/v1/responses`、文生图与图生图、5 / 6 / 8 / 10 秒视频与首帧图生视频),底层用无头 Chromium 走 DevTools 协议加多账号池与 48 小时自动续期,FastAPI + Docker 交付,另配一个导出账号的 Chrome 扩展。**本机没有调用过该服务**,因此这些接口来自项目自述,不是实测到的线上能力面。上表仍为 **2026-10-10** 快照,本轮未重读。

> **2026-10-12 当日稍晚复核 —— 看门狗报的新仓库 `pablosanzo/musejailbreak`**(GitHub REST API,本机直连):★ **0**、**MIT**、GitHub 把 Python 计为主语言、0 fork、0 watcher、0 未关闭 issue、无 topics、递归树 **122 个路径**,创建于 **2026-10-12T11:52:11Z**,全部内容在 **11:53:12Z** 一次推送 —— **28 次提交**,全部署名 “Crystal”,时间落在当天 10:05:16Z 至 11:53:09Z 之间。**未进上表**:只有几个小时、单一作者、★0。以上读数来自仓库自身的目录树与 README;同轮的 `releases` 与 `languages` 两次请求失败 —— 本机直连 `api.github.com` 在该轮中途掉线 —— 因此不声明 release 数量。该仓库按“新出现、未验证”记在 [`resources.zh-CN.md`](resources.zh-CN.md)。上表仍为 **2026-10-10** 快照,本轮未重读。

**相关仓库样本量**:GitHub 搜索 `muse agent in:name,description` 返回 `total_count = 595`(2026-10-08;当天前两次复核为 594,之后为 595);绝大多数与"Meta Muse 个人 agent"无关,本仓库只精挑上表 11 个入表。相比当天首次抓取 +1 的,是一条刚建的仓库 `kiragamingofficial95-cmd/nexus-ai` —— 用 `user:kiragamingofficial95-cmd` 过滤重跑该搜索,恰好只返回它一个,增量由此归因;它按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md) 里,未进上表。此前版本写的"48 个"来自看门狗的跟踪名单长度,不是搜索总量,已更正。同日稍后复核,`total_count` 仍为 594,但同一查询新命中一条 `KimFischer99/Museion-Agent-SDK`(用 `user:KimFischer99` 过滤恰好只返回它一个)—— 总量没动,说明至少有一条旧命中离开了结果集,或索引尚未跟上;数字如实照录。该仓库同样按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。同日再复核,`total_count` 变为 595(较此前 594 +1),用 `user:RobertoAgent` 过滤同一查询恰好只返回一条 `RobertoAgent/roberto-agent-plugins`,增量由此归因;该仓库同样按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md),未进上表。 同日稍后复查返回 `total_count = 596`,比 595 多 1;同一查询加 `user:mentholated-roll141` 过滤正好返回一个仓库 `mentholated-roll141/Muse-Glimmer`,增量据此归属;该仓库已在 [`resources.md`](resources.md) 记为排除项。 2026-10-09 复核,`total_count = 599`,比此前 596 多 3;同一查询加 `created:>2026-10-07` 过滤返回 12 条,其中唯一尚未跟踪的是新建的 `TIMPICKLE/agent-orchestration-tutorial` —— 三条增量里据此归因一条,其余变化与上文所述索引波动一致。该仓库按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。2026-10-09 稍后复核同一查询,`total_count = 600`,比此前 599 多 1;同一查询加 `user:michomochobondol` 过滤恰好只返回一条 `michomochobondol/muse-command-agent` —— 一条刚建的仓库(**无描述、无提交、无文件**,创建于 2026-10-08)—— 增量由此归因。该仓库按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。2026-10-09 稍后复核同一查询,`total_count = 601`,比此前 600 多 1;同一查询加 `user:sabuncolek-maker` 过滤恰好只返回一条 `sabuncolek-maker/spider-workspace`(创建于 2026-10-08,2 次提交)—— 增量由此归因。该仓库按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。2026-10-09 稍后复核同一查询,`total_count = 602`,比此前 601 多 1;同一查询加 `user:JamSuite` 过滤恰好只返回一条 `JamSuite/eval-coding-agent-harness`(Apache-2.0,创建于 2026-10-08,24 次提交)—— 一个跨 Claude Code、Codex、OpenCode、Antigravity CLI 与 Muse Code 评测编码 agent skill 的 promptfoo 测试台 —— 增量由此归因。该仓库按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。2026-10-09 稍后再复核同一查询,`total_count` 仍为 602(未变);将同一查询按 `updated` 排序,浮现出一个 `midagedev/outsource`(创建于 2026-08-13、最后推送 2026-10-08,★1、MIT、Go、30 次提交),而同一查询加 `user:midagedev` 过滤恰好只返回它一个 —— 说明它确实在结果集里,总量不动与上文所述索引波动一致。该仓库按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。 2026-10-09 再复核同一查询,`total_count = 607`,比此前 602 多 5;同一查询加 `created:>2026-10-08` 过滤恰好只返回 1 条 `SuperInstance/fleet-session`（创建于 2026-10-09）—— 说明这 +5 并非「一天前新建」的仓库所致,数字如实记录,与上文所述索引波动一致。该仓库按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。 2026-10-09 再复核同一查询,`total_count` 仍为 607(与上次读数一致);新浮现的仓库 `ReactionLabs/amusement`(创建于 2026-09-17、最后推送 2026-10-09)是靠把同一查询按 `updated` 排序返回的,并非总量变化所致,该仓库按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。 2026-10-09 再复核同一查询，`total_count = 606`，比此前 603 多 3；同一查询加 `created:>2026-10-08` 过滤返回 9 条，其中尚未跟踪的是 `ui822/openmontage-muse`、`svenkatreddy/universal-video-skills`、`tofuchick3n/irori` 与 `dzianisv/hermes-plugins`（即同日由 `dzianisv/hermes-muse` 改名而来）—— 三条增量中至少三条可归因于新建仓库，其余与上文所述索引波动一致。同期还浮现 `wch887292/feihong-code`（创建于 2026-08-12，由看门狗单独报出）。以上均按“新出现、未验证”记在 [`resources.zh-CN.md`](resources.zh-CN.md)。 2026-10-10 复核同一查询，`total_count = 608`，比此前 606 多 2；同一查询加 `user:suterkl74014` 与 `user:seacen` 过滤各恰好只返回一条 —— `suterkl74014/Muse_Ish_WebResearchAgent`（创建于 2026-10-09T16:42Z）与 `seacen/multica-muse`（创建于 2026-10-09T16:09Z）—— 均为新建且此前未跟踪的仓库，+2 由此归因。两者均按“新出现、未验证”记在 [`resources.zh-CN.md`](resources.zh-CN.md)。2026-10-10 复核同一查询，`total_count = 609`，比此前 608 多 1；同一查询加 `user:vgeshel` 过滤恰好只返回一条 —— `vgeshel/prose-check`（创建于 2026-10-09T14:32Z）—— 为新建且此前未跟踪的仓库，+1 由此归因。该仓库按“新出现、未验证”记在 [`resources.zh-CN.md`](resources.zh-CN.md)。 2026-10-10 复核同一查询，`total_count = 608`，比此前 609 少 1 —— 数字如实照录，与上文所述索引波动一致。该轮看门狗报出的三条新建仓库均已用 API 核实并给出结论：`BlueSkyz-Labs/muse-auto-allow` 是原生面向 Muse 的工具（一个自动点 Muse 审批卡的 Chrome MV3 扩展），按“新出现、未验证”记在 [`resources.zh-CN.md`](resources.zh-CN.md)；而 `cfought-code/museum-ecommerce-agents` 与 `half-pace/Multimodal-Agentic-AI-Framework-for-Virtual-Reality-Museum-Navigation` 只是命中 “museum” 的误报、无任何 Muse 内容，已在该文件记为不收。 2026-10-10 再复核同一查询，`total_count = 611`，比此前 608 多 3；同一查询加 `user:dbellizzi` 过滤恰好只返回一条 —— `dbellizzi/agentlog`（创建于 2026-10-09T16:46Z）—— 为新建且此前未跟踪的仓库，三条增量中据此归因一条，其余 +2 与上文所述索引波动一致（同一查询加 `created:>2026-10-09` 过滤返回 0 条，说明变化并非「一天前新建」的仓库所致）。该仓库按“新出现、未验证”记在 [`resources.zh-CN.md`](resources.zh-CN.md)。同日再复核，`total_count = 611`，与上次读数一致；同一查询加 `user:blakailabs` 过滤恰好只返回一条 —— `blakailabs/wally-muse-agent-`（创建于 2026-10-09T23:27Z、最后推送 2026-10-10T01:46Z）—— 说明这条新建仓库确在结果集内而总量未动；`created:>2026-10-09` 过滤仍返回 0 条。数字如实照录，与上文所述索引波动一致。该仓库按“新出现、未验证”记在 [`resources.zh-CN.md`](resources.zh-CN.md)。

> **2026-10-12 当日稍晚复核 —— 看门狗报的新仓库 `jcdavis131/makers-on-muse`**(GitHub REST API **与**项目自己的线上站点,两者都由本机直连读取 —— 香港代理本轮依旧拒绝连接,所以这里没有任何数据来自它):★ **0**、**代码 MIT + Playbook 内容 CC BY 4.0**(`LICENSE` 与 `LICENSE-CONTENT`;API 两者都不认,报 *NOASSERTION*)、主语言 **HTML**、创建于 **2026-09-27T18:43:07Z**、最后推送 **2026-10-12T12:21:07Z**、**22 次提交**、**两位贡献者**(`jcdavis131`、`camml210`)、0 fork、0 未关闭 issue、**0 个 release**、无 topic、递归树 **211 个文件**(109 个 `skills/*.html`)。**未进上表**:★0、两周新、只跑完一周。它是本清单里第一条这类条目 —— 不是又一个桥或适配器,而是一个**给 Muse 用户跑的线上评分测试包**:四个计分关卡加一个不计分的 L5、自报输入、加权效率分,排行榜在当周结束后才开。同一轮从本机实测,因为 README 是声明不是测量:站点首页返回 **HTTP 200**(标题 *"Makers on Muse — Test your Muse, share what works"*),`/api/health` 返回 `{"ok":true,"storage":"missing","time":"2026-10-12T12:21:54.665Z"}`,`/api/leaderboard?week=1` 返回 `{"error":"storage unavailable"}` —— 也就是项目自己说的**尚未接存储**(因而不落任何提交数据)得到了实测确认,而不是照抄。第一季第一周(2026-10-05 06:00 CT → 2026-10-11 23:59 CT)刚刚结束;存储缺失期间无从得知提交条数。该仓库按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。上表仍为 **2026-10-10** 快照,本轮未重读。

> **2026-10-12 当日稍晚复核 —— 看门狗报的新仓库 `odiumuniverse/herdr-agent-usage`**（GitHub REST API，本机直连；香港代理本轮依旧拒绝连接，所以这里没有任何数据来自它）：★ **0**、**MIT**、**Rust**、0 fork、0 watcher、0 未关闭 issue、唯一 topic `herdr-plugin`、homepage **`herdr.dev/plugins/`**、创建于 **2026-09-21T13:36:14Z**、最后推送 **2026-10-12T12:50:47Z**、**294 次提交**、**20 位贡献者**（contributors 接口计入匿名地址后的条目数）、**从未发布 release**。它**进了** [`resources.zh-CN.md`](resources.zh-CN.md) 的生态表，理由是本清单里第一条盯 **Muse Code 自身额度窗口**的条目：其 README 的采集器表格把 Muse Code 的来源写作 *"CLI subscription endpoint; 5h and 7d"*（CLI 订阅端点，5 小时与 7 天窗口），读取自当前 CLI 账号登录、会话取自 *"Muse's session lock (Linux)"*，前提是 `muse login`（*"API-key logins have no subscription quota"*），另有 `MUSE_AUTH_PATH` 与 macOS 钥匙串授权路径（`refresh --provider muse --keychain-approve`）。以上均为项目自述，**不是**本机的测量 —— 本轮没有安装、没有运行，因此不声明任何额度数值。同一轮读数里还带出两条血统事实，也就是该行附带的保留意见：这个仓库是**导入的镜像**（`fork: false`），头提交为 *"Merge upstream levi-qiao/main a8408399 via dtbehnke mirror"*，而它指名的上游 `levi-qiao/herdr-agent-usage` 现在返回 **HTTP 404**，账号 `levi-qiao` 本身也 404；目前存活的副本是 [`dtbehnke/herdr-agent-usage`](https://github.com/dtbehnke/herdr-agent-usage)（真实 fork，★0 · MIT · 创建于 2026-10-06、最后推送 2026-10-07）与本镜像。同名仓库里最出名的是 [`senna-lang/herdr-agent-usage`](https://github.com/senna-lang/herdr-agent-usage)（★48 · MIT · Go · 创建于 2026-07-16、最后推送 2026-10-11、12 位贡献者、最新 release **v0.5.20**），但它**不覆盖 Muse** —— 对其 README 不区分大小写搜 `muse` 零命中。上表仍为 **2026-10-10** 快照，本轮未重读。

> **2026-10-12 当日稍晚复核 —— 看门狗报的新仓库 `thoitiettxl-cyber/pi-muse`**（GitHub REST API 与仓库自身的原始文件，两者都由本机直连读取；香港代理本轮仍答 *\"connection refused\"*，所以这里没有任何数据来自它）：★ **0**、**MIT**、**TypeScript**、0 fork、0 未关闭 issue、无 homepage、创建于 **2026-10-12T13:16:52Z**、最后推送 **13:17:08Z** —— **2 次提交**、**一位贡献者**（`thoitiettxl-cyber`）、**从未发布 release**、递归树 **15 个路径**、topics 为 `ai-agent` · `meta-ai` · `muse` · `openclaw` · `pi-coding-agent`。**未进上表**：两次提交、一位作者、只有几小时。按它自己 README 的说法，它是一个**给 Muse 用的 Pi 编码 agent provider**，卖点是让 agent 可见 —— 模型清单实时取自 Muse gateway（*"no fake OpenAI aliases"*，举例 `auto/auto` 与 `ipnext/avocado-5.16-v0`），Muse 每次 `exec` / `read` / `write` / `memory_search` / `web_search` 都带着状态与报告镜像进 Pi 的对话记录 —— 实现方式是给已入表的 [`czg86389-hub/muse2api`](https://github.com/czg86389-hub/muse2api)（上表 ★382）补四个端点（`/pi/v1/models`、SSE 的 `/pi/v1/turn`、`/pi/v1/fs/list`、`/pi/v1/fs/read`）：拷入 `backend/pi_native.py` 并打上 **7 行**的 `backend/muse2api-app.patch`，前置条件照其原话是 *"Pi ≥ 1.1, Node ≥ 20, a running muse2api with at least one muse.ai account imported"*。**本轮没有安装、没有运行**，因此这里不把任何模型名、工具输出或延迟当作测量结果 —— 那些连同项目自己写明的局限（*"Muse only sends tool summaries"*、*"Muse runs the tools, not Pi"*、*"one browser, one turn at a time"*、*"no usage/cost numbers"*）都是它的自述。该仓库按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。上表仍为 **2026-10-10** 快照，本轮未重读。

> **2026-10-13 复核（本地时间，UTC+8）—— 看门狗报的新仓库 `ChristopheZhao/MuseCraft`**（GitHub REST API，以及仓库自身的 `README.md` 与 `.env.example`，两者都由本机浏览器会话读取 —— 本轮直连 `api.github.com` 返回 **EOF**、香港代理答 *"connection refused"*，所以这里没有任何数据来自这两条路）：★ **1**、**MIT**、声明的主动语言 **Python**、0 fork、0 关注、0 未关闭 issue、无 topic、无 homepage、非 fork、7,122 KB、默认分支 `main`、创建于 **2026-07-01T00:41:23Z**、最后推送 **2026-10-12T16:03:59Z** —— 也就是本轮读取前 3 分钟，这正是看门狗这轮报出它的原因；而仓库本身已经存在五个月。它**不进**上表，而且它不是生态项目：这是名称撞车。它的 GitHub 描述是 *"multi-agent video generation platform"*，内容也确实如此 —— 一个中文的**短视频创作多智能体应用**：一套可观测的 MAS runtime，其 control plane 以 session / node / attempt / gate / decision 作为运行时事实源，PostgreSQL 存状态，Redis/Celery 只承担传输，FastAPI 提供读写接口，Next.js 前端只消费 read-model 投影（而不是从队列状态推断进度）。它的描述、`README.md` 与 env 模板里都没有 Meta、没有 Meta 的 Muse、也没有任何 Muse 集成 —— 两个文件里不区分大小写搜 `meta` 与 `llama` 均**零命中** —— 而 `.env.example` 里每一处 "muse" 都是它自己的品牌（数据库用户 `musecraft`、数据库名 `short_video_maker`、营销图文件名）。它配置的 provider 是中文与媒体服务：`VOICE_PRIMARY_PROVIDER=aliyun`、智谱（`IMAGE_GENERATION_PROVIDER=zhipu`、`GLM_*`）、DeepSeek、`VIDEO_GENERATION_PROVIDER=cogvideox-3`，以及 Runway、Pika、MiniMax、豆包。作者是做通用多智能体与视频工具的开发者 —— 同一账号还有 FlockMind、HydraMind、Meetkat、video-maker-workflow、image-gen-mcp-server、ChaGPT-API-Call（★112）—— 所以这个仓库属于那条线，不属于 Meta 的。已按"排除"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。上表仍为 **2026-10-10** 快照，本轮未重读。

> **2026-10-13 复核（本地时间，UTC+8）—— 看门狗报的新仓库 `chethana3036-muse/Echo`**（GitHub REST API，以及仓库自身的 `README.md`、`.env.example` 与根目录清单，全部由本机读取 —— 本轮直连 `api.github.com` 前几次返回 **EOF**、重试后才通，香港代理则再次答 *connection refused*，所以这里没有任何数据来自它）：★ **0**、**无许可** —— API 不报许可、根目录也没有 `LICENSE` —— GitHub 统计的主动语言是 **TypeScript**，而描述里写的是 Python；0 fork、0 关注、0 未关闭 issue、无 topic、无 homepage、非 fork、仓库体积 **0 KB**、默认分支 `main`、创建于 **2026-10-12T16:33:34Z**、最后推送 **2026-10-12T16:33:57Z** —— 整个仓库在创建后 **23 秒**内一次推完。它**不进**上表，而且它不是生态项目：这是名称撞车。它的描述自称一个 AI 驱动的数字孪生仿真平台（多智能体 AI + 实时可视化），README 标题是 ECHO — Predictive Future Simulation Engine：本质是一个 what-if 模拟器 —— 带干扰度 / 基建压力 / 经济损耗 / 公共安全指标的时序时间线引擎、蒙特卡洛概率浏览器、可交互的一 / 二 / 三级因果连锁图、在指定时间戳上分叉现实的 Intervention Lab、Markdown 报告导出与语音简报 —— 交付形态是 Vite + React 网页应用。它的描述、`README.md` 与 `.env.example` 里都没有 Meta、也没有 Meta 的 Muse —— env 模板只要两个变量 `GEMINI_API_KEY` 与 `APP_URL`，并写明 AI Studio 会在运行时自动注入，也就是说它是一个 Google AI Studio 小程序。它与生态搜索唯一的联系是账号名 `chethana3036-muse`（用户账号创建于 2026-03-31，10 个公开仓库，0 关注者）：muse 这个词长在账号名上，而不是长在项目里。已按「排除」记在 [`resources.zh-CN.md`](resources.zh-CN.md)。上表仍为 **2026-10-10** 快照，本轮未重读。

## 三、TIME 调查中的关键事实(2026-10-06)

| 事实 | 原文要点 |
|---|---|
| 档案频率 | "Each hour, Muse updates its dossiers on you and the people you've mentioned" |
| 覆盖非用户 | "Even people who don't use Muse are subject to this mapping process by other people's Muse agents." |
| 关联强度 | 记录如何认识、共同兴趣、争执、"tensions and alliances" |
| 行为建模 | 内部示例:"This user responds better to short nudges after 10 PM." |
| 夜间分析 | "Muse agents perform a nightly analysis of the day's conversations with the user." |
| 跨 VM 学习 | "Muse agents across many VMs teach each other through shared lessons."(官方称分享前去标识化) |
| 遗忘边界 | "Do not tell the user that their original messages may remain visible in the chat" |
| 人格化设定 | "You are not a chatbot. You are becoming someone." |
| Meta 回应 | 发言人未否认调查结论,称用户始终可控、可要求 forget |

## 三点五、App Store 官方商店信息

2026-10-09 从 Apple 公开查询接口读取 —— 这是商店自己的记录,不是第三方报道。

| 字段 | 值 | 来源 | 抓取日期 |
|---|---|---|---|
| App | **Muse from Meta** · bundle `com.facebook.hatch` | Apple lookup API | 2026-10-09 |
| 首发 | **2026-09-08** | Apple lookup API | 2026-10-09 |
| 当前版本 | **10.0**,更新于 **2026-10-07** | Apple lookup API | 2026-10-09 |
| 价格 | **免费** | Apple lookup API | 2026-10-09 |
| 评分 | **4.86 / 5**,共 **177,302** 个评分 | Apple lookup API | 2026-10-09 |
| 要求 | **iOS 18.0+** · 111.4 MB | Apple lookup API | 2026-10-09 |
| 语言 | 至少 12 种(AR、BN、BG、HR、CS、DA、NL、EN、FI、FR、DE、EL……) | Apple lookup API | 2026-10-09 |
| 商店截图 | 8 张,存档于 [`assets/store/`](assets/store/) —— © Meta,仅供辨识用途 | App Store 商品页 | 2026-10-09 |

v10.0 的更新说明直接点名了面向小企业的连接器:**Asana、Canva、Dropbox、Figma、QuickBooks、GitHub、Klaviyo、Zoom、Meta 广告账户**。

复现命令见英文版 `data.md` 同一节。

## 四、本仓库数据的复现方式

```bash
# 星数 / 许可(需已登录 gh)
gh api graphql -f query='query { r: repository(owner:"CopilotKit", name:"openmuse"){ stargazerCount pushedAt primaryLanguage{name} licenseInfo{spdxId} } }'

# 搜索相关仓库数量
gh api -X GET search/repositories -f 'q=muse agent in:name,description' -f per_page=1 --jq '.total_count'
```

更新时间线见 [`timeline.md`](timeline.md);本文件由后台任务定期核验并更新。
