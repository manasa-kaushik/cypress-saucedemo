Feature: cart

    Background: Login
        Given I login from login page as "standardUser"
        Then I see the inventory page

    Scenario: Verify that user is able to add item to the cart from products list page
        Given I see the products listed
        When I click on add to cart icon for product "backpack"
        Then I see the product count "1" in the cart logo
        And I click on the cart icon
        And I see the "1" items in the cart list
        Then I see the added item "backpack" in the cart list page with label "Sauce Labs Backpack"
        Then I see the added item "backpack" in the cart list page with price "$29.99"

    Scenario: Verify that user is able to add multiple items to the cart from products list page
        Given I see the products listed
        When I click on add to cart icon for product "backpack"
        Then I see the product count "1" in the cart logo
        And I click on add to cart icon for product "bikeLight"
        Then I see the product count "2" in the cart logo
        And I click on the cart icon
        And I see the "2" items in the cart list
        Then I see the added item "backpack" in the cart list page with label "Sauce Labs Backpack"
        Then I see the added item "backpack" in the cart list page with price "$29.99"
        And I see the added item "bikeLight" in the cart list page with label "Sauce Labs Bike Light"
        And I see the added item "bikeLight" in the cart list page with price "$9.99"

    Scenario: Verify that user is able to add multiple items to the cart from products list page and verify item total
        When I click on add to cart icon for product "backpack"
        And I click on add to cart icon for product "bikeLight"
        And I click on the cart icon
        Then I see the "2" items in the cart list
        And I click the on checkout
        Then I enter "firstName" in the checkout form
        And I enter "lastName" in the checkout form
        And I enter "postCode" in the checkout form
        And I click on continue
        Then I see the item total match with "$39.98"

    Scenario Outline: Verify that user should not be able to checkout with invalid credentials with missing "<missingField>"
        When I click on add to cart icon for product "backpack"
        And I click on the cart icon
        Then I see the "1" items in the cart list
        And I click the on checkout
        Then I enter "<formField1>" in the checkout form
        And I enter "<formField2>" in the checkout form
        And I click on continue
        Then I see error message for "<errorType>"
        And I click on close to dismiss the error
        Examples:
            | missingField | formField1 | formField2 | errorType        |
            | firstName    | lastName   | postCode   | missingFirstName |
            | lastName     | firstName  | postCode   | missingLastName  |
            | postCode     | firstName  | lastName   | missingPostCode  |
