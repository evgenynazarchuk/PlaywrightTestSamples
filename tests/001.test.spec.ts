import { test, expect } from '@playwright/test'

test('test main page title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
})

test('test main page screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.click('text=Docs')
    expect(await page.screenshot()).toMatchSnapshot('main page.png', { threshold: 0.2 });
})
