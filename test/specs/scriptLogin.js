import LoginPage from '../pageobjects/login.page';



// This is a simple test that logs in to the SauceDemo website with valid credentials
describe('SauceDemo Login Test', () => {
    it('should log in with valid credentials', async () => {
        // await browser.url('https://www.saucedemo.com/'); // Open the website
        
        // const usernameInput = await $('#user-name'); // Select the username field
        // const passwordInput = await $('#password'); // Select the password field
        // const loginButton = await $('#login-button'); // Select the login button
        
        // await usernameInput.setValue('standard_user'); // Enter username
        // await passwordInput.setValue('secret_sauce'); // Enter password
        // await loginButton.click(); // Click login button

        LoginPage.open() 
        LoginPage.firstUserLogin('standard_user', 'secret_sauce')
        LoginPage.secondUserLogin('locked_out_user', 'secret_sauce')
        LoginPage.thirdUserLogin('problem_user', 'secret_sauce')
        LoginPage.fourthUserLogin('performance_glitch_user', 'secret_sauce')
        LoginPage.fifthUserLogin('error_user', 'secret_sauce')
        LoginPage.sixthUserLogin('visual_user', 'secret_sauce')
        
        LoginPage.negativeLogin('incorrect','incorrect')
    });
});
