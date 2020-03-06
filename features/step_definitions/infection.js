const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { City } = require('./../../src/City.js');

// Glue code / steps

Given('{word} has been infected {int} times by {word}', function(
  city,
  nbInfections,
  cubeColor
) {
  this.city = new City(city);
  if (nbInfections > 0) {
    this.city.infect(cubeColor, nbInfections);
  }
});

When('{word} is infected by {word}', function(city, cubeColor) {
  this.city.infect(cubeColor);
});

Then('{word} should have {int} {word} cubes', function(
  city,
  nbInfections,
  cubeColor
) {
  expect(this.city.cubes[cubeColor]).to.equal(nbInfections);
});
