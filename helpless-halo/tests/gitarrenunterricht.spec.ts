import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://www.musicstudio-ziebart.de/gitarrenunterricht/');

    // Erwarte einen PageTitle
    await expect(page).toHaveTitle(/Gitarrenunterricht/);
    // Überschrift H2 finden
    await expect(page.getByRole('heading', { name: 'Yesterday - Beatles' })).toBeVisible();
    //Video Start button finden
    await page.frameLocator('iframe[title="Beatles - Yesterday Gitarre Tutorial"]').getByLabel('Play', { exact: true }).click();

    await expect(page.getByRole('heading', { name: 'City Of NewOrleans - Arlo Guthrie' })).toBeVisible();
    // Video
    await page.frameLocator('iframe[title="City Of NewOrleans - Arlo Guthrie"]').getByLabel('Play', { exact: true }).click();

    await expect(page.getByRole('heading', { name: 'Fridolin' })).toBeVisible();
    // Bilder
    await page.getByAltText('Teschner Gitarrenschule Fridolin').click();
    // Text
    await expect(page.getByText('Ich nehme für den Gitarrenunterricht')).toBeVisible();
    // Bilder
    await page.getByAltText('Ferdinand Sor Etüden').click();
    // Überschrift
    await expect(page.getByRole('heading', { name: 'Fernando Sor Opus 35, Opus 31' })).toBeVisible();
    // Text
    await expect(page.getByText('Wenn die beiden Bänder gespielt worden sind')).toBeVisible();  
});