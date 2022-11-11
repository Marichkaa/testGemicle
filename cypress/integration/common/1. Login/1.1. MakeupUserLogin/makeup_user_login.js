import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

import { BASE_URL, USER } from "../../../helpers/const";
import {
  visitPage,
  clickButton,
  clickDivLink,
  checkElementState,
  checkInputStateValue,
} from "../../../helpers/commonFunctions";

import {
  mainPageSelectors,
  loginSelectors,
  mainPageValues,
  loginValues,
  MakeupMainPage,
} from "../../../classes/mainPage";

const makeupMainPage = new MakeupMainPage();

Given("1.1. I visit the Makeup main page", () => {
  visitPage(BASE_URL);
});

And("1.1. I check the Main Page title", () => {
  makeupMainPage.checkMainPageHeader(
    mainPageSelectors.mainPageHeader,
    mainPageValues.mainPageHeaderLink
  );
});

When("1.1. I check the Login div", () => {
  makeupMainPage.checkElementTextValue(
    mainPageSelectors.loginDiv,
    "have.text",
    mainPageValues.loginDivText
  );
});

And("1.1. I click the Login div", () => {
  clickDivLink(mainPageSelectors.loginDiv);
});

And("1.1. I check the Login form", () => {
  checkElementState(loginSelectors.loginForm, true); //check if form exists

  makeupMainPage.checkElementTextValue(
    loginSelectors.loginFormHeader,
    "have.text",
    loginValues.loginFormHeader
  ); //login form header check

  checkInputStateValue(loginSelectors.loginInput, true); //login form login input check

  checkInputStateValue(loginSelectors.passwordInput, true); //login form password input check

  makeupMainPage.checkElementTextValue(
    loginSelectors.forgotPasswordDiv,
    "have.text",
    loginValues.forgotPasswordLink
  ); //login form forgot password div check

  makeupMainPage.checkElementTextValue(
    loginSelectors.regLink,
    "have.text",
    loginValues.regLink
  ); //login form registrate link check

  checkInputStateValue(
    loginSelectors.loginButton,
    true,
    "have.text",
    loginValues.loginButton
  ); //login form login button check
});

And("1.1. I enter login", () => {
  makeupMainPage.changeInputValue(loginSelectors.loginInput, USER.login);
});

And("1.1. I enter password", () => {
  makeupMainPage.changeInputValue(loginSelectors.passwordInput, USER.password);
});

And("1.1. I click a login button", () => {
  clickButton(loginSelectors.loginButton);
});

Then("1.1. I check that Login form dissapeared", () => {
  checkElementState(loginSelectors.loginForm, false);
});

And("1.1. I check the Account div", () => {
  makeupMainPage.checkElementTextValue(
    mainPageSelectors.accLink,
    "have.text",
    mainPageValues.accLink
  );
});

And("1.1. I click the Account div", () => {
  clickDivLink(mainPageSelectors.accLink);
});

And("1.1. I check the header at the Account page", () => {
  makeupMainPage.checkElementTextValue(
    loginSelectors.accHeader,
    "have.text",
    loginValues.accHeader
  );
});
