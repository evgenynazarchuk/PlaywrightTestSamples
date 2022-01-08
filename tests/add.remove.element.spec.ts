import { expect, test, Page } from '@playwright/test';

test.describe('add, remove element test', () => {
    let page: Page;

    test.beforeEach(async ({ context }) => {
        // arrange
        page = await context.newPage();
        await page.goto('http://the-internet.herokuapp.com/');
        await page.click('text=Add/Remove Elements');
    });

    test('\
    arrange: page without elements \
    act: nothing \
    assert: screenshot page without elements', 
    async () => {
        // arrange
        // act
        // assert
        await expect(page).toHaveTitle('The Internet');
        await expect(page).toHaveURL('http://the-internet.herokuapp.com/add_remove_elements/');
        // extended assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('default_page_without_elements.png');
    });

    test('\
    arrange: page without elements \
    act: add new element \
    assert: screenshot page with one element', 
    async () => {
        // arrange
        // act
        await page.click('text=Add Element');
        // assert
        const button = page.locator('#elements>button');
        const buttonBackgroundColor = await button.evaluate(el => getComputedStyle(el).backgroundColor);
        const buttonBorderColor = await button.evaluate(el => getComputedStyle(el).borderColor);
        expect(buttonBackgroundColor === 'rgb(43, 166, 203)').toBeTruthy();
        expect(buttonBorderColor === 'rgb(34, 132, 161)').toBeTruthy();
        // extended assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('one_element.png');
    });

    test('\
    arrange: page with one element \
    act: delete one element \
    assert: screenshot page without added element', 
    async () => {
        // arrange
        await page.click('text=Add Element');
        // act
        await page.click('text=Delete');
        // assert
        // extended assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('empty_element.png');
    });

    test('\
    arrange page without elements \
    act add two elements \
    assert screenshot page with two elements', async () => {
        // arrange
        // act
        await page.click('text=Add Element');
        await page.click('text=Add Element');
        // assert
        const buttonCounter = await page.locator('#elements>button').count();
        expect(buttonCounter === 2).toBeTruthy();
        // extended assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('two_element.png');
    });

    test('\
    arrange page with two element \
    act delete one element \
    assert screenshot page with one element', async () => {
        // arrange
        await page.click('text=Add Element');
        await page.click('text=Add Element');
        // act
        await page.click('text=Delete');
        // assert
        // extended assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('delete_one_from_two_element.png');
    });

    test('\
    arrange page with two elements \
    act delete two elements \
    assert screenshot page without elements', 
    async () => {
        // arrange
        await page.click('text=Add Element');
        await page.click('text=Add Element');
        // act
        await page.click('text=Delete');
        await page.click('text=Delete');
        // assert
        // extended assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('delete_all_two_element.png');
    });
})