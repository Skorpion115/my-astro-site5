import { test, expect } from '@playwright/test';

test('should be titled', async ({ page, context }) => {
    await context.route('**.webp', route => route.abort());
    await page.goto('https://www.musicstudio-ziebart.de/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Musikunterricht/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.musicstudio-ziebart.de/');

  // Expects page to have a heading with the name of Music Lesson.
  await expect(page.getByRole('heading', { name: 'Music Lesson' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'MUSICSTUDIO_ZIEBART' })).toBeVisible();

  // Click the get started link.
  await page.getByRole('button', { name: 'Neue Begrüßung' }).click();
});
