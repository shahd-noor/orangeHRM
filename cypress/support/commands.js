// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add("signInOrangeHRM", (username, password) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username); 
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password); 
    cy.get('.oxd-button').click(); 
  });


// Cypress.Commands.add("loginToOrangeHRM", () => {
//   const apiUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/events/push";
//   const requestBody = {
//     userName: "admin",
//     password: "admin123"
//   };

//   cy.request({
//     method: "POST",
//     url: apiUrl,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Origin: "https://opensource-demo.orangehrmlive.com/",
//       Referer: "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
//       Cookie: "orangehrm=ddeb9add324b0e85409465865f454334"
//     },
//     body: requestBody
//   });
// });


  
  