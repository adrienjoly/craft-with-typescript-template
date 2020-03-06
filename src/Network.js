const { City } = require('./City.js');

// TODO: make instances immutable, thanks to a Builder class

class Network {
  constructor() {
    this.cities = {}; // { name -> City object }
    this.citiesLinkedTo = {}; // { name -> array of city names }
  }
  addCity(name, connectedCities) {
    this.cities[name] = new City(name);
    for (const otherCityName of connectedCities) {
      (this.citiesLinkedTo[name] = this.citiesLinkedTo[name] || []).push(
        otherCityName
      );
    }
  }
  getCity(name) {
    return this.cities[name];
  }
  isLinked(cityName1, cityName2) {
    return (this.citiesLinkedTo[cityName1] || []).includes(cityName2);
  }
}

exports.Network = Network;
