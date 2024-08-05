class contactUsForm {
  selectContactUsform() {
    cy.get('a[href="/contact_us"]').find("i.fa-envelope").click();
  }
  enterContactName(name) {
    cy.get('[data-qa="name"]').type(name);
  }
  enterContactEmail(email) {
    cy.get('[data-qa="email"]').type(email);
  }
  enterContactSubject(contact) {
    cy.get('[data-qa="subject"]').type(contact);
  }

  enterContactMessage(message) {
    cy.get('[data-qa="message"]').type(message);
  }
  enterContactChooseFile() {
    cy.get('input[type="file"]').attachFile("Images/shahid.png");
  }
  enterSubmitButton() {
    cy.get('[data-qa="submit-button"]').click();
  }
  SuccessMessage() {
    cy.get(".status.alert.alert-success").should(
      "contain.text",
      "Success! Your details have been submitted successfully."
    );
  }
}

export default contactUsForm;
