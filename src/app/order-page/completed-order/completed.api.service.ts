import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IOrderRes } from "src/app/shared/interfaces/order.interface";

@Injectable({ providedIn: "root" })
export class CompletedApiService {
  constructor(private http: HttpClient) {}

  getOrderComplet(id: string): Observable<IOrderRes> {
    return this.http
      .get<{ data: IOrderRes }>(`${environment.apiUrl}/db/order/${id}`)
      .pipe(map((res) => res.data));
  }

  deleteOrder(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/db/order/${id}`);
  }
}
