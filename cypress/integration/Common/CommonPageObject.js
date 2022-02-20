export default class CommonPageObject {
  error = "[data-test='error']";
  dismissError = ".error-button > .svg-inline--fa";
  dismissErrorMessage() {
    cy.get(this.dismissError).click();
    cy.get(this.error).should("not.exist");
  }
}
