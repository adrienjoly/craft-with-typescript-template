// TODO: make instances immutable, thanks to a Builder class

class Network {
  constructor() {
    this.citiesLinkedTo = {};
  }
  addCity(city, connectedCities) {
    for (const connectedCity of connectedCities) {
      (this.citiesLinkedTo[city] = this.citiesLinkedTo[city] || []).push(
        connectedCity
      );
    }
  }
  isLinked(city1, city2) {
    return (this.citiesLinkedTo[city1] || []).includes(city2);
  }
}

exports.Network = Network;
