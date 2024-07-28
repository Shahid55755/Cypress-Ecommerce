class LoginPageClass {
  enterEmail(email) {
    cy.get('input[data-qa="login-email"]', { timeout: 10000 })
      .should("be.visible")
      .type(email);
  }
  enterPassword(password) {
    cy.get('input[data-qa="login-password"]', { timeout: 10000 })
      .should("be.visible")
      .type(password);
  }
  pressLoginButton() {
    cy.get('button[data-qa = "login-button"]').click();
  }
}

export default LoginPageClass;
