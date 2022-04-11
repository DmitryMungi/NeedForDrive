import { Injectable } from "@angular/core";
import { CITY_DEFAULT } from "../order-page/order-page/form-blog/form-steps/step-location/address.const";

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
