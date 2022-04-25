import { Component, OnInit } from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormControl,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { CURENT_DATE, SERVICES, ServicesEnum } from "./addit.const";
import { OrderService } from "src/app/shared/services/order.service";
import { AdditApiService } from "./addit.api.service";
import { CarModel } from "../step-model/module.interface";
import { ITariff, IService } from "./addit.interface";
import { ADDITDVALUES } from "./addit.const";
import { IAddit } from "src/app/shared/interfaces/order.interface";

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
  public maxValueFrom?: string;
  public valueFrom: number = 0;
  public valueUntil: number = 0;
  public additValues: IAddit = ADDITDVALUES;

  public formGroup = new FormGroup({
    color: new FormControl("", Validators.required),
    from: new FormControl("", [Validators.required, Validators.minLength(10)]),
    until: new FormControl("", [Validators.required, Validators.minLength(10)]),
    rate: new FormControl("", Validators.required),
  });
  constructor(
    private orderForm: FormGroupDirective,
    private orderService: OrderService,
    private additApiService: AdditApiService
  ) {}

  formDateValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === "") {
      return { from: true };
    }
    return null;
  }

  public checkedCar: CarModel = this.orderService.getCar();
  public rates!: ITariff[];
  public services: IService[] = SERVICES;

  ngOnInit(): void {
    this.orderForm.form.addControl("stepAddit", this.formGroup);
    this.additApiService.getRate().subscribe((res) => (this.rates = res));
  }

  changeColor(item: string) {
    this.additValues.color = item;
    this.orderService.setAdditValues(this.additValues);
    this.formGroup.patchValue({ color: item });
    this.formIsValid();
  }

  changeDateFrom(item: string) {
    this.valueUntil = 0;
    this.minValueUntil = item;
    this.valueFrom = +new Date(item);
    this.dateCheckAndSet();
    this.formGroup.patchValue({ from: item });
    this.formIsValid();
  }

  changeDateUntil(item: string) {
    this.valueUntil = +new Date(item);
    this.maxValueFrom = item;
    this.dateCheckAndSet();
    this.formGroup.patchValue({ until: item });
    this.formIsValid();
  }

  dateCheckAndSet() {
    if (this.valueFrom != 0 && this.valueUntil != 0) {
      this.additValues.dateFrom = this.valueFrom;
      this.additValues.dateUntil = this.valueUntil;
      this.orderService.setAdditValues(this.additValues);
    }
  }

  changeRate(item: string) {
    this.additValues.rate = item;
    this.orderService.setAdditValues(this.additValues);
    this.formGroup.patchValue({ rate: item });
    this.formIsValid();
  }

  toggleCheckBox(event: boolean, service: IService) {
    switch (service.id) {
      case ServicesEnum.FullTank:
        this.additValues.fullTank = event;
        break;
      case ServicesEnum.BabyChair:
        this.additValues.isNeedChildChair = event;
        break;
      case ServicesEnum.RightHand:
        this.additValues.isRightWheel = event;
        break;
    }
  }

  formIsValid() {
    this.additValues.isValid = this.formGroup.status === "VALID";
    this.orderService.setAdditValues(this.additValues);
  }

  onDeleteValueFrom() {
    this.formGroup.patchValue({ from: "" });
    this.formIsValid();
  }

  onDeleteValueUntil() {
    this.formGroup.patchValue({ until: "" });
    this.formIsValid();
  }
}
