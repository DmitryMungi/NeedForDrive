import { Component, Input, Output, EventEmitter } from "@angular/core";
import { OrderService } from "src/app/shared/services/order.service";
import { CarModel } from "../form-steps/step-model/module.interface";
import { IDateDuration } from "src/app/shared/interfaces/order.interface";
import {
  activeStepEnum,
  TEXTBTN1,
  TEXTBTN2,
  TEXTBTN3,
  TEXTBTN4,
} from "../order-form.interface";

import {
  ILocationValue,
  Iaddit,
} from "src/app/shared/interfaces/order.interface";

@Component({
  selector: "app-order-info",
  templateUrl: "./order-info.component.html",
  styleUrls: ["./order-info.component.less"],
})
export class OrderInfoComponent {
  @Input() modelValid: boolean = false;
  @Input() priceRance?: string;
  @Input() activeStep: activeStepEnum = activeStepEnum.step1;

  @Output() nextStep = new EventEmitter();

  constructor(private orderService: OrderService) {}

  public addressValues: ILocationValue = this.orderService.getLocationValue();

  public get car() {
    return this.orderService.getCar();
  }

  public get additValue() {
    return this.orderService.getAdditValue();
  }

  public get dateDuration() {
    if (this.additValue.dateFrom != 0 && this.additValue.dateUntil != 0) {
      const dFrom = +new Date(this.additValue.dateFrom);
      const dUntil = +new Date(this.additValue.dateUntil);

      return this.dateRange(dFrom, dUntil);
    }
    return false;
  }

  public get textBtn() {
    return getTextBtn(this.activeStep);
  }

  isValidBtn(item: activeStepEnum): boolean {
    switch (item) {
      case activeStepEnum.step1:
        return this.addressValues.valid;
      case activeStepEnum.step2:
        return this.modelValid;
      default:
        return false;
    }
  }

  public get btnIsValid(): boolean {
    return this.isValidBtn(this.activeStep);
  }

  toNextStep(): void {
    this.nextStep.emit();
  }

  dateRange(from: number, untill: number): IDateDuration {
    let delta = Math.abs(untill - from) / 1000;
    let result: any = {};
    let structure: any = {
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    Object.keys(structure).forEach(function (key) {
      result[key] = Math.floor(delta / structure[key]);
      delta -= result[key] * structure[key];
    });
    return result;
  }
}

function getTextBtn(item: activeStepEnum): string {
  switch (item) {
    case activeStepEnum.step1:
      return TEXTBTN1;
    case activeStepEnum.step2:
      return TEXTBTN2;
    case activeStepEnum.step3:
      return TEXTBTN3;
    case activeStepEnum.step4:
      return TEXTBTN4;
    default:
      return "Далее";
  }
}
