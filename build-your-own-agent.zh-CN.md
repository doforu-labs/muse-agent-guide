# 自建一个「Muse 式」个人 Agent —— 有据可查的实操指南

> **这篇是什么:** 从「Muse 闭源、只对美加开放」走到「我自己跑一个差不多的」的实操路径。
>
> **怎么写的:** 逐份读了参考实现的仓库 —— [`CopilotKit/openmuse`](https://github.com/CopilotKit/openmuse) @ `1ac68f3`(2026-10-06,MIT),包括它的 `README.md`、`docs/VERIFICATION.md`、`docs/FEATURES.md`。凡是从项目原文引用的都标了出来。**我们并未在本机把它完整部署跑通** —— 安装段是"有文档出处",不是我们自己的实测。
>
> English (default) → [build-your-own-agent.md](build-your-own-agent.md)

---

## 一、Muse 给了你什么,你得重建什么

Muse 不是一个功能,是五个 —— 而关键的是:**其中四个都不是模型**。

| Muse 的能力 | 你要重建的部分 | 难在哪 |
|---|---|---|
| **Muse Secure VM** —— 每人一台带完整浏览器的隔离 Linux | 每人一个容器/VM + 真能驱动的浏览器 | 多租户隔离、浏览器会话保活与清理 |
| **审批关卡** —— 发送/付款/接新授权前先问你 | 模型与工具之间的策略层 | 定义哪些动作**永不**自动执行 |
| **长任务** —— 关掉 App 后继续干 | 任务队列 + 可重启的 worker | 幂等(重试一次付款=事故) |
| **连应用** —— 15+ 小企业连接器 | OAuth + 各连接器适配 | 凭据存储与吊销 |
| **Muse Spark 1.3** —— 模型 | 任意有工具调用能力的模型,或本地模型 | 模型质量 —— 但这是**最不差异化**的一环 |

结论:**模型是商品,"那台电脑"和权限层才是产品。**

---

## 二、参考实现:openmuse(MIT)

- **是什么:** 可自托管的个人 agent 应用,自带"agent 电脑" —— 持久 Chromium + 可选 Linux 工作区,另有 server、task worker、browser worker。
- **项目自己的状态说明(原文):** *"Alpha, for self-hosting and building on. Open-ended reasoning, live Google accounts, and CopilotKit Rich Threads require their own configuration."*
- **许可:** MIT。**技术栈:** TypeScript monorepo(pnpm workspaces)+ Expo 移动端。

## 三、安装(照项目文档)

**环境要求(原文):** *"Node 24 LTS, pnpm 11.19.0, and a CopilotKit Intelligence project key. The local sample app needs no model, Google account, or Docker."*

```bash
git clone https://github.com/CopilotKit/OpenMuse.git openmuse
cd openmuse
pnpm install --frozen-lockfile

npx copilotkit@latest login          # 需要 CopilotKit Intelligence key
npx copilotkit@latest project select

pnpm dev                             # 示例应用(不需要模型 / 账号 / Docker)
pnpm dev:web                         # Web 客户端
```

可选部分,文档里各自独立成步:

```bash
# browser worker(agent 真正用的浏览器)
pnpm --dir apps/worker exec playwright install chromium
pnpm dev:browser

# 容器化的"电脑"
docker build -t openmuse-computer:local apps/computer
```

## 四、架构对应关系:它的目录 → 概念

| 概念 | 仓库位置 | 备注 |
|---|---|---|
| API / 编排 | `apps/server` | 生产:`pnpm build:server` + `pnpm start` |
| 长任务 | `apps/worker` | 生产:`pnpm start:worker` |
| agent 的电脑 | `apps/computer` | 容器镜像由此 app 构建 |
| 客户端 | `apps/mobile`(+ web) | Expo → web / iOS / Android 产物 |
| 领域逻辑与连接器 | `packages/{domain,backends,integrations}` | 你要加自己的连接器就改这里 |
| 基础设施 | `infra/`、`render.yaml` | 部署脚手架 |

**值得抄的扩展细节(取自项目 README):** 要单独跑 task worker 时,两个进程共享 `DATABASE_URL`、密钥与 `DATA_DIR`,并把 API 上的 `TASK_WORKER_ENABLED=false`;**PGlite 不能被多个进程打开**;worker 之间通过 SQL 租约协调。**只跑一个 API 实例。**

## 五、哪些是「已被验证」的(你脚踩在哪里)

取自项目的 `docs/VERIFICATION.md`,日期 **2026-09-16**:

- **154 个自动化测试通过**,无失败、无跳过,覆盖 API、任务引擎、集成、电脑生命周期、Docker runner、会话队列。
- **真实 Chromium 生命周期测试通过** —— 导航、读取、失败 profile 清理、同 UUID 重开、文本截断、存储行为。
- **真实 Docker「电脑」冒烟测试通过**(隔离上下文)。
- Expo 导出 web / iOS / Android 三个产物 —— *"these exports do not produce signed native binaries"*。
- 有录像的**原生 iPhone 验收流程**:让 agent 找 Hacker News 头条 → 完全退出并重启 App → 总结 CopilotKit → **Take control** 接管浏览器。

在这个领域这很罕见:一个项目明确告诉你什么被证明了、什么没有。

## 六、动手前的坑

1. **Alpha 就是 Alpha。** 版本钉死(Node 24 LTS、pnpm 11.19.0)不是装饰 —— 用 frozen lockfile 是有原因的。
2. **PGlite 是单进程的。** 想拆出独立 worker,就得换真数据库。
3. **三个可安装面 = 三种失败方式**:browser worker(Playwright Chromium)、computer(Docker)、mobile(Expo 导出)。先跑示例应用,再一个一个加。
4. **密钥从此归你管。** Muse 的卖点是它替你保管凭据、agent 能用但读不到;自建意味着**这条边界要你自己做对**。
5. **路线图≠已上线**(据项目):自动预订与支付、语音、设备推送、健康/银行/社交连接器、可生成的执行工具。

## 七、离开 Muse 你会失去什么

| 失去 | 得到 |
|---|---|
| 一个不用自己打补丁的托管 VM | 完全掌控 agent 能做什么 |
| WhatsApp 作为入口 | 没有针对你和联系人的每小时档案 |
| 15+ 现成且被维护的连接器 | 数据留在自己机器上 |
| Stripe Link 购买保护 | 没有按月订阅 |
| 别人的可用性 | **你就是**可用性 |

## 八、决策清单(写代码前先做)

1. **审批边界:** 列出**永不**自动执行的动作。付款、发送、新增连接是 Muse 的默认,从这三条起步。
2. **数据位置:** 本地优先还是云 VM?在你的栈里还没有"用户自持密钥的 VM"之前,**自托管本身就是隐私上限**。
3. **入口:** 移动 App、网页,还是聊天平台?示例应用存在的意义就是让你低成本回答这个问题。
4. **克制范围:** 先自动化**一个**目标闭环(Muse 官方文档用的例子是"学校的出行邮件"和 Hacker News)。一个能可靠做三件事的个人 agent,胜过三十件都做不好的。

## 九、其它选择(简)

- **[HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness)**(★15.9k,MIT,Python)—— 想要的是 *harness* 抽象而不是一个应用时用它。
- **自带 agent:** 现成编码 agent(Claude Code、Codex)+ 浏览器工具 + 定时器就能走很远,代码最少 —— 但隔离与权限层你会先自己搭得一塌糊涂。

---

**来源:** openmuse 仓库 @ `1ac68f3` —— `README.md`、`docs/VERIFICATION.md`、`docs/FEATURES.md`、`ROADMAP.md`(2026-10-08 读取);Muse 事实见 [`data.zh-CN.md`](data.zh-CN.md)。
**欢迎纠错:** 文中步骤有误或过时,请提 Issue —— 这页的价值等于它的来源。
