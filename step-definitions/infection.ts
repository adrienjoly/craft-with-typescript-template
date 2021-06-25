import { Network } from './../src/Network';

import { Given, When, Then, Before } from '@cucumber/cucumber';
import { expect } from 'chai';

// Glue code / steps

Before(function() {
  // default network
  this.network = this.network || new Network();
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

Then(/Paris should (not |)have outbreak/, function(not) {
  // Write code here that turns the phrase above into concrete actions
  const shouldOutbreak = !not;
  const city = this.network.getCity('Paris');
  expect(city.hasOutbreak).to.equal(shouldOutbreak);
});
