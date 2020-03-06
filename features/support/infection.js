const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

// Implem

let infectionLevels = {};

function getInfectionLevel(city) {
  return infectionLevels[city];
}

// Glue code

Given('{word} with no infection', function(city) {
  infectionLevels[city] = 0;
});

Then('the infection level of {word} is {int}', function(city, level) {
  expect(getInfectionLevel(city)).to.equal(level);
});
