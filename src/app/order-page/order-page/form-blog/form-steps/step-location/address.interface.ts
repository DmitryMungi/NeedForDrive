export interface CityInterface {
  name: string;
  geometry: number[];
  address: AddressInterface[];
}

export interface AddressInterface {
  name: string;
  geometry: number[];
}
