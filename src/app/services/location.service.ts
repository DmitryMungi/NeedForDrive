import { Injectable } from "@angular/core";

export const CITY_DEFAULT = "Ульяновск";

@Injectable({ providedIn: "root" })
export class LocationService {
  public cityValue: string = CITY_DEFAULT;

  getCityValue(): string {
    return this.cityValue;
  }

  setCityValue(city: string): string {
    this.cityValue = city;
    return this.cityValue;
  }
}
