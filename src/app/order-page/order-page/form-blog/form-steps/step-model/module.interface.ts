export interface ICategory {
  description: string;
  id: string;
  name: string;
}

export interface ICars {
  categoryId: ICategory;
  colors: string[];
  createdAt: number;
  description: string;
  id: string;
  name: string;
  number: string;
  priceMax: number;
  priceMin: number;
  tank: number;
  thumbnail: IPicture;
  updatedAt: number;
}

export interface IPicture {
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
}

export class CarModel {
  id: string;
  name: string;
  number: string;
  priceMax: number;
  priceMin: number;
  thumbnailUrl?: string;
  isActive: boolean;
  categoryId?: ICategory;
  colors?: string[] = [];
  tank?: number;

  constructor(car: ICars) {
    this.id = car.id;
    this.name = car.name;
    this.number = car.number;
    this.priceMax = car.priceMax;
    this.priceMin = car.priceMin;
    this.thumbnailUrl = car.thumbnail ? car.thumbnail.path : "";
    this.categoryId = car.categoryId;
    this.colors = car.colors;
    this.tank = car.tank;
    this.isActive = false;
  }
}

export class CategoryModel {
  id = "";
  name = "";

  constructor(category: ICategory) {
    this.id = category.id;
    this.name = category.name;
  }
}

export interface IResponse<T> {
  data: T;
}
