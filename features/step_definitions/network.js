const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

class Network {
  constructor() {
    this.citiesLinkedTo = {};
  }

  addLink(city1, city2) {
    (this.citiesLinkedTo[city1] = this.citiesLinkedTo[city1] || []).push(city2);
  }

  isLinked(city1, city2) {
    return (this.citiesLinkedTo[city1] || []).includes(city2);
  }
}

let southAmericaNetwork;

Given('the South America Network', function() {
  southAmericaNetwork = new Network();
  southAmericaNetwork.addLink('Lima', 'Santiago');
  southAmericaNetwork.addLink('Lima', 'Bogota');
  southAmericaNetwork.addLink('Lima', 'Mexico');
  southAmericaNetwork.addLink('Bogota', 'Mexico');
  southAmericaNetwork.addLink('Bogota', 'Lima');
  southAmericaNetwork.addLink('Santiago', 'Lima');
  southAmericaNetwork.addLink('Mexico', 'Lima');
  southAmericaNetwork.addLink('Mexico', 'Bogota');
});

Then('the South America Network should have the links:', function(dataTable) {
  for (row of dataTable.rows()) {
    const [city, connectedCities] = row;
    for (connectedCity of connectedCities.split(', ')) {
      expect(southAmericaNetwork.isLinked(city, connectedCity)).to.be.true;
    }
  }
});
