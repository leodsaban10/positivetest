import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

/*describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})
*/
describe('SauceDemo Login Test', () => {
    it('should log in with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com/'); // Open the website
        
        const usernameInput = await $('#user-name'); // Select the username field
        const passwordInput = await $('#password'); // Select the password field
        const loginButton = await $('#login-button'); // Select the login button
        
        await usernameInput.setValue('standard_user'); // Enter username
        await passwordInput.setValue('secret_sauce'); // Enter password
        await loginButton.click(); // Click login button
        
        // Verify successful login
        await expect(browser).toHaveUrlContaining('inventory.html');
        
        const inventoryContainer = await $('.inventory_container');
        await expect(inventoryContainer).toBeDisplayed();
    });
});