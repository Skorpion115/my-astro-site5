import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://www.musicstudio-ziebart.de/download');

  // Erwarte eine PageTitle
  await expect(page).toHaveTitle(/Download/);
  // Theme Toggle
  await page.locator('#themeToggle').click();
  // Expects page to have a heading with the name of Music Lesson.
  await expect(page.getByRole('heading', { name: 'GM Midi Files mit Noten zum downloaden!' })).toBeVisible();
  // Video Aus der neuen Welt - Antonin Dvorak
  await page.getByTitle('Aus der neuen Welt - Antonin Dvorak').click();
  // Ganz unten der Link Home
  await page.getByRole('link', { name: 'home', exact: true }).click();
//Video Start button finden
// await page.frameLocator('iframe[title="Beatles - Yesterday Gitarre Tutorial"]').getByLabel('Play', { exact: true }).click();
});
