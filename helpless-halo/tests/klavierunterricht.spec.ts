import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:4321/klavierunterricht/');

  // Erwarte einen PageTitle
  await expect(page).toHaveTitle(/Klavierunterricht/);
  await expect(page.getByRole('heading', { name: 'Klavier oder Digitalpiano?' })).toBeVisible();
});