import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:4321/keyboardunterricht/');
  // Erwarte das die Seite einen Page Titel hat
  await expect(page).toHaveTitle(/Keyboardunterricht/);
  // Theme Toggle
  await page.locator('#themeToggle').click();
  // Überschrift H2 finden
  await expect(page.getByRole('heading', { name: 'Hammond Flip - Klaus Wunderlich' })).toBeVisible();
  //Video Start button finden
  await page.frameLocator('iframe[title="Hammond Organ - Hammond Flip - Klaus Wunderlich"]').getByLabel('Play', { exact: true }).click();
  // Überschrift H2 finden
  await expect(page.getByRole('heading', { name: 'H-schisch - Klaus Wunderlich' })).toBeVisible();
  //Video Start button finden
  await page.frameLocator('iframe[title="Hammond Organ Komponist: Klaus Wunderlich Titel: H-schisch"]').getByLabel('Play', { exact: true }).click();
  // Überschrift H2 finden
  await expect(page.getByRole('heading', { name: 'E-hering - Klaus Wunderlich' })).toBeVisible();
  //Video Start button finden
  await page.frameLocator('iframe[title="Hammond Organ Komponist: Klaus Wunderlich Titel: E-Hering"]').getByLabel('Play', { exact: true }).click();
  // Überschrift H2 finden
  await expect(page.getByRole('heading', { name: 'Der neue Weg zum Keyboardspiel' })).toBeVisible();
  // Bilder
  await page.getByAltText('Axel Benthien Keyboardschule').click();
  // link zurück
  await page.getByRole('link', { name: 'zurück' }).click()
});