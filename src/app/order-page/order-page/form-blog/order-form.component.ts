import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { activeStepEnum } from "./order-form.interface";

const TEXTBTN1 = "Выбрать модель";
const TEXTBTN2 = "Дополнительно";
const TEXTBTN3 = "Итого";
const TEXTBTN4 = "Заказать";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.less"],
})
export class OrderFormComponent {
  public activeStep: activeStepEnum = activeStepEnum.step1;
  public activeStepEnum = activeStepEnum;

  public textBtn = TEXTBTN1;
  public cityValue: string = "";
  public addressValue: string = "";

  public addressValid: boolean = false;

  constructor() {}

  toStep1(): void {
    this.activeStep = activeStepEnum.step1;
    console.log(this.activeStep);
    this.setTextBtn();
  }

  toStep2(): void {
    this.activeStep = activeStepEnum.step2;
    console.log(this.activeStep, this.textBtn);
    this.setTextBtn();
  }

  toStep3(): void {
    this.activeStep = activeStepEnum.step3;
    this.setTextBtn();
  }

  toStep4(): void {
    this.activeStep = activeStepEnum.step4;
    this.setTextBtn();
  }

  setTextBtn() {
    if (this.activeStep === activeStepEnum.step1) {
      this.textBtn = TEXTBTN1;
    } else if (this.activeStep === activeStepEnum.step2) {
      this.textBtn = TEXTBTN2;
    } else if (this.activeStep === activeStepEnum.step3) {
      this.textBtn = TEXTBTN3;
    } else if (this.activeStep === activeStepEnum.step4) {
      this.textBtn = TEXTBTN4;
    }
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
}
