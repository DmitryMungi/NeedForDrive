import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";
import { Observable, Subject } from "rxjs";
import {
  CarModel,
  CategoryModel,
} from "src/app/order-page/order-page/form-blog/form-steps/step-model/module.interface";
import { CarApiService } from "./car.api.service";
import { LoadingService } from "src/app/shared/services/loading.service";
import { OrderService } from "src/app/shared/services/order.service";
@UntilDestroy({ checkProperties: true })
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
    private carApiservice: CarApiService,
    private loadingServise: LoadingService,
    private orderService: OrderService
  ) {}

  public carList: CarModel[] = this.orderService.getCarList();

  ngOnInit(): void {
    this.subj.subscribe((value) =>
      this.carApiservice.getCategory().subscribe((res) => (this.category = res))
    );

    if (this.carList.length <= 0) {
      this.carApiservice
        .getCars()
        .subscribe(
          (res) => (
            (this.carModal = res),
            this.orderService.setCarList(this.carModal),
            (this.carList = this.carModal.slice()),
            (this.filterCar = this.carModal),
            this.subj.next(true)
          )
        );
    } else {
      this.filterCar = this.carList;
      this.subj.next(true);
    }
  }

  public get isLoading(): Observable<boolean> {
    return this.loadingServise.isLoading();
  }

  onCardClick(car: CarModel): void {
    this.carList.forEach((i) => (i.isActive = false));
    car.isActive = true;
    this.selectCar.emit(car);
    this.checkedModel = car.name;
    this.orderService.setCar(car);
  }

  onFilter(item: CategoryModel) {
    this.filterCar = this.carList.filter((x) => x.categoryId?.id === item.id);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { Onfilter: item.name },
    });
  }
}
