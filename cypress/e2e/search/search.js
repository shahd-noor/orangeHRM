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

      adminPage.typeUsername("Charlie.Carter1");
});

And ("User select User Role", () => {
   
      adminPage.selectUserRoleOption("ESS");
});

And ("User fills in the Employee Name field", () => {

      adminPage.typeEmployeeName("Charlie Carter");
});

And ("User select Status", () => {
  
      adminPage.selectStatusOption("Enabled");

});

And ("User click on Search button", () =>  {
      adminPage.clickSearchButton();
});

 Then("User should see the result in the Record Found", () => {
      adminPage.recordFoundAssertion("Charlie.Carter1");
      adminPage.recordFoundAssertion("ESS");
      adminPage.recordFoundAssertion("Charlie Carter");
      adminPage.recordFoundAssertion("Enabled");
      adminPage.recordFoundActionAsserstion();

 });
