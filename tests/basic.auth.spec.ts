import { expect, test } from '@playwright/test'

test.describe('basic auth', () => {
    
    test('\
    arrange page with basic auth \
    act use valid login and pass \
    assert successful authorization', 
    async ({ browser }) => {
        // arrange
        const context = await browser.newContext({
            httpCredentials: {
              username: 'admin',
              password: 'admin',
            }});
        const page = await context.newPage();
        await page.goto('http://the-internet.herokuapp.com/');

        // act
        await page.click('text=Basic Auth');

        // assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('successful_auth.png');
    })

    test('\
    arrange page with basic auth \
    act use invalid login and pass \
    assert unsuccessful authorization', 
    async ({ browser }) => {

        // arrange
        const context = await browser.newContext({
            httpCredentials: {
              username: 'user',
              password: 'user',
            }});
        const page = await context.newPage();
        await page.goto('http://the-internet.herokuapp.com/');

        // act
        await page.click('text=Basic Auth');

        // assert
        const screenshot = await page.screenshot();
        expect(screenshot).toMatchSnapshot('unsuccessful_auth.png');
    })
})