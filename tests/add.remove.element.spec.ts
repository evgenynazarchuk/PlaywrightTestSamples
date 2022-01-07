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
    given page without elements \
    when nothing \
    then screenshot page without elements', 
    async () => {
        // arrange
        // act
        // assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('default_page_without_elements.png');
        await expect(page).toHaveURL('http://the-internet.herokuapp.com/add_remove_elements/');
    })

    test('\
    given page without elements \
    when add new element \
    then screenshot page with one element', 
    async () => {
        // arrange
        // act
        await page.click('text=Add Element');
        // assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('one_element.png');
    })

    test('\
    given page with one element \
    when delete one element \
    then screenshot page without added element', 
    async () => {
        // arrange
        await page.click('text=Add Element');
        // act
        await page.click('text=Delete');
        // assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('empty_element.png');
    })

    test('\
    given page without elements \
    when add two elements \
    then screenshot page with two elements', async () => {
        // arrange
        // act
        await page.click('text=Add Element');
        await page.click('text=Add Element');
        // assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('two_element.png');
    })

    test('\
    given page with two element \
    when delete one element \
    then screenshot page with one element', async () => {
        // arrange
        await page.click('text=Add Element');
        await page.click('text=Add Element');
        // act
        await page.click('text=Delete');
        // assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('delete_one_from_two_element.png');
    })

    test('\
    given page with two elements \
    when delete two elements \
    then screenshot page without elements', 
    async () => {
        // arrange
        await page.click('text=Add Element');
        await page.click('text=Add Element');
        // act
        await page.click('text=Delete');
        await page.click('text=Delete');
        // assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('delete_all_two_element.png');
    })
})