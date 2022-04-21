import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { INameId, IOrderData } from "src/app/shared/interfaces/order.interface";
import { OrderService } from "src/app/shared/services/order.service";
import { environment } from "src/environments/environment";
import { IResponse } from "../step-model/module.interface";

export interface IOrderRequestWithId {
  id: string;
}

@Injectable({ providedIn: "root" })
export class ConfirmApiService {
  constructor(private http: HttpClient, private orderService: OrderService) {}

  public url = `${environment.apiUrl}/db/orderStatus`;

  getOrderStatus(): Observable<INameId[]> {
    return this.http
      .get<IResponse<INameId>>(`${environment.apiUrl}/db/orderStatus`)
      .pipe(map((response) => response.data));
  }

  postOrder(obj: any): Observable<IOrderRequestWithId> {
    return this.http
      .post<{ data: IOrderRequestWithId }>(
        `${environment.apiUrl}/db/order`,
        obj
      )
      .pipe(map((response) => response.data));
  }
}
