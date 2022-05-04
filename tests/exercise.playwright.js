// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/home');
});

test.describe('Playground Testing', () => {
  test('user is on the right page', async ({ page }) => {
    await expect(page).toHaveURL('http://www.uitestingplayground.com/home');
    await page.locator('.nav-link >> text=Home').click();
    await expect(page.locator('text=Home')).toHaveText(['Home']);
  });

  test('user open click link', async ({ page }) => {
    await page.click('text=Click');

  });
});