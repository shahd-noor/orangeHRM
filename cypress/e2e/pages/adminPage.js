class AdminPage {
 
    get usernameInput() {
  
       return cy.get(':nth-child(2) > .oxd-input');
   }      

   get employeeNameInput() {
  
       return cy.get('.oxd-autocomplete-text-input > input');
   }   

   get searchButton() {
  
       return cy.get('.oxd-form-actions > .oxd-button--secondary');
   }

   get addButton() {

       return cy.get('.orangehrm-header-container > .oxd-button');
   }    

   get adminOption () {
    
       return cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text');
   }  

   get editIcon () {

       return cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon');
   }

   get trashIcon() { 

       return cy.get(':nth-child(3) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1)');
   }

   get YesDeleteButton()  {

      cy.get('.oxd-button--label-danger');
      //cy.get('.oxd-button--label-danger > .oxd-icon');
      //cy.get(".oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin");
      //  cy.get(".oxd-icon bi-trash oxd-button-icon");   
   }

   typeUsername() {

       this.usernameInput.type("Saniaa.Shaheen");
   }

   typeEmployeeName() {
      
       this.employeeNameInput.type("Sania Shaheen");
   }

   clickSearchButton() {
   
       this.searchButton.click({force: true}); 
   }

   selectUserRoleOption(optionText) {

       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force: true});
       cy.contains('.oxd-select-option', optionText).click();

   }

   selectStatusOption(optionText) {

       cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force: true});
       cy.contains('.oxd-select-option', optionText).click();
   }

   load () {

       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
   }

   AdminPageAssertion() {

         cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
   }    

   AddUserPageAssertion() {

         cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
   }  

   clickAddButton() {

         this.addButton.click();
   }  
    
   selectAdminOption() {
    
         this.adminOption.click();
   }    

     clickEditIcon() {
     
         this.editIcon.click({force: true});
   }

   clickTrashIcon() {
       
       this.trashIcon.click({force: true});
    }

    confirmationDialogueAssertion() {

         cy.contains('Are you Sure?').should("have.text","Are you Sure?");
         cy.contains('The selected record will be permanently deleted. Are you sure you want to continue?').should("have.text","The selected record will be permanently deleted. Are you sure you want to continue?");
         cy.get('.oxd-button--label-danger').should('exist').should('be.visible').contains(" Yes, Delete");
         cy.get('.oxd-button--text').should('exist').should('be.visible').contains("No, Cancel");
   }  

   clikYesDeleteButton() {
   
        this.YesDeleteButton.click();

   //  cy.get('.oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin').click({force: true});
   //  cy.contains('.oxd-icon bi-trash oxd-button-icon').click();
         
   }

    sucessDeleteToastmessageAssertion() {

         cy.contains('Successfully Deleted').should('be.visible').should("have.text",'Successfully Deleted');
    }  

}
export default AdminPage