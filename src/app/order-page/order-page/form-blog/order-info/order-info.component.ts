import { Component, Input, Output, EventEmitter } from "@angular/core";
import { OrderService } from "src/app/shared/services/order.service";
import { IDateDuration } from "src/app/shared/interfaces/order.interface";
import {
  activeStepEnum,
  TEXTBTN1,
  TEXTBTN2,
  TEXTBTN3,
  TEXTBTN4,
} from "../order-form.interface";
import { ILocationValue } from "../form-steps/step-location/location.interface";
import { LocationService } from "../form-steps/step-location/location.service";

import { MONTH, WEEK, DAY, HOUR, MINUTE } from "./order.const";

// import {
//   ILocationValue,
//   IAddit,
// } from "src/app/shared/interfaces/order.interface";

@Component({
  selector: "app-order-info",
  templateUrl: "./order-info.component.html",
  styleUrls: ["./order-info.component.less"],
})
export class OrderInfoComponent {
  @Input() modelValid: boolean = false;
  @Input() activeStep: activeStepEnum = activeStepEnum.step1;
  @Output() nextStep = new EventEmitter();
  @Output() confirmOrder = new EventEmitter();

  constructor(
    private orderService: OrderService,
    private locationService: LocationService
  ) {}

  public addressValues: ILocationValue =
    this.locationService.getLocationValue();

  public get car() {
    return this.orderService.getCar();
  }

  public get additValue() {
    return this.orderService.getAdditValue();
  }

  public get dateDuration(): IDateDuration | false {
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

  public get priceRange() {
    return this.orderService.getPriceRange();
  }

  public get totalPrice() {
    return this.orderService.getTotalPrice();
  }

  isValidBtn(item: activeStepEnum): boolean {
    switch (item) {
      case activeStepEnum.step1:
        return this.addressValues.valid;
      case activeStepEnum.step2:
        return this.modelValid;
      case activeStepEnum.step3:
        return this.additValue.isValid;
      case activeStepEnum.step4:
        return true;
      default:
        return false;
    }
  }

  public get btnIsValid(): boolean {
    return this.isValidBtn(this.activeStep);
  }

  toNextStep(): void {
    if (this.activeStep != activeStepEnum.step4) {
      this.nextStep.emit();
    } else {
      this.confirmOrder.emit();
    }
  }
  dateRange(from: number, untill: number): IDateDuration {
    let delta = Math.abs(untill - from) / 1000;
    let result = <IDateDuration>{};
    let structure = <IDateDuration>{
      year: 31536000,
      month: MONTH,
      week: WEEK,
      day: DAY,
      hour: HOUR,
      minute: MINUTE,
    };

    Object.keys(structure).forEach((key) => {
      result[key as keyof IDateDuration] = Math.floor(
        delta / structure[key as keyof IDateDuration]
      );
      delta -=
        result[key as keyof IDateDuration] *
        structure[key as keyof IDateDuration];
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
