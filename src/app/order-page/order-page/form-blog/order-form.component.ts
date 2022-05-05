import { Component, OnInit } from "@angular/core";
import { activeStepEnum, PageSteps, pageTitles } from "./order-form.interface";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CarModel } from "./form-steps/step-model/module.interface";
import { ILocationValue } from "./form-steps/step-location/location.interface";

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

  public orderForm = new FormGroup({
    stepLocation: new FormGroup({
      city: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
    }),
    stepModel: new FormControl("", Validators.required),
  });

  constructor() {}

  ngOnInit(): void {
    this.pageStepsTitles.forEach((i) => (i.isValid = false));
    this.pageStepsTitles[activeStepEnum.step1].isValid = true;
  }

  addressValueChange(value: ILocationValue) {
    this.orderForm.controls["stepLocation"].patchValue({
      city: value.city,
      address: value.address,
    });
    this.isValidSteps();
    this.additCompleted(false);
  }

  toStep(item: PageSteps): void {
    this.activeStep = item.step;
  }

  toNextStep(): void {
    if (this.activeStep != this.activeStepEnum.step4) {
      this.activeStep++;
    }
  }

  selectedCar(car: CarModel) {
    this.orderForm.controls["stepModel"].patchValue({ stepModel: car });
    this.checkedCar = car;
    this.isValidSteps();
    this.additCompleted(false);
  }

  additCompleted(value: boolean) {
    this.pageStepsTitles[activeStepEnum.step4].isValid = value;
  }

  confirmOrder() {
    this.isOrderConfirm = true;
  }

  onGoBack() {
    this.isOrderConfirm = false;
  }

  private isValidSteps() {
    this.pageStepsTitles[activeStepEnum.step2].isValid =
      this.orderForm.controls["stepLocation"].valid;

    this.pageStepsTitles[activeStepEnum.step3].isValid =
      this.orderForm.controls["stepLocation"].valid &&
      this.orderForm.controls["stepModel"].valid;
  }
}
