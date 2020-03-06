Feature: Outbreak
  In order to spread the disease
  As a virus
  I infect close-by cities

  Scenario: outbreak infects close-by city
    Given the South America Network
    And Mexico has been infected 3 times by blue
    And Lima has been infected 0 times by blue
    When Mexico is infected by blue
    Then Lima should have 1 blue cubes
