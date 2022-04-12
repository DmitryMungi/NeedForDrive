import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from "@angular/forms";
import { ICity, IAddress, Igeo, Iplacemark } from "./location.interface";
import { ILocationValue } from "../../order-form.interface";
import { LocatoinApiService } from "src/app/shared/services/location.api.service";
import { LocationService } from "src/app/shared/services/location.service";
import { OrderService } from "src/app/shared/services/order.service";
import { DEFAULT_GEO, NO_MATCHES, OPTION_PLACEMARK } from "./location.const";

@Component({
  selector: "app-step-location",
  templateUrl: "./step-location.component.html",
  styleUrls: ["./step-location.component.less"],
})
export class StepLocationComponent implements OnInit, OnDestroy {
  @Input() form!: FormGroup;
  @Output() addressValueChange = new EventEmitter();

  public orderForm: FormGroup = this.form;

  public cities: ICity[] = [];
  public address: IAddress[] = [];
  public activeAddress: string[] = [];
  public citiesList: string[] = [];

  public optionsPlacemark: Iplacemark = OPTION_PLACEMARK;
  public coordinate: Igeo = DEFAULT_GEO;
  public textNoMathces: string = NO_MATCHES;
  public fullAddress!: string;

  public addressList: IAddress[] = [];

  public addressValues: ILocationValue = this.orderService.getLocationValue();

  constructor(
    private orderService: OrderService,
    private locationService: LocationService,
    private locationApiService: LocatoinApiService
  ) {}

  ngOnInit(): void {
    this.locationApiService
      .getCity()
      .subscribe(
        (res) => (this.citiesList = res.data.map((val: any) => val.name))
      );
    this.locationApiService
      .getPoint()
      .subscribe((res) => (this.address = res.data));
  }

  onSearchCityItem(item: string) {
    const addressObj = this.address.filter((x) => x.cityId?.name === item);
    for (let i = 0; i < addressObj.length; i++) {
      this.activeAddress.push(addressObj[i].address);
    }
    this.addressValues.city = item;
    this.addressValues.address = "";
    this.setValuesAddress(this.addressValues);
    this.locationService.setCityValue(item); // может сделать это в родительском компоненте
    this.fullAddress = item;
    this.getCoordinate(this.fullAddress);
  }

  onSearchAddressItem(item: string) {
    this.addressValues.address = item;
    this.setValuesAddress(this.addressValues);
    this.fullAddress = this.fullAddress + item;
    this.getCoordinate(this.fullAddress);
  }

  resetAddressList() {
    this.activeAddress.length = 0;
    this.addressValues.city = "";
    this.addressValues.address = "";
  }

  setValuesAddress(item: ILocationValue) {
    if (item.address != "" && item.city != "") {
      item.valid = true;
      this.orderService.setLocationValue(item);
      this.addressValueChange.emit();
    }

    return;
  }

  changeCityValue(item: string) {
    const value = this.checkForMatch(item, this.citiesList);
    if (value != undefined) {
      this.addressValues.city = item;
      // this.addressValueChange.emit();
    }
  }

  changeaddressValue(item: string) {
    const value = this.checkForMatch(item, this.activeAddress);
    if (value != undefined) {
      this.addressValues.address = item; // при сохранении инпут остается пустым и данные пока не отправляются
      // this.addressValueChange.emit();
    }
  }

  checkForMatch(item: string, list: string[]): string | void {
    const match = list.filter((x) => x.toLowerCase() === item.toLowerCase());

    if (match.length != 0) {
      return match[0];
    }
  }

  getCoordinate(item: string) {
    this.locationApiService
      .getCoordinates(item)
      .subscribe((res) => (this.coordinate = res));
  }

  ngOnDestroy(): void {}
}
