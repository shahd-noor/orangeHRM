describe('test1', () => {
  before(() => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   })

  it("verify login with valid creds", () => {
     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
     cy.get('.oxd-button').click();
     
   })
   
})