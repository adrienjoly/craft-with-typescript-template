Feature: Network
  (It's just a persona => no need for a description)

  Scenario: Simple Network
    Given the South America Network
    Then the South America Network should have the links:
      | city     | link                     |
      | Lima     | Santiago, Bogota, Mexico |
      | Bogota   | Mexico, Lima             |
      | Santiago | Lima                     |
      | Mexico   | Lima, Bogota             |
