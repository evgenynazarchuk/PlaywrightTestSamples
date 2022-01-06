import { test, expect } from '@playwright/test'

test('001.test.spec.ts', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    expect(await page.screenshot()).toMatchSnapshot('001.test.page.png');
})