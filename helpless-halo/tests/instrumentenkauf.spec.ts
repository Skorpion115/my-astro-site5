import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://www.musicstudio-ziebart.de/instrumentenkauf/');

  // Erwarte eine PageTitle
  await expect(page).toHaveTitle(/Tips zum Instrumentenkauf/);
  // Theme Toggle
  await page.locator('#themeToggle').click();
  // Navigationsleiste
  await page.getByRole('link', { name: 'Instrumentenkauf' }).click();
  // Expects page to have a heading with the name of Music Lesson.
  await expect(page.getByRole('heading', { name: 'Was muss ich beim Instrumentenkauf beachten?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sprungmarken' })).toBeVisible();
  // Sprungmarken
  await page.getByRole('link', { name: 'E-Gitarre' }).click();
  await page.getByRole('link', { name: 'Klarinette' }).click();
  await page.getByRole('link', { name: 'Querflöte' }).click();
  await page.getByRole('link', { name: 'Saxophon' }).click();
  await page.getByRole('link', { name: 'Klavier' }).click();
  await page.getByRole('link', { name: 'Keyboard' }).click();
  await expect(page.getByRole('heading', { name: 'Akustische Gitarre' })).toBeVisible();
  // Bild Konzertgitarre
  // await page.getByRole('img', { name: 'Konzertgitarre' }).click();
  await page.getByLabel('Konzertgitarre').click();
  await expect(page.getByRole('heading', { name: 'Konzertgitarre' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Westerngitarre' })).toBeVisible();
  // Bild Westerngitarre
  // await page.getByRole('img', { name: 'Westerngitarre' }).click();
  await page.getByLabel('Westerngitarre').click();
  await expect(page.getByRole('heading', { name: 'E-Gitarre' })).toBeVisible();
  // Bild Klarinetten
  await page.getByRole('img', { name: 'Klarinetten' }).click();
  await expect(page.getByRole('heading', { name: 'Klarinette' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Querflöte' })).toBeVisible();
  // Bild Querflöte
  await page.getByAltText('Querfloete').click();
  await page.getByRole('img', { name: 'Querflöte' }).click();
  await expect(page.getByRole('heading', { name: 'Saxophons' })).toBeVisible();
  // Bild Tenorsax
  await page.getByRole('img', { name: 'Tenorsax' }).click();
  await expect(page.getByRole('heading', { name: 'Klavier' })).toBeVisible();
  // Klavier Oberdämpfer
  await page.getByRole('img', { name: 'Klavier Oberdämpfer' }).click();
  // Bild DB-32B
  await page.getByRole('img', { name: 'DB-32B' }).click();
  await page.getByAltText('SP-320 kleines Klavier').click();
  await page.getByRole('img', { name: 'SP-320' }).click();
  await expect(page.getByRole('heading', { name: 'Keyboard' })).toBeVisible();
  await page.getByRole('link', { name: 'nach oben!' }).click();
  // Footer
  await page.getByRole('link', { name: 'facebook', exact: true }).click();
  await page.goto('https://www.musicstudio-ziebart.de/instrumentenkauf/');
  // YouTube Button
  await page.getByRole('link', { name: 'youtube', exact: true }).click();
  await page.goto('https://www.musicstudio-ziebart.de/instrumentenkauf/');
});