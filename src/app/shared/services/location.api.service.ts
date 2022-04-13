import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { ICityRes, IPointRes, IGeoRes } from "../interfaces/order.interface";
import { Igeo } from "src/app/order-page/order-page/form-blog/form-steps/step-location/location.interface";

@Injectable({ providedIn: "root" })
export class LocatoinApiService {
  constructor(private http: HttpClient) {}

  getCity(): Observable<ICityRes> {
    return this.http.get<ICityRes>(`${environment.apiUrl}/db/city`);
  }

  getPoint(): Observable<IPointRes> {
    return this.http.get<IPointRes>(`${environment.apiUrl}/db/point`);
  }

  getCoordinates(address: string): Observable<Igeo> {
    return this.http
      .get<IGeoRes>(
        `${environment.apiMapUrl}/1.x/?apikey=${environment.apiKeyMap}&format=json&geocode=${address}`
      )
      .pipe(
        map((response) => {
          const [lng, lat] =
            response.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
              .split(" ")
              .map(Number);
          return { lat, lng } as unknown as Igeo;
        })
      );
  }
}
