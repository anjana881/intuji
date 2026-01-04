class registerUser{


  elements = {
        nameInput : () => cy.get("input[placeholder='Name']"),   
    emailInput : () => cy.get("input[data-qa='signup-email']"),  
    signupBtn : () => cy.get('[data-qa="signup-button"]'),  
   fullnameInput : () => cy.get('#name'),  
      passwordInput : () => cy.get("#password"),  
      firstnameInput : () => cy.get("#first_name"),  
      lastnameInput : () => cy.get("#last_name"),  
      addressInput : () => cy.get("#address1"),  
      stateInput : () => cy.get("#state"),  
      cityInput : () => cy.get("#city"),  
      zipcodeInput : () => cy.get("#zipcode"),  
      mobileInput : () => cy.get("#mobile_number"),  
      createBtn : () => cy.get("button[data-qa='create-account']")
   
  }
  nameInput(name)
  {
      this.elements.nameInput().type(name);
  }
  emailInput(email)
  {
     this.elements.emailInput().type(email);
  }
  signupBtn() {
      this.elements.signupBtn().click();
  }
  fullnameInput(fullname) {
      this.elements.fullnameInput().type(fullname);
  }
  passwordInput(password) {
      this.elements.passwordInput().type(password);
  }
  firstnameInput(fname) {
      this.elements.firstnameInput().type(fname);
  }
  lastnameInput(lname) {
      this.elements.lastnameInput().type(lname);
  }
  addressInput(address) {
      this.elements.addressInput().type(address);
  }
  stateInput(state) {
      this.elements.stateInput().type(state);
  }
  cityInput(city) {
      this.elements.cityInput().type(city);
  }
  zipcodeInput(zip) {
      this.elements.zipcodeInput().type(zip);
  }
  mobileInput(mobile) {
      this.elements.mobileInput().type(mobile);
  }
  zipcodeInput(zip) {
      this.elements.zipcodeInput().type(zip);
  }

  createBtn(){
    this.elements.createBtn().click();
  }
}
export default registerUser;