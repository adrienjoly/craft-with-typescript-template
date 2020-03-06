// TODO: make instances immutable, thanks to a Builder class

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

exports.Network = Network;
