Feature: Cure
  In order to reduce the spreading the disease
  As a player
  I cure the disease in a city

  Scenario: Cure a city disease
    Given Manilla has been infected 2 times by yellow
    And Brian is in Manilla
    When Brian cures the yellow disease
    Then Manilla should have 1 yellow cubes

  Scenario: Cannot cure a city without corresponding disease
    Given Manilla has been infected 2 times by yellow
    And Brian is in Manilla
    When Brian cannot cure the red disease
