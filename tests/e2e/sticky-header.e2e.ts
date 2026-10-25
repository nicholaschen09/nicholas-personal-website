import { expect, test } from '@playwright/test';

const routes = [
  ['/facial-recognition-neural-network', 'Facial Recognition'],
  ['/blogs/startup-lessons', 'Startup Lessons'],
] as const;

for (const [route, pageName] of routes) {
  test(`mobile ${pageName} breadcrumb stays pinned with an opaque background while scrolling`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(route);

    const breadcrumb = page.locator('article > header');
    await expect(breadcrumb).toBeVisible();
    await page.evaluate(() => window.scrollTo(0, 500));

    await expect
      .poll(() => breadcrumb.evaluate((element) => Math.round(element.getBoundingClientRect().top)))
      .toBe(0);
    await expect
      .poll(() => breadcrumb.evaluate((element) => getComputedStyle(element).backgroundColor))
      .toBe('rgb(26, 26, 26)');
    await expect
      .poll(() => breadcrumb.evaluate((element) => element.getBoundingClientRect().height))
      .toBeGreaterThan(43);
  });
}
