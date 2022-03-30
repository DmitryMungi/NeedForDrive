import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { cars, CarInterface, Toggle, toggles } from "./carsList.const";

@Component({
  selector: "app-step-model",
  templateUrl: "./step-model.component.html",
  styleUrls: ["./step-model.component.less"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class StepModelComponent implements OnInit {
  @Output() selectCar = new EventEmitter<CarInterface>();

  public carList: CarInterface[] = cars;
  public filterCarList: CarInterface[] = [];
  public radioToggles: Toggle[] = toggles;
  public checkedModel?: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.filterCarList = this.carList;
  }

  onCardClick(car: CarInterface): void {
    this.carList.forEach((i) => (i.checked = false));
    car.checked = true;
    this.selectCar.emit(car);

    this.checkedModel = car.model;
  }

  filter(item: any) {
    this.radioToggles.forEach((i) => (i.checked = false));
    item.checked = true;

    switch (item.label) {
      case 0:
        this.filterCarList = this.carList;
        break;
      case 1:
        this.filterCarList = this.carList.filter((x) => x.class === "economy");
        break;
      case 2:
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
}
