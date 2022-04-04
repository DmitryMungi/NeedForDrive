import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { from, fromEvent, Observable } from "rxjs";
import {
  toArray,
  filter,
  pluck,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";
import { addressArray } from "./address.const";
import { CityInterface, AddressInterface } from "./address.interface";
import { ValueAddressInterface } from "../../order-form.interface";

@Component({
  selector: "app-step-location",
  templateUrl: "./step-location.component.html",
  styleUrls: ["./step-location.component.less"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class StepLocationComponent implements OnInit {
  @Input() addressValues!: ValueAddressInterface;
  @Output() addressValueChange = new EventEmitter();
  @ViewChild("inputCity") inputCity!: ElementRef;
  @ViewChild("inputAddress") inputAddress!: ElementRef;
  @ViewChild("listDropDown") listDropDown!: ElementRef;
  @ViewChild("AddressDropDown") addressDropDown!: ElementRef;
  public searchCityResult$!: Observable<Array<CityInterface>>;
  public searchAddressResult$!: Observable<Array<AddressInterface>>;
  public cityGiometry!: number[];

  public optionsPlacemark = {
    preset: "islands#circleIcon",
    iconColor: "#0ec261",
  };

  public cityList: Array<CityInterface> = addressArray;

  public addressList: AddressInterface[] = [];

  constructor() {}

  ngOnInit(): void {
    const searchcity: any = document.querySelector("#search-city");
    const searchAddress: any = document.querySelector("#sarch-address");
    const activeCity = this.cityList.filter(
      (x) => x.name === this.addressValues.city
    );
    this.cityGiometry = activeCity[0].geometry;
    this.addressList = activeCity[0].address;

    this.searchCityResult$ = fromEvent(searchcity, "input").pipe(
      pluck("target", "value"),
      distinctUntilChanged(),
      switchMap((searchTerm: any) => this.searchCity(searchTerm.toLowerCase()))
    );

    this.searchAddressResult$ = fromEvent(searchAddress, "input").pipe(
      pluck("target", "value"),
      distinctUntilChanged(),
      switchMap((searchTerm: any) =>
        this.searchAddress(searchTerm.toLowerCase())
      )
    );
  }

  searchCity(searchTerm: string): Observable<Array<CityInterface>> {
    return from(this.cityList).pipe(
      filter(
        (cityName) =>
          cityName.name.toLocaleLowerCase().indexOf(searchTerm) !== -1
      ),
      toArray()
    );
  }

  searchAddress(searchTerm: string): Observable<Array<AddressInterface>> {
    return from(this.addressList).pipe(
      filter(
        (addressName) =>
          addressName.name.toLocaleLowerCase().indexOf(searchTerm) !== -1
      ),
      toArray()
    );
  }

  onSearchCityItem(item: CityInterface) {
    this.inputCity.nativeElement.value = item.name;
    this.addressList = item.address;
    this.inputAddress.nativeElement.value = "";
    this.cityGiometry = item.geometry;
    this.addressValues.city = item.name;
    this.getValuesAddress(this.addressValues);
  }

  onSearchAddressItem(item: AddressInterface) {
    this.inputAddress.nativeElement.value = item.name;
    this.cityGiometry = item.geometry;
    this.addressValues.address = item.name;
    this.getValuesAddress(this.addressValues);
  }

  getValuesAddress(item: ValueAddressInterface) {
    for (let i = 0; i < this.cityList.length; i++) {
      if (this.cityList[i].name.toLowerCase() === item.city.toLowerCase()) {
        for (let y = 0; y < this.addressList.length; y++) {
          if (
            this.addressList[y].name.toLowerCase() ===
            item.address.toLowerCase()
          ) {
            this.addressValueChange.emit(item);
            return;
          }
        }
      }
    }
  }
  onDeleteValue(el: HTMLInputElement) {
    el.value = "";
  }
}
