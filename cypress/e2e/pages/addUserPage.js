class AddUserPage{

    get userRole() {
       
       return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input');
    }

    get status() {

       return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input');
    }

    get passwordInput() {

       return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input');
    }

    get confirmPasswordInput() {

       return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input') ;
    }

    get usernameInput() {
        
       return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }

    get employeeNameInput() {

       return cy.get('.oxd-autocomplete-text-input > input');
    }

    get saveButton() {

       return cy.get('.oxd-button--secondary');
    }

    get sucessToastmessage() {

       cy.get('.oxd-toast');
    }

    typePassword() {
    
       this.passwordInput.type("admin123");
    }  
   
    typeUsername() {

       this.usernameInput.clear().type("soniaa.admin1");
    }

    typeConfirmPassword() {

       this.confirmPasswordInput.type("admin123");
    }

    typeEmployeeName() {

       this.employeeNameInput.type("O");
       cy.wait(2000);
       cy.get('.oxd-autocomplete-option').eq(0).click();
    }

    clickonSaveButton() {

       this.saveButton.click();
    }  
    
    selectUserRoleOption(optionText) {

       cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click({force: true});
       cy.get('.oxd-select-dropdown > :nth-child(3)').click();
    }

    selectStatusOption(optionText) {

       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click({force: true});
       cy.get('.oxd-select-dropdown > :nth-child(2)').click()
   } 

    AddUserPageAssertion() {

       cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
    }
    
    AdminPageAssertion() {

       cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    }   
   
    sucessSaveToastmessageAssertion() {

       cy.contains('Successfully Saved').should('be.visible').should("have.text",'Successfully Saved');
    }

    sucessUpdateToastmessageAssertion() {

       cy.contains('Successfully Updated').should('be.visible').should("have.text",'Successfully Updated');
    }  
    
}
export default AddUserPage