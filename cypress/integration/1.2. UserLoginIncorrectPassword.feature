Feature: Login to the Makeup from main page

    I want to login to the Makeup from main page

    @focus
    Scenario: 1.2. Login to the Makeup from main page with incorrect password
        Given 1.2. I visit the Makeup main page
        And 1.2. I check the Main Page title
        When 1.2. I check the Login div
        And 1.2. I click the Login div
        And 1.2. I check the Login form
        And 1.2. I enter login
        And 1.2. I enter incorrect password
        And 1.2. I click a login button
        Then 1.2. I check that login form isn't dissapeared
        And 1.2. I check that that there's no Account div

