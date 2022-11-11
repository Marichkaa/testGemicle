Feature: Login to the Makeup from main page

    I want to login to the Makeup from main page

    @focus
    Scenario: 2.1. Login to the Makeup from main page with incorrect password
        Given 2.1. I visit the Makeup main page
        And 2.1. I check the Main Page title
        When 2.1. I check the Search field
        And 2.1. I type a search value
        And 2.1. I check the Search button
        And 2.1. I click the Search button
        And 2.1. I check the new url
        And 2.1. I check the Search Results title
        And 2.1. I check the first product card
        And 2.1. I click the product
        And 2.1. I check new url again
        And 2.1. I check the Cart block
        And 2.1. I check the Cart products q-ty
        And 2.1. I check the product name
        And 2.1. I click the Buy button
        And 2.1. I close Cart popup
        Then 2.1. I check the Cart products q-ty increased
