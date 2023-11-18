import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:4321/klavierunterricht/');

  // Erwarte einen PageTitle
  await expect(page).toHaveTitle(/Klavierunterricht/);
  // Überschrift H2 finden
  await expect(page.getByRole('heading', { name: 'Klavier oder Digitalpiano?' })).toBeVisible();
  //Video finden
  // const locator = page.frameLocator('iframe[title="PRAELUDIUM BMV 927 - Johann Sebastian Bach"]').getByLabel('Play', { exact: true });
  // await locator.click();
  // await page.frameLocator('iframe[title="PRAELUDIUM BMV 927 - Johann Sebastian Bach"]').getByLabel('Play', { exact: true }).click();
  await page.getByTitle('PRAELUDIUM BMV 927 - Johann Sebastian Bach').click();
});