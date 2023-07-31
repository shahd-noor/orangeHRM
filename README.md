# orangeHRM
is an open-source demo of human resource management software. It allows users to explore HRM features like employee management, attendance tracking, and leave management.
- URL:https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
# Somke Test Case's :
- searching on Admin Users
```
@smoke
Feature: Searching on Admin Users 
        
     verify search Feature

    Scenario: A valid user should be able to search a System Users, then appeard the System Users 

         Given logged in
         And User visits the Admin page
         When User fills in the Username field
         And  User select User Role
         And  User fills in the Employee Name field
         And  User select Status
         And  User click on Search button
        #Then User should see the result in the Record Found

```
- Admin User Grid
```
@smoke
Feature: Admin user Grid
      verfiy the Admin user Grid  is  working correctly for the Admin user

     Scenario: #1 Admin should be able to add a user  then appear  the success toast message with 'successfully saved' text returned
           Given User logged in
           And User visits the admin page
           When User click on add button
           Then User should see the Add User page    
           When User select User Role  
           And User select Status
           And User fills in password field
           And User fills in confirm password field
           And User fills in username field
           And User fills in the Employee Name field
           And User click on save button
           Then User should see the success toast message with'successfully saved'text returned

       Scenario: #2 Admin Should be able to update the username for an existing user
           Given User logged in
           And User visits the admin page
           When User click on Edit icon  for exisiting user         
           Then User should see the Add User page
           When User Edit username field
           And User click on save button
           Then User should see the success toast message with'Successfully Updated'

       Scenario: #3.1 Admin Should be able to delete for an existing user by confirmation dialogue appears
               Given User logged in 
               And User visits the admin page
               When User click on the trash icon for exisiting user
               Then 'Are you Sure?' confirmation dialogue should be appear

       Scenario: #3.2 Admin Should be able to delete for existing user
               Given User logged in 
               And User visits the admin page
               When User click on the Yes,Delete button
               Then User should see the success toast message with 'Successfully Deleteded'
   
```
#  Custom Command for Sign-in:

```
Cypress.Commands.add("signInOrangeHRM", (username, password) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username); 
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password); 
    cy.get('.oxd-button').click(); 
  });
```

# API for Admin page :

- Creat user:
```
add(){
  cy.request({
    method: 'POST',
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cookie': 'orangehrm=52e5f4cc785b0f0a02f791f59a7430b5',
      'Origin': 'https://opensource-demo.orangehrmlive.com/',
      'Referer': 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser',
      'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': 'Windows',
    },
    body: {
      "username": "UserNameForTest",
      "password": "passwordF0rTest",
      "status": true,
      "userRoleId": 1,
      "empNumber": 7
    }
  }).then((response) => {
    expect(response.status).to.equal(200);

  })
}
```
- Update User
```
update() {
  cy.request({
    method: 'PUT',
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users/1',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cookie': 'orangehrm=52e5f4cc785b0f0a02f791f59a7430b5',
      'Origin': 'https://opensource-demo.orangehrmlive.com/',
      'Referer': 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser',
    },
    body:
    {
      "username": "admin1235",
      "password": "",
      "status": true,
      "userRoleId": 1,
      "empNumber": 7,
      "changePassword": false
    }
  }).then((response) => {
    expect(response.status).to.equal(200);

  })
}
```
- Delete User
```
delete() {
  cy.request({
    method: "DELETE",
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cookie': 'orangehrm=52e5f4cc785b0f0a02f791f59a7430b5',
      'Origin': 'https://opensource-demo.orangehrmlive.com/',
      'Referer': 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser',
    },
    body: {
  
      "ids": [
        90
      ]
    }
  }).then((response) => {
    expect(response.status).to.equal(200);

  })
  }
```
# How to Run the Test
- Clone the repo
- run the test from the cypress runner: npx cypress open --e2e --browser chrome

# Video for Run the Test:

- searching on Admin Users :
https://github.com/shahd-noor/orangeHRM/assets/68778771/8022142d-1656-46cb-afcf-f5be77639a6d
- Admin User Grid


