@all
Feature: Site search

  @search
  Scenario: Verify result can find search of site
    Given I open "Home" page
      And I click "Search label"
      And I input "WINDBREAKER" in "Search"

    When I wait until "Search" page is present
    Then Count of "Results Search" should be 2
      And Count of "Slides Search" should be 2