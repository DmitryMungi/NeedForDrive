import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import {
  ICategory,
  ICars,
  CarModel,
  CategoryModel,
  IResponse,
} from "./module.interface";

@Injectable({ providedIn: "root" })
export class CarApiService {
  constructor(private http: HttpClient) {}

  getCars(): Observable<CarModel[]> {
    return this.http
      .get<IResponse<ICars[]>>(`${environment.apiUrl}/db/car`)
      .pipe(map((res) => res.data.map((car) => new CarModel(car))));
  }

  getCategory(): Observable<CategoryModel[]> {
    return this.http
      .get<IResponse<ICategory[]>>(`${environment.apiUrl}/db/category`)
      .pipe(
        map((res) => res.data.map((category) => new CategoryModel(category)))
      );
  }
}
