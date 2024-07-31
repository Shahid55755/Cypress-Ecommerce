class checkoutClass {
  Click_CheckOut() {
    cy.get("a[class='btn btn-default check_out']").as("checkout");
    //cy.get("@checkout").should("be.visible").click();
    cy.get("@checkout").should("be.visible");
    cy.get("@checkout").click();
  }
}

export default checkoutClass;
