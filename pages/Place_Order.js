class PlaceOrderClass {
  place_Order_Btn() {
    cy.get('a[class="btn btn-default check_out"]')
      .as("chkout")
      .invoke("text")
      .then((PlaceOrder) => {
        expect(PlaceOrder).to.eq("Place Order");
      });

    cy.get("@chkout").should("have.text", "Place Order");
    cy.get("@chkout").click();
  }

  enter_name_On_Card() {
    cy.get('[data-qa="name-on-card"]').should("be.visible").type("Shahid Ali");
  }
  enter_card_Number() {
    cy.get('[data-qa="card-number"]')
      .should("be.visible")
      .type("5646546464456546");
  }
  enter_cvc_expiration_year() {
    cy.get('[data-qa="cvc"]').as("cvc").should("be.visible");
    cy.get("@cvc").should("not.be.disabled");
    cy.get("@cvc").type("025");

    cy.get('[data-qa="expiry-month"]').as("mm").should("be.visible");
    cy.get("@mm").should("not.be.disabled");
    cy.get("@mm").type("10");
    cy.get("@mm").should("have.attr", "type", "text");

    cy.get('[data-qa="expiry-year"]').as("mm").should("be.visible");
    cy.get("@mm").should("not.be.disabled");
    cy.get("@mm").type("2024");
    cy.get("@mm").should("have.attr", "type", "text");
    cy.get("@mm").should("have.prop", "required", true);

    cy.get('button[type="submit"][data-qa="pay-button"').as("confirmOrder");
    cy.get("@confirmOrder").should("have.attr", "type", "submit").click();
  }
}

export default PlaceOrderClass;
