import { test, expect } from '@playwright/test';
// import AxeBuilder from '@axe-core/playwright'; // 1

// test.describe('homepage', () => { // 2
  // test('sollten keine automatisch erkennbaren Probleme mit der Barrierefreiheit aufweisen', async ({ page }) => {
    // await page.goto('/'); // 3

    // const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    // expect(accessibilityScanResults.violations).toEqual([]); // 5
  // });
// });

test('get started link', async ({ page }) => {
  await page.goto('https://www.musicstudio-ziebart.de/');

  // Erwarte eine PageTitle
  await expect(page).toHaveTitle(/Musikunterricht/);
  // Theme Toggle
  await page.locator('#themeToggle').click();
  // Navigationsleiste
  await page.getByRole('link', { name: 'Home' }).click();
  // Expects page to have a heading with the name of Music Lesson.
  await expect(page.getByRole('heading', { name: 'Music Lesson' })).toBeVisible();
  // Banner Text
  await page.locator('div').filter({ hasText: /^Wir verwenden cookies weil das so ist$/ }).click();
  // Pberschrift bei den Bildern
  await page.getByRole('heading', { name: 'Musicstudio Ziebart', exact: true }).click();
  // Bilder Scrolling
  await page.getByAltText('Piano Tastatur').click();
  await page.getByLabel('Piano Tastatur').click();
  await page.getByAltText('Nylon Guitar').click();
  await page.getByLabel('Nylon Guitar').click();
  await page.getByAltText('5-string Banjo').click();
  await page.getByLabel('5-string Banjo').click();
  await page.getByAltText('Tenorsaxophon').click();
  await page.getByLabel('Tenorsaxophon').click();
  await page.getByAltText('Klarinette').click();
  await page.getByLabel('Klarinette').click();
  await page.getByAltText('Notenblatt').click();

  await expect(page.getByRole('heading', { name: 'MUSICSTUDIO_ZIEBART' })).toBeVisible();

  // Click the get started link.
  await page.getByRole('button', { name: 'Neue Begrüßung' }).click();
  // Überschrift
  await page.getByRole('heading', { name: 'Online-Musikunterricht' }).click();
  // Instrumenten Klick
  await page.getByRole('link', { name: 'Klavier' }).click();
  // Astro Card Formular
  // await page.getByRole('link', { name: 'Probeunterricht→ Anmeldung zu einem kostenlosen Probeunterricht!' }).click();
  // Link Musik Klier
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Musik Klier' }).click();
  const page1 = await page1Promise;
  // Max Strohmer
  // const page2Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'Gitarrenbauer Max Strohmer' }).click();
  // const page2 = await page2Promise;
  // Link Click Mein You Tube Kanal
  // const page3Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'Mein YouTube Kanal' }).click();
  // const page3 = await page3Promise;
  // await page.getByRole('link', { name: 'Mein YouTube Kanal' }).click();
  // Kurze Mitteilung
  // Telefon Icon
  // await page.getByLabel('Telefonhörer').click();
  // Telefon Anruf
  // await page.getByRole('link', { name: '+49 (0)911 6320890' }).click();
  // E-Mail
  await page.getByRole('link', { name: 'postmaster@musicstudio-ziebart.de' }).click();
  // Stadtplan Ansicht
  // const page4Promise = page.waitForEvent('popup');
  // await page.getByRole('link', { name: 'Standortansicht im Stadtplan!' }).click();
  // const page4 = await page4Promise;
  // Astro Klick
  // await page.getByRole('link', { name: 'Astro v3.4.2' }).click();
  // Bild von mir
  await page.getByLabel('Bild von mir').click();
  // YouTube Button
  await page.getByRole('link', { name: 'youtube', exact: true }).click();
  // await page.getByRole('button', { name: 'youtube' }).click();
});

