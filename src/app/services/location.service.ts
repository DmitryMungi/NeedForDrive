import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LocationService {
  public cityValue: string = "Ульяновск";

  getCityValue(): string {
    return this.cityValue;
  }

  setCityValue(city: string): string {
    this.cityValue = city;
    return this.cityValue;
  }
}
