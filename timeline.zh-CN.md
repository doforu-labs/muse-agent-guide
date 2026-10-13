# 时间线

> 只收录有明确来源的节点;日期不确定时标注证据。每条注明来源与记录时间。

## 2026-09(官方发布月,日期取自官方页面自身元数据)

- **2026-09-08 — 官方发布 Muse**
  - 标题:"Introducing Muse: The World's First Personal AI Agent Built for Everyone"
  - 来源:`about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/`(页面元数据 published 2026-09-08,last updated 2026-09-30;2026-10-08 抓取)
  - 关键设定:跑在 **Muse Secure VM**;底层模型 **Muse Spark 1.3**(model blog: `research.meta.ai/blog/introducing-muse-spark-1-3`);App / WhatsApp / muse.ai 三入口;可用地区**美国 + 加拿大**
  - 官方同期发布两份设计说明:`introducing.muse.ai`《How We Designed Muse》(作者 Mona Sarantakos & Christine Awad,2026-09)与 `security.muse.ai`《How We Built Safety Into Muse》
- **2026-09-24 — Connect 2026**:官方汇总帖《The Biggest News From Connect 2026》
- **2026-09-29 — Muse for Small Business**
  - 官方博客《The Future Is for Everyone: Muse for Small Business》(`about.fb.com/news/2026/09/introducing-muse-small-business/`,published 2026-09-29)原话:"Earlier this month we introduced Muse, a personal AI agent **available in the US and Canada**... Today, we're expanding it with a collection of new skills and connectors"
  - 产品页上线:`muse.ai/business`(2026-10-08 核验 HTTP 200),含连接器清单与可用地区/定价 FAQ
- **应用商店推广位时间戳 09232026**:ai.meta.com 的 App Store / Google Play 链接 UTM 参数含 `muse_header_..._09232026`,提示 **9 月 23 日**是投放节点(证据等级:中等,来自 URL 参数,非官方通稿)

## 2026-10-06:TIME 隐私调查

- TIME 发表《Meta's Muse AI Agent Is Building a Dossier On You》
  - 来源:`time.com/article/2026/10/06/meta-muse-ai-agent-privacy/`(2026-10-08 抓取)
  - 核心:每小时更新人物档案、覆盖非用户、夜间分析、"忘记"不等于删除、人格化设定
  - 数据点:Muse 用户 **400 万**、下载 **500 万+**、**美区 App Store 第 1**
  - Meta 回应:未否认;强调用户可控、可 forget、数据不进广告系统
  - 同期可交叉参考:The Information 报道 Muse 周活突破 300 万(TIME 文中链接)

## 2026-10-08(本仓库首次抓取 + 官方页面变化复核)

- 开源生态星数快照(见 [`data.md`](data.md)):`CopilotKit/openmuse` 4,204 ★、`HKUDS/OpenHarness` 15,919 ★、`avirtual/clodex` 124 ★(许可也已复核:openmuse / OpenHarness MIT,clodex Apache-2.0)
- 社区项目活跃:`muse-bridge`(把 Claude Code 部署到 Muse VM)、`muse-skills`(23 个 skill)、`esp32-muse-agent`(硬件方向)
- **官方页面变化复核**:看门狗报 `ai.meta.com/muse/` 与 `muse.ai/` 页面内容变化。复核结论——两页当前内容稳定(多次抓取哈希一致),但**取不到旧版本**(页面自身不提供历史,Internet Archive CDX 当时不可用),因此**不声称"新增"**;只把当前页面上可核实、而仓库原先缺失或写错的事实补进本仓库:
  - 可用地区由"美国首发"更正为 **美国 + 加拿大(18+)**(此前仓库口径不完整)
  - 补官方**小企业线**(`muse.ai/business` + 2026-09-29 公告)与连接器清单
  - 官方公告日期精确到 **2026-09-08**
  - 死链清理:`RomanSlack/Meta_Muse_Agent_System_Prompt` 已 404,从 [`resources.md`](resources.md) 移除
