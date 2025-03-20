import { $ } from '@wdio/globals'
import Page from './page.js';
import { expect } from '@wdio/globals';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get headerProducts () {
        return $('//span[@data-test="title"][contains(text(), "Products")]');
    }

    get errorMessage () {
        return $('//h3[@data-test="error"][contains(text(), "Epic sadface: Username and password do not match any user in this service")]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async negativeLogin(username, password) {
        await this.login(username, password)
        await expect(this.errorMessage).toExist();
    }

    async firstUserLogin(username, password) {
        await this.login(username, password)
        await expect(this.headerProducts).toExist();
    }
    async secondUserLogin(username, password) {
        await this.login(username, password)
        await expect(this.headerProducts).toExist();
    }
    async thirdUserLogin(username, password) {
        await this.login(username, password)
        await expect(this.headerProducts).toExist();
    }
    async fourthUserLogin(username, password) {
        await this.login(username, password)
        await expect(this.headerProducts).toExist();
    }
    async fifthUserLogin(username, password) {
        await this.login(username, password)
        await expect(this.headerProducts).toExist();
    }
    async sixthtUserLogin(username, password) {
        await this.login(username, password)
        await expect(this.headerProducts).toExist();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
