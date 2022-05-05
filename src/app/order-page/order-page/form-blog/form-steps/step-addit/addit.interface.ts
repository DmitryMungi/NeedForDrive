export interface IRate {
  id: string;
  price: number;
  rateTypeId: IRateType;
}

export interface IRateType {
  name: string;
  unit: string;
}
export interface ITariff {
  id: string;
  price: number;
  rateTypeId: IRateType;
}

export interface IService {
  id: string;
  description: string;
  isChecked: boolean;
}
