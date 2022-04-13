import {
  ICity,
  IAddress,
} from "src/app/order-page/order-page/form-blog/form-steps/step-location/location.interface";

export interface ILocationValue {
  city: string;
  address: string;
  valid: boolean;
}

export interface ICityRes {
  count: number;
  data: ICity[];
  fields: {
    name: {
      name: string;
      type: string;
      required: boolean;
    };
  };
}

export interface IPointRes {
  count: number;
  data: IAddress[];
  fields: {
    address: {
      name: string;
      required: boolean;
      type: string;
    };
    cityId: {
      name: string;
      populate: {
        filter: string;
        select: [];
        ref: string;
        required: boolean;
        type: string;
      };
    };
    name: {
      name: string;
      required: boolean;
      type: string;
    };
  };
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
