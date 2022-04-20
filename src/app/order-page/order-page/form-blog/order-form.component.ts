import { Component, OnInit } from "@angular/core";
import { activeStepEnum, PageSteps, pageTitles } from "./order-form.interface";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CarModel } from "./form-steps/step-model/module.interface";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.less"],
})
export class OrderFormComponent implements OnInit {
  public pageStepsTitles: PageSteps[] = pageTitles;
  public activeStep: activeStepEnum = activeStepEnum.step1;
  public activeStepEnum = activeStepEnum;
  public isOrderConfirm: boolean = false;

  public checkedCar?: CarModel;

  public modelValid: boolean = false;
  public orderForm = new FormGroup({
    cityName: new FormControl("", Validators.required),
    addressName: new FormControl("", Validators.required),
    modelName: new FormControl("", Validators.required),
  });
  constructor() {}

  ngOnInit(): void {
    this.pageStepsTitles.forEach((i) => (i.isValid = false));
    this.pageStepsTitles[activeStepEnum.step1].isValid = true;
  }

  addressValueChange() {
    this.pageStepsTitles[activeStepEnum.step2].isValid = true;
  }

  toStep(item: PageSteps): void {
    this.activeStep = item.step;
  }

  toNextStep(): void {
    if (this.activeStep != this.activeStepEnum.step4) {
      this.activeStep++;
    }
  }

  additCompleted() {
    this.pageStepsTitles[activeStepEnum.step4].isValid = true;
  }

  selectedCar(car: CarModel) {
    this.checkedCar = car;
    this.modelValid = true;
    this.pageStepsTitles[activeStepEnum.step3].isValid = true;
  }

  confirmOrder() {
    this.isOrderConfirm = true;
  }

  onGoBack() {
    this.isOrderConfirm = false;
  }
}
