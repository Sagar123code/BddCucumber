Feature: Gmail Compose function validity

Scenario Outline: TC01_Verifying Compose function availability and position 
Given User launches "Gmail" page
Then User should be "Gmail2" page
When User enters "<Email Address>" in the "EmailAddress" inputbox on "Login" page
And User clicks "Next" button on "Login" page
And User enters "<Password>" in the "Password" inputbox on "Login" page
And User clicks "Next" button on "Login" page
Then User validates "Compose" button is "displayed" on "Home" page
And User validates "Compose" button is "below" the "Menu" button on "Home" page
#And User clicks "Next" button on "Login" page
And User upload "<filepath here>" document

Examples:

|Email Address           |Password|
|sagarubidwe100@gmail.com|&Lspf07g|