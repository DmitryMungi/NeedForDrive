import { Component, OnInit } from "@angular/core";
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
import { ADDITDVALUES } from "./addit.const";
import { Iaddit } from "src/app/shared/interfaces/order.interface";

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
  public minValueFrom: string = moment(CURENT_DATE).format("yyyy-MM-DDThh:mm");
  public minValueUntil: string = this.minValueFrom;
  public valueFrom: number = 0;
  public valueUntil: number = 0;
  public additValues: Iaddit = ADDITDVALUES;

  public formGroup = new FormGroup({
    color: new FormControl("", Validators.required),
    from: new FormControl("", Validators.required),
    until: new FormControl("", Validators.required),
    rate: new FormControl("", Validators.required),
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
    this.orderForm.form.addControl("stepAddit", this.formGroup);
    // this.orderForm.form.addControl("until", this.formGroup);
    this.additApiService.getRate().subscribe((res) => (this.rates = res));
  }

  changeColor(item: string) {
    this.additValues.color = item;
    this.orderService.setAdditValues(this.additValues);
    this.formGroup.patchValue({ color: item });
    console.log(this.formGroup);
  }

  changeDateFrom(item: string) {
    this.valueUntil = 0;
    this.minValueUntil = item;
    this.valueFrom = +new Date(item);
    if (this.valueFrom != 0 && this.valueUntil != 0) {
      this.additValues.dateFrom = this.valueFrom;
      this.additValues.dateUntil = this.valueUntil;
      this.orderService.setAdditValues(this.additValues);
    }
    this.formGroup.patchValue({ from: item });
  }

  changeDateUntil(item: string) {
    this.valueUntil = +new Date(item);
    if (this.valueFrom != 0 && this.valueUntil != 0) {
      this.additValues.dateFrom = this.valueFrom;
      this.additValues.dateUntil = this.valueUntil;
      this.orderService.setAdditValues(this.additValues);
    }
    this.formGroup.patchValue({ until: item });
  }

  changeRate(item: string) {
    this.additValues.rate = item;
    this.orderService.setAdditValues(this.additValues);
    this.formGroup.patchValue({ rate: item });
    console.log(this.formGroup);
  }

  toggleCheckBox(event: boolean, service: Iservice) {
    if (service.name === "fullTank") {
      this.additValues.fullTank = event;
    } else if (service.name === "isNeedChildChair") {
      this.additValues.isNeedChildChair = event;
    } else {
      this.additValues.isRightWheel = event;
    }
  }

  onDeleteValue(item: any) {
    item.value = "";
  }
}
