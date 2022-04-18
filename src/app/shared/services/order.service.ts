import { Injectable } from "@angular/core";
import { ILocationValue } from "../interfaces/order.interface";
import { CarModel } from "src/app/order-page/order-page/form-blog/form-steps/step-model/module.interface";

@Injectable({ providedIn: "root" })
export class OrderService {
  public locationValues: ILocationValue = {
    city: "",
    address: "",
    valid: false,
  };

  public moduleCar: CarModel = {
    id: "",
    name: "",
    number: "",
    priceMax: 0,
    priceMin: 0,
    thumbnailUrl: "",
    isActive: false,
    categoryId: {
      description: "",
      id: "",
      name: "",
    },
    colors: [],
    tank: 0,
  };

  public carList: CarModel[] = [];

  getLocationValue(): ILocationValue {
    return this.locationValues;
  }

  setLocationValue(values: ILocationValue) {
    this.locationValues = values;
  }

  getCarList(): CarModel[] {
    return this.carList;
  }

  setCarList(cars: CarModel[]) {
    this.carList = cars.slice();
  }

  getCar(): CarModel {
    return this.moduleCar;
  }

  setCar(car: CarModel) {
    this.moduleCar = car;
  }
}
