import { expect, test } from '@playwright/test'

test.describe('basic auth', () => {
    
    test('\
    given page with basic auth \
    when use valid login and pass \
    then successful authorization', async ({ browser }) => {
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
        const message = await page.locator('div.example>p')
        expect(message).toContainText('Congratulations! You must have the proper credentials.')
        expect(await page.screenshot()).toMatchSnapshot('successful_auth.png');
    })

    test('\
    given page with basic auth \
    when use invalid login and pass \
    then unsuccessful authorization', async ({ browser }) => {

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
        expect(await page.screenshot()).toMatchSnapshot('unsuccessful_auth.png');
    })
})