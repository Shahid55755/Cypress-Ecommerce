class RegisterPageClass {
  enterusername(username) {
    cy.get('input[name="name"]').type(username);
  }
  enteremail(email) {
    cy.get('input[data-qa="signup-email"]').type(email);
  }

  SignUp() {
    return cy.get('button[data-qa="signup-button"]').click();
  }

  selectGender() {
    cy.get("#id_gender1").as("gender").check();
    cy.get("@gender").should("be.checked");
    cy.get("@gender").should("exist");
    cy.get("#id_gender2").should("not.be.checked");
  }

  enterpassword(password) {
    cy.get("#password").as("password");
    cy.get("@password")
      .type(password)
      .and("have.attr", "data-qa", "password")
      .and("be.visible")
      .and("not.be.disabled");
  }
  enterfirst_name(fname) {
    cy.get("#first_name").as("fname");
    cy.get("@fname")
      .type(fname)
      .should("exist")
      .should("be.visible")
      .should("not.be.disabled")
      .should("have.attr", "data-qa", "first_name")
      .should("not.have.value", "");
    // cy.get("@fname")
    //   .invoke("val")
    //   .should((val) => {
    //     expect(val, "First name should not contain numbers").to.not.match(/\d/);
    //   });
  }
  enterlast_name(lname) {
    cy.get("#last_name").as("lname");
    cy.get("@lname")
      .type(lname)
      .should("exist")
      .should("have.attr", "data-qa", "last_name")
      .should("be.visible")
      .should("not.be.disabled")
      .should("not.have.value", "");
    // cy.get("@lname")
    //   .invoke("val")
    //   .should((val) => {
    //     expect(val, "lastname should not contain numbers").to.not.match(/\d/);
    //   });
  }

  selectDays(day) {
    cy.get("#days").as("days");
    cy.get("@days")
      .select(day)
      .should("exist")
      .should("have.value", day)
      .should("have.attr", "data-qa", "days")
      .should("contain.text", day)
      .should("not.have.value", "");
  }

  selectMonth(month) {
    cy.get("#months").as("months");
    cy.get("@months")
      .select(month)
      .should("exist")
      .should("have.value", month)
      .should("have.attr", "data-qa", "months")
      .should("not.have.value", "");
  }

  selectYear(year) {
    cy.get("#years").as("year");
    cy.get("@year")
      .select(year)
      .should("exist")
      .should("have.attr", "data-qa", "years")
      .should("not.have.value", "")
      .should("have.value", year);
  }

  check_Checkbox1() {
    cy.get(".checkbox").as("chkbox");
    cy.get("@chkbox").eq(0).click().should("exist");
  }
  check_Checkbox2() {
    cy.get(".checkbox").as("chkbox1");
    cy.get("@chkbox1").eq(1).click().should("exist");
  }

  selectCompany(company) {
    cy.get("#company").as("company");
    cy.get("@company")
      .type(company)
      .should("exist")
      .should("have.attr", "data-qa", "company")
      .should("be.visible")
      .should("not.be.disabled")
      .should("not.have.value", "")
      .should("have.value", company);
  }

  selectAddress1(add1) {
    cy.get("#address1").as("address1");
    cy.get("@address1")
      .type(add1)
      .should("exist")
      .should("have.attr", "data-qa", "address")
      .should("be.visible")
      .should("not.be.disabled")
      .should("not.have.value", "")
      .should("have.value", add1);
  }

  selectAddress2(add2) {
    cy.get("#address2").as("address2");
    cy.get("@address2")
      .type(add2)
      .should("exist")
      .should("have.attr", "data-qa", "address2")
      .should("be.visible")
      .should("not.be.disabled")
      .should("not.have.value", "")
      .should("have.value", add2);
  }

  selectCountry(country) {
    cy.get('select[data-qa="country"]').as("country");
    cy.get("@country")
      .select(country)
      .should("exist")
      .should("have.value", country)
      .should("have.attr", "data-qa", "country")
      .should("contain.text", country)
      .should("not.have.value", "");
  }

  selectState(state) {
    cy.get("#state").as("state");
    cy.get("@state")
      .type(state)
      .should("exist")
      .should("be.visible")
      .should("have.value", state)
      .should("have.attr", "data-qa", "state")
      .should("not.have.value", "");
  }

  selectCity(city) {
    cy.get("#city").as("city");
    cy.get("@city")
      .type(city)
      .should("exist")
      .should("be.visible")
      .should("have.value", city)
      .should("have.attr", "data-qa", "city")
      .should("not.have.value", "");
  }

  selectZipCode(zip) {
    cy.get("#zipcode").as("zipcode");
    cy.get("@zipcode")
      .type(zip)
      .should("exist")
      .should("be.visible")
      .should("have.value", zip)
      .should("have.attr", "data-qa", "zipcode")
      .should("not.have.value", "");
  }

  enterPhone(mob) {
    cy.get("#mobile_number").as("mobile_number");
    cy.get("@mobile_number")
      .type(mob)
      .should("exist")
      .should("be.visible")
      .should("have.value", mob)
      .should("have.attr", "data-qa", "mobile_number")
      .should("not.have.value", "");
  }

  random_email() {
    const rand = Array.from(
      { length: 10 },
      () => Math.random().toString(36)[2]
    ).join("");
    return `${rand}@example.com`;
  }

  CreateAccount() {
    return cy.get('button[data-qa="create-account"]').click();
  }

  verifyAccountCreated() {
    cy.contains("b", "Account Created!");
  }
}
export default RegisterPageClass;