- **官方小企业公告页有更新(2026-10-09 复核发现)**:`about.fb.com/news/2026/09/introducing-muse-small-business/` 页面元数据由 published 2026-09-29 变为 published 2026-09-29 + **last updated 2026-10-08**(dateModified 2026-10-08T15:52:57Z);主公告页侧栏 Related News 卡片同步从 "September 29, 2026 September 29, 2026" 变为 "September 29, 2026 October 8, 2026"。**正文差异未作比对**(无旧基线,且直连抓取间歇失败,不声称"新增")。主公告页自身 last updated 仍为 2026-09-30

## 2026-10-12:官方发布 Muse Wonder 系列

- **2026-10-12 — 官方发布 Muse Wonder 与 Muse Wonder Full**(公告 `about.fb.com/news/2026/10/introducing-muse-wonder-models/`,页面元数据 published 2026-10-12T17:08:05Z、dateModified 17:16:59Z、wordCount 444(2026-10-13T17:27:26Z 被 Meta 修订:dateModified 前移、wordCount 变 455,而正文逐段未变 —— 见 `data.zh-CN.md`);研究博客 `research.meta.ai/blog/muse-wonder`,日期 2026-10-12)
  - 官方定位:建立在 Muse Spark 地基上的"our most capable models to date",在个人与专业 agentic 任务上达到 SOTA;覆盖**法律、金融、健康**等领域知识与**前沿编码**能力
  - 两项新能力:**Active Memory**(把重要上下文跨对话带走,并在相关时取回)与 **Active Focus**(目标受阻时继续推进、换方法、从错误中恢复,重要动作前先确认)
  - 首日可用面:**Muse Wonder 通过 Meta Model API 与 Muse Code 提供;Muse Wonder Full 面向 Muse Code 订阅者**;官方称 Muse Wonder"很快会驱动更多 Muse 体验,先向订阅者推送"
  - 安全口径:按 Meta《Superintelligence Scaling Framework》训练、评测与发布,更完整的安全评测报告"available soon";研究博客另称该系列在 Meta **吉瓦级 Prometheus 数据中心**训练
- **同日侧栏轮换(页面哈希变化的原因)**:主公告页 `about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/` 的 "Recent News" 侧栏加入上述 Muse Wonder 条目,并下掉《Expanding Instagram's School Partnership Program to Help Teens Stay Informed》。该页自身日期未动(published 2026-09-08、last updated 2026-09-30),正文无变化 —— 结论来自与 Internet Archive 2026-10-12T14:16Z 快照的逐词比对(相似度 0.99454)
- **2026-10-13 侧栏再次轮换(页面哈希再变的原因)**:同一页 "Recent News" 又换了两条 —— 加入《Leading Tech Companies Join Global Law Enforcement in Major Crackdown on West African Scam Networks》、下掉《Find Your Community With Forum, a Dedicated App for Facebook Groups》;该页自身日期与 `wordCount` 861 仍未动,正文无变化(与本机 2026-10-13 08:25 本地时间副本逐词比对,相似度 0.99326)

## 待发生(官方口径,尚未上线)

| 事项 | 官方表述 | 状态 |
|---|---|---|
| Muse Confidential VM | 整机加密,密钥仅用户持有,"not even Meta can access it" | 官方称"年内",**未上线**(2026-10-08) |
| Shop Pay 支付 | "coming soon" | 未上线 |
| 1Password 支持 | 让 Muse 使用用户已有登录 | 未上线 |
| AI 眼镜端 | "coming soon" | 未上线 |
| 更多连接器 / 技能 | "In the months ahead, expect more connectors, more skills"(2026-09-29) | 持续进行 |
| 更多市场 | 官方:"taking a measured approach in each market",暂无时间表 | 暂无时间 |

## 维护说明

本时间线由后台任务定期核验:Muse 生态仓库的星数里程碑、新仓库出现、官方页面内容变化会触发复核与更新;无变化时不改动本文件。
