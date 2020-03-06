const { City } = require('./../../src/City.js');
const { Network } = require('../../src/Network');

const { Given, When, Then, Before } = require('cucumber');
const { expect } = require('chai');

// Glue code / steps

Before(function() {
  // default network
  this.network = new Network();
  this.network.addCity('Paris', []);
});

Given('{word} has been infected {int} times by {word}', function(
  cityName,
  nbInfections,
  cubeColor
) {
  const city = this.network.getCity(cityName);
  if (nbInfections > 0) {
    city.infect(cubeColor, nbInfections);
  }
});

When('{word} is infected by {word}', function(cityName, cubeColor) {
  this.network.infectCity(cityName, cubeColor);
});

Then('{word} should have {int} {word} cubes', function(
  cityName,
  nbInfections,
  cubeColor
) {
  const city = this.network.getCity(cityName);
  expect(city.cubes[cubeColor]).to.equal(nbInfections);
});
