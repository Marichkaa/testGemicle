Feature: Login to the Makeup from main page

    I want to login to the Makeup from main page

    @focus
    Scenario: Login to the Makeup from main page
        Given 1.1. I visit the Makeup main page
        And 1.1. I check the Main Page title
        When 1.1. I check the Login div
        And 1.1. I click the Login div
        And 1.1. I check the Login form
        And 1.1. I enter login
        And 1.1. I enter password
        And 1.1. I click a login button
        Then 1.1. I check that Login form dissapeared
        And 1.1. I check the Account div
        And 1.1. I click the Account div
        And 1.1. I check the header at the Account page
