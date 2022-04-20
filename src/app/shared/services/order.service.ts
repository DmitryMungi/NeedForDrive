import { Injectable } from "@angular/core";
import { ILocationValue, Iaddit } from "../interfaces/order.interface";
import { CarModel } from "src/app/order-page/order-page/form-blog/form-steps/step-model/module.interface";
import { ADDITDVALUES } from "src/app/order-page/order-page/form-blog/form-steps/step-addit/addit.const";
import { Iprice } from "../interfaces/order.interface";
import { RateEnum } from "src/app/order-page/order-page/form-blog/form-steps/step-addit/addit.const";

export const STARTPRICE: Iprice = {
  min: 8000,
  max: 12000,
};

export const TOTALPRICE: number = 0;

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

  public priceRange: Iprice = STARTPRICE;

  public additValues: Iaddit = ADDITDVALUES;

  public priceTotal: number = TOTALPRICE;

  getPriceRange(): Iprice {
    return this.priceRange;
  }

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
    this.priceRange.min = this.moduleCar.priceMin;
    this.priceRange.max = this.moduleCar.priceMax;
  }

  getAdditValue(): Iaddit {
    return this.additValues;
  }

  setAdditValues(value: Iaddit) {
    this.additValues = value;
  }

  setTotalPrice(id: string) {
    this.totalPrice(this.additValues.dateFrom, this.additValues.dateUntil, id);
  }

  getTotalPrice(): number {
    return this.priceTotal;
  }

  private totalPrice(from: number, until: number, rate: string) {
    let price = Math.abs(until - from) / 1000;
    switch (rate) {
      case RateEnum.day:
        price = Math.ceil(price / 86400) * 2500;
        this.priceTotal = price;
        break;
      case RateEnum.minute:
        price = (price / 60) * 10;
        this.priceTotal = price;
        break;
      case RateEnum.month:
        price = Math.ceil(price / 2592000) * 1000;
        this.priceTotal = price;
        break;
      case RateEnum.threeMounth:
        price = Math.ceil(price / 7776000) * 51000;
        this.priceTotal = price;
        break;
      case RateEnum.week:
        price = Math.ceil(price / 604800) * 15000;
        this.priceTotal = price;
        break;
      case RateEnum.weekSale:
        price = Math.ceil(price / 604800) * 13500;
        this.priceTotal = price;
        break;
      case RateEnum.year:
        price = Math.ceil(price / 31536000) * 200000;
        this.priceTotal = price;
        break;
    }
  }
}
