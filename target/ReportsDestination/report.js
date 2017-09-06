$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tenten_WebFrontEnd/webfrontend.feature");
formatter.feature({
  "line": 2,
  "name": "Search Feature",
  "description": "",
  "id": "search-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User is able to use the Search feature in Wikipedia",
  "description": "",
  "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on the Wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User searches for \"\u003ca_given_String\u003e\" in English",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The first heading of the search results page matches \"\u003ca_given_String\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify that the search results page is available in \"\u003ca_given_Language\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to the search results page in \"\u003ca_given_Language\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate that the search results page in the new language includes a link to the version in English",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;",
  "rows": [
    {
      "cells": [
        "a_given_String",
        "a_given_Language"
      ],
      "line": 16,
      "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;;1"
    },
    {
      "cells": [
        "Software",
        "Deutsch"
      ],
      "line": 17,
      "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;;2"
    },
    {
      "cells": [
        "Hardware",
        "Deutsch"
      ],
      "line": 18,
      "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9670125722,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User is able to use the Search feature in Wikipedia",
  "description": "",
  "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the Wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User searches for \"Software\" in English",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The first heading of the search results page matches \"Software\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify that the search results page is available in \"Deutsch\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to the search results page in \"Deutsch\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate that the search results page in the new language includes a link to the version in English",
  "keyword": "And "
});
formatter.match({
  "location": "Wikipediasearch.goToWikipediaHomePage()"
});
formatter.result({
  "duration": 3603760731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 19
    }
  ],
  "location": "Wikipediasearch.User_search_for(String)"
});
formatter.result({
  "duration": 1685201510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 54
    }
  ],
  "location": "Wikipediasearch.heading_of_Search_matchs_result(String)"
});
formatter.result({
  "duration": 113938316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deutsch",
      "offset": 53
    }
  ],
  "location": "Wikipediasearch.search_result_page_is_available(String)"
});
formatter.result({
  "duration": 598168930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deutsch",
      "offset": 40
    }
  ],
  "location": "Wikipediasearch.navigate_to_the_search_results_page(String)"
});
formatter.result({
  "duration": 1004764914,
  "status": "passed"
});
formatter.match({
  "location": "Wikipediasearch.search_result_page_in_new_language_include_a_link_to_the_version_in_english()"
});
formatter.result({
  "duration": 139805243,
  "status": "passed"
});
formatter.after({
  "duration": 2438069168,
  "status": "passed"
});
formatter.before({
  "duration": 2718832005,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User is able to use the Search feature in Wikipedia",
  "description": "",
  "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the Wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User searches for \"Hardware\" in English",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The first heading of the search results page matches \"Hardware\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify that the search results page is available in \"Deutsch\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to the search results page in \"Deutsch\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Validate that the search results page in the new language includes a link to the version in English",
  "keyword": "And "
});
formatter.match({
  "location": "Wikipediasearch.goToWikipediaHomePage()"
});
formatter.result({
  "duration": 2669885238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hardware",
      "offset": 19
    }
  ],
  "location": "Wikipediasearch.User_search_for(String)"
});
formatter.result({
  "duration": 1716787179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hardware",
      "offset": 54
    }
  ],
  "location": "Wikipediasearch.heading_of_Search_matchs_result(String)"
});
formatter.result({
  "duration": 77801066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deutsch",
      "offset": 53
    }
  ],
  "location": "Wikipediasearch.search_result_page_is_available(String)"
});
formatter.result({
  "duration": 69430291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deutsch",
      "offset": 40
    }
  ],
  "location": "Wikipediasearch.navigate_to_the_search_results_page(String)"
});
formatter.result({
  "duration": 879537212,
  "status": "passed"
});
formatter.match({
  "location": "Wikipediasearch.search_result_page_in_new_language_include_a_link_to_the_version_in_english()"
});
formatter.result({
  "duration": 46100797,
  "status": "passed"
});
formatter.after({
  "duration": 170745976,
  "status": "passed"
});
});