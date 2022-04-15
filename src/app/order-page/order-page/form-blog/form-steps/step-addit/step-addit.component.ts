import { Component, Input, OnInit } from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormControl,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { CURENT_DATE, SERVICES } from "./addit.const";
import { OrderService } from "src/app/shared/services/order.service";
import { AdditApiService } from "./addit.api.service";
import { CarModel } from "../step-model/module.interface";
import { ITariff, Iservice } from "./addit.interface";

import * as moment from "moment";

@Component({
  selector: "app-step-addit",
  templateUrl: "./step-addit.component.html",
  styleUrls: ["./step-addit.component.less"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class StepAdditComponent implements OnInit {
  public curentDate: string = moment(CURENT_DATE).format("yyyy-MM-DDThh:mm");

  public formGroup = new FormGroup({
    from: new FormControl(this.curentDate, Validators.required),
    until: new FormControl("", Validators.required),
  });
  constructor(
    private orderForm: FormGroupDirective,
    private orderService: OrderService,
    private additApiService: AdditApiService
  ) {}

  public checkedCar: CarModel = this.orderService.getCar();
  public rates!: ITariff[];

  public services: Iservice[] = SERVICES;

  ngOnInit(): void {
    this.orderForm.form.addControl("from", this.formGroup);
    this.orderForm.form.addControl("until", this.formGroup);
    this.additApiService.getRate().subscribe((res) => (this.rates = res));
  }

  valueChange(item: any) {
    console.log(item);
  }

  onDeleteValue(item: any) {
    item.value = "";
  }
}
