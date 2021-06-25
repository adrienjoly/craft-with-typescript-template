import { City, CityName, Color } from './City';

// TODO: make instances immutable, thanks to a Builder class

export class Network {
  private cities: Record<CityName, City>;
  private citiesLinkedTo: Record<CityName, CityName[]>;

  constructor() {
    this.cities = {}; // { name -> City object }
    this.citiesLinkedTo = {}; // { name -> array of city names }
  }
  addCity(name: CityName, connectedCities: CityName[]): void {
    this.cities[name] = new City(name);
    this.citiesLinkedTo[name] = [];
    for (const otherCityName of connectedCities) {
      this.citiesLinkedTo[name].push(otherCityName);
    }
  }
  getCity(name: CityName): City {
    return this.cities[name];
  }
  getConnectedCities(cityName: CityName): City[] {
    return this.citiesLinkedTo[cityName].map(
      (connectedCityName) => this.cities[connectedCityName]
    );
  }
  infectCity(name: CityName, cubeColor: Color, nbInfections: number): void {
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
  isLinked(cityName1: CityName, cityName2: CityName): boolean {
    return (this.citiesLinkedTo[cityName1] || []).includes(cityName2);
  }
}
