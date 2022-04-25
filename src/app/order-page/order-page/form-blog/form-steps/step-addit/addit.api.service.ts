import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ITariff } from "./addit.interface";
import { IResponse } from "../step-model/module.interface";

@Injectable({ providedIn: "root" })
export class AdditApiService {
  constructor(private http: HttpClient) {}

  getRate(): Observable<ITariff[]> {
    return this.http
      .get<IResponse<ITariff[]>>(`${environment.apiUrl}/db/rate`)
      .pipe(map((res) => res.data.filter((tariff) => tariff.rateTypeId)));
  }
}
