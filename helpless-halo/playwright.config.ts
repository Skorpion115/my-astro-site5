import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Paralleles Ausführen von Tests in Dateien */
  fullyParallel: true,
  /* Der Build auf CI schlägt fehl, wenn Sie test.only versehentlich im Quellcode verlassen haben. */
  forbidOnly: !!process.env.CI,
  /* Wiederholen Sie den Versuch nur auf CI */
  retries: process.env.CI ? 2 : 0,
  /* Deaktivieren Sie parallele CI-Tests. */
  workers: process.env.CI ? 1 : undefined,
  /* Zu verwendender Reporter. Siehe https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Freigegebene Einstellungen für alle unten aufgeführten Projekte. Siehe https://playwright.dev/docs/api/class-testoptions. */
   use: {
    /* Basis-URL, die in Aktionen wie 'await page.goto('/')' verwendet werden soll. */
      baseURL: 'http://localhost:4321',

    /* Sammeln Sie eine Ablaufverfolgung, wenn Sie den fehlgeschlagenen Test wiederholen. Siehe https://playwright.dev/docs/trace-viewer */
     trace: 'on-first-retry',
   },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Führen Sie den lokalen Entwicklungsserver aus, bevor Sie mit den Tests beginnen. */
      webServer: {
      command: 'npm run start',
      url: 'http://localhost:4321',
      reuseExistingServer: !process.env.CI,
    },
});
