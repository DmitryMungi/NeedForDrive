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
  delay,
  toArray,
  filter,
  pluck,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";

export interface Branches {
  name: string;
  geometry: number[];
  address: Address[];
}

export interface Address {
  name: string;
  geometry: number[];
}

@Component({
  selector: "app-step-location",
  templateUrl: "./step-location.component.html",
  styleUrls: ["./step-location.component.less"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class StepLocationComponent implements OnInit {
  @Input() cityValue: string = "";
  @Input() addressValue: string = "";
  @Output() changeCityValue = new EventEmitter();
  @Output() changeAddressValue = new EventEmitter();
  @ViewChild("inputAddress") inputAddress: ElementRef | undefined;
  public city!: string;
  public address!: string;
  public searchCityResult$!: Observable<Array<Branches>>;
  public searchAddressResult$!: Observable<Array<Address>>;
  public cityIsCorrect: boolean = true;
  public addressIsCorrect: boolean = true;
  public cityGiometry: number[] = [54.314192, 48.403132];
  public addressGiometry: number[][] = [
    [54.306859, 48.291876],
    [54.300008, 48.367792],
    [54.352688, 48.385103],
    [54.338266, 48.542263],
  ];

  public cityList: Array<Branches> = [
    {
      name: "Москва",
      geometry: [55.817866, 37.952644],
      address: [
        {
          name: "Стрельбищенский переулок, 21",
          geometry: [55.763229, 37.539895],
        },
        {
          name: "проспект Мира, 186Бс2",
          geometry: [55.829977, 37.652346],
        },
        {
          name: "9-я Парковая улица, 47к2",
          geometry: [55.805285, 37.797819],
        },
        {
          name: "улица Дыбенко, 38к1",
          geometry: [55.876703, 37.484065],
        },
      ],
    },
    {
      name: "Ульяновск",
      geometry: [54.314192, 48.403132],
      address: [
        {
          name: "Московское шоссе, 52",
          geometry: [54.306859, 48.291876],
        },
        {
          name: "Транспортная улица, 6",
          geometry: [54.300008, 48.367792],
        },
        {
          name: "улица Розы Люксембург, 34Г",
          geometry: [54.352688, 48.385103],
        },
        {
          name: "улица Димитрова, 3",
          geometry: [54.338266, 48.542263],
        },
      ],
    },
  ];

  public addressList: Address[] = [];

  constructor() {}

  ngOnInit(): void {
    this.city = this.cityValue;
    this.address = this.addressValue;

    const searchcity: any = document.querySelector("#search-city");
    const searchAddress: any = document.querySelector("#sarch-address");

    this.searchCityResult$ = fromEvent(searchcity, "input").pipe(
      pluck("target", "value"),
      // debounceTime(200),
      distinctUntilChanged(),
      switchMap((searchTerm: any) => this.searchCity(searchTerm.toLowerCase()))
    );

    this.searchAddressResult$ = fromEvent(searchAddress, "input").pipe(
      pluck("target", "value"),
      // debounceTime(200),
      distinctUntilChanged(),
      switchMap((searchTerm: any) =>
        this.searchAddress(searchTerm.toLowerCase())
      )
    );
  }

  searchCity(searchTerm: string): Observable<Array<Branches>> {
    return from(this.cityList).pipe(
      delay(200),
      filter(
        (cityName) =>
          cityName.name.toLocaleLowerCase().indexOf(searchTerm) !== -1
      ),
      toArray()
    );
  }

  searchAddress(searchTerm: string): Observable<Array<Address>> {
    return from(this.addressList).pipe(
      delay(200),
      filter(
        (addressName) =>
          addressName.name.toLocaleLowerCase().indexOf(searchTerm) !== -1
      ),
      toArray()
    );
  }

  onSearchCityItem(item: Branches) {
    this.city = item.name;
    this.addressList = item.address;
    this.inputAddress?.nativeElement.removeAttribute("disabled");
    this.getValueCity(item.name);
  }

  onSearchAddressItem(item: Address) {
    this.address = item.name;
    this.getValueAddress(item.name);
  }

  getValueCity(item: string) {
    this.cityIsCorrect = true;
    for (let i = 0; i < this.cityList.length; i++) {
      if (this.cityList[i].name.toLowerCase() === item.toLowerCase()) {
        this.changeCityValue.emit(item);
        return;
      }
    }
    this.cityIsCorrect = false;
  }

  getValueAddress(item: string): void {
    this.addressIsCorrect = true;
    for (let i = 0; i < this.addressList.length; i++) {
      if (this.addressList[i].name.toLowerCase() === item.toLowerCase()) {
        this.changeAddressValue.emit(item);
        return;
      }
    }
    this.addressIsCorrect = false;
  }
}
