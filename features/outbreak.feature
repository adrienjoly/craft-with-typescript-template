Feature: Outbreak
  In order to spread the disease
  As a virus
  I infect close-by cities

  Scenario: 3 infections don't cause outbreak
    Given Paris has been infected 3 times by blue
    Then Paris should not have outbreak

  Scenario: 4 infections cause outbreak
    Given Paris has been infected 3 times by blue
    When Paris is infected by blue
    Then Paris should have outbreak

  Scenario: outbreak infects close-by city
    Given the South America Network
    And Mexico has been infected 3 times by blue
    And Lima has been infected 0 times by blue
    When Mexico is infected by blue
    Then Lima should have 1 blue cubes
