class addToCartClass {
  additemToCart() {
    cy.get(".add-to-cart", { timeout: 10000 })
      .should("be.visible")
      .first()
      .click();
  }

  Click_Cart() {
    cy.get("a[href='/view_cart']").parent("li").as("cart").should("be.visible");
    cy.get("@cart").click();
  }
}

export default addToCartClass;
