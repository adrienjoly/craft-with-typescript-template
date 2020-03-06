Feature: Infection
  In order to spread the disease
  As a virus
  I want to infect a city

  Scenario: no infection
    Given Paris has been infected 0 times by blue
    Then Paris should have 0 blue cubes

  Scenario: infection
    Given Paris has been infected 0 times by blue
    When Paris is infected by blue
    Then Paris should have 1 blue cubes

  Scenario: two infections
    Given Paris has been infected 1 times by blue
    When Paris is infected by blue
    Then Paris should have 2 blue cubes

  Scenario: three infections
    Given Paris has been infected 2 times by blue
    When Paris is infected by blue
    Then Paris should have 3 blue cubes

  Scenario: four infections
    Given Paris has been infected 3 times by blue
    When Paris is infected by blue
    Then Paris should have 3 blue cubes
