import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPageObject from "./LoginPageObject";

const loginPageObject = new LoginPageObject();

Given("I see the login page", () => {
  cy.visit("/");
  cy.get(loginPageObject.loginButton).should("have.value", "Login");
});

When("I enter a valid {string} username", (userType) => {
  const username = loginPageObject.loginConfig.username[userType];
  if (username) {
    cy.get(loginPageObject.username).type(username);
  }
});

And("I enter a valid password", () => {
  const passwordValue = loginPageObject.loginConfig.password;
  cy.get(loginPageObject.password).type(passwordValue);
});

And("I click on the login button", () => {
  cy.get(loginPageObject.loginButton).click();
});

When("I enter an invalid username", () => {
  cy.get(loginPageObject.username).type("invalidUser");
});
When("I enter an invalid password", () => {
  cy.get(loginPageObject.password).type("secret_saucesdhv");
});
