import { test, expect } from '@playwright/test';

test('capture hero and intel', async ({ page }) => {
  await page.goto('http://localhost:3001');
  await page.waitForTimeout(5000); // Wait for animations
  await page.screenshot({ path: 'verification/hero_final.png', fullPage: false });

  // Scroll until we see the Global Intel heading
  await page.evaluate(() => {
    const heading = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('INTELLIGENCE'));
    heading?.scrollIntoView();
  });

  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'verification/intel_final.png', fullPage: false });
});
