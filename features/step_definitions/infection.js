const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const { City } = require('./../../src/City.js');

const cities = {};

// Glue code / steps

Given('{word} with {int} infection', function(city, nbInfections) {
  cities[city] = new City(city, nbInfections);
});

When('{word} is infected', function(city) {
  cities[city].infect();
});

Then('the infection level of {word} is {int}', function(city, level) {
  expect(cities[city].infectionLevel).to.equal(level);
});
