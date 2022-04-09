export interface AddressInterface {
  name: string;
  address: string;
  id: string;
  cityId: {
    name: string;
    id: string;
  };
}

export interface CityInterface {
  updatedAt: Date;
  createdAt: Date;
  name: string;
  id: string;
}
