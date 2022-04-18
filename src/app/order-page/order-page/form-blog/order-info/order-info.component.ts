import { Component, Input, Output, EventEmitter } from "@angular/core";
import { OrderService } from "src/app/shared/services/order.service";
import { CarModel } from "../form-steps/step-model/module.interface";
import {
  activeStepEnum,
  TEXTBTN1,
  TEXTBTN2,
  TEXTBTN3,
  TEXTBTN4,
} from "../order-form.interface";

import { ILocationValue } from "src/app/shared/interfaces/order.interface";

@Component({
  selector: "app-order-info",
  templateUrl: "./order-info.component.html",
  styleUrls: ["./order-info.component.less"],
})
export class OrderInfoComponent {
  @Input() modelValid: boolean = false;
  @Input() checkedCar?: CarModel;
  @Input() priceRance?: string;
  @Input() activeStep: activeStepEnum = activeStepEnum.step1;

  @Output() nextStep = new EventEmitter();

  constructor(private orderService: OrderService) {}

  public addressValues: ILocationValue = this.orderService.getLocationValue();

  public get car() {
    return this.orderService.getCar();
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
