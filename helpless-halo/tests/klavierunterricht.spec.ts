import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://www.musicstudio-ziebart.de/klavierunterricht/');

  // Erwarte einen PageTitle
  await expect(page).toHaveTitle(/Klavierunterricht/);
  await expect(page.getByRole('heading', { name: 'Klavier oder Digitalpiano?' })).toBeVisible();
  //Video
  await page.frameLocator('.result-frame').first().getByRole('button').click();
});