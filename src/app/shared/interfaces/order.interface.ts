import {
  IAddress,
  ICity,
} from "src/app/order-page/order-page/form-blog/form-steps/step-location/location.interface";
import { CarModel } from "src/app/order-page/order-page/form-blog/form-steps/step-model/module.interface";

export interface IPointsValues {
  cityId: ICity;
  pointId: IAddress;
  // =======
  // import { IService } from "src/app/order-page/order-page/form-blog/form-steps/step-addit/addit.interface";
  // export interface ILocationValue {
  //   city: string;
  //   address: string;
  //   valid: boolean;
  // >>>>>>> v-4_f-5
}

export interface IRes<T> {
  count: number;
  data: T[];
}

export interface IGeoRes {
  response: {
    GeoObjectCollection: {
      featureMember: IGeoObject[];
    };
  };
}

export interface IGeoObject {
  GeoObject: {
    Point: {
      pos: string;
    };
  };
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

export interface Iprice {
  min: number;
  max: number;
}

// export interface IOrderData {
//   orderStatusId: INameId;
//   cityId: INameId;
//   pointId: INameId;
//   carId: INameId;
//   color: string;
//   dateFrom: number;
//   dateTo: number;
//   rateId: ITariff;
//   price: number;
//   isFullTank: boolean;
//   isNeedChildChair: boolean;
//   isRightWheel: boolean;
// }

export interface IOrderData {
  orderStatusId: INameId;
  cityId: ICity;
  pointId: IAddress;
  carId: INameId;
  color: string;
  dateFrom: number;
  dateTo: number;
  rateId: string;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
}

export interface INameId {
  name: string;
  id: string;
}
