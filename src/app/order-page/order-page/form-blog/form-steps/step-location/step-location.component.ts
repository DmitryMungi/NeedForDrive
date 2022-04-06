import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormControl,
  FormGroupDirective,
} from "@angular/forms";
import { from, fromEvent, Observable } from "rxjs";
import {
  toArray,
  filter,
  pluck,
  distinctUntilChanged,
  switchMap,
  map,
} from "rxjs/operators";
import { addressArray } from "./address.const";
import { CityInterface, AddressInterface } from "./address.interface";
import { ValueAddressInterface } from "../../order-form.interface";

@Component({
  selector: "app-step-location",
  templateUrl: "./step-location.component.html",
  styleUrls: ["./step-location.component.less"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class StepLocationComponent implements OnInit {
  @Input() addressValues!: ValueAddressInterface;
  @Input() form!: FormGroup;
  @Output() addressValueChange = new EventEmitter();
  @ViewChild("inputCityEl") inputCity!: ElementRef;
  @ViewChild("inputAddressEl") inputAddress!: ElementRef;

  public searchCityResult$!: Observable<Array<CityInterface>>;
  public searchAddressResult$!: Observable<Array<AddressInterface>>;
  public cityGiometry!: number[];
  public orderForm: FormGroup = this.form;

  public optionsPlacemark = {
    preset: "islands#circleIcon",
    iconColor: "#0ec261",
  };

  public cityList: Array<CityInterface> = addressArray;

  public addressList: AddressInterface[] = [];

  constructor() {}

  ngOnInit(): void {
    const activeCity = this.cityList.filter(
      (x) => x.name === this.addressValues.city
    );
    this.cityGiometry = activeCity[0].geometry;
    this.addressList = activeCity[0].address;
    console.log(this.addressValues.address);
  }

  searchCity(searchTerm: string): Observable<Array<CityInterface>> {
    return from(this.cityList).pipe(
      filter((cityName) => this.checkForMatch(cityName, searchTerm)),
      toArray()
    );
  }

  searchAddress(searchTerm: string): Observable<Array<AddressInterface>> {
    return from(this.addressList).pipe(
      filter((addressName) => this.checkForMatch(addressName, searchTerm)),
      toArray()
    );
  }

  checkForMatch(el: CityInterface | AddressInterface, item: string): boolean {
    return el.name.toLocaleLowerCase().indexOf(item) !== -1;
  }

  onSearchCityItem(item: any) {
    // this.form.form.value.city = item.name;
    this.addressList = item.address;
    this.cityGiometry = item.geometry;
    this.addressValues.city = item.name;
    this.getValuesAddress(this.addressValues);
    // console.log(this.form);
  }

  onSearchAddressItem(item: any) {
    // this.form.form.value.address = item.name;
    this.cityGiometry = item.geometry;
    this.addressValues.address = item.name;
    this.getValuesAddress(this.addressValues);
  }

  getValuesAddress(item: any) {
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
}
