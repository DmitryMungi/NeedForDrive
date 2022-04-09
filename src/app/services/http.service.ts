import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CityAddress } from "../order-page/order-page/form-blog/form-steps/step-location/address.const";
import { AddressService } from "./address.service";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getAddress(): Observable<CityAddress[]> {
    return this.http.get("assets/address.json").pipe(
      map((data: any) => {
        let cityList = data["cityList"];
        return cityList.map(function (city: any): CityAddress {
          return { name: city.name, address: city.address };
        });
      })
    );
  }
}
