# Muse 个人 AI Agent:用法配方 + 上手教程 + 资源大全

> **一份 awesome 式的 Muse 合集:** 30+ 条真实用法配方(附可直接照抄的说法)、带来源的中文指南、自建教程与精选资源。
> 每条事实都标了来源与抓取日期 —— 不写无法验证的数字;无法实测的地方(仅美加 18+ 可用)会明说。

**English version → [README.md](README.md)**

![Muse —— 它做了什么、记录了什么、以及如何自建](assets/overview-long.png)

---

## 目录

| 先看这两个 | 是什么 |
|---|---|
| ⭐ **[用法与配方 →](uses.zh-CN.md)** | **30+ 条「拿 Muse 干什么」的配方,按目标分组,每条附可直接照抄的说法与来源** |
| 🛠 **[自建同类 agent →](build-your-own-agent.zh-CN.md)** | 用 openmuse(MIT)自己跑一个:安装命令、架构解读、上游已验证到什么程度、有哪些坑 |

| 参考资料 | 是什么 |
|---|---|
| [数据与来源 →](data.zh-CN.md) | 每个数字都带日期与出处,附复现命令 |
| [时间线 →](timeline.zh-CN.md) | 发布 → 小企业线 → TIME 调查 → 今天 |
| [资源大全 →](resources.zh-CN.md) | 官方页面、媒体报道、开源生态、工具 |
| [开源替代与生态](#五开源替代与生态) | 8 个项目,含星数与许可 |
| [隐私争议](#四隐私争议该看的部分) | TIME 调查四点 + Meta 的回应 |
| [English →](README.md) | 英文默认版(全部内容) |

## 你能拿它干什么?

下面是 [**uses.zh-CN.md**](uses.zh-CN.md) 的浓缩版 —— 每一行在那篇里都是完整配方,含可直接照抄的说法:

| 目标 | 这么说 | 来源 |
|---|---|---|
| 💸 **砍掉周期支出** | "在邮件里找出所有周期性扣费,按月汇总,列出建议先砍的 —— **先别取消任何东西**。" | [官方 + 模式] |
| 💸 **盯降价** | "盯着它,低于 X 就告诉我;符合条件的话直接提交降价补差。" | [官方] |
| ✉️ **驯服邮箱** | "每个工作日早 8 点:未读分成今天要处理 / 在等别人 / 仅供参考,给第一类起草回复,不要发送。" | [官方] |
| 🍽 **带约束订位** | "周五 7 点前后 4 人桌:安静、步行 20 分钟内、有素食。先给我选项。" | [官方] |
| ✈️ **航班取消应急** | "找最早的替代航班,告诉我差价,等我点头。" | [模式] |
| 🛒 **比价不下单** | "按含运总价给这三件排序。不要下单。" | [官方] |
| 📅 **守住日程** | "每天上午保护 2 小时专注时间;冲突的挪走并告诉我挪了什么。" | [官方] |
| 🏋️ **真的坚持计划** | "围绕我的日历排每周 3 次、共 6 周,并按实际完成情况调整。" | [官方] |
| 🏢 **每周营收简报** | "每周一 8 点:上周 Stripe + Shopify 营收、Top 5 商品、环比跌超 20% 的项。" | [连接器] |
| 🏢 **催收账款** | "QuickBooks 里逾期 7 天以上的发票,各起草一封提醒,不要发送。" | [连接器] |
| 📚 **带引用的调研** | "就 X 给 10 个来源,各附一句为何可信;你无法核实的要标出来。" | [模式] |
| 📝 **初稿代笔** | "按我的语气写 200 字回复 —— 这是我以前写过的三封。" | [模式] |

→ **30+ 条完整配方、让 agent 好用的五条原则、权限设置与常见翻车点:[`uses.zh-CN.md`](uses.zh-CN.md)**

---

## 30 秒结论

| 问题 | 答案 |
|---|---|
| Muse 是什么 | Meta 2026 年 9 月发布的**个人 AI Agent**。它不只回答问题,而是**替你把事做完** |
| 它跑在哪 | **Muse Secure VM** —— 云端一台专属 Linux 虚拟机,带完整浏览器,你和 agent 共用 |
| 底层模型 | **Muse Spark 1.3**(Meta 官方称其为"迄今最强模型",专为真实世界的 agent 任务打造) |
| 怎么用 | Muse App(iOS / Android)、**WhatsApp 里直接聊**、网页 muse.ai。免技术门槛 |
| 多少钱 | **基础功能免费**,重度使用有订阅档;上线地区为**美国 + 加拿大**(18+),眼镜端即将支持 |
| 最值得注意的争议 | TIME 2026-10-06 调查:它**每小时**为你和你的联系人更新"档案",且内部指令要求**不要告诉你**"忘记"不等于删除原始消息 |
| 想自托管 | 用 **CopilotKit/openmuse**(MIT,开源同类)或 **OpenHarness**(★15.9k) |

---

## 一、Muse 到底是什么

Meta 官方定义(来源:`about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/`,抓取于 2026-10-08):

> 它不只是回答问题,而是真的把活干了 —— 帮你盯住待办,把任务和项目从你手上拿走,把长期目标变成可执行的计划。

三个和"聊天机器人"的本质区别:

1. **它有一台自己的电脑**。Muse 跑在 **Muse Secure VM** 上:一台专属、隔离的 Linux 虚拟机,里面有**完整浏览器**、CPU / 内存 / 存储,能真打开网页、填表单、下单、谈判。你随时可以接管这台机器。
2. **关掉 App 它还在干**。任务需要时间时它继续跑,有变化或需要审批时才回来找你(例如发邮件、付款前)。
3. **它会记住你**。一次提过的细节它会主动用上:把你在 Instagram 收藏的菜谱转成购物清单、按朋友忌口改晚宴菜单。

### 为什么"个人 agent"需要一台新电脑

官方给的逻辑(来源:`security.muse.ai` 摘要,见 `about.fb.com` 公告):

- agent 需要**长期驻留 + 存凭据 + 能上网**,塞进手机 App 或浏览器标签页做不到;
- 所以给每个人一台**隔离 VM**:别人的 agent 碰不到你的;
- VM 里还有一个**系统级隔离的 Sentinel agent**:Muse 的任何联网动作都要 Sentinel 放行,必要时向你请求许可。

---

## 二、五分钟开始用

| 入口 | 说明 |
|---|---|
| iOS / Android App | 在 App Store / Google Play 搜 "Muse from Meta" |
| **WhatsApp** | 直接像给朋友发消息一样对它说话 —— 对非技术用户这是最低门槛入口 |
| 网页 | muse.ai |

**上手三句话**(官方推荐的用法心智):

1. **说目标,别说步骤**。「帮我这个月省下 500 块订阅费」比「打开设置页面取消订阅」有效得多。
2. **让它先出计划**。它会给你一份行动方案,你改完再让它执行。
3. **在审批点盯紧**。发邮件、花钱、连新 App 前它必须问你。默认权限设置可以在 Meta 帮助中心逐项调。

---

## 三、能力清单(哪些事真的能交给它)

按官方与实测报道整理:

| 类别 | 具体例子 |
|---|---|
| 日常事务 | 订餐厅、订行程、改签、跟踪价格、管理提醒 |
| 邮件与消息 | 读信、起草、**经你批准后**代发 |
| 购物与成交 | 比价、下单、**用 Stripe Link 结账** |
| 文档与信息 | 生成文档、生成图片、调研主题、整理资料 |
| 跨 App 操作 | 连接第三方应用代为执行(权限可按 App 逐项收紧) |
| 长期目标 | 建立计划、跟踪进度、主动推进并给建议 |

**支付安全这一块值得单说**:Muse 是**第一个被 Link 购买保护覆盖的 AI agent**(来源:官方公告) —— 丢件/损坏免赔、降价补差、免退货费;Link 给 agent 生成**一次性虚拟卡号**,真实卡号不暴露。Shop Pay 与 1Password 支持官方称"即将上线"。

---

## 四、隐私争议:必须知道的四件事

来源:TIME 2026-10-06 调查《Meta's Muse AI Agent Is Building a Dossier On You》(抓取于 2026-10-08)。Meta 发言人**未否认**调查结论。

1. **每小时更新"人物档案"**。Muse 每小时刷新关于你**以及你在聊天/消息/邮件里提到的人**(包括不用 Muse 的人)的档案页,内容包括你们怎么认识、共同兴趣、争执、以及小圈子里的"张力与联盟"。
2. **它推断你没说出口的目标**,并记录哪种"推一把"对你最有效(内部示例:*"这个用户晚上 10 点后对短提醒反应更好"*)。每晚做一次当日对话分析。
3. **跨 VM 互相学习**。官方称"许多 VM 上的 agent 通过共享经验互相学习",分享前会做去标识化;Meta 表示这些数据**不进广告系统**。
4. **"忘记"有边界**。你让它忘掉某事,**不保证**原始消息随之消失;而内部指令明确要求**不要主动告诉你这一点**。

**官方的控制手段**(同一批来源):可逐项调整连接权限、可随时断开服务、可 opt-out 训练、可审计它的全部动作、可要求导出 VM 文件;年内将推出 **Muse Confidential VM**(整机加密,密钥仅用户持有,连 Meta 都读不到)——**目前尚未上线**。

> 判断:它把"能力"做到了消费级天花板,代价是你交出的**社交关系图谱**。用不用是一条价值判断,不是技术判断。

---

## 五、开源替代与生态(真实数据)

以下星数与时间均为本仓库抓取(来源:GitHub API,见 `data.md` 的抓取时间)。

| 项目 | ★ | 语言 | 许可 | 一句话定位 |
|---|---|---|---|---|
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 15.9k | Python | MIT | 开源 agent harness,自带个人 agent "Ohmo" |
| [CopilotKit/openmuse](https://github.com/CopilotKit/openmuse) | 4.2k | TypeScript | MIT | **最像 Muse 的开源实现**:持久 Chromium + 可选 Linux 工作区,自建 server / task worker / browser worker |
| [avirtual/clodex](https://github.com/avirtual/clodex) | 124 | JavaScript | Apache-2.0 | 管理 Claude Code / Codex / **Muse** agent 集群的可视化面板 |
| [JJenglert1/esp32-muse-agent](https://github.com/JJenglert1/esp32-muse-agent) | 21 | Shell | Apache-2.0 | 在 ESP32 上跑 Muse agent(硬件玩法) |
| [Wode44398/muse-bridge](https://github.com/Wode44398/muse-bridge) | 13 | TypeScript | MIT | 一条消息把 Claude Code 部署到你的 Muse VM 上 |
| [theglitcharchitect/muse-skills](https://github.com/theglitcharchitect/muse-skills) | 3 | Python | MIT | 面向 Muse agent 的 23 个 skill 库 + 决策层 |
| [wlsdks/muse-agent](https://github.com/wlsdks/muse-agent) | 5 | TypeScript | MIT | 跨会话保留上下文的个人 agent |
| [jkxiongxin/muse-agent](https://github.com/jkxiongxin/muse-agent) | 2 | Python | — | 中文知识库助手(缪斯助手) |

**官方相关产品线**:Muse Code(面向编程工作流,`dev.meta.ai`)· Muse for Small Business(小企业线,[`muse.ai/business`](https://muse.ai/business))· Muse Spark(模型,`research.meta.ai`)· 话题页 [`muse-code`](https://github.com/topics/muse-code) / [`muse-spark`](https://github.com/topics/muse-spark)。

---

## 六、FAQ(回答搜索里真实会问的问题)

**Muse 和 ChatGPT / Claude 有什么区别?**
聊天机器人一次回答一个问题;Muse 是**有自己电脑的 agent**,能跨网页和你连接的 App 连续干活,关掉 App 后继续跑。

**Muse 免费吗?**
基础需求免费,重度使用有订阅档。官方原话:免费版能满足大多数人。

**Muse 会花我的钱吗?**
付款前必须问你;通过 Link 走**一次性虚拟卡号**,真实卡号不暴露;且它是首个被 Link 购买保护覆盖的 agent。

**Muse 能看到我的密码吗?**
官方称看不到:凭据进安全存储,它使用但不读取,包括你自己在浏览器里手输的密码。

**Muse 现在能在中国用吗?**
不能。官方口径是「**美国 + 加拿大**、18 岁以上」:2026-09-29 官方公告原话 "available in the US and Canada",产品页 FAQ 写 "Available today to people in the US and Canada who are 18 and over"(来源:[muse.ai/business](https://muse.ai/business),2026-10-08 抓取)。其它市场官方称 "taking a measured approach in each market",暂无时间表(见 `timeline.md`)。

**我想自己搭一个类似的,从哪开始?**
先读 `CopilotKit/openmuse`(MIT),它的架构是 server + task worker + browser worker + 持久 Chromium;再参考 `OpenHarness`。

---

## 七、资源集合

- 官方:公告 [`about.fb.com`](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/) · 产品页 [`ai.meta.com/muse`](https://ai.meta.com/muse/) · [muse.ai](https://muse.ai/) · 小企业线 [`muse.ai/business`](https://muse.ai/business) · 设计说明 `introducing.muse.ai` · 安全说明 `security.muse.ai`
- 一手调查:[TIME 隐私调查](https://time.com/article/2026/10/06/meta-muse-ai-agent-privacy/)(2026-10-06)
- 开源替代与生态:见上面第五节表格
- 本仓库其他文件:[`uses.zh-CN.md`](uses.zh-CN.md)(**用法配方**)· [`data.zh-CN.md`](data.zh-CN.md)(数据与来源)· [`resources.zh-CN.md`](resources.zh-CN.md)(生态清单)· [`timeline.zh-CN.md`](timeline.zh-CN.md)(时间线)· [`build-your-own-agent.zh-CN.md`](build-your-own-agent.zh-CN.md)(自建教程);英文默认版见 [`uses.md`](uses.md) / [`data.md`](data.md) / [`resources.md`](resources.md) / [`timeline.md`](timeline.md) / [`build-your-own-agent.md`](build-your-own-agent.md)

---

## 数据来源与免责

- 所有数字标注来源与抓取日期,见 [`data.zh-CN.md`](data.zh-CN.md);星数会随时间变化,以抓取时间为准。
- 本项目为**独立第三方整理**,与 Meta 无关联;引用官方与媒体内容时标注出处,版权归原作者。
- **商标:** Muse 名称与 logo 属 Meta,此处**仅用于指称识别**,本仓库未获 Meta 背书。`assets/` 里的图均由 HTML 生成,出处与量取的设计令牌见 [`assets/README.zh-CN.md`](assets/README.zh-CN.md)。
- 隐私部分如实转述 TIME 调查结论并注明 Meta 的回应,不构成法律或投资建议。

## 更新日志

- `2026-10-08` 初版:官方事实、隐私调查要点、生态表(8 个项目)、FAQ、资源集合
- `2026-10-08` 核验更新(官方页面内容变化复核):
  - 补官方**小企业线**(Muse for Small Business,2026-09-29 公告 + `muse.ai/business`)
  - 可用地区由"美国首发"更正为**美国 + 加拿大(18+)**,并补其它市场官方口径
  - 生态表补**许可**(gh api `licenseInfo`);星数复核 `openmuse` 4,204 / `OpenHarness` 15,919
  - 移除已 404 的 `RomanSlack/Meta_Muse_Agent_System_Prompt`;官方公告日期精确到 2026-09-08
