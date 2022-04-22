import { Injectable } from "@angular/core";

import {
  IAddit,
  INameId,
  IOrderData,
  IPointsValues,
} from "../interfaces/order.interface";

// import { ILocationValue, IAddit } from "../interfaces/order.interface";

import { CarModel } from "src/app/order-page/order-page/form-blog/form-steps/step-model/module.interface";
import { ADDITDVALUES } from "src/app/order-page/order-page/form-blog/form-steps/step-addit/addit.const";
import { Iprice } from "../interfaces/order.interface";
import { RateEnum } from "src/app/order-page/order-page/form-blog/form-steps/step-addit/addit.const";
import {
  IAddress,
  ICity,
} from "src/app/order-page/order-page/form-blog/form-steps/step-location/location.interface";

export const STARTPRICE: Iprice = {
  min: 8000,
  max: 12000,
};

export const TOTALPRICE: number = 0;

@Injectable({ providedIn: "root" })
export class OrderService {
  public locationValues: IPointsValues = {
    cityId: <ICity>{},
    pointId: <IAddress>{},
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
  public additValues: IAddit = ADDITDVALUES;
  public priceTotal: number = TOTALPRICE;
  public orderStaus = <INameId>{};
  // =======

  //   public additValues: IAddit = ADDITDVALUES;
  // >>>>>>> v-4_f-5

  getPriceRange(): Iprice {
    return this.priceRange;
  }

  setLocationValues(cityId: ICity, pointId: IAddress) {
    this.locationValues.cityId = cityId;
    this.locationValues.pointId = pointId;
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

  getAdditValue(): IAddit {
    return this.additValues;
  }

  setAdditValues(value: IAddit) {
    this.additValues = value;
  }

  setTotalPrice() {
    this.totalPrice(
      this.additValues.dateFrom,
      this.additValues.dateUntil,
      this.additValues.rateId
    );
  }

  getTotalPrice(): number {
    return this.priceTotal;
  }

  getOrderData(): IOrderData {
    const Order = {
      orderStatusId: <INameId>{},
      cityId: this.locationValues.cityId,
      pointId: this.locationValues.pointId,
      carId: {
        name: this.moduleCar.name,
        id: this.moduleCar.id,
      },
      color: this.additValues.color,
      dateFrom: this.additValues.dateFrom,
      dateTo: this.additValues.dateUntil,
      rateId: this.additValues.rateId,
      price: this.priceTotal,
      isFullTank: this.additValues.fullTank,
      isNeedChildChair: this.additValues.isNeedChildChair,
      isRightWheel: this.additValues.isRightWheel,
    };

    return Order;
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
