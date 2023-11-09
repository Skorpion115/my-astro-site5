import { test, expect } from '@playwright/test';

test('Metadaten sind korrekt', async ({ page }) => {
    await page.goto('https://www.musicstudio-ziebart.de/');

    // Erwarte das die Seite einen Page Titel hat
    await expect(page).toHaveTitle(/Musikunterricht/);

    // Erwarte das die Seite eine Überschrift mit den Namen Music Lesson enthält
    await expect(page.getByRole('heading', { name: 'Music Lesson' })).toBeVisible();
    
    
    // Erwarte das die Seite eine Überschrift mit den Namen MUSICSTUDIO_ZIEBART enthält
    await expect(page.getByRole('heading', { name: 'MUSICSTUDIO_ZIEBART' })).toBeVisible();  
  });