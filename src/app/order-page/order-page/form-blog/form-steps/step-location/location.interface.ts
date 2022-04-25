export interface IAddress {
  name: string;
  address: string;
  id: string;
  cityId: {
    name: string;
    id: string;
  };
}

export interface ICity {
  updatedAt: number;
  createdAt: number;
  name: string;
  id: string;
}

export interface Igeo {
  lat: number;
  lng: number;
}

export interface Iplacemark {
  preset: string;
  iconColor: string;
}

export interface ILocationValue {
  city: string;
  address: string;
  valid: boolean;
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
