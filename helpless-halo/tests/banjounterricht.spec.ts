import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('https://www.musicstudio-ziebart.de/banjounterricht/');

    // Erwarte einen PageTitle
    await expect(page).toHaveTitle(/Banjounterricht/);
    // Überschrift H2 finden
    await expect(page.getByRole('heading', { name: 'Flint Hill Special - Earl Scruggs' })).toBeVisible();
    //Video Start button finden
    await page.frameLocator('iframe[title="Flint Hill Special - Banjo Lesson"]').getByLabel('Play', { exact: true }).click();
    
    await page.frameLocator('iframe[title="Train 45 - Bluegrass Banjo"]').getByLabel('Play', { exact: true }).click();

    await page.frameLocator('iframe[title="Banjo Beginner Lesson 2"]').getByLabel('Play', { exact: true }).click();
});