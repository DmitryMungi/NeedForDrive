import { CarModel } from "src/app/order-page/order-page/form-blog/form-steps/step-model/module.interface";

export interface ILocationValue {
  city: string;
  address: string;
  valid: boolean;
}

// export interface IModuleValue {
//   car: CarModel;
//   valid: boolean;
// }

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
