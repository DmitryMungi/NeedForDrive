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
  @Input() list: string[] = [];

  @Output() deleteItem = new EventEmitter();
  @Output() valueChange = new EventEmitter();
  @Output() onSearchItem = new EventEmitter();

  @ViewChild("input") input!: ElementRef;
  @ViewChild("listDropDown") listDropDown!: ElementRef;

  public searchResult$!: Observable<Array<string>>;
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

  onClickSearchItem(item: string) {
    this.onSearchItem.emit(item);
    this.formGroup.patchValue({ name: item });
  }

  search(searchTerm: string): Observable<Array<string>> {
    return from(this.list).pipe(
      filter((item) => this.checkForMatch(item, searchTerm)),
      toArray()
    );
  }

  checkForMatch(el: string, item: string): boolean {
    return el.toLocaleLowerCase().indexOf(item) !== -1;
  }

  changeValue(item: string) {
    this.valueChange.emit(item);
  }

  onDeleteValue() {
    this.formGroup.reset();
    this.deleteItem.emit();
  }
}
