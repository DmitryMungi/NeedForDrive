import { Injectable } from "@angular/core";
import {
  ICity,
  IAddress,
} from "../../order-page/order-page/form-blog/form-steps/step-location/location.interface";

@Injectable({ providedIn: "root" })
export class AddressService {
  public cityList: ICity[] = [];

  setCityList(list: ICity[]): ICity[] {
    this.cityList = list.slice();
    return this.cityList;
  }

  getCityList(): ICity[] {
    return this.cityList;
  }
}
