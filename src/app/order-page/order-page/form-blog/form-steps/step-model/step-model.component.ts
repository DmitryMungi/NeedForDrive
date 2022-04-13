import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import {
  CarModel,
  CategoryModel,
} from "src/app/order-page/order-page/form-blog/form-steps/step-model/module.interface";
import { ModuleApiService } from "./module.api.service";
import { LoadingService } from "src/app/shared/services/loading.service";

@Component({
  selector: "app-step-model",
  templateUrl: "./step-model.component.html",
  styleUrls: ["./step-model.component.less"],
})
export class StepModelComponent implements OnInit {
  @Input() carModel?: string;
  @Output() selectCar = new EventEmitter<CarModel>();

  public checkedModel?: string;

  public carModal!: CarModel[];
  public category!: CategoryModel[];
  public filterCar: CarModel[] = [];
  public subj: Subject<boolean> = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moduleApiservice: ModuleApiService,
    private loadingServise: LoadingService
  ) {}

  ngOnInit(): void {
    this.subj.subscribe((value) =>
      this.moduleApiservice
        .getCategory()
        .subscribe((res) => (this.category = res))
    );

    this.moduleApiservice
      .getCars()
      .subscribe(
        (res) => (
          (this.carModal = res),
          (this.filterCar = this.carModal),
          this.subj.next(true)
        )
      );
  }

  public get isLoading(): Observable<boolean> {
    return this.loadingServise.isLoading();
  }

  onCardClick(car: CarModel): void {
    this.carModal.forEach((i) => (i.isActive = false));
    car.isActive = true;
    this.selectCar.emit(car);
    this.checkedModel = car.name;
  }

  onFilter(item: CategoryModel) {
    switch (item.name) {
      case "Спорт":
        this.filterCar = this.carModal.filter(
          (x) => x.categoryId?.name === "Спорт"
        );
        break;
      case "Супер-эконом":
        this.filterCar = this.carModal.filter(
          (x) => x.categoryId?.name === "Супер-эконом"
        );
        break;
      case "Люкс":
        this.filterCar = this.carModal.filter(
          (x) => x.categoryId?.name === "Люкс"
        );
        break;
      case "Name":
        this.filterCar = this.carModal.filter(
          (x) => x.categoryId?.name === "Name"
        );
        break;
      case "Эконом+":
        this.filterCar = this.carModal.filter(
          (x) => x.categoryId?.name === "Эконом+"
        );
        break;
      case "Бизнес":
        this.filterCar = this.carModal.filter(
          (x) => x.categoryId?.name === "Бизнес"
        );
        break;
      default:
        this.filterCar = this.carModal;
        break;
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { Onfilter: item.name },
    });
  }
}
