import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  activeStepEnum,
  TEXTBTN1,
  TEXTBTN2,
  TEXTBTN3,
  TEXTBTN4,
} from "./order-form.interface";

import { CarInterface } from "./form-steps/step-model/carsList.const";

const STARTPRICE = "8 000 до 12 000 ₽";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.less"],
})
export class OrderFormComponent {
  public activeStep: activeStepEnum = activeStepEnum.step1;
  public activeStepEnum = activeStepEnum;

  public checkedCar?: CarInterface;

  public priceRance: string = STARTPRICE;
  public cityValue: string = "";
  public addressValue: string = "";
  public modelValue: string = "";
  public brandValue: string = "";

  public addressValid: boolean = false;
  public modelValid: boolean = false;

  public get textBtn() {
    return getTextBtn(this.activeStep);
  }
  constructor() {}

  toStep1(): void {
    this.activeStep = activeStepEnum.step1;
  }

  toStep2(): void {
    this.activeStep = activeStepEnum.step2;
  }

  toStep3(): void {
    this.activeStep = activeStepEnum.step3;
  }

  toStep4(): void {
    this.activeStep = activeStepEnum.step4;
  }

  setCityValue(city: string, form: NgForm): void {
    this.cityValue = city;

    if (form.valid) {
      this.addressValid = true;
    }
  }

  setAddressValue(address: string, form: NgForm): void {
    this.addressValue = address;

    if (form.valid) {
      this.addressValid = true;
    }
  }

  toNextStep(): void {
    if (this.activeStep === activeStepEnum.step1) {
      this.toStep2();
    } else if (this.activeStep === activeStepEnum.step2) {
      this.toStep3();
    }
  }

  selectedCar(car: CarInterface) {
    this.modelValue = car.model;
    this.brandValue = car.brand;
    this.checkedCar = car;
    this.priceRance = car.priceRange;
    this.modelValid = true;
  }
}

function getTextBtn(item: number) {
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
