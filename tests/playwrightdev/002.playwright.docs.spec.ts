import { test, expect } from '@playwright/test'

test('test docs page title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.click('text=Docs')
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle('Getting started | Playwright');
})

test('test docs page screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.click('text=Docs')
    expect(await page.screenshot()).toMatchSnapshot('docs page.png', { threshold: 0.2 });
})
