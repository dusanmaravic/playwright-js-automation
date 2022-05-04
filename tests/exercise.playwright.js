// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/home');
});

test.describe('Playground Testing', () => {
  test('user is on the right page', async ({ page }) => {
    await expect(page).toHaveURL('/home');
    await page.locator('.nav-link >> text=Home').click();
    await expect(page.locator('text=Home')).toHaveText(['Home']);
  });

  test('user open click link', async ({ page, context }) => {
    // await context.tracing.start({ screenshots: true, snapshots: true });
    await page.click('text=Click');
    // await context.tracing.stop({ path: 'trace.zip' });
  });
});