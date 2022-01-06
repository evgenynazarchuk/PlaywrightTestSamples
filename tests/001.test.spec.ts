import { test, expect } from '@playwright/test'

test('001_1.test.spec.ts', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
})

test('001_2.test.spec.ts', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    expect(await page.screenshot()).toMatchSnapshot('001_2.test.page.png', { threshold: 0.2 });
})
