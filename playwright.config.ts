import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 3 : 0,
    workers: process.env.CI ? 6 : 6,
    use: {
      trace: 'on-first-retry',
    },
    reporter: [ ['html', { outputFolder: 'playwright-report' }] ],
    projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'], viewport: { width: 1024, height: 768 } },
      },
      {
        name: 'wide chromium',
        use: { ...devices['Desktop Chrome'], viewport: { width: 2048, height: 1536 } },
      },
      {
        name: 'iPhone 11 Pro',
        use: { ...devices['iPhone 11 Pro'] },
      },
    ]
  };
  
  export default config;