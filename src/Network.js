const { City } = require('./City.js');

// TODO: make instances immutable, thanks to a Builder class

class Network {
  constructor() {
    this.cities = {}; // { name -> City object }
    this.citiesLinkedTo = {}; // { name -> array of city names }
  }
  addCity(name, connectedCities) {
    this.cities[name] = new City(name);
    this.citiesLinkedTo[name] = [];
    for (const otherCityName of connectedCities) {
      this.citiesLinkedTo[name].push(otherCityName);
    }
  }
  getCity(name) {
    return this.cities[name];
  }
  getConnectedCities(cityName) {
    return this.citiesLinkedTo[cityName].map(
      connectedCityName => this.cities[connectedCityName]
    );
  }
  infectCity(name, cubeColor, nbInfections) {
    const city = this.cities[name];
    city.infect(cubeColor, nbInfections);
    if (city.hasOutbreak) {
      for (const connectedCity of this.getConnectedCities(name)) {
        if (!connectedCity.hasOutbreak) {
          connectedCity.infect(cubeColor, nbInfections);
        }
      }
    }
  }
  isLinked(cityName1, cityName2) {
    return (this.citiesLinkedTo[cityName1] || []).includes(cityName2);
  }
}

exports.Network = Network;
