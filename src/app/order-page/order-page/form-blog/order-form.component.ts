import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  activeStepEnum,
  TEXTBTN1,
  TEXTBTN2,
  TEXTBTN3,
  TEXTBTN4,
  PageSteps,
  pageTitles,
} from "./order-form.interface";

import { CarInterface } from "./form-steps/step-model/carsList.const";

const STARTPRICE = "8 000 до 12 000 ₽";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.less"],
})
export class OrderFormComponent {
  public pageStepsTitles: PageSteps[] = pageTitles;
  public activeStep: activeStepEnum = activeStepEnum.step1;
  public activeStepEnum = activeStepEnum;

  public cityValue: string = "";
  public addressValue: string = "";
  public checkedCar?: CarInterface;
  public priceRance: string = STARTPRICE;

  public addressValid: boolean = false;
  public modelValid: boolean = false;

  public get textBtn() {
    return getTextBtn(this.activeStep);
  }
  constructor() {}

  setCityValue(city: string, form: NgForm): void {
    this.cityValue = city;

    if (form.valid) {
      this.pageStepsTitles[1].isValid = true;
      this.addressValid = true;
    }
  }

  toStep(item: PageSteps): void {
    this.activeStep = item.step;
  }

  setAddressValue(address: string, form: NgForm): void {
    this.addressValue = address;

    if (form.valid) {
      this.pageStepsTitles[1].isValid = true;
      this.addressValid = true;
    }
  }

  toNextStep(): void {
    if (this.activeStep != this.activeStepEnum.step3) {
      this.activeStep++;
    }
  }

  selectedCar(car: CarInterface) {
    this.checkedCar = car;
    this.priceRance = car.priceRange;
    this.modelValid = true;
    this.pageStepsTitles[2].isValid = true;
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
