import { Injectable } from "@angular/core";
import { ILocationValue } from "../interfaces/order.interface";

@Injectable({ providedIn: "root" })
export class OrderService {
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
}
