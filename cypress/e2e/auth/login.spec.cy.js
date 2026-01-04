import {faker} from '@faker-js/faker';
const cred=require("../../fixtures/signupUser.json")
import loginPage from "../pages/login.cy";
describe("Login to the application", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/login");

  });
  it.only('log in with valid credentials', () => {

    const loginobj=new loginPage;
    loginobj.enterEmail(cred.email);
    loginobj.enterPassword(cred.password);
    loginobj.clickSubmit();
   loginobj.logoutBtn();

  });

  it('Log in invalid Credentials', () => {
    const randomPass = faker.internet.password();
   const randomEmail = faker.internet.email();
    const loginobj=new loginPage;
    loginobj.enterEmail(randomEmail);
    loginobj.enterPassword(randomPass);
    loginobj.clickSubmit()

  });
});



