import { Injectable } from "@angular/core";
import { CITY_DEFAULT } from "./location.const";
import { ILocationValue } from "./location.interface";

@Injectable({ providedIn: "root" })
export class LocationService {
  public cityValue: string = CITY_DEFAULT;

  public locationValues: ILocationValue = {
    city: "",
    address: "",
    valid: false,
  };

  getLocationValue(): ILocationValue {
    return this.locationValues;
  }

  setLocationValue(values: ILocationValue) {
    this.locationValues = values;
  }

  getCityValue(): string {
    return this.cityValue;
  }

  setCityValue(city: string): string {
    this.cityValue = city;
    return this.cityValue;
  }
}
