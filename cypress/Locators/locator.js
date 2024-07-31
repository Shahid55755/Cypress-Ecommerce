export const locators = {
  login: {
    userNameDisplay: "li a b",
    LogoutText: 'a[href="/logout"]',
    EmailField: 'input[data-qa="login-email"]',
    ErrorMessage: "form p",
    PasswordField: 'input[data-qa="login-password"]',
    loginURL: "https://www.automationexercise.com/login",
    loginBtn: "a[href='/login']",
  },
  cart: {
    addToCart: ".add-to-cart",
    cart_Btn_success: ".modal-footer .btn-success",
    view_cart: '.text-center a[href="/view_cart"]',
    view_cart_li: "a[href='/view_cart']",
    checkout: "a[class='btn btn-default check_out']",
    cart_total_price: "tr td .cart_total_price",
  },
};
