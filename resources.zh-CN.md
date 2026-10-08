# 资源大全

> 分类整理,Muse(个人 AI Agent)相关。每条注明类型;星数为 2026-10-08 抓取值。
> 链接由后台任务定期抽查存活(见仓库更新日志)。

## 1. 官方一手来源

| 资源 | 说明 |
|---|---|
| [Introducing Muse(公告)](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/) | 发布通稿,含产品定位、Secure VM、支付与隐私设计 |
| [ai.meta.com/muse](https://ai.meta.com/muse/) | 官方产品页:功能、FAQ、下载入口 |
| [muse.ai](https://muse.ai/) | 网页端入口 |
| `introducing.muse.ai` | 官方《How We Designed Muse》:设计思路 |
| `security.muse.ai` | 官方《How We Built Safety Into Muse》:安全与隐私工程 |
| [Muse Spark 1.3 模型博客](https://research.meta.ai/blog/introducing-muse-spark-1-3) | 底层模型说明(为 agentic 任务打造) |
| [Muse Code](https://dev.meta.ai/products/muse-code) | 面向编程工作流的同系列产品 |
| [权限设置帮助页](https://www.meta.com/help/1385290430137537/) | 逐项调整每个连接 App 的权限 |
| [Link 购买保护范围](https://support.link.com/questions/what-s-covered-with-protections) | 官方说明:丢件/损坏、降价补差、免退货费 |
| [muse.ai/business](https://muse.ai/business) | 官方《Muse for Small Business》页:连接器清单 + 可用地区/定价 FAQ(2026-10-08 核验 200) |
| [Muse for Small Business 公告](https://about.fb.com/news/2026/09/introducing-muse-small-business/) | 2026-09-29 官方博客:给已有 Muse 加"new skills and connectors" |
| [连接器合作申请](https://muse.ai/platform) | 官方:合作伙伴接入入口 |
| [自定义连接器说明](https://www.meta.com/help/artificial-intelligence/1687253048996149/) | 官方帮助中心:接入尚未支持的服务 |
| [订阅方案](https://www.meta.com/help/subscriptions/1021145227643680/) | 官方帮助中心:免费额度与订阅档 |
| [App Store](https://apps.apple.com/us/app/muse-from-meta/id6760173601) · [Google Play](https://play.google.com/store/apps/details?id=com.facebook.aura) | 客户端下载 |

## 2. 一手调查与深度报道

| 资源 | 为什么值得读 |
|---|---|
| [TIME:Muse Is Building a Dossier On You](https://time.com/article/2026/10/06/meta-muse-ai-agent-privacy/) | **最该读的一篇**。基于 Muse 内部指令的分析:每小时人物档案、夜间分析、"忘记"的边界 |
| The Information:Muse 周活突破 300 万 | 用户增长数据的一手信源(TIME 文中引用) |
| Meta 官方 FAQ(产品页内) | agent / assistant / chatbot 的定义区分,官方原话 |
| [Ginger Labs:Muse 能力与用法](https://gingerlabs.ai/blog/meta-muse-agent-capabilities-and-how-to-use-it) | 第三方上手整理 |
| [Manager Today:Muse 是什么、怎么用](https://www.managertoday.com.tw/articles/view/72980) | 繁体中文:5 个官方应用情境 + 免费额度与付费方案 |
| YouTube:《自带云端电脑的 AI Agent 来袭!Meta Muse 详细注册与实测》 | 中文实测流程(注册到实际用) |
| YouTube:《10 個實用玩法一次看》 | 实测玩法集合(社交发布、找家具、订餐厅等) |
| [mahdi-salmanzade/meta-muse-teardown](https://github.com/mahdi-salmanzade/meta-muse-teardown)(GitHub,★3,无 licence) | 对 **Muse 3.0 macOS** 包(`com.meta.endo`)的独立静态拆解,另含 Android / iOS 样本:哪些连接器能触达 iMessage、WhatsApp、照片、邮件、屏幕捕获与电脑控制,按日期归档审计文档、证据摘录与复现脚本。仅为静态分析——作者注明未观察到原生上传、解密后的 iOS 指令未经认证 |
| [tenex-labs/muse-personal-agent-start-kit](https://github.com/tenex-labs/muse-personal-agent-start-kit)(GitHub,★0,无 licence,创建于 2026-10-08) | **JJ Englert / Tenex** 做的面向新手的 Muse 起步包(该组织创建于 2025-06,其 `daily-brief` 仓库 ★53):先用"今晚看什么电影"拿到第一次成功,再配 memory、SOUL、连接器与 Feed,附十个可直接粘贴的日常 workflow(穿搭、影视、吃饭、健康、日历、生日、周末、购物、表单、出行)、routine 模板与贡献指南。文字版可离线读;带演示的网页版 `https://tenex-labs.github.io/muse-personal-agent-start-kit/` 于 2026-10-08 实测 200,而 README 内链的 `…-start-kit-safe` 路径同日 404。★0、无 licence 文件 —— 属社区指南,不是经核验的工具 |

## 3. 开源生态(可直接跑的同类实现)

### 最接近 Muse 的开源替代

- **[CopilotKit/openmuse](https://github.com/CopilotKit/openmuse)** ★4.2k · MIT · TypeScript
  个人 agent 应用,**自带 agent 电脑**:持久 Chromium + 可选 Linux 工作区;自建 server / task worker / browser worker;支持任意 agent harness;有 iOS / Android / Web 三端(React Native)。仓库内有 `docs/VERIFICATION.md`(什么被验证过)和 `ROADMAP.md`(什么还没做:图形桌面、自动结账)。
- **[HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness)** ★15.9k · Python
  开源 agent harness,内置个人 agent(Ohmo)。

### 生态周边(围绕 Muse 本身的工具)

| 项目 | ★ | 用途 |
|---|---|---|
| [avirtual/clodex](https://github.com/avirtual/clodex) | 124 | 统一管理 Claude Code / Codex / Muse 的 agent 集群 |
| [Wode44398/muse-bridge](https://github.com/Wode44398/muse-bridge) | 13 | 一条消息把 Claude Code 部署到你的 Muse VM;该仓库现在还包含 *dimensio* 多模型 agent 工作台 |
| [bex-co/muse-code-acp](https://github.com/bex-co/muse-code-acp) | 10 | **非官方** ACP 适配器:在 Zed / VS Code 等 Agent Client Protocol 编辑器里跑 Muse Code(npm `@bex-co/muse-code-acp`) |
| [theglitcharchitect/muse-skills](https://github.com/theglitcharchitect/muse-skills) | 3 | 23 个 Muse agent skill + 决策层 |
| [wlsdks/muse-agent](https://github.com/wlsdks/muse-agent) | 5 | 跨会话保留上下文的个人 agent |
| [jkxiongxin/muse-agent](https://github.com/jkxiongxin/muse-agent) | 2 | 中文知识库助手 |
| [JJenglert1/esp32-muse-agent](https://github.com/JJenglert1/esp32-muse-agent) | 21 | ESP32 硬件方向实验 |

### 暂记:新出现、未验证

刚建、命中生态搜索但还没有任何记录的仓库。写在这里是为了给看门狗的"新仓库"提醒一个答复 —— **不是推荐**。

- [kiragamingofficial95-cmd/nexus-ai](https://github.com/kiragamingofficial95-cmd/nexus-ai) —— ★0 · MIT · Python,创建于 2026-10-08。Windows 桌面助手(CustomTkinter):"agent 扫网页 → 结构化 Markdown 报告"、阅读模式浏览、带确认弹窗的 PC 控制;README 把 BYOK 对话指向 `meta/muse-spark-1.3`。相关性停在*模型*层(通过 OpenAI 兼容接口调用 Muse Spark),不在 Muse agent 层;该账号还发布过大量小项目,仓库只有一天大 —— 因此暂不进上表,等它有实际记录再说
- [KimFischer99/Museion-Agent-SDK](https://github.com/KimFischer99/Museion-Agent-SDK) —— ★0 · Python,创建于 2026-10-07、最后推送 2026-10-08。README(v0.1.2)自称 "developed based on Muse":一个*主动式* agent 运行时 —— 定时提醒、可选订阅的新闻研究(每小时抓 Bing News RSS)、持久化兴趣,通知投递到本地收件箱或你自己的 HTTPS webhook;Python 包名 `proactive-sdk`,分析后端可选模型 API / Pi / Hermes。许可只在 README 里写:原始 SDK 代码 MIT、Muse 衍生 skill 保留各自来源声明、第三方再分发权限未完全核实(GitHub 未识别出标准许可文件)。★0、0 fork、只有一天大,账号有 33 个公开仓库 —— 先记在这里,不进上表,等有实际记录再说。。
- [RobertoAgent/roberto-agent-plugins](https://github.com/RobertoAgent/roberto-agent-plugins) —— ★0 · Apache-2.0 · JavaScript,创建于 2026-10-08。一组把其它 agent 接到 Roberto(个人 AI agent,`robertoagent.com`;2026-10-08 实测该站与 MCP 授权服务器 well-known 地址均返回 200)的插件包:ChatGPT / Codex 包、Cursor / Grok Bot 插件,以及 `meta-muse/` 连接器 —— 用 Read / Write / Sensitive write 三类标注 agent 对 Muse 可发起的调用。相关性在于它把 Muse 当作对接目标之一,而不是基于 Muse 构建;该组织只有一个月大、2 个公开仓库,本仓库只有 1 个 commit,各包都指向同一个托管服务器。先记在这里,不进上表,等有实际记录再说。
- [zorahrel/agent-harness](https://github.com/zorahrel/agent-harness) —— ★0 · MIT · JavaScript,创建于 2026-08-10、最后推送 2026-10-08、0 fork。原名 `claude-harness`:一套手写的指令文件(`SKILL.md` 格式的 skill、规则、workflow),给需要无人值守跑上几小时的编码 agent 用,名单里 **Muse** 与 Claude Code、Codex、OpenClaw、jcode 并列;README 以意大利语为主、附英文版。与 Muse 相关的部分是具体的:Muse 从 `~/.agents/skills/` 读取这些 skill;`RULES.md` 把 Muse 的 `request_user_input` 当作 agent 征求用户选择的方式;`docs/menus-that-ask.md` 记录了为期一个月的"给 agent 发消息"测量,其中提到作者最近六次会话里 Muse 只出现过一次该菜单,并指出非交互的 `muse exec` 根本没人能回答。相关性在*工具链*层面 —— Muse Code 是它支持的 agent 之一,而不是基于它构建。★0、0 fork,12 个 GitHub topic 里没有一个跟 Muse 有关;先记在这里,不进上表,等有实际记录再说。
- [TIMPICKLE/agent-orchestration-tutorial](https://github.com/TIMPICKLE/agent-orchestration-tutorial) —— ★0 · 无 licence 文件 · 创建于 2026-10-08、最后推送 2026-10-08。面向初学者的 agent 编排课程:其描述列出 32 个短课、真实项目场景、**Meta Muse** 与 Multica 案例,以及离线练习。与 Muse 的关系在于把 Muse 当作编排 agent 的案例,而不是基于 Muse Code 构建;★0、只有一天大 —— 先记在这里,不进上表,等有实际记录再说。

### 明确不收的

**命中了关键词不等于值得推荐。**描述 / README 本质上是**邀请码或推广链接**、或指向与自己描述自相矛盾的二进制下载的仓库一律不收 —— 那是推广或更糟的东西,不是生态项目。

- 2026-10-08 用 GitHub API 复核:[`Git-FED/museAi-Chat`](https://github.com/Git-FED/museAi-Chat) —— ★2、1 fork、许可 *NOASSERTION*(即无许可)、topics 写着 `do not touch`;描述与 README 以邀请码开头(`5F2V31` → `muse.ai/join`),同一账号约 20 个仓库都印着同一个码。**故不收录**;看门狗每轮仍会把它当"新仓库"报出来,这条就是答复。

- 2026-10-08 用 GitHub API 复核:[`mentholated-roll141/Muse-Glimmer`](https://github.com/mentholated-roll141/Muse-Glimmer) —— ★1、1 fork、**无 release**、许可 *NOASSERTION*(`LICENSE` 文件是 MIT,README 却写 Apache-2.0)。README 自称是"Meta 的 30B Muse Glimmer"本地版,但下载按钮指向 `assets/v1.4.zip` —— **487 KB**,而同一页说压缩包"several gigabytes"、模型 15-20 GB —— 排错章节还教用户"如被杀软标记,先临时关闭杀软"。模型名是真的(OpenRouter 有 `meta/muse-glimmer-30b`,Hugging Face 为 `meta-models/Muse-Glimmer-30B`),但这个仓库不是它的实现。**故不收录**;看门狗每轮仍会把它当"新仓库"报出来,这条就是答复。

### 话题与索引

- GitHub Topics:[`muse-code`](https://github.com/topics/muse-code) · [`muse-spark`](https://github.com/topics/muse-spark)
- 模型获取:[OpenRouter 上的 Muse Spark 1.3](https://openrouter.ai/meta/muse-spark-1.3) —— 模型 id 为 `meta/muse-spark-1.3` 与 `meta/muse-spark-1.3-contributor`,同一列表里还有 1.1、1.2 以及 `meta/muse-glimmer-30b`。读自 OpenRouter 公开模型列表并实测模型页(HTTP 200),2026-10-08。
- 构建 agent 的基础设施:[CopilotKit](https://github.com/CopilotKit) · AG-UI 协议(openmuse 用它做事件流)
- 仅关键词命中、与 Muse 无关,已于 2026-10-08 用 GitHub API 核对:[`MVReddy/MuseAgentTaskRepo`](https://github.com/MVReddy/MuseAgentTaskRepo) — ★0 · Python · 无 licence,创建于 2026-09-27,最后推送 2026-10-08。仓库名命中生态检索,但 README 只是 "Daily Python experiments: sample Google Ask agents" 这类通用 agent 练习,没有任何 Muse 内容。不列为生态项目,记在这只是为了让看门狗的"新仓库"汇报有答案。

## 4. 想自己搭一个"个人 agent"?推荐路径

1. 先读 **openmuse** 的架构(server + worker + persistent Chromium),理解"agent 电脑"怎么落地;
2. 对照 **OpenHarness** 看 harness 层怎么抽象;
3. 明确你的**边界**:哪些动作必须人工批准(付款、发信、连新 App)——Muse 把这一点做成了产品级默认;
4. 决定**数据去向**:本地跑还是云 VM。Muse 的 Confidential VM 未上线前,自托管是隐私上限更高的选择。

## 5. 中文资料现状(机会点)

截至 2026-10-08,**中文系统整理几乎为零**:能搜到的主要是短视频实测与零散报道,缺少「官方事实 + 争议梳理 + 生态清单 + 数据来源」四件套。本仓库即为填补这一空白而建。

---

**收录标准**:必须与"Muse / 个人 agent"直接相关,且能打开。发现失效链接或有更好的资源,欢迎提 Issue。

**存活抽查**:2026-10-08 本轮用 `curl -sI/-sL` 抽查了本文件全部外链(200/301/302 通过);`RomanSlack/Meta_Muse_Agent_System_Prompt` 已 404(GitHub API 与网页均返回 404),故移除。本轮新增的两条链接(GitHub 仓库页、OpenRouter 模型页)分别以 `gh api` 与浏览器实测,均 200。星数与许可来自 `gh api graphql`(见 [`data.md`](data.md))。
