import { expect, test } from '@playwright/test';

test('mobile project breadcrumb stays pinned with an opaque background while scrolling', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/facial-recognition-neural-network');

  const breadcrumb = page.locator('article > header');
  await expect(breadcrumb).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, 500));

  await expect
    .poll(() => breadcrumb.evaluate((element) => Math.round(element.getBoundingClientRect().top)))
    .toBe(0);
  await expect
    .poll(() => breadcrumb.evaluate((element) => getComputedStyle(element).backgroundColor))
    .toBe('rgb(26, 26, 26)');
});
