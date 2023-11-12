import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('http://localhost:4321/harmonielehre/');

    // Erwarte einen PageTitle
    await expect(page).toHaveTitle(/Harmonielehre/);
    // Überschrift H2 finden
    await expect(page.getByRole('heading', { name: 'Lernvideos' })).toBeVisible();
    await page.getByRole('link', { name: 'leeres Notenblatt' }).click();
    //Video Start button finden
    await page.frameLocator('iframe[title="Notenschrift"]').getByLabel('Play', { exact: true }).click();
    await page.frameLocator('iframe[title="Intervalle"]').getByLabel('Play', { exact: true }).click();
    await page.frameLocator('iframe[title="Dreiklänge"]').getByLabel('Play', { exact: true }).click();
    await page.frameLocator('iframe[title="Funktionstheorie"]').getByLabel('Play', { exact: true }).click();
}); 