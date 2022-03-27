import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

export enum activeStepEnum {
  step1,
  step2,
  step3,
  step4,
}

@Component({
  selector: "app-form-blog",
  templateUrl: "./form-blog.component.html",
  styleUrls: ["./form-blog.component.less"],
})
export class FormBlogComponent {
  public activeStep: activeStepEnum = activeStepEnum.step1;
  public activeStepEnum = activeStepEnum;
  // public nextStep: activeStepEnum = activeStepEnum.step1;

  public textBtn: string = "Выбрать модель";
  public cityValue: string = "";
  public addressValue: string = "";

  public addressValid: boolean = false;

  constructor() {}

  toStep1() {
    this.activeStep = activeStepEnum.step1;
    this.textBtn = "Выбрать модель";
  }

  toStep2() {
    this.activeStep = activeStepEnum.step2;
    this.textBtn = "Дополнительно";
  }

  toStep3() {
    this.activeStep = activeStepEnum.step3;
  }

  toStep4() {
    this.activeStep = activeStepEnum.step4;
  }

  // showStep() {
  //   console.log(this.activeStep);
  // }

  // submit(form: NgForm) {
  //   console.log(form, this.cityValue);
  // }

  setCityValue(city: string, form: NgForm) {
    // console.log(city);
    this.cityValue = city;

    if (form.valid) {
      this.addressValid = true;
    }
  }

  setAddressValue(address: string, form: NgForm) {
    this.addressValue = address;

    if (form.valid) {
      this.addressValid = true;
    }
  }

  toNextStep() {
    if (this.activeStep === activeStepEnum.step1) {
      this.toStep2();
    } else if (this.activeStep === activeStepEnum.step2) {
      this.toStep3();
    }
    console.log(this.activeStep);
  }
}
