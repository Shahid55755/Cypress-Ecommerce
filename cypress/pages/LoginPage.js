class LoginPageClass {
  enterEmail(email) {
    cy.get('input[data-qa="login-email"]').as("loginEmail").type(email);
  }
  enterPassword(password) {
    cy.get('input[data-qa="login-password"]').as("loginEmail").type(password);
  }
  pressLoginButton() {
    cy.get('button[data-qa = "login-button"]').click();
  }
}

export default LoginPageClass;
