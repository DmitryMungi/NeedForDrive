import {
  ICity,
  IAddress,
} from "src/app/order-page/order-page/form-blog/form-steps/step-location/location.interface";

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
