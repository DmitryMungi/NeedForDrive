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
// import { CityAddress } from "./address.const";
import { ICity, IAddress, Igeo, Iplacemark } from "./address.interface";
import { ValueAddressInterface } from "../../order-form.interface";
import { LocatoinApiService } from "src/app/services/location.api.service";
import { LocationService } from "src/app/services/location.service";
import { DEFAULT_GEO, NO_MATCHES, OPTION_PLACEMARK } from "./address.const";

@Component({
  selector: "app-step-location",
  templateUrl: "./step-location.component.html",
  styleUrls: ["./step-location.component.less"],
})
export class StepLocationComponent implements OnInit, OnDestroy {
  @Input() addressValues!: ValueAddressInterface;
  @Input() form!: FormGroup;
  @Output() addressValueChange = new EventEmitter();

  public cityGiometry!: number[];
  public orderForm: FormGroup = this.form;

  // cityList: CityAddress[] = [];
  public cities: ICity[] = [];
  public address: IAddress[] = [];
  public activeAddress: string[] = [];
  public citiesList: string[] = [];
  public adressString: string[] = [];

  public optionsPlacemark: Iplacemark = OPTION_PLACEMARK;
  public coordinate: Igeo = DEFAULT_GEO;
  public textNoMathces: string = NO_MATCHES;
  public fullAddress!: string;

  public addressList: IAddress[] = [];

  constructor(
    // private httpService: HttpService,
    // private address: AddressService,
    private cityService: LocatoinApiService
  ) {}

  ngOnInit(): void {
    this.cityService
      .getCity()
      .subscribe(
        (res) => (this.citiesList = res.data.map((val: any) => val.name))
      );
    this.cityService
      .getPoint()
      .subscribe(
        (res) => (
          (this.address = res.data),
          (this.adressString = res.data.map((val: any) => val.address))
        )
      );
  }

  onSearchCityItem(item: string) {
    const addressObj = this.address.filter((x) => x.cityId?.name === item);
    for (let i = 0; i < addressObj.length; i++) {
      this.activeAddress.push(addressObj[i].address);
    }
    this.addressValues.city = item;
    this.addressValues.address = "";
    this.setValuesAddress(this.addressValues);
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

  setValuesAddress(item: ValueAddressInterface) {
    this.addressValueChange.emit(item);
    return;
  }

  changeCityValue(item: string) {
    const value = this.checkForMatch(item, this.citiesList);
    if (value != undefined) {
      this.addressValues.city = item;
    } else {
      console.log(this.textNoMathces);
    }
  }

  changeaddressValue(item: string) {
    const value = this.checkForMatch(item, this.activeAddress);
    if (value != undefined) {
      this.addressValues.address = item; // при сохранении инпут остается пустым и данные пока не отправляются
    } else {
      console.log(this.textNoMathces); // попробовать переписать в одну строку
    }
  }

  checkForMatch(item: string, list: string[]): string | void {
    const match = list.filter((x) => x.toLowerCase() === item.toLowerCase());

    if (match.length != 0) {
      return match[0];
    }
  }

  getCoordinate(item: string) {
    this.cityService
      .getCoordinates(item)
      .subscribe((res) => (this.coordinate = res));
  }

  ngOnDestroy(): void {}
}
