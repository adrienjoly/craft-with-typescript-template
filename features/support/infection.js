const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

// Implem

let infectionLevels = {};

function getInfectionLevel(city) {
  return infectionLevels[city];
}

// Glue code / steps

Given('{word} with no infection', function(city) {
  infectionLevels[city] = 0;
});

When('{word} is infected', function(city) {
  infectionLevels[city] = 1;
});

Then('the infection level of {word} is {int}', function(city, level) {
  expect(getInfectionLevel(city)).to.equal(level);
});
