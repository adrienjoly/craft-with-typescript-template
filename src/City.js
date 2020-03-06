const OUTBREAK_LEVEL = 3;

class City {
  constructor(name) {
    this.name = name;
    this.cubes = {
      blue: 0
    };
  }

  infect(cubeColor, nbInfections) {
    if (this.cubes[cubeColor] < OUTBREAK_LEVEL) {
      this.cubes[cubeColor] += nbInfections || 1;
    }
  }
}

module.exports = {
  City
};
