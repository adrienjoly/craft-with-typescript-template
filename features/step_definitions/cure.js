const { Network } = require('../../src/Network');

const { Given, When, Then, Before } = require('cucumber');
const { expect } = require('chai');

// Glue code / steps

Before(function() {
  // default network
  this.network = new Network();
  this.network.addCity('Manilla', []);
  this.brian = undefined;
});

Given('Brian is in Manilla', function() {
  this.brian = {
    name: 'Brian',
    currentCityName: 'Manilla'
  };
});

When('Brian cures the (word) disease', function(cubeColor) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('Brian cannot cures the (word) disease', function(cubeColor) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
