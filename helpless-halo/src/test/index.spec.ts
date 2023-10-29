test('Metadaten sind korrekt', async ({ page }) => {
    await page.goto("/");
  
    await expect(page).toHaveTitle('Musikunterricht');
  });