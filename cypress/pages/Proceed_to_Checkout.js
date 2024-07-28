class checkoutClass {
  Click_CheckOut() {
    cy.get("a[class='btn btn-default check_out']").as("checkout");
    cy.get("@checkout").should("be.visible").click();
  }
}

export default checkoutClass;
