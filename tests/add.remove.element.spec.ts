import { expect, test, Page } from '@playwright/test';

test.describe('add remove element test', () => {
    let page: Page;

    test.beforeEach(async ({ context }) => {
        page = await context.newPage();
        await page.goto('http://the-internet.herokuapp.com/');;
        await page.click('text=Add/Remove Elements');
    });

    test('add new element', async() => {
        await page.click('text=Add Element');
        var elements = await page.waitForSelector('#elements');
        expect(await elements.screenshot()).toMatchSnapshot('one_element.png');
    })
})