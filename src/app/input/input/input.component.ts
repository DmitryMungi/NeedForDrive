import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormControl,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { from, fromEvent, Observable } from "rxjs";
import {
  toArray,
  filter,
  distinctUntilChanged,
  switchMap,
  map,
} from "rxjs/operators";
import {
  AddressInterface,
  CityInterface,
} from "src/app/order-page/order-page/form-blog/form-steps/step-location/address.interface";
import { ValueAddressInterface } from "src/app/order-page/order-page/form-blog/order-form.interface";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.less"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input() groupName: string = "";
  @Input() labelValue: string = "";
  @Input() name: string = "";
  @Input() value: string = "";
  @Input() addressValues: ValueAddressInterface = { city: "", address: "" };
  @Input() list: CityInterface[] | AddressInterface[] = [];

  @Output() valueChange = new EventEmitter();
  @Output() onSearchItem = new EventEmitter();

  @ViewChild("input") input!: ElementRef;

  public searchResult$!: Observable<Array<CityInterface | AddressInterface>>;
  public formGroup = new FormGroup({
    name: new FormControl(this.value, Validators.required),
  });

  constructor(private orderForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.orderForm.form.addControl(this.groupName, this.formGroup);
  }

  ngAfterViewInit(): void {
    const search = this.input.nativeElement;

    this.searchResult$ = fromEvent(search, "input").pipe(
      map((event: any) => event.target.value),
      distinctUntilChanged(),
      switchMap((searchTerm: string) => this.search(searchTerm.toLowerCase()))
    );
  }

  onClickSearchItem(item: CityInterface | AddressInterface) {
    this.onSearchItem.emit(item);
    this.input.nativeElement.value = item.name;
    this.formGroup.value.name = item.name;
  }

  search(
    searchTerm: string
  ): Observable<Array<CityInterface | AddressInterface>> {
    return from(this.list).pipe(
      filter((cityName) => this.checkForMatch(cityName, searchTerm)),
      toArray()
    );
  }

  checkForMatch(el: CityInterface | AddressInterface, item: string): boolean {
    return el.name.toLocaleLowerCase().indexOf(item) !== -1;
  }

  changeValue(item: ValueAddressInterface) {
    this.valueChange.emit(item);
  }

  onDeleteValue(el: HTMLInputElement) {
    el.value = "";
    this.formGroup.value.name = el.value;
  }
}
