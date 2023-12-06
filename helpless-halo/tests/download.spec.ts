import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://www.musicstudio-ziebart.de/download/');

  // Erwarte eine PageTitle
  await expect(page).toHaveTitle(/Download/);
  // Theme Toggle
  await page.locator('#themeToggle').click();
  // Expects page to have a heading with the name of Music Lesson.
  await expect(page.getByRole('heading', { name: 'GM Midi Files mit Noten zum downloaden!' })).toBeVisible();

  // Video Aus der neuen Welt - Antonin Dvorak
  await page.getByTitle('Aus der neuen Welt - Antonin Dvorak').click();

  // Link auf anhören Auf einem persischen Markt
  await page.getByRole('row', { name: 'anhören ansehen download 244 KB' }).getByRole('link').first().click();
  // Link ansehen Auf einem persischen Markt
  await page.getByRole('row', { name: 'anhören ansehen download 244 KB' }).getByRole('link').nth(1).click();
  // Link Auf einem persischen Markt Zip Download
  await page.getByRole('link', { name: 'download 244 KB' }).click();

  // Link anhören Barcarole - Offenbach
  await page.locator('tr:nth-child(4) > td > .normal-links').first().click();
  // Link ansehen Barcarole - Offenbach
  await page.locator('tr:nth-child(4) > td:nth-child(2) > .normal-links').click();
  // Link zum Zip Download von Barcarole
  await page.getByRole('link', { name: 'download 259 KB' }).first().click();

  // Link anhören Kleine Nachtmusik von Mozart
  await page.getByRole('row', { name: 'anhören ansehen download 414 KB' }).getByRole('link').first().click();
  // Link ansehen Kleine Nachtmusik von Mozart
  await page.getByRole('row', { name: 'anhören ansehen download 414 KB' }).getByRole('link').nth(1).click();
  // Link Zip Download Kleine Nachtmusik von Mozart
  await page.getByRole('link', { name: 'download 414 KB' }).first().click();

  // Link anhören Mondschein Sonate von Beethoven
  await page.getByRole('row', { name: 'anhören ansehen download 360 KB' }).getByRole('link').first().click();
  // Link ansehen Mondschein Sonate von Beethoven
  await page.getByRole('row', { name: 'anhören ansehen download 360 KB' }).getByRole('link').nth(1).click();
  // Link Zip Download Mondschein Sonate Beethoven
  await page.getByRole('link', { name: 'download 360 KB' }).click();

  // Link anhören Morning von Edward Grieg
  await page.getByRole('row', { name: 'anhören ansehen download 360 KB' }).getByRole('link').first().click();
  // Link ansehen Morning von Edward Grieg
  await page.getByRole('row', { name: 'anhören ansehen download 360 KB' }).getByRole('link').nth(1).click();
  // Link Zip Download Morning von Edward Grieg
  await page.getByRole('link', { name: 'download 360 KB' }).click();

  // Swan Lake anhören von Tschaikovsky
  await page.getByRole('row', { name: 'anhören ansehen download 334 KB' }).getByRole('link').first().click();
  // Swan Lake ansehen von Tschaikovsky
  await page.getByRole('row', { name: 'anhören ansehen download 334 KB' }).getByRole('link').nth(1).click();
  // Swan Lake Zip Download von Tschaikovsky
  await page.getByRole('link', { name: 'download 334 KB' }).click();

  // Aloha Oe anhören
  await page.getByRole('row', { name: 'anhören ansehen download 109 KB' }).getByRole('link').first().click();
  // Aloha Oe ansehen
  await page.getByRole('row', { name: 'anhören ansehen download 109 KB' }).getByRole('link').nth(1).click();
  // Aloha Oe Zip Download
  await page.getByRole('link', { name: 'download 109 KB' }).click();

  // anhören Fledermaus von Johann Strauss
  await page.getByRole('row', { name: 'anhören ansehen download 109 KB' }).getByRole('link').first().click();
  // ansehen Fledermaus von Johann Strauss
  await page.getByRole('row', { name: 'anhören ansehen download 443 KB' }).getByRole('link').nth(1).click();
  // Zip Download Fledermaus von Johann Strauss
  await page.getByRole('link', { name: 'download 443 KB' }).click();

  // anhören Die Schlittschuhläufer von Emil Waldteufel
  await page.getByRole('row', { name: 'anhören ansehen download 530 KB' }).getByRole('link').first().click();
  // ansehen Die Schlittschuläufer von Emil Waldteufel
  await page.getByRole('row', { name: 'anhören ansehen download 530 KB' }).getByRole('link').nth(1).click();
  // Zip Download Die Schlittschuhläufer von Emil Waldteufel
  await page.getByRole('link', { name: 'download 530 KB' }).click();

  // Aus der neuen Welt ansehen
  await page.getByRole('row', { name: 'anhören siehe oben Video! ansehen' }).getByRole('link').click();

  // Ganz unten der Link Home
  await page.getByRole('link', { name: 'home', exact: true }).click();
});
