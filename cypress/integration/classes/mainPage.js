export const mainPageSelectors = {
  mainPageHeader: ".logo.brave",
  loginDiv: '.header-top .layout div [data-popup-handler="auth"]',
  accLink: '.header-top [href="/ua/user/"]',
  searchInput: '[itemprop="query-input"]',
  searchButton: ".search-button",
};

export const loginSelectors = {
  loginForm: "#form-auth",
  loginFormHeader: "#form-auth .form-wrap .form-inner-wrap h2",
  loginInput: 'input[name="user_login"]',
  passwordInput: 'input[name="user_pw"]',
  loginButton:
    '#form-auth .form-wrap .form-inner-wrap .input-row:nth-child(4) [type="submit"]',
  forgotPasswordDiv: '[data-popup-handler="forget-password"]',
  regLink: '[href="/ua/register/"]',
  accHeader: ".page-user_account .page-header",
};

export const mainPageValues = {
  mainPageHeaderLink: "/ua/be_brave/",
  loginDivText: "Вхід до кабінету",
  accLink: "Кабінет",
};

export const loginValues = {
  loginFormHeader: "вхід до особистого кабінету",
  forgotPasswordLink: "Забули пароль?",
  regLink: "Реєстрація",
  loginButton: "Увійти",
  accHeader: "Особистий кабінет",
  incorrectPass: "incorrectPass",
};

export const searchValues = {
  flossText: "Зубна нитка",
};

export class MakeupMainPage {
  checkMainPageHeader(headerSelector, headerLink) {
    cy.get(headerSelector).should("exist").and("have.attr", "href");

    cy.get(headerSelector).invoke("attr", "href").should("eq", headerLink);
  }

  checkElementTextValue(elementSelector, assertion, expectedValue) {
    cy.get(elementSelector).should("exist").and(assertion, expectedValue);
  }

  changeInputValue(inputSelector, textToType) {
    cy.get(inputSelector)
      .should("exist")
      .and("be.enabled")
      .clear()
      .should("be.empty")
      .type(textToType)
      .should("have.value", textToType);
  }
}
