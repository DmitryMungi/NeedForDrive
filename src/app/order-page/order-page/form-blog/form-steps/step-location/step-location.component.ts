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
// import { HttpService } from "../../../../../services/http.service";
import { YaReadyEvent, YaGeocoderService } from "angular8-yandex-maps";
import { CityAddress } from "./address.const";
import { CityInterface, AddressInterface } from "./address.interface";
import { ValueAddressInterface } from "../../order-form.interface";
// import { AddressService } from "src/app/services/address.service";
import { CityService } from "src/app/services/city.service";
export const NO_MATCHES = "Совпадений не найдено";

@Component({
  selector: "app-step-location",
  templateUrl: "./step-location.component.html",
  styleUrls: ["./step-location.component.less"],
  // viewProviders: [
  //   { provide: ControlContainer, useExisting: FormGroupDirective },
  // ],
  // providers: [HttpService],
})
export class StepLocationComponent implements OnInit, OnDestroy {
  @Input() addressValues!: ValueAddressInterface;
  @Input() form!: FormGroup;
  @Output() addressValueChange = new EventEmitter();

  public cityGiometry!: number[];
  public orderForm: FormGroup = this.form;

  public optionsPlacemark = {
    preset: "islands#circleIcon",
    iconColor: "#0ec261",
  };

  cityList: CityAddress[] = [];
  public cities: CityInterface[] = [];
  public address: AddressInterface[] = [];
  public activeAddress: string[] = [];
  public citiesList: string[] = [];
  public adressString: string[] = [];

  public addressList: AddressInterface[] = [];

  constructor(
    // private httpService: HttpService,
    // private address: AddressService,
    private cityService: CityService,
    private yaGeocoderService: YaGeocoderService
  ) {}

  ngOnInit(): void {
    // this.httpService
    //   .getAddress()
    //   .subscribe((data: CityAddress[]) => (this.cityList = data));
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

  onMapReady({ target }: YaReadyEvent<ymaps.Map>): void {
    const geocodeResult = this.yaGeocoderService.geocode(
      "Вихоревка Советская, 39",
      {
        results: 1,
      }
    );
    geocodeResult.subscribe((result: any) => {
      const firstGeoObject = result.geoObjects.get(0);
      const coords = firstGeoObject.geometry.getCoordinates();
      const bounds = firstGeoObject.properties.get("boundedBy");
      firstGeoObject.options.set(
        "preset",
        "islands#darkBlueDotIconWithCaption"
      );
      firstGeoObject.properties.set(
        "iconCaption",
        firstGeoObject.getAddressLine()
      );
      target.geoObjects.add(firstGeoObject);
      target.setBounds(bounds, {
        checkZoomRange: true,
      });
    });
  }

  onSearchCityItem(item: string) {
    const addressObj = this.address.filter((x) => x.cityId?.name === item);
    for (let i = 0; i < addressObj.length; i++) {
      this.activeAddress.push(addressObj[i].address);
    }
    this.addressValues.city = item;
    this.addressValues.address = "";
    this.setValuesAddress(this.addressValues);
  }

  onSearchAddressItem(item: string) {
    this.addressValues.address = item;
    this.setValuesAddress(this.addressValues);
  }

  resetAddressList() {
    this.addressList = [];
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
      console.log("совпадений нет");
    }
  }

  changeaddressValue(item: string) {
    const value = this.checkForMatch(item, this.activeAddress);
    if (value != undefined) {
      this.addressValues.address = item; // при сохранении инпут остается пустым и данные пока не отправляются
    } else {
      console.log("совпадений нет"); // попробовать переписать в одну строку
    }
  }

  checkForMatch(item: string, list: string[]): string | void {
    const match = list.filter((x) => x.toLowerCase() === item.toLowerCase());

    if (match.length != 0) {
      return match[0];
    }
  }

  ngOnDestroy(): void {}
}
