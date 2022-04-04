import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CarInterface } from "../form-steps/step-model/carsList.const";
import {
  activeStepEnum,
  TEXTBTN1,
  TEXTBTN2,
  TEXTBTN3,
  TEXTBTN4,
  ValueAddressInterface,
} from "../order-form.interface";

@Component({
  selector: "app-order-info",
  templateUrl: "./order-info.component.html",
  styleUrls: ["./order-info.component.less"],
})
export class OrderInfoComponent {
  @Input() addressValid: boolean = false;
  @Input() modelValid: boolean = false;
  @Input() addressValues!: ValueAddressInterface;
  @Input() checkedCar?: CarInterface;
  @Input() priceRance?: string;
  @Input() activeStep: activeStepEnum = activeStepEnum.step1;

  @Output() nextStep = new EventEmitter();

  constructor() {}

  public get textBtn() {
    return getTextBtn(this.activeStep);
  }

  isValidBtn(item: activeStepEnum): boolean {
    switch (item) {
      case activeStepEnum.step1:
        return this.addressValid;
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
