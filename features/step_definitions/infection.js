const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { City } = require('./../../src/City.js');

const cities = {};

// Glue code / steps

Given('{word} has been infected {int} times by {word}', function(
  city,
  nbInfections,
  cubeColor
) {
  cities[city] = new City(city);
  if (nbInfections > 0) {
    cities[city].infect(cubeColor, nbInfections);
  }
});

When('{word} is infected by {word}', function(city, cubeColor) {
  cities[city].infect(cubeColor);
});

Then('{word} should have {int} {word} cubes', function(
  city,
  nbInfections,
  cubeColor
) {
  expect(cities[city].cubes[cubeColor]).to.equal(nbInfections);
});
