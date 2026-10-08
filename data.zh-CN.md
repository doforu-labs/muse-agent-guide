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

## 二、开源生态星数(GitHub API 抓取)

抓取时间:**2026-10-08**(UTC+8)。星数变化快,请以实时值为准。

| 仓库 | ★ | 最后推送 | 语言 | 许可 |
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

**相关仓库样本量**:GitHub 搜索 `muse agent in:name,description` 返回 `total_count = 595`(2026-10-08;当天前两次复核为 594,之后为 595);绝大多数与"Meta Muse 个人 agent"无关,本仓库只精挑上表 9 个入表。相比当天首次抓取 +1 的,是一条刚建的仓库 `kiragamingofficial95-cmd/nexus-ai` —— 用 `user:kiragamingofficial95-cmd` 过滤重跑该搜索,恰好只返回它一个,增量由此归因;它按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md) 里,未进上表。此前版本写的"48 个"来自看门狗的跟踪名单长度,不是搜索总量,已更正。同日稍后复核,`total_count` 仍为 594,但同一查询新命中一条 `KimFischer99/Museion-Agent-SDK`(用 `user:KimFischer99` 过滤恰好只返回它一个)—— 总量没动,说明至少有一条旧命中离开了结果集,或索引尚未跟上;数字如实照录。该仓库同样按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md)。同日再复核,`total_count` 变为 595(较此前 594 +1),用 `user:RobertoAgent` 过滤同一查询恰好只返回一条 `RobertoAgent/roberto-agent-plugins`,增量由此归因;该仓库同样按"新出现、未验证"记在 [`resources.zh-CN.md`](resources.zh-CN.md),未进上表。

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

## 四、本仓库数据的复现方式

```bash
# 星数 / 许可(需已登录 gh)
gh api graphql -f query='query { r: repository(owner:"CopilotKit", name:"openmuse"){ stargazerCount pushedAt primaryLanguage{name} licenseInfo{spdxId} } }'

# 搜索相关仓库数量
gh api -X GET search/repositories -f 'q=muse agent in:name,description' -f per_page=1 --jq '.total_count'
```

更新时间线见 [`timeline.md`](timeline.md);本文件由后台任务定期核验并更新。
