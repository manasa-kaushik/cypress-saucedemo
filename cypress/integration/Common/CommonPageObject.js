export default class CommonPageObject {
  error = "[data-test='error']";
  dismissError = ".error-button > .svg-inline--fa";
  hamburgerMenu = "#react-burger-menu-btn";
  dismissErrorMessage() {
    cy.get(this.dismissError).click();
    cy.get(this.error).should("not.exist");
  };
  clickHamburger() {
    cy.get(this.hamburgerMenu).click();
  }
}
