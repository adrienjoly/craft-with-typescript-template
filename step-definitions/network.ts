const { Network } = require('../src/Network');

const { Given, When, Then, DataTable } = require('@cucumber/cucumber');
const { expect } = require('chai');

type Context = {
  network: typeof Network;
};

Given('the South America Network', function(this: Context) {
  this.network = new Network();
  this.network.addCity('Lima', ['Santiago', 'Bogota', 'Mexico']);
  this.network.addCity('Bogota', ['Mexico', 'Lima']);
  this.network.addCity('Santiago', ['Lima']);
  this.network.addCity('Mexico', ['Lima', 'Bogota']);
});

Then('the South America Network should have the links:', function(
  this: Context,
  dataTable: typeof DataTable
) {
  for (const row of dataTable.rows()) {
    const [city, connectedCities] = row;
    for (const connectedCity of connectedCities.split(', ')) {
      expect(this.network.isLinked(city, connectedCity)).to.be.true;
    }
  }
});
