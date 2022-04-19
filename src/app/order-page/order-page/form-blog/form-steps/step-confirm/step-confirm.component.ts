import { Component, OnInit } from "@angular/core";
import { Iaddit } from "src/app/shared/interfaces/order.interface";
import { OrderService } from "src/app/shared/services/order.service";
import { CarModel } from "../step-model/module.interface";

@Component({
  selector: "app-step-confirm",
  templateUrl: "./step-confirm.component.html",
  styleUrls: ["./step-confirm.component.less"],
})
export class StepConfirmComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  public orderCar!: CarModel;
  public additValues!: Iaddit;

  ngOnInit(): void {
    this.orderCar = this.orderService.getCar();
    this.additValues = this.orderService.getAdditValue();
    console.log(this.orderCar);
  }
}
