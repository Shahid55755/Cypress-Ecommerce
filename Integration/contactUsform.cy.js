import contactUsForm from "../pages/contactUsForm";
import { locators } from "../Locators/locator";
describe("Contact Us Form", () => {
  beforeEach("Before Each", () => {
    cy.visit(locators.login.loginURL);
  });
  const csf = new contactUsForm();

  it("Click Contact Us form", () => {
    csf.selectContactUsform();
  });

  it("Verify the functionality of contact Us form on valid credentials", () => {
    cy.fixture("Contact").then((contact) => {
      csf.selectContactUsform();
      csf.enterContactName(contact.Contact.name);
      csf.enterContactEmail(contact.Contact.email);
      csf.enterContactSubject(contact.Contact.subject);
      csf.enterContactMessage(contact.Contact.message);
      csf.enterContactChooseFile();
      csf.enterSubmitButton();
      csf.SuccessMessage();
    });
  });
});
