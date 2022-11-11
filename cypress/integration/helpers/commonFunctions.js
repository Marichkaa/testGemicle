export const visitPage = (urlValue) => {
  cy.visit(urlValue);
};

export const checkUrl = (urlValue) => {
  cy.url().should("include", urlValue);
};

export const checkElementState = (elementSelector, isExists) => {
  if (isExists) {
    cy.get(elementSelector).should("exist");
  } else {
    cy.get(elementSelector).should("not.exist");
  }
};

export const clickButton = (buttonSelector) => {
  cy.get(buttonSelector).should("exist").and("be.enabled").click();
};

export const clickDivLink = (elementSelector) => {
  cy.get(elementSelector).should("exist").click();
};

export const checkInputStateValue = (
  buttonSelector,
  isEnabled,
  assertion,
  expectedValue
) => {
  cy.get(buttonSelector).should("exist");
  if (isEnabled) {
    cy.get(buttonSelector).should("be.enabled");
  } else {
    cy.get(buttonSelector).should("be.bisabled");
  }
  if (assertion) {
    cy.get(buttonSelector).should(assertion, expectedValue);
  }
};
