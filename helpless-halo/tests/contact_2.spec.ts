import { test, expect } from '@playwright/test';

test('should be titled', async ({ page, context }) => {
    await context.route('**.webp', route => route.abort());
    await page.goto('http://localhost:4321/contact_2/');
  
  // Erwarte das die Seite einen Page Titel hat
  await expect(page).toHaveTitle(/Contact Me/);

  // Theme Toggle
  await page.locator('#themeToggle').click();
  // Locater über Label finden
  await page.getByLabel('Betreff').fill('Hier den Betreff eintragen');

  // Geburtsdatum über Label finden
  await page.getByLabel('Geburtsdatum:').click();

  await page.getByLabel('Wunschtermin:').click();

  await page.getByLabel('Telefon:').fill('0911/123456');

  await page.getByLabel('Instrument:').fill('z.B. Gitarre');

  await page.getByLabel('Email:').fill('name@example.de');

  await page.getByLabel('Nachricht:').fill('Wenn Sie wollen schreiben Sie hier eine Nachricht...');

  await page.getByLabel('Vorname:').fill('z.B. Max');

  await page.getByLabel('Nachname:').fill('z.B. Müller');

  await page.getByLabel('Strasse:').fill('z.B. Nürnberger Str. 12')

  await page.getByLabel('Ort:').fill('z.B. Nürnberg');

  await page.getByLabel('Postleitzahl:').fill('90453');

  await page.getByLabel('Eltern:').fill('Eltern');

  // Suchen Sie das Element anhand seiner Rolle mit dem Namen "Senden"
  await page.getByRole('button', { name: /Senden/i }).click();
  // link zurück
  await page.getByRole('link', { name: 'zurück' }).click();
});