// Render assets/src/*.html to high-DPI PNGs (used by the READMEs and the social card).
// Usage: NODE_PATH=<a node_modules containing playwright> node render.cjs
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// The official pages use Meta's "Optimistic AI" variable font, which is NOT redistributed
// with this repository (proprietary licence). If a local copy exists at the path below it is
// loaded at render time, so the output matches the official typography; otherwise the renderer
// falls back to a system font stack.
const FONT = '/home/dev/work/muse-brand-ref/media/OptimisticAI_VF_Optimized-s.p.41te7jvyx2g5b.woff2';

const JOBS = [
  ['ecosystem.html',    'ecosystem.png',    1400, 820],
  ['timeline.html',     'timeline.png',     1400, 640],
  ['architecture.html', 'architecture.png', 1400, 700],
  ['social-card.html',  'social-card.png',  1280, 640],
  ['social-card.zh.html', 'social-card.zh.png', 1280, 640],
  ['font-compare.html', 'font-compare.png', 1280, 700],
  ['font-compare-en.html', 'font-compare-en.png', 1280, 760],
  ['overview-long.html', 'overview-long.png', 1400, 3860, 1.5],
];

(async () => {
  const hasFont = fs.existsSync(FONT);
  const fontB64 = hasFont ? fs.readFileSync(FONT).toString('base64') : '';
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files'],
  });
  for (const [html, png, w, h, dsf] of JOBS) {
    const scale = dsf || 2;
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: scale });
    await page.goto('file://' + path.resolve(__dirname, html), { waitUntil: 'load' });
    if (hasFont) {
      // Must be injected AFTER goto: navigating first would discard the stylesheet.
      // A data: URL is used instead of file:// so the face registers regardless of file-access rules.
      await page.addStyleTag({
        content: `@font-face{font-family:'optimisticAI';src:url(data:font/woff2;base64,${fontB64}) format('woff2');font-weight:400 600;font-style:normal;font-display:block;}`,
      });
      try { await page.evaluate(() => document.fonts.load('500 62.445px "optimisticAI"')); } catch (e) {}
    }
    try { await page.evaluate(() => document.fonts.ready); } catch (e) {}
    await page.waitForTimeout(800);

    // Self-check: is the brand font actually applied?
    // It compares the rendered text width of the real family against a nonexistent one —
    // if they are equal, the image silently fell back to a system font.
    if (hasFont) {
      const chk = await page.evaluate(() => {
        const box = document.createElement('div');
        box.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.appendChild(box);
        const m = (f) => {
          box.innerHTML = '';
          const s = document.createElement('span');
          s.textContent = 'Muse, the personal agent';
          s.style.cssText = 'font-family:' + f + ';font-size:62.445px;font-weight:500;white-space:nowrap';
          box.appendChild(s);
          const r = document.createRange(); r.selectNodeContents(s);
          const w = Math.round(r.getBoundingClientRect().width * 100) / 100;
          box.innerHTML = '';
          return w;
        };
        const face = [...document.fonts].map((f) => f.family.replace(/"/g, '') + '/' + f.status);
        return { withFont: m('"optimisticAI"'), missing: m('"NoSuchFontXYZ"'), faces: face };
      });
      const ok = chk.withFont !== chk.missing;
      console.log(`     font self-check: ${ok ? 'OK (applied)' : 'FAILED (still a fallback)'}  optimisticAI=${chk.withFont}px / missing-font=${chk.missing}px  ${JSON.stringify(chk.faces)}`);
    }
    const out = path.resolve(__dirname, '..', png);
    await page.screenshot({ path: out, clip: { x: 0, y: 0, width: w, height: h } });
    console.log('  ok ' + png.padEnd(18) + w + 'x' + h + '  (' + scale + 'x -> ' + (w * scale) + 'x' + (h * scale) + ')');
    await page.close();
  }
  await browser.close();
})().catch(e => { console.error('FAIL:', e.message); process.exit(1); });
