const OUTBREAK_LEVEL = 3;

export type CityName = string;
export type Color = string;

export class City {
  private name: CityName;
  private cubes: Record<Color, number>;
  public hasOutbreak: boolean;

  constructor(name: string) {
    this.name = name;
    this.cubes = {
      blue: 0
    };
    this.hasOutbreak = false;
  }

  infect(cubeColor: Color, nbInfections: number): void {
    if (this.cubes[cubeColor] < OUTBREAK_LEVEL) {
      this.cubes[cubeColor] += nbInfections || 1;
    } else {
      this.hasOutbreak = true;
    }
  }
}
