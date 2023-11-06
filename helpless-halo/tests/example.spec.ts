import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.musicstudio-ziebart.de/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Musikunterricht/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.musicstudio-ziebart.de/');

  // Click the get started link.
  await page.getByRole('button', { name: 'Neue Begrüßung' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Music Lesson' })).toBeVisible();
});
