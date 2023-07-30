# orangeHRM
is an open-source demo of human resource management software. It allows users to explore HRM features like employee management, attendance tracking, and leave management.

# Somke Test Case's :
- Search
- Admin User Grid

# API :

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




