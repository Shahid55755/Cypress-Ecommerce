class LoginPageClass {
  loginLocator = {
    Email_: () => cy.get('input[data-qa="login-email"]', { timeout: 10000 }),

    Password_: () =>
      cy.get('input[data-qa="login-password"]', { timeout: 10000 }),

    ClickLoginBtn: () => cy.get('button[data-qa = "login-button"]'),
  };

  enterEmail(email) {
    this.loginLocator.Email_().type(email);
  }
  enterPassword(password) {
    this.loginLocator.Password_().type(password);
  }
  pressLoginButton() {
    this.loginLocator.ClickLoginBtn().click();
  }

  // enterEmail(email) {
  //   cy.get('input[data-qa="login-email"]', { timeout: 10000 })
  //     .should("be.visible")
  //     .type(email);
  // }
  // enterPassword(password) {
  //   cy.get('input[data-qa="login-password"]', { timeout: 10000 })
  //     .should("be.visible")
  //     .type(password);
  // }
  // pressLoginButton() {
  //   cy.get('button[data-qa = "login-button"]').click();
  // }
}

export default LoginPageClass;
