import { expect } from "chai";

 class AuthRequest {
     login(username, password) {
      cy.request({
        method: "POST",
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/events/push",
        body: {
          username,
          password,
          
        },  

      }) .then((response) => {
        cy.log(response);
        expect(response.status).to.eq(200);
       //  expect(response.body.firstname).to.eql('');
       });
       
    }
  }
  export default AuthRequest;