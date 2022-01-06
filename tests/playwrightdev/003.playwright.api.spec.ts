import { test, expect } from '@playwright/test'

test('test api page title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.click('text=API')
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle('Playwright Library | Playwright');
})

test('test api page screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.click('text=API');
    await page.waitForLoadState('networkidle');
    expect(await page.screenshot()).toMatchSnapshot('api page.png', { threshold: 0.2 });
})
