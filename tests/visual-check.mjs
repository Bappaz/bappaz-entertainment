import { chromium } from 'playwright';
import fs from 'node:fs';

fs.mkdirSync('preview-shots', { recursive: true });
const browser = await chromium.launch({ headless: true });
let failed = false;

for (const [name, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('http://127.0.0.1:8765/', { waitUntil: 'networkidle' });
  await page.locator('.visual-feature').scrollIntoViewIfNeeded();
  await page.locator('.team').scrollIntoViewIfNeeded();
  await page.locator('footer').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < pageHeight; y += Math.floor(height * .7)) {
    await page.evaluate(top => window.scrollTo(0, top), y);
    await page.waitForTimeout(70);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  const result = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > innerWidth + 1,
    images: [...document.images].map(image => ({ src: image.getAttribute('src'), loaded: image.complete && image.naturalWidth > 0 })),
    mobileMenuVisible: getComputedStyle(document.querySelector('.menu')).display !== 'none',
    desktopNavVisible: getComputedStyle(document.querySelector('#primary-nav')).display !== 'none'
  }));
  if (name === 'mobile') {
    await page.locator('.menu').click();
    result.mobileNavOpens = await page.locator('#primary-nav').isVisible();
  }
  await page.screenshot({ path: `preview-shots/${name}.png`, fullPage: true });
  const problems = [
    ...(result.overflow ? ['horizontal overflow'] : []),
    ...(!result.images.some(image => image.src === 'assets/shreekant-founder-full.jpg' && image.loaded) ? ['updated founder portrait missing'] : []),
    ...result.images.filter(image => !image.loaded).map(image => `image failed: ${image.src}`),
    ...(errors.length ? errors : []),
    ...(name === 'mobile' && (!result.mobileMenuVisible || !result.mobileNavOpens) ? ['mobile navigation failed'] : []),
    ...(name === 'desktop' && !result.desktopNavVisible ? ['desktop navigation hidden'] : [])
  ];
  console.log(name, JSON.stringify({ ...result, problems }));
  if (problems.length) failed = true;
  await page.close();
}

await browser.close();
if (failed) process.exit(1);
