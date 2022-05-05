import { ITariff } from "src/app/order-page/order-page/form-blog/form-steps/step-addit/addit.interface";
import {
  IAddress,
  ICity,
} from "src/app/order-page/order-page/form-blog/form-steps/step-location/location.interface";
import { ICars } from "src/app/order-page/order-page/form-blog/form-steps/step-model/module.interface";

export interface IPointsValues {
  cityId: ICity;
  pointId: IAddress;
}

export interface IRes<T> {
  count: number;
  data: T[];
}

export interface IAddit {
  color: string;
  dateFrom: number;
  dateUntil: number;
  rate: string;
  rateId: string;
  fullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  isValid: boolean;
}

export interface IDateDuration {
  year: number;
  month: number;
  week: number;
  day: number;
  hour: number;
  minute: number;
}

export interface IPrice {
  min: number;
  max: number;
}

export interface IOrderData {
  orderStatusId: INameId;
  cityId: ICity;
  pointId: IAddress;
  carId: ICars;
  color: string;
  dateFrom: number;
  dateTo: number;
  rateId: ITariff;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
}

export interface IOrderRes extends IOrderData {
  id: string;
}

export interface INameId {
  name: string;
  id: string;
}
