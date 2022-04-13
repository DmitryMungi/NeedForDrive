import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  cars,
  CarInterface,
  Toggle,
  toggles,
  LABEL0,
  LABEL1,
  LABEL2,
} from "./carsList.const";

@Component({
  selector: "app-step-model",
  templateUrl: "./step-model.component.html",
  styleUrls: ["./step-model.component.less"],
})
export class StepModelComponent implements OnInit {
  @Input() carModel?: string;
  @Output() selectCar = new EventEmitter<CarInterface>();

  public carList: CarInterface[] = cars;
  public filterCarList: CarInterface[] = [];
  public radioToggles: Toggle[] = toggles;
  public checkedModel?: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.filterCarList = this.carList;
    this.filter(this.radioToggles[0]);
  }

  onCardClick(car: CarInterface): void {
    this.removeChecked(this.carList);
    car.checked = true;
    this.selectCar.emit(car);

    this.checkedModel = car.model;
  }

  filter(item: Toggle) {
    this.removeChecked(this.radioToggles);
    item.checked = true;

    switch (item.label) {
      case LABEL0:
        this.filterCarList = this.carList;
        break;
      case LABEL1:
        this.filterCarList = this.carList.filter((x) => x.class === "economy");
        break;
      case LABEL2:
        this.filterCarList = this.carList.filter((x) => x.class === "premium");
        break;
      default:
        this.filterCarList = this.carList;
        break;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { filter: item.label },
    });
  }

  removeChecked(array: CarInterface[] | Toggle[]) {
    array.forEach((i) => (i.checked = false));
  }
}
