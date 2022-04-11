import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pipe, map } from "rxjs";
import { Igeo } from "../order-page/order-page/form-blog/form-steps/step-location/address.interface";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class LocatoinApiService {
  constructor(private http: HttpClient) {}

  getCity(): Observable<any> {
    // const options = { params: new HttpParams().set("sort[name]", 1) };
    return this.http.get<any>(`${environment.apiUrl}/db/city`);
  }

  getPoint(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/db/point`);
  }

  getCoordinates(address: string): Observable<any> {
    return this.http
      .get<any>(
        `https://geocode-maps.yandex.ru/1.x/?apikey=${environment.apiKeyMap}&format=json&geocode=${address}`
      )
      .pipe(
        map((response) => {
          const [lng, lat] =
            response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
              .split(" ")
              .map(Number);
          return { lat, lng } as unknown as any; //ICoordinates;
        })
      );
  }
}
