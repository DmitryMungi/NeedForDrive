import { Iservice } from "src/app/order-page/order-page/form-blog/form-steps/step-addit/addit.interface";
export interface ILocationValue {
  city: string;
  address: string;
  valid: boolean;
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

export interface Iaddit {
  color: string;
  dateFrom: number;
  dateUntil: number;
  rate: string;
  fullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
  isValid: boolean;
}

export interface IDateDuration {
  month: number;
  week: number;
  day: number;
  hour: number;
  minute: number;
}
