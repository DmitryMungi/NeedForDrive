import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class CityService {
  constructor(private http: HttpClient) {}

  getCity(): Observable<any> {
    const options = { params: new HttpParams().set("sort[name]", 1) };
    return this.http.get<any>(`${environment.apiUrl}/db/city`, options);
  }

  getPoint(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/db/point`);
  }
}
