import { Injectable } from "@angular/core";
import {
  IAddit,
  INameId,
  IOrderData,
  IPointsValues,
} from "../interfaces/order.interface";

import {
  CarModel,
  ICars,
} from "src/app/order-page/order-page/form-blog/form-steps/step-model/module.interface";
import { ADDITDVALUES } from "src/app/order-page/order-page/form-blog/form-steps/step-addit/addit.const";
import { IPrice } from "../interfaces/order.interface";
import { RateEnum } from "src/app/order-page/order-page/form-blog/form-steps/step-addit/addit.const";
import {
  IAddress,
  ICity,
} from "src/app/order-page/order-page/form-blog/form-steps/step-location/location.interface";
import { ITariff } from "src/app/order-page/order-page/form-blog/form-steps/step-addit/addit.interface";
import {
  OF_DAY,
  OF_MINUTE,
  OF_SECOND,
  OF_WEEK,
  OF_MONTH,
  OF_THREEMONTH,
  OF_YEAR,
  COST_DAY,
  COST_MINUTE,
  COST_MONTH,
  COST_TREEMONTH,
  COST_WEEK,
  COST_WEEKSALE,
  COST_YEAR,
  COST_CHAIR,
  COST_RIGHTWHEEL,
  COST_TANK,
  STARTPRICE,
  TOTALPRICE,
} from "../const/order.const";

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
  public priceRange: IPrice = STARTPRICE;
  public additValues: IAddit = ADDITDVALUES;
  public priceTotal: number = TOTALPRICE;
  public orderStaus: INameId[] = [];

  getPriceRange(): IPrice {
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
    this.additValues.color = "";
    this.additValues.isValid = false;
    this.setAdditValues(this.additValues);
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
    const order = {
      orderStatusId: <INameId>{},
      cityId: this.locationValues.cityId,
      pointId: this.locationValues.pointId,
      carId: <ICars>{
        name: this.moduleCar.name,
        id: this.moduleCar.id,
      },
      color: this.additValues.color,
      dateFrom: this.additValues.dateFrom,
      dateTo: this.additValues.dateUntil,
      rateId: <ITariff>{ id: this.additValues.rateId },
      price: this.priceTotal,
      isFullTank: this.additValues.fullTank,
      isNeedChildChair: this.additValues.isNeedChildChair,
      isRightWheel: this.additValues.isRightWheel,
    };

    return order;
  }

  private totalPrice(from: number, until: number, rate: string) {
    let price = Math.abs(until - from) / OF_SECOND;

    switch (rate) {
      case RateEnum.day:
        price = Math.ceil(price / OF_DAY) * COST_DAY;
        break;
      case RateEnum.minute:
        price = (price / OF_MINUTE) * COST_MINUTE;
        break;
      case RateEnum.month:
        price = Math.ceil(price / OF_MONTH) * COST_MONTH;
        break;
      case RateEnum.threeMounth:
        price = Math.ceil(price / OF_THREEMONTH) * COST_TREEMONTH;
        break;
      case RateEnum.week:
        price = Math.ceil(price / OF_WEEK) * COST_WEEK;
        break;
      case RateEnum.weekSale:
        price = Math.ceil(price / OF_WEEK) * COST_WEEKSALE;
        break;
      case RateEnum.year:
        price = Math.ceil(price / OF_YEAR) * COST_YEAR;
        break;
    }

    this.priceTotal = price;

    if (this.additValues.fullTank) {
      this.priceTotal = this.priceTotal + COST_TANK;
    }
    if (this.additValues.isNeedChildChair) {
      this.priceTotal = this.priceTotal + COST_CHAIR;
    }
    if (this.additValues.isRightWheel) {
      this.priceTotal = this.priceTotal + COST_RIGHTWHEEL;
    }
  }
}
