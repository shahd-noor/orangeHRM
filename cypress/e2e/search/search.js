import LoginPage from "../pages/loginPage.js";
import AdminPage from "../pages/adminPage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPage();
const adminPage = new AdminPage();
const username = "Admin";
const password = "admin123";

Given("logged in", () => {

     loginPage.load(); 
     cy.signInOrangeHRM(username,password);
});


And("User visits the Admin page", () => {

      adminPage.load();
       
});

When("User fills in the Username field", () => {

      adminPage.typeUsername();
});

And ("User select User Role", () => {
   
      adminPage.selectUserRoleOption("ESS");
});

And ("User fills in the Employee Name field", () => {

      adminPage.typeEmployeeName();
});

And ("User select Status", () => {
  
      adminPage.selectStatusOption("Enabled");

});

And ("User click on Search button", () =>  {
      adminPage.clickSearchButton();
});

 Then("User should see the result in the Record Found", () => {
      adminPage.recordFoundAssertion("Aaliyah.Haq");
      adminPage.recordFoundAssertion("ESS");
      adminPage.recordFoundAssertion("Aaliyah Haq");
      adminPage.recordFoundAssertion("Enabled");

 });
