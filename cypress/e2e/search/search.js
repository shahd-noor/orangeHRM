import LoginPage from "../pages/loginPage.js";
import AdminPage from "../pages/adminPage.js";
import HomePage from "../pages/homePage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import authRequest from "../api/authRequest.js"

const loginPage = new LoginPage();
const homePage = new HomePage();
const adminPage = new AdminPage();
const username = "Admin";
const password = "admin123";
const auth= new authRequest();

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

// Then("User should see the result in the Record Found", () => {

// });
