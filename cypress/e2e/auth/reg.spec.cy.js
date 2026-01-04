
const cred=require("../../fixtures/User.json")
import registerUser from "../pages/registration.cy";
const regobj=new registerUser;
describe("registration to the application", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/login");

  });
  it.only('register with valid credentials', () => {

    
    regobj.nameInput(cred.fname);
    regobj.emailInput(cred.email);
    regobj.signupBtn();
    
    regobj.fullnameInput(cred.fullname);
    regobj.passwordInput(cred.password);
    regobj.firstnameInput(cred.fname);
    regobj.lastnameInput(cred.lname);

    regobj.addressInput(cred.address1);
    regobj.stateInput(cred.state);
    regobj.cityInput(cred.city);
    regobj.zipcodeInput(cred.zipcode);
    regobj.mobileInput(cred.mobile_number);


    regobj.createBtn();


  });
  it('register with existing email', () => {

 
    regobj.nameInput(cred.fname);
    regobj.emailInput(cred.email);
    regobj.signupBtn();


  });

});



