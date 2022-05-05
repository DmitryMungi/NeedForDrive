import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
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
})
export class InputComponent implements AfterViewInit {
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

  constructor() {}

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
    this.deleteItem.emit();
  }
}
