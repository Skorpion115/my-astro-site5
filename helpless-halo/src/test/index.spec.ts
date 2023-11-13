import { test, expect } from '@playwright/test';

test('Metadaten sind korrekt', async ({ page }) => {
    await page.goto("http://localhost:4321");
  
    await expect(page).toHaveTitle('Musikunterricht');
  });