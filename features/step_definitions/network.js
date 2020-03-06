const { Network } = require('../../src/Network');

const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('the South America Network', function() {
  this.network = new Network();
  this.network.addLink('Lima', 'Santiago');
  this.network.addLink('Lima', 'Bogota');
  this.network.addLink('Lima', 'Mexico');
  this.network.addLink('Bogota', 'Mexico');
  this.network.addLink('Bogota', 'Lima');
  this.network.addLink('Santiago', 'Lima');
  this.network.addLink('Mexico', 'Lima');
  this.network.addLink('Mexico', 'Bogota');
});

Then('the South America Network should have the links:', function(dataTable) {
  for (row of dataTable.rows()) {
    const [city, connectedCities] = row;
    for (connectedCity of connectedCities.split(', ')) {
      expect(this.network.isLinked(city, connectedCity)).to.be.true;
    }
  }
});
