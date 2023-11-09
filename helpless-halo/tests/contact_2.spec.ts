import { test, expect } from '@playwright/test';

test('should be titled', async ({ page, context }) => {
    await context.route('**.webp', route => route.abort());
    await page.goto('http://localhost:4321/contact_2/');
  
  // Erwarte das die Seite einen Page Titel hat
  await expect(page).toHaveTitle(/Contact Me/);
});