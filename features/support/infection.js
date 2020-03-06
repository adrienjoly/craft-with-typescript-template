const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

// Implem

let infectionLevels = {};

function getInfectionLevel(city) {
  return infectionLevels[city];
}

// Glue code / steps

Given('{word} with {int} infection', function(city, nbInfections) {
  infectionLevels[city] = nbInfections;
});

When('{word} is infected', function(city) {
  infectionLevels[city]++;
});

Then('the infection level of {word} is {int}', function(city, level) {
  expect(getInfectionLevel(city)).to.equal(level);
});
