import { Injectable } from "@angular/core";
import {
  CityInterface,
  AddressInterface,
} from "../order-page/order-page/form-blog/form-steps/step-location/address.interface";

@Injectable({ providedIn: "root" })
export class AddressService {
  public cityList: CityInterface[] = [];

  setCityList(list: CityInterface[]): CityInterface[] {
    this.cityList = list.slice();
    return this.cityList;
  }

  getCityList(): CityInterface[] {
    return this.cityList;
  }
}
