class addToCartClass {
  additemToCart() {
    cy.get(".add-to-cart", { timeout: 10000 })
      .should("be.visible")
      .first()
      .click();
  }
}

export default addToCartClass;
