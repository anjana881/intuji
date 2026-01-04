class loginPage{


  elements = {
      emailInput : () => cy.get("input[data-qa='login-email']"),      
      passwordInput : () => cy.get("input[placeholder='Password']"),    
      loginBtn : () => cy.get("button[data-qa='login-button']"),
      logoutBtn :()=>    cy.get("a[href='/logout']")
  }
  enterEmail(email)
  {
      this.elements.emailInput().type(email);
  }
//method for entering password
  enterPassword(password)
  {
     this.elements.passwordInput().type(password);
  }


 //method for clicking on submit button
  clickSubmit() {
      this.elements.loginBtn().click();
  }
  logoutBtn(){
    this.elements.logoutBtn().click();
  }
}
export default loginPage;