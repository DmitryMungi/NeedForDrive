import { Injectable } from "@angular/core";
import {
  CITY_DEFAULT,
  NO_CHOSEN,
} from "../../order-page/order-page/form-blog/form-steps/step-location/location.const";

@Injectable({ providedIn: "root" })
export class LocationService {
  public cityValue: string = CITY_DEFAULT;

  getCityValue(): string {
    return this.cityValue;
  }

  setCityValue(city: string): string {
    if (city === "") {
      this.cityValue = NO_CHOSEN;
    } else {
      this.cityValue = city;
    }
    return this.cityValue;
  }
}
