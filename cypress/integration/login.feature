Feature: Login

    Scenario Outline: Verify that user should be able to login with valid credentials "<userType>"
        Given I see the login page
        When I enter a valid "<userType>" username
        And I enter a valid password
        And I click on the login button
        Then I see the inventory page
        Examples:
            | userType              |
            | standardUser          |
            | problemUser           |
            | performanceGlitchUser |

    Scenario: Verify that user should not be able to login with invalid username
        Given I see the login page
        When I enter an invalid username
        And I enter a valid password
        And I click on the login button
        Then I see error message for "invalidUsername"
        And I click on close to dismiss the error

    Scenario: Verify that user should not be able to login with no username
        Given I see the login page
        When I enter a valid password
        And I click on the login button
        Then I see error message for "missingUsername"
        And I click on close to dismiss the error

    Scenario: Verify that user should not be able to login with no password
        Given I see the login page
        When I enter a valid "standardUser" username
        And I click on the login button
        Then I see error message for "missingPassword"
        And I click on close to dismiss the error

    Scenario Outline: Verify that user should not be able to login with invalid password for "<userType>"
        Given I see the login page
        When I enter a valid "<userType>" username
        And I enter an invalid password
        And I click on the login button
        Then I see error message for "invalidPassword"
        And I click on close to dismiss the error
        Examples:
            | userType              |
            | standardUser          |
            | problemUser           |
            | performanceGlitchUser |

    Scenario: Verify that locked_out_user is not able to login
        Given I see the login page
        And I enter a valid "lockedOut" username
        And I enter a valid password
        And I click on the login button
        Then I see error message for "unauthorised"
        And I click on close to dismiss the error
