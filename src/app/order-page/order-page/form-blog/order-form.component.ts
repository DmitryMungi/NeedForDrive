import { Component, OnInit } from "@angular/core";
import { activeStepEnum, PageSteps, pageTitles } from "./order-form.interface";
import { LocationService } from "src/app/shared/services/location.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

import { CarInterface } from "./form-steps/step-model/carsList.const";
// import { ILocationValue } from "../../../shared/interfaces/order.interface";

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

  // public addressValues: ILocationValue = {
  //   city: "",
  //   address: "",
  // };
  public checkedCar?: CarInterface;
  public priceRange: string = STARTPRICE;

  // public addressValid: boolean = false;
  public modelValid: boolean = false;
  public orderForm = new FormGroup({
    cityName: new FormControl("", Validators.required),
    addressName: new FormControl("", Validators.required),
    modelName: new FormControl("", Validators.required),
  });
  constructor(
    private locationService: LocationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pageStepsTitles.forEach((i) => (i.isValid = false));
    this.pageStepsTitles[0].isValid = true;
  }

  addressValueChange() {
    // if (item.city != "" && item.address != "") {
    // this.addressValues = item;
    this.pageStepsTitles[1].isValid = true;
    // this.addressValid = true;
    // }
  }

  toStep(item: PageSteps): void {
    this.activeStep = item.step;
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
