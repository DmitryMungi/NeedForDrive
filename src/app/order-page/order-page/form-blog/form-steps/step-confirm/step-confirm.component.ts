import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IAddit } from "src/app/shared/interfaces/order.interface";
import { OrderService } from "src/app/shared/services/order.service";
import { INameId } from "src/app/shared/interfaces/order.interface";
import { CarModel } from "../step-model/module.interface";
import { ConfirmApiService } from "./confirm.api.service";
import {
  IOrderData,
  IOrderRes,
} from "src/app/shared/interfaces/order.interface";
import { Router } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";
@UntilDestroy({ checkProperties: true })
@Component({
  selector: "app-step-confirm",
  templateUrl: "./step-confirm.component.html",
  styleUrls: ["./step-confirm.component.less"],
})
export class StepConfirmComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private confirmApi: ConfirmApiService,
    private router: Router
  ) {}

  @Input() isOrderConfirm?: boolean;
  @Output() orderIsBack = new EventEmitter();

  public orderCar!: CarModel;
  public additValues!: IAddit;
  public orderStatus!: INameId[];
  public orderData: IOrderData = this.orderService.getOrderData();
  public resId!: string;

  ngOnInit(): void {
    this.orderCar = this.orderService.getCar();
    this.additValues = this.orderService.getAdditValue();
    this.confirmApi
      .getOrderStatus()
      .subscribe((res) => (this.orderStatus = res));
  }

  postOrder() {
    const [orderSt] = this.orderStatus.filter((x) => x.name === "Новые");
    this.orderData.orderStatusId = orderSt;
    this.confirmApi
      .postOrder(this.orderData)
      .subscribe(
        (res) => (
          (this.resId = res.id),
          this.router.navigate([`order/completed/${this.resId}`])
        )
      );
  }

  onGoBack() {
    this.orderIsBack.emit();
  }
}
