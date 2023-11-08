import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Erwarte das ein Überschrift eine zweite Überschrift hat
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Klicke auf den Link Get started
  await page.getByRole('link', { name: 'Get started' }).click();

  // Erwarte das die Seite eine Überschrift mit den Namen Installation enthält
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


