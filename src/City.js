const OUTBREAK_LEVEL = 3;

class City {
  constructor(name) {
    this.name = name;
    this.cubes = {
      blue: 0
    };
    this.hasOutbreak = false;
  }

  infect(cubeColor, nbInfections) {
    if (this.cubes[cubeColor] < OUTBREAK_LEVEL) {
      this.cubes[cubeColor] += nbInfections || 1;
    } else {
      this.hasOutbreak = true;
    }
  }
}

module.exports = {
  City
};
