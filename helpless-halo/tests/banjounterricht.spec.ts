import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('http://localhost:4321/banjounterricht/');

    // Erwarte einen PageTitle
    await expect(page).toHaveTitle(/Banjounterricht/);
    // Überschrift H2 finden
    await expect(page.getByRole('heading', { name: 'Flint Hill Special - Earl Scruggs' })).toBeVisible();
    //Video Start button finden
    // await page.frameLocator('iframe[title="Flint Hill Special - Banjo Lesson"]').getByLabel('Play', { exact: true }).click();
    await page.getByTitle('Flint Hill Special - Banjo Lesson').click();
    
    await expect(page.getByRole('heading', { name: 'Train 45' })).toBeVisible();
   
    await page.getByTitle('Train 45 - Bluegrass Banjo').click();

    await expect(page.getByRole('heading', { name: 'Cripple Creek' })).toBeVisible();

    await page.getByTitle('Banjo Beginner Lesson').click();
    
});