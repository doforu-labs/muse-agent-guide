# assets/ —— 这几张图是怎么来的

四张图都由 [`src/`](src/) 里的 HTML 生成,可复现、可 diff,不是手绘。

| 图片 | 尺寸(2×) | 用途 | 源文件 |
|---|---|---|---|
| [`overview-long.png`](overview-long.png) | 1400×3040 @1.5× → 2100×4560 | **README 头图长条图**:一张图讲完整个故事(中英 README 共用) | `src/overview-long.html` |
| [`social-card.png`](social-card.png) | 1280×640 | GitHub 社交预览卡(仓库 → Settings → Social preview) | `src/social-card.html` |
| [`social-card.zh.png`](social-card.zh.png) | 1280×640 | 中文卡片,可单独使用 | `src/social-card.zh.html` |
| [`font-compare.png`](font-compare.png) | 1280×700 | 同一句在几款中文字体下的对比,用于选型 | `src/font-compare.html` |
| [`font-compare-en.png`](font-compare-en.png) | 1280×760 | 官方拉丁字体 vs 各回退字体 | `src/font-compare-en.html` |
| [`ecosystem.png`](ecosystem.png) | 1400×820 | README 里的星数对比 | `src/ecosystem.html` |
| [`timeline.png`](timeline.png) | 1400×640 | "能力与数据采集同时落地"时间线 | `src/timeline.html` |
| [`architecture.png`](architecture.png) | 1400×700 | Secure VM / Sentinel / 记录模型示意 | `src/architecture.html` |

## 样式是对齐官方页面量出来的,不是凭感觉配的

[`src/brand.css`](src/brand.css) 里每个令牌都用 **Chrome DevTools Protocol**(`getComputedStyle`)从官方 Muse 页面量取,然后把官方页和我们的页**在同一个浏览器里并排打开、逐项 diff 计算值**复核。

实测值(官方 → 我方):

| 元素 | 官方计算值 | 我方 |
|---|---|---|
| 页面底色 | `rgb(252, 252, 252)` | 一致 |
| 正文颜色 | `rgb(17, 17, 18)` | 一致 |
| h1 字号/字重/字距 | `62.445px` / `500` / `-0.62445px` | 一致 |
| 主按钮底色 | `color(srgb 0 0.352941 0.748235)` | 一致 |
| 按钮文字色/字号/字重/行高 | `rgb(255,255,255)` / `14px` / `500` / `20px` | 一致 |
| 按钮圆角 | `3.35544e+07px`(完全圆角) | 一致 |
| 品牌渐变 | `--hatch-accent-gradient-start: #7cc9ff` → `--hatch-accent-gradient-end: #08f` | 一致 |

并排 CDP diff 结果:**11/11 项字面完全一致。**

## logo 与字体 —— 出处与许可

- **Logo:** [`muse-logo.svg`](muse-logo.svg) 下载自官方站点(`muse.ai/images/landing/brand/muse-logo.svg`)。它是 Meta 的商标,此处**仅用于指称识别** —— 本仓库为独立第三方整理,与 Meta 无关联、未获其背书。
- **字体:** 官方页面用 **Optimistic AI** —— 这一点是从**字体文件自身**确认的:内嵌 `name` 表写着 *"Copyright 2025 Meta Platforms, Inc."*、*"Meta and Optimistic are trademarks of Meta Platforms, Inc."*,代工厂 **Dalton Maag Ltd**,版本 1.000,可变轴 `Wght / Opsz / Ital / Dark Mode / Alternate`。本仓库**不分发该字体**;本机存在时由 `src/render.cjs` 在渲染时以 base64 data-URL 注入,否则回退系统字体。

### 字体生效性的验证(顺便抓出一个 bug)

渲染器最初把 `@font-face` 注入写在**导航之前**,导航一发生样式表就被丢弃 —— 于是**所有图片其实是用回退字体渲染的**。发现它的检查方法:把同一句话渲染成"真实字体族"与"根本不存在的字体族",比较宽度:

| 测量(`"Muse, the personal agent"` @ 62.445px/500) | 宽度 |
|---|---|
| 修复前:`optimisticAI` | 609.22px |
| 修复前:不存在的字体 | 609.22px ← 完全相同,说明字体没被应用 |
| 修复后:`optimisticAI`(`status: loaded`) | 678px |
| 修复后:不存在的字体 | 624.2px |

现在每次渲染都会打印这项自检,PNG 哈希也随之变化 —— 图片确实使用官方字形,而不是回退。

## 重新渲染

```bash
cd assets/src
NODE_PATH=<装有 playwright 的 node_modules 路径> node render.cjs
```

需要 Playwright 的 Chromium。渲染器会在本机存在字体时注入、等待 `document.fonts.ready`,然后按 CSS 尺寸以 2× 缩放截图。
