const { Network } = require('../../src/Network');

const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('the South America Network', function() {
  this.southAmericaNetwork = new Network();
  this.southAmericaNetwork.addLink('Lima', 'Santiago');
  this.southAmericaNetwork.addLink('Lima', 'Bogota');
  this.southAmericaNetwork.addLink('Lima', 'Mexico');
  this.southAmericaNetwork.addLink('Bogota', 'Mexico');
  this.southAmericaNetwork.addLink('Bogota', 'Lima');
  this.southAmericaNetwork.addLink('Santiago', 'Lima');
  this.southAmericaNetwork.addLink('Mexico', 'Lima');
  this.southAmericaNetwork.addLink('Mexico', 'Bogota');
});

Then('the South America Network should have the links:', function(dataTable) {
  for (row of dataTable.rows()) {
    const [city, connectedCities] = row;
    for (connectedCity of connectedCities.split(', ')) {
      expect(this.southAmericaNetwork.isLinked(city, connectedCity)).to.be.true;
    }
  }
});
