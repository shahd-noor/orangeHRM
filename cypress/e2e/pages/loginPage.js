class LoginPage {

    get usernameInput() {
    
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }    

    get passwordInput() {
    
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }    

    get logInButton() {
    
        return cy.get('.oxd-button');
    }  
    
    load() {
        cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        return this;
    }    
    
    login(username, password) {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.logInButton.click();
      
      
    }
}
export default LoginPage