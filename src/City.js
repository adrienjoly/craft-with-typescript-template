const OUTBREAK_LEVEL = 3;

class City {
  constructor(name, infectionLevel) {
    this.name = name;
    this.infectionLevel = infectionLevel;
  }

  infect() {
    if (this.infectionLevel < OUTBREAK_LEVEL) {
      this.infectionLevel++;
    }
  }
}

module.exports = {
  City
};
