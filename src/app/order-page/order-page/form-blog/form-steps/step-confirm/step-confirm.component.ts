import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IAddit } from "src/app/shared/interfaces/order.interface";
import { OrderService } from "src/app/shared/services/order.service";
import { INameId } from "src/app/shared/interfaces/order.interface";
import { CarModel } from "../step-model/module.interface";
import { ConfirmApiService } from "./confirm.api.service";
import { IOrderData } from "src/app/shared/interfaces/order.interface";
import { UntilDestroy } from "@ngneat/until-destroy";
import { RATE_ID } from "src/app/shared/const/order.const";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: "app-step-confirm",
  templateUrl: "./step-confirm.component.html",
  styleUrls: ["./step-confirm.component.less"],
})
export class StepConfirmComponent implements OnInit {
  @Input() isOrderConfirm?: boolean;
  @Output() orderIsBack = new EventEmitter<void>();

  constructor(
    private orderService: OrderService,
    private confirmApi: ConfirmApiService
  ) {}

  public orderCar!: CarModel;
  public additValues = <IAddit>{};
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
    const [orderSt] = this.orderStatus.filter((x) => x.id === RATE_ID);
    this.orderData.orderStatusId = orderSt;
    this.confirmApi.postOrder(this.orderData).subscribe();
  }

  onGoBack() {
    this.orderIsBack.emit();
  }
}
