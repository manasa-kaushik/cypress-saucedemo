export default class LoginPageObject {
  username = "[data-test='username']";
  password = "[data-test='password']";
  loginButton = "[data-test='login-button']";
  loginConfig = require("../../fixtures/loginConfig.json");

  login(userType) {
    cy.visit("/");
    const username = this.loginConfig.username[userType];
    const passwordValue = this.loginConfig.password;
    if (username) {
      cy.get(this.username).type(username);
    }
    cy.get(this.password).type(passwordValue);
    cy.get(this.loginButton).click();
  }
}
