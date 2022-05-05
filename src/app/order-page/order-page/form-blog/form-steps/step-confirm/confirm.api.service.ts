import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import {
  INameId,
  IOrderData,
  IOrderRes,
} from "src/app/shared/interfaces/order.interface";
import { environment } from "src/environments/environment";
import { IResponse } from "../step-model/module.interface";

@Injectable({ providedIn: "root" })
export class ConfirmApiService {
  constructor(private http: HttpClient, private router: Router) {}

  public url = `${environment.apiUrl}/db/orderStatus`;

  getOrderStatus(): Observable<INameId[]> {
    return this.http
      .get<IResponse<INameId[]>>(`${environment.apiUrl}/db/orderStatus`)
      .pipe(map((response) => response.data));
  }

  postOrder(obj: IOrderData): Observable<IOrderRes> {
    return this.http
      .post<IResponse<IOrderRes>>(`${environment.apiUrl}/db/order`, obj)
      .pipe(
        map((response) => response.data),
        tap((res) => this.router.navigate([`order/completed/${res.id}`]))
      );
  }
}
