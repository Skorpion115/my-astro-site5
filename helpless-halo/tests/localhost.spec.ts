import { test, expect } from '@playwright/test';

test('should be titled', async ({ page, context }) => {
    await context.route('**.webp', route => route.abort());
    await page.goto('http://localhost:4321/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Musikunterricht/);
});

test('Metadaten sind korrekt', async ({ page }) => {
    await page.goto('http://localhost:4321/');

    // Erwarte das die Seite einen Page Titel hat
    await expect(page).toHaveTitle(/Musikunterricht/);

    // Erwarte das die Seite eine Überschrift mit den Namen Music Lesson enthält
    await expect(page.getByRole('heading', { name: 'Music Lesson' })).toBeVisible();
    
    
    // Erwarte das die Seite eine Überschrift mit den Namen MUSICSTUDIO_ZIEBART enthält
    await expect(page.getByRole('heading', { name: 'MUSICSTUDIO_ZIEBART' })).toBeVisible();  
  });