import { expect, test } from '@playwright/test';

test('old blog URL redirects to the writing article', async ({ page }) => {
  await page.goto('/blogs/startup-lessons');

  await expect(page).toHaveURL(/\/writing\/startup-lessons$/);
  await expect(page.locator('h1')).toContainText('10 Lessons from Working at Startups');
});
