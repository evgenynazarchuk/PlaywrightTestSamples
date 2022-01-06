import { test, expect } from '@playwright/test'

test('test main page title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
})

test('test main page screenshot', async ({ context }) => {
    let page = await context.newPage();
    await page.goto('https://playwright.dev/');
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('main page.png', { threshold: 0.2 });
})