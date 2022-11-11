import { BASE_URL } from "../helpers/const";

export const searchResultsSelectors = {
  searchResultsH1: "h1.page-header",
  searchResultsContainer: ".catalog-products",
  productCardFirst: ".simple-slider-list__item.labeled:nth-child(1)",
  productCardFirstLink:
    ".simple-slider-list__item.labeled:nth-child(1) .simple-slider-list__name",
};

export const searchResultsValues = {
  searchPageUrl: `${BASE_URL}search/`,
  searchResultsH1: "Результати пошуку",
};

let pickedProductName = "";

export class SearchResults {
  checkSearchPageHeader(headerSelector, headerText) {
    cy.get(headerSelector).should("exist").and("have.text", headerText);
  }

  async checkProductCardName(productCardLink, expectedValue) {
    cy.get(productCardLink).as("productName");

    cy.get("@productName").should("exist").and("contain", expectedValue);
  }
}
