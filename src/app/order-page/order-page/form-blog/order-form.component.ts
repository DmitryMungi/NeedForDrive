import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { activeStepEnum, PageSteps, pageTitles } from "./order-form.interface";

import { CarInterface } from "./form-steps/step-model/carsList.const";

const STARTPRICE = "8 000 до 12 000 ₽";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.less"],
})
export class OrderFormComponent implements OnInit {
  public pageStepsTitles: PageSteps[] = pageTitles;
  public activeStep: activeStepEnum = activeStepEnum.step1;
  public activeStepEnum = activeStepEnum;

  public cityValue: string = "";
  public addressValue: string = "";
  public checkedCar?: CarInterface;
  public priceRange: string = STARTPRICE;

  public addressValid: boolean = false;
  public modelValid: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.pageStepsTitles.forEach((i) => (i.isValid = false));
    this.pageStepsTitles[0].isValid = true;
  }

  setCityValue(city: string, form: NgForm): void {
    this.cityValue = city;

    if (form.valid && this.addressValue != "") {
      this.pageStepsTitles[1].isValid = true;
      this.addressValid = true;
    }
  }

  toStep(item: PageSteps): void {
    this.activeStep = item.step;
  }

  setAddressValue(address: string, form: NgForm): void {
    this.addressValue = address;

    if (form.valid && this.addressValue != "") {
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
    this.priceRange = car.priceRange;
    this.modelValid = true;
    this.pageStepsTitles[2].isValid = true;
  }
}
