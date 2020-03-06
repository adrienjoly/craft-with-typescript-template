Feature: Infection
  In order to spread the disease
  As a virus
  I want to infect a city

  Scenario: no infection
    Given Paris with 0 infection
    Then the infection level of Paris is 0

  Scenario: infection
    Given Paris with 0 infection
    When Paris is infected
    Then the infection level of Paris is 1

  Scenario: two infections
    Given Paris with 1 infection
    When Paris is infected
    Then the infection level of Paris is 2

  Scenario: three infections
    Given Paris with 2 infection
    When Paris is infected
    Then the infection level of Paris is 3

  Scenario: four infections
    Given Paris with 3 infection
    When Paris is infected
    Then the infection level of Paris is 3
