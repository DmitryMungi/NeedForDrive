import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CompletedApiService } from "./completed.api.service";
import { UntilDestroy } from "@ngneat/until-destroy";
import { INameId, IOrderData } from "src/app/shared/interfaces/order.interface";
import { RATE_ID_CANCEL } from "src/app/shared/const/order.const";
import { ConfirmApiService } from "../order-page/form-blog/form-steps/step-confirm/confirm.api.service";
import { tap } from "rxjs";
import { OrderService } from "src/app/shared/services/order.service";
import { LocationService } from "../order-page/form-blog/form-steps/step-location/location.service";
import { AddidService } from "../order-page/form-blog/form-steps/step-addit/addit.service";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: "app-completed-order",
  templateUrl: "./completed-order.component.html",
  styleUrls: ["./completed-order.component.less"],
})
export class CompletedOrderComponent implements OnInit {
  public id!: string;
  public completedRes!: IOrderData;
  public isConfirm: boolean = false;
  public cancelStatus = <INameId>{};

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private completedApi: CompletedApiService,
    private confirmApi: ConfirmApiService,
    private orderService: OrderService,
    private locationService: LocationService,
    private additService: AddidService
  ) {
    this.id = activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.completedApi
      .getOrderComplet(this.id)
      .subscribe((res) => (this.completedRes = res));

    this.confirmApi
      .getOrderStatus()
      .subscribe(
        (res) =>
          ([this.cancelStatus] = res.filter((x) => x.id === RATE_ID_CANCEL))
      );
  }

  confirmOrder() {
    this.isConfirm = true;
  }

  onConfirm() {
    this.completedRes.orderStatusId = this.cancelStatus;
    this.completedApi
      .putOrder(this.completedRes, this.id)
      .pipe(tap(() => this.resetValues()))
      .subscribe();

    this.router.navigate(["/"]);
  }

  onGoBack() {
    this.isConfirm = false;
  }

  resetValues() {
    this.orderService.resetAllValues();
    this.locationService.resetAdressValues();
    this.additService.resetValues();
  }
}
