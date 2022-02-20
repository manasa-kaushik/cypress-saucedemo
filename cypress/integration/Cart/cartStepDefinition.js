import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import CommonPageObject from "../Common/CommonPageObject";
import CartPageObject from "./CartPageObject";

const cartPageObject = new CartPageObject();
const commonPageObject = new CommonPageObject();

Given("I see the products listed", () => {
  cy.get(cartPageObject.inventoryList)
    .children()
    .should("have.length.greaterThan", 0);
});

When("I click on add to cart icon for product {string}", (product) => {
  const productCart = cartPageObject.products[product].addToCart;
  cy.get(productCart).click();
});

Then("I see the product count {string} in the cart logo", (count) => {
  cy.get(cartPageObject.cartCount).contains(count);
});

And("I see the {string} items in the cart list", (count) => {
  cy.get(cartPageObject.productsCartList)
    .children(".cart_item")
    .should("have.length", count);
});

Then(
  "I see the added item {string} in the cart list page with label {string}",
  (product, productLabel) => {
    const productElement = cartPageObject.products[product].cartListLabel;
    cy.get(productElement).contains(productLabel);
  }
);

Then(
  "I see the added item {string} in the cart list page with price {string}",
  (product, cartListPrice) => {
    const productElement = cartPageObject.products[product].cartListPrice;
    cy.get(productElement).contains(cartListPrice);
  }
);

And("I click the on checkout", () => {
  cy.get(cartPageObject.checkout).click();
});

Then("I enter {string} in the checkout form", (formInput) => {
  cy.get(cartPageObject.checkoutForm[formInput]).type(
    cartPageObject.cartConfig[formInput]
  );
});

And("I click on continue", () => {
  cy.get(cartPageObject.continue).click();
});

Then("I see the item total match with {string}", (price) => {
  cy.get(cartPageObject.totalItem).contains(price);
});

And("I click on the hamburger manu", () => {
  commonPageObject.clickHamburger();
});
