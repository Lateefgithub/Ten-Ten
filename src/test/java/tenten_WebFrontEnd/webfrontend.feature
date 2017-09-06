@SystemTest
Feature: Search Feature


Scenario Outline: User is able to use the Search feature in Wikipedia

Given User is on the Wikipedia home page
When User searches for "<a_given_String>" in English
Then The first heading of the search results page matches "<a_given_String>"
And Verify that the search results page is available in "<a_given_Language>"
And Navigate to the search results page in "<a_given_Language>"
And Validate that the search results page in the new language includes a link to the version in English


Examples:
|a_given_String	|a_given_Language 	|
|Software  		|Deutsch			|
|Hardware  		|Deutsch			|
