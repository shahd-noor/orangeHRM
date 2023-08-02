import LoginPage from "../pages/loginPage.js";
import AdminPage from "../pages/adminPage.js";
import AddUserPage from "../pages/addUserPage.js";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import addAdminRequest from "../api/addAdminRequest.js";

const addAdmin= new addAdminRequest();
const loginPage = new LoginPage();
const adminPage = new AdminPage();
const addUserPage = new AddUserPage();
const username = "Admin";
const password = "admin123";

Given("User logged in", () => {
    
     loginPage.load();
     cy.signInOrangeHRM(username,password);
});

And("User visits the admin page", () => {

     adminPage.load();
});

When("User click on add button", ()=> {

     adminPage.clickAddButton();
});

Then ("User should see the Add User page", ()=> {

     adminPage.AddUserPageAssertion();
});

When("User select User Role",()=> {

     addUserPage.selectUserRoleOption("ESS");
});

And("User select Status",()=> {

     addUserPage.selectStatusOption("Enabled");
});
And ("User fills in password field",()=> {

     addUserPage.typePassword();
});

And ("User fills in confirm password field",()=> {

     addUserPage.typeConfirmPassword();
});

And ("User fills in username field",()=> {

     addUserPage.typeUsername();
});

And ("User fills in the Employee Name field",()=> {

     addUserPage.typeEmployeeName();
});

And ("User click on save button",()=> {

     addUserPage.clickonSaveButton();
});

Then("User should see the success toast message with'successfully saved'text returned",()=>{

     addUserPage.sucessSaveToastmessageAssertion();
});

//2
Given("User logged in", () => {
    
     loginPage.load();
     cy.signInOrangeHRM(username,password);
});

And("User visits the admin page", () => {

     adminPage.load();  
});

When ("User click on Edit icon  for exisiting user",()=> {

     adminPage.clickEditIcon();
});

Then ("User should see the Add User page",()=> {

     adminPage.AddUserPageAssertion();
}); 

When ("User Edit User Role field",()=> {
     addUserPage.selectUserRoleOption("Admin");
});

And("User click on save button",()=> {

     addUserPage.clickonSaveButton();
});

Then ("User should see the success toast message with'Successfully Updated'",()=> {
    
     addUserPage.sucessUpdateToastmessageAssertion();
});

//3
Given("User logged in", () => {
    
     loginPage.load();
     cy.signInOrangeHRM(username,password);
});

And("User visits the admin page", () => {

     adminPage.load();   
});

When ("User click on the trash icon for exisiting user",()=>{

     adminPage.clickTrashIcon();
});

Then ("'Are you Sure?' confirmation dialogue should be appeard",()=>{

     adminPage.confirmationDialogueTextAssertion("Are you Sure?");
     adminPage.confirmationDialogueTextAssertion(
         "The selected record will be permanently deleted. Are you sure you want to continue?");
     adminPage.confirmationDialogueButtonsAssertion();
     });
//4
Given("User logged in", () => {
    
     loginPage.load();
     cy.signInOrangeHRM(username,password);
});

And("User visits the admin page", () => {

     adminPage.load();  
});

When("User click on the Yes,Delete button",()=> {
      
     adminPage.clikYesDeleteButton();
 });

Then ("User should see the success toast message with 'Successfully Deleteded'",()=> {

     adminPage.sucessDeleteToastmessageAssertion();    
}); 

after("DELETE user after add",()=>{
     addAdmin.delete();
     });