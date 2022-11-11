import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

import { BASE_URL } from "../../../helpers/const";
import {
  visitPage,
  checkElementState,
  clickButton,
  checkUrl,
  clickDivLink,
  checkInputStateValue,
} from "../../../helpers/commonFunctions";

import {
  mainPageSelectors,
  mainPageValues,
  MakeupMainPage,
  searchValues,
} from "../../../classes/mainPage";

import {
  searchResultsSelectors,
  searchResultsValues,
  SearchResults,
} from "../../../classes/searchResultsPage";

import {
  productPageSelectors,
  productPageValues,
  ProductPage,
} from "../../../classes/productPage";

const makeupMainPage = new MakeupMainPage();
const searchResults = new SearchResults();
const productPage = new ProductPage();

Given("2.1. I visit the Makeup main page", () => {
  visitPage(BASE_URL);
});

And("2.1. I check the Main Page title", () => {
  makeupMainPage.checkMainPageHeader(
    mainPageSelectors.mainPageHeader,
    mainPageValues.mainPageHeaderLink
  );
});

When("2.1. I check the Search field", () => {
  checkInputStateValue(mainPageSelectors.searchInput, true);
});

And("2.1. I type a search value", () => {
  makeupMainPage.changeInputValue(
    mainPageSelectors.searchInput,
    searchValues.flossText
  );
});

And("2.1. I check the Search button", () => {
  checkInputStateValue(mainPageSelectors.searchButton, true);
});

And("2.1. I click the Search button", () => {
  clickButton(mainPageSelectors.searchButton);
});

And("2.1. I check the new url", () => {
  checkUrl(searchResultsValues.searchPageUrl);
});

And("2.1. I check the Search Results title", () => {
  searchResults.checkSearchPageHeader(
    searchResultsSelectors.searchResultsH1,
    searchResultsValues.searchResultsH1
  );
});

And("2.1. I check the first product card", () => {
  checkElementState(searchResultsSelectors.productCardFirst, true); //check the product card
  searchResults.checkProductCardName(
    searchResultsSelectors.productCardFirstLink,
    searchValues.flossText
  ); //check that product name contains search value
});

And("2.1. I click the product", () => {
  clickDivLink(searchResultsSelectors.productCardFirst);
});

And("2.1. I check new url again", () => {
  checkUrl(productPageValues.productPageUrl);
});

And("2.1. I check the Cart block", () => {
  checkElementState(productPageSelectors.cartContainer, true); //check the product card
});

And("2.1. I check the Cart products q-ty", () => {
  productPage.checkCartValue(productPageSelectors.cartProductsQtySpan, 0);
});

And("2.1. I check the product name", () => {
  productPage.ckeckProductName(
    productPageSelectors.productNameSpan,
    "contain",
    searchValues.flossText
  );
});

And("2.1. I check the Buy button", () => {
  checkInputStateValue(productPageSelectors.productBuyButton, true);
});

And("2.1. I click the Buy button", () => {
  clickDivLink(productPageSelectors.productBuyButton);
});

And("2.1. I close Cart popup", () => {
  clickDivLink(productPageSelectors.cartCloseDiv);
});

Then("2.1. I check the Cart products q-ty increased", () => {
  productPage.checkCartValue(productPageSelectors.cartProductsQtySpan, 1);
});
