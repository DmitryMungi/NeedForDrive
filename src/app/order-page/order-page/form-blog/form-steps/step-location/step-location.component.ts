import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { ICity, IAddress, Igeo, Iplacemark } from "./location.interface";
import { LocatoinApiService } from "src/app/order-page/order-page/form-blog/form-steps/step-location/location.api.service";
import { LocationService } from "./location.service";
import { OrderService } from "src/app/shared/services/order.service";
import { ILocationValue } from "./location.interface";
import {
  DEFAULT_GEO,
  NO_MATCHES,
  OPTION_PLACEMARK,
  CITY_DEFAULT,
} from "./location.const";
import { ORDER_CONTROLS } from "../../order-form.interface";
import { Subject } from "rxjs";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: "app-step-location",
  templateUrl: "./step-location.component.html",
  styleUrls: ["./step-location.component.less"],
})
export class StepLocationComponent implements OnInit {
  @Output() addressValueChange = new EventEmitter<boolean>();

  public cities: ICity[] = [];
  public addressList: IAddress[] = [];
  public activeAddress: string[] = [];
  public citiesList: string[] = [];

  public optionsPlacemark: Iplacemark = OPTION_PLACEMARK;
  public coordinate: Igeo = DEFAULT_GEO;
  public textNoMathces: string = NO_MATCHES;
  public orderConrtrols = ORDER_CONTROLS;
  public fullAddress: string = CITY_DEFAULT;

  public subj: Subject<string> = new Subject();
  public addressValues: ILocationValue =
    this.locationService.getLocationValue();

  constructor(
    private orderService: OrderService,
    private locationService: LocationService,
    private locationApiService: LocatoinApiService
  ) {}

  ngOnInit(): void {
    this.locationApiService
      .getCity()
      .subscribe(
        (res) =>
          (this.citiesList = res.data.map(
            (val: ICity) => val.name,
            (this.cities = res.data)
          ))
      );
    this.locationApiService
      .getPoint()
      .subscribe((res) => (this.addressList = res.data));

    this.subj.subscribe((address) =>
      this.locationApiService
        .getCoordinates(address)
        .subscribe((res) => (this.coordinate = res))
    );
  }

  onSearchCityItem(item: string) {
    this.activeAddress.length = 0;
    const addressObj = this.addressList.filter((x) => x.cityId?.name === item);
    for (let i = 0; i < addressObj.length; i++) {
      this.activeAddress.push(addressObj[i].address);
    }
    this.addressValues.city = item;
    this.addressValues.address = "";
    this.locationService.setCityValue(item);
    this.fullAddress = item;
    this.getCoordinate(this.fullAddress);
  }

  onSearchAddressItem(item: string) {
    this.addressValues.address = item;
    this.setValuesAddress(this.addressValues);
    this.fullAddress = this.fullAddress + item;
    this.getCoordinate(this.fullAddress);
  }

  resetCity() {
    this.addressValues.city = "";
    this.activeAddress.length = 0;
    this.resetAddress();
  }

  resetAddress() {
    this.addressValues.address = "";
    this.addressValues.valid = false;
    this.setValuesAddress(this.addressValues);
  }

  setValuesAddress(item: ILocationValue) {
    if (item.address != "" && item.city != "") {
      const [city] = this.cities.filter((x) => x.name === item.city);
      const [address] = this.addressList.filter(
        (x) => x.address === item.address
      );
      item.valid = true;
      this.orderService.setLocationValues(city, address);
      this.locationService.setLocationValue(item);
    }
    this.addressValueChange.emit(item.valid);
    return;
  }

  changeCityValue(item: string) {
    const value = this.checkForMatch(item, this.citiesList);
    if (value != undefined) {
      this.addressValues.city = item;
    }
  }

  changeaddressValue(item: string) {
    if (this.checkForMatch(item, this.activeAddress)) {
      this.addressValues.address = item;
    }
  }

  checkForMatch(item: string, list: string[]): boolean {
    const match = list.filter((x) => x.toLowerCase() === item.toLowerCase());
    return match.length != 0;
  }

  getCoordinate(item: string) {
    this.subj.next(item);
  }
}
