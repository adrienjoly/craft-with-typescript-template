const { Network } = require('../src/Network');

const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('the South America Network', function() {
  this.network = new Network();
  this.network.addCity('Lima', ['Santiago', 'Bogota', 'Mexico']);
  this.network.addCity('Bogota', ['Mexico', 'Lima']);
  this.network.addCity('Santiago', ['Lima']);
  this.network.addCity('Mexico', ['Lima', 'Bogota']);
});

Then('the South America Network should have the links:', function(dataTable) {
  for (const row of dataTable.rows()) {
    const [city, connectedCities] = row;
    for (const connectedCity of connectedCities.split(', ')) {
      expect(this.network.isLinked(city, connectedCity)).to.be.true;
    }
  }
});
