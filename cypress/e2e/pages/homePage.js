class HomePage {
/*
    load() {
       // cy.visit("/")
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        return this;
    }
    */

    homePageAssertion() {

        cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');    
    }    

   
    }
    export default HomePage