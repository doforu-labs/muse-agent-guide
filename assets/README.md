# assets/ — how these graphics were made

All four images are generated from HTML in [`src/`](src/), so they are reproducible and diffable rather than hand-drawn.

| Image | Size (2×) | Used for | Built from |
|---|---|---|---|
| [`overview-long.png`](overview-long.png) | 1400×3860 @1.5× → 2100×5790 | **the English README hero**: one tall strip carrying the whole story. English only — the English hero must never contain CJK text | `src/overview-long.html` |
| [`social-card.png`](social-card.png) | 1280×640 | GitHub social-preview card (repo → Settings → Social preview) | `src/social-card.html` |
| [`social-card.zh.png`](social-card.zh.png) | 1280×640 | Chinese card — hero of `README.zh-CN.md` | `src/social-card.zh.html` |
| [`font-compare.png`](font-compare.png) | 1280×700 | the same headline in the local CJK fonts, for picking one | `src/font-compare.html` |
| [`font-compare-en.png`](font-compare-en.png) | 1280×760 | the official Latin face vs its fallbacks | `src/font-compare-en.html` |
| [`ecosystem.png`](ecosystem.png) | 1400×820 | star-count comparison in the README | `src/ecosystem.html` |
| [`timeline.png`](timeline.png) | 1400×640 | the "capability and data collection shipped together" chronology | `src/timeline.html` |
| [`architecture.png`](architecture.png) | 1400×700 | schematic of the Secure VM / Sentinel / recording model | `src/architecture.html` |

## The design is aligned to the official site, not eyeballed

Every token in [`src/brand.css`](src/brand.css) was **measured with Chrome DevTools Protocol** (`getComputedStyle`) from the official Muse page, then re-checked by opening the official page and our page side by side in the same browser and diffing the computed values.

Measured values (official → ours):

| Element | Official computed value | Ours |
|---|---|---|
| Page background | `rgb(252, 252, 252)` | identical |
| Text colour | `rgb(17, 17, 18)` | identical |
| h1 font size / weight / letter-spacing | `62.445px` / `500` / `-0.62445px` | identical |
| Primary button background | `color(srgb 0 0.352941 0.748235)` | identical |
| Primary button text / size / weight / line-height | `rgb(255,255,255)` / `14px` / `500` / `20px` | identical |
| Primary button border-radius | `3.35544e+07px` (fully rounded) | identical |
| Accent gradient | `--hatch-accent-gradient-start: #7cc9ff` → `--hatch-accent-gradient-end: #08f` | identical |

Result of the side-by-side CDP diff: **11/11 probed properties match literally.**

## Logo and font — attribution and licensing

- **Logo:** [`muse-logo.svg`](muse-logo.svg) is downloaded from the official site (`muse.ai/images/landing/brand/muse-logo.svg`). It is Meta's trademark, used here **for identification only** — this repository is independent and not affiliated with or endorsed by Meta.
- **Font:** the official pages use **Optimistic AI** — confirmed from the font file itself: its embedded `name` table reads *"Copyright 2025 Meta Platforms, Inc."*, *"Meta and Optimistic are trademarks of Meta Platforms, Inc."*, designed by **Dalton Maag Ltd**, version 1.000, with variable axes `Wght / Opsz / Ital / Dark Mode / Alternate`. It is **not redistributed here**; `src/render.cjs` injects it at render time when a local copy exists (base64 data-URL), and falls back to a system stack otherwise.

### Font verification (and a bug it caught)

A first version of the renderer injected the `@font-face` **before** navigating, so the navigation discarded the stylesheet and every image silently rendered in the **fallback** font. The check that exposed it compares the rendered width of the same string in the real family against a *nonexistent* family:

| Measurement (`"Muse, the personal agent"` @ 62.445px/500) | Width |
|---|---|
| Before the fix: `optimisticAI` | 609.22px |
| Before the fix: nonexistent family | 609.22px ← identical, i.e. the font was not applied |
| After the fix: `optimisticAI` (`status: loaded`) | 678px |
| After the fix: nonexistent family | 624.2px |

Every render now prints this self-check, and the PNG hashes change accordingly — the images are verifiably set in the official typeface, not a fallback.

## Re-rendering

```bash
cd assets/src
NODE_PATH=<path-to-node_modules-with-playwright> node render.cjs
```

Requires Playwright's Chromium. The renderer injects the local font when present, waits for `document.fonts.ready`, and screenshots each page at exactly its CSS size with a 2× device scale factor.
