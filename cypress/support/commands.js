// ***********************************************
import RegisterPageClass from "../pages/RegisterPage";
import { faker } from "@faker-js/faker";
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, email) => {
  const RegisterP = new RegisterPageClass();
  RegisterP.enterusername(username);
  RegisterP.enteremail(email);
  RegisterP.SignUp();
});

Cypress.Commands.add("GrandTotal", () => {
  let Gtotal = 0;
  cy.get("a[href='/view_cart']").parent("li").click();
  cy.get("table tbody tr").each(($row, index, $rows) => {
    cy.wrap($row).within(() => {
      cy.get("td")
        .eq(4)
        .invoke("text")
        .then((totalTxt) => {
          const total = parseFloat(totalTxt.replace("Rs.", "").trim());
          Gtotal += total;
          cy.log(Gtotal);
        });
    });
  });
});

import "cypress-xpath";
