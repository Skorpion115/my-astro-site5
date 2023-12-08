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
  // Link Musik Klier
  // await page.getByRole('link', { name: 'Musik Klier' }).click();
  // Link Click Mein You Tube Kanal
  // await page.getByRole('link', { name: 'Mein YouTube Kanal' }).click();
  // Kurze Mitteilung
  // await page.getByRole('link', { name: 'Nachricht→ Kurze Mitteilung an mich!' }).click();
  // Telefon Icon
  // await page.getByAltText('Telefonhörer').click();
  // await page.getByLabel('Telefonhörer').click();
  // Telefon Anruf
  // await page.getByRole('link', { name: '+49 (0)911 6320890' }).getByRole('link').click();
  //E-Mail
  // await page.getByRole('link', { name: 'postmaster@musicstudio-ziebart.de' }).click();
  // Stadtplan Ansicht
  // await page.getByRole('link', { name: 'Standortansicht im Stadtplan!' }).click();
});
