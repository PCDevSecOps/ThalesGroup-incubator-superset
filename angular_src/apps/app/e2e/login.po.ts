import {
  browser,
  by,
  element,
  WebElement
  } from 'protractor';


export class LoginPage {
  pwd= 'admin123';
  private credentials = {
    username: 'admin',
    password: this.pwd
  }

  navigateTo() {
    return browser.get('/login');
  }

  fillCredentials(credentias: any = this.credentials) {
    element(by.css('[formcontrolname="username"]')).sendKeys(credentias.username);
    element(by.css('[formcontrolname="password"]')).sendKeys(credentias.password);
    element(by.css('.gvs-login-button')).click();
  }

  getError() {
    return element(by.css('.gvs-error-message-wrapper > span'));
  }
}
