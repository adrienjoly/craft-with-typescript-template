Feature: Infection
  In order to spread the disease
  As a virus
  I want to infect a city

  Scenario: no infection
    Given Paris with no infection
    Then the infection level of Paris is 0
