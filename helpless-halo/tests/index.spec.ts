import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Erwarte eine PageTitle
  await expect(page).toHaveTitle(/Musikunterricht/);
  // Theme Toggle
  await page.locator('#themeToggle').click();
  // Navigationsleiste
  await page.getByRole('link', { name: 'Home' }).click();
  

  

  // Expects page to have a heading with the name of Music Lesson.
  await expect(page.getByRole('heading', { name: 'Music Lesson' })).toBeVisible();
  // Bilder Scrolling
  await page.getByAltText('Piano Tastatur').click();
  await page.getByAltText('Nylon Guitar').click();
  await page.getByAltText('5-string Banjo').click();
  await page.getByAltText('Tenorsaxophon').click();
  await page.getByAltText('Klarinette').click();
  await page.getByAltText('Notenblatt').click();

  await expect(page.getByRole('heading', { name: 'MUSICSTUDIO_ZIEBART' })).toBeVisible();

  // Click the get started link.
  await page.getByRole('button', { name: 'Neue Begrüßung' }).click();
  // Astro Card Formular
  await page.getByRole('link', { name: 'Probeunterricht→ Anmeldung zu einem kostenlosen Probeunterricht!' }).click();
});
