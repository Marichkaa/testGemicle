import { BASE_URL } from "../helpers/const";

export const productPageSelectors = {
  productNameSpan: ".product-item__name",
  productBuyButton: ".product-item__button .button.buy",
  cardPopupDiv: ".popup cart",
  header: ".page-header",
  productCartDiv: ".product-list_product-item",
  cartContainer: ".header-basket",
  cartProductsQtySpan: ".header-basket span span",
  cartCloseDiv: ".popup.cart .popup-close",
};

export const productPageValues = {
  productPageUrl: `${BASE_URL}product/`,
  cartText: "Кошик",
};

export class ProductPage {
  ckeckProductName(productNameSelector, assertion, productNameValue) {
    cy.get(productNameSelector)
      .should("exist")
      .and(assertion, productNameValue);
  }

  checkCartHeader(cardPopupDivSelector, cardHeaderSelector, cardHeaderValue) {
    cy.get(cardPopupDivSelector)
      .find(cardHeaderSelector)
      .eq(0)
      .should("exist")
      .and(have.text, cardHeaderValue);
  }

  checkCartValue(productsQtySelector, productsQty) {
    cy.get(productsQtySelector).should("contain", productsQty);
  }
}
