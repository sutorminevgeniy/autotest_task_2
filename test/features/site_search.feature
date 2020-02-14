@all
Feature: Site search

  @region
  Scenario: Verify changing of region
    Given I open "Home" page
      And I click "Region"
      And I wait until "Region" page is present
      # And I scroll to "Russion region"
      And I click "Russion region"

    When I wait until "Home" page is present
    
    Then URL page should be "https://shop.westerndigital.com/ru-ru"
      And HTML lang should be "ru-RU" 
      And Page title should be "Магазин Western Digital" 

  @sortby
  Scenario: Verify result can sorted of products
    Given I open "Home" page
      And I hover "Shop Item" of menu
      And I click "All Products"
      And I wait until "Products" page is present
      And I click "Select SortBy"
      And I click "Option LowHight"

    When I wait until "Products" page is reload
    
    Then Items of "Products" page should sort by "price"


  @search
  Scenario: Verify result can find search of site
    Given I open "Home" page
      And I click "Search label"
      And I input "WINDBREAKER" in "Search"

    When I wait until "Search" page is present
    
    Then Count of "Results Search" should be 2
      And Count of "Slides Search" should be 2