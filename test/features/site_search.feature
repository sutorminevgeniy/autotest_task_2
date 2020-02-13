@all
Feature: Site search

  @sortby
  Scenario: Verify result can find search of site
    Given I open "Home" page
      And I hover "Shop Item" of menu
      And I click "All Products"
      And I wait until "Products" page is present
      And I click "Select SortBy"
      And I click "Option LowHight"

    When I wait until "Products" page is present
    
    Then Items of "Products" page should sort by "price"


  @search
  Scenario: Verify result can find search of site
    Given I open "Home" page
      And I click "Search label"
      And I input "WINDBREAKER" in "Search"

    When I wait until "Search" page is present
    
    Then Count of "Results Search" should be 2
      And Count of "Slides Search" should be 2