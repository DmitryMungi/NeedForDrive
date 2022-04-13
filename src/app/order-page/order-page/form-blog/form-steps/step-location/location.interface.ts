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
  updatedAt: Date;
  createdAt: Date;
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
