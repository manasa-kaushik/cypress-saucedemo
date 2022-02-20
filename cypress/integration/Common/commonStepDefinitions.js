import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import CartPageObject from "../Cart/CartPageObject";
import LoginPageObject from "../Login/LoginPageObject";
import CommonPageObject from "./CommonPageObject";

const loginPageObject = new LoginPageObject();
const cartPageObject = new CartPageObject();
const commonPageObject = new CommonPageObject();

Given("I login from login page as {string}", (userType) => {
  loginPageObject.login(userType);
});

Then("I see the inventory page", () => {
  cy.get(".title").contains("Products");
});

And("I click on the cart icon", () => {
  cy.get(cartPageObject.cart).click();
});

Then("I see error message for {string}", (errorType) => {
  const errorMessage = loginPageObject.loginConfig.errors[errorType];
  console.log("errorMessage", errorMessage);
  cy.get(commonPageObject.error).should("be.visible");
  if (errorMessage) {
    cy.get(commonPageObject.error).contains(errorMessage);
  }
});

And("I click on close to dismiss the error", () => {
  commonPageObject.dismissErrorMessage();
});

And("I click on the hamburger menu", ()=>{
  commonPageObject.clickHamburger();
});

Then("I click on logout", ()=>{
  loginPageObject.logout();
});