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
        Then User should see the result in the Record Found
        


   