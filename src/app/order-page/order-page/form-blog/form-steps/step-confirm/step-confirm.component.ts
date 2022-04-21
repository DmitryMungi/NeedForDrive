import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Iaddit } from "src/app/shared/interfaces/order.interface";
import { OrderService } from "src/app/shared/services/order.service";
import { INameId } from "src/app/shared/interfaces/order.interface";
import { CarModel } from "../step-model/module.interface";
import { ConfirmApiService } from "./confirm.api.service";
import { IOrderData } from "src/app/shared/interfaces/order.interface";

@Component({
  selector: "app-step-confirm",
  templateUrl: "./step-confirm.component.html",
  styleUrls: ["./step-confirm.component.less"],
})
export class StepConfirmComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private confirmApi: ConfirmApiService
  ) {}
  @Input() isOrderConfirm?: boolean;
  @Output() orderIsBack = new EventEmitter();

  public orderCar!: CarModel;
  public additValues!: Iaddit;
  public orderStatus!: INameId[];
  public orderData: IOrderData = this.orderService.getOrderData();

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
      .subscribe((res) => console.log(res));
  }

  onGoBack() {
    this.orderIsBack.emit();
  }
}
