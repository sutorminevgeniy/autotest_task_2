@all
Feature: Site search

  @search
  Scenario: Verify result can find search of site
    Given I open "https://shop.westerndigital.com" url

    When I ask whether it's Friday yet
    Then I should be told "Nope"
      And I should be told me "Note"