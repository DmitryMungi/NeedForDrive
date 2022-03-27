import { Component, Input } from "@angular/core";

export enum activeStepEnum {
  step1,
  step2,
  step3,
  step4, /// проверка
}

@Component({
  selector: "app-form-steps",
  templateUrl: "./form-steps.component.html",
  styleUrls: ["./form-steps.component.less"],
})
export class FormStepsComponent {
  @Input() modelInvalid: boolean | null = true;
  @Input() additInvalid: boolean | null = true;
  @Input() confirmInvalid: boolean | null = true;

  public activeStep?: activeStepEnum;
  public activeStepEnum = activeStepEnum;
  // public activePage?: number | null;

  constructor() {}

  toStep1() {
    this.activeStep = activeStepEnum.step1;
    console.log(this.activeStep);
  }

  toStep2() {
    this.activeStep = activeStepEnum.step2;
  }

  toStep3() {
    this.activeStep = activeStepEnum.step3;
  }

  toStep4() {
    this.activeStep = activeStepEnum.step4;
  }

  showStep() {
    console.log(this.activeStep);
  }
}
