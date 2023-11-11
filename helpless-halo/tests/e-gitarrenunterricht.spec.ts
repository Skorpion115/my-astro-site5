import { test, expect } from '@playwright/test';

test('should be titled', async ({ page, context }) => {
    await context.route('**.webp', route => route.abort());
    await page.goto('https://www.musicstudio-ziebart.de/e-gitarrenunterricht');

    // Erwarte einen PageTitle
    await expect(page).toHaveTitle(/E-Gitarrenunterricht/);
    // Video Start button finden
    const locator = page.frameLocator('iframe[title="Joe Satriani - Ten Words Guitar Lesson+Tab"]').getByLabel('Play', { exact: true });
    await locator.click();

    // Überschrift H2 finden
    await expect(page.getByRole('heading', { name: 'Schule der Rockgitarre, Andreas Scheinhütte' })).toBeVisible();
    // Bild von der Rockgitarren Schule
    await page.getByAltText('E-Gitarrenschule von Andreas Scheinhuette').click();

    // await expect(page.getByText(/Für die E-Gitarre, [A-Za-z]+$/i)).toBeVisible();

    await expect(page.getByText('Für die E-Gitarre')).toBeVisible();

    await expect(page.getByText('Ein tolles Stück um eine E-Gitarre zu')).toBeVisible();

    // await expect(page.getByText('Welcome, John', { exact: true })).toBeVisible();
});