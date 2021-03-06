import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormControl,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { CURENT_DATE, SERVICES, ServicesEnum } from "./addit.const";
import { OrderService } from "src/app/shared/services/order.service";
import { AdditApiService } from "./addit.api.service";
import { CarModel } from "../step-model/module.interface";
import { ITariff, IService } from "./addit.interface";
import { IAddit } from "src/app/shared/interfaces/order.interface";

import * as moment from "moment";
import { AddidService } from "./addit.service";

@Component({
  selector: "app-step-addit",
  templateUrl: "./step-addit.component.html",
  styleUrls: ["./step-addit.component.less"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class StepAdditComponent implements OnInit {
  @Output() completedForm = new EventEmitter<boolean>();

  public minValueFrom: string = moment(CURENT_DATE).format("yyyy-MM-DDThh:mm");
  public minValueUntil: string = this.minValueFrom;
  public maxValueFrom?: string;
  public dateFrom: number = 0;
  public dateUntil: number = 0;
  public additValues: IAddit = this.orderService.getAdditValue();

  public formGroup = new FormGroup({
    color: new FormControl(this.additValues.color, Validators.required),
    from: new FormControl(this.additValues.dateFrom, [
      Validators.required,
      Validators.minLength(10),
    ]),
    until: new FormControl(this.additValues.dateUntil, [
      Validators.required,
      Validators.minLength(10),
    ]),
    rate: new FormControl(this.additValues.rate, Validators.required),
  });
  constructor(
    private orderForm: FormGroupDirective,
    private orderService: OrderService,
    private additApiService: AdditApiService,
    private additServise: AddidService
  ) {}

  public valueFrom: string = this.additServise.getValueFrom();
  public valueUntil: string = this.additServise.getValueUntil();

  formDateValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === "") {
      return { from: true };
    }
    return null;
  }

  public checkedCar: CarModel = this.orderService.getCar();
  public rates!: ITariff[];
  public services: IService[] = SERVICES;

  ngOnInit(): void {
    this.orderForm.form.addControl("stepAddit", this.formGroup);
    this.additApiService.getRate().subscribe((res) => (this.rates = res));
    this.formIsValid();
  }

  changeColor(item: string) {
    this.additValues.color = item;
    this.orderService.setAdditValues(this.additValues);
    this.formGroup.patchValue({ color: item });
    this.formIsValid();
  }

  changeDateFrom(item: string) {
    this.additServise.setValueFrom(item);
    this.additServise.setValueUntil("");
    this.dateUntil = 0;
    this.minValueUntil = item;
    this.dateFrom = +new Date(item);
    this.dateCheckAndSet();
    this.formGroup.patchValue({ from: this.dateFrom });
    this.formIsValid();
  }

  changeDateUntil(item: string) {
    this.additServise.setValueUntil(item);
    this.dateUntil = +new Date(item);
    this.maxValueFrom = item;
    this.dateCheckAndSet();
    this.formGroup.patchValue({ until: this.dateUntil });
    this.formIsValid();
  }

  dateCheckAndSet() {
    if (this.dateFrom != 0 && this.dateUntil != 0) {
      this.additValues.dateFrom = this.dateFrom;
      this.additValues.dateUntil = this.dateUntil;
      this.orderService.setAdditValues(this.additValues);
    }
  }

  changeRate(rateName: string, rateId: string) {
    this.additValues.rate = rateName;
    this.additValues.rateId = rateId;
    this.orderService.setAdditValues(this.additValues);
    this.formGroup.patchValue({ rate: rateName });
    this.formIsValid();
  }

  toggleCheckBox(event: boolean, service: IService) {
    service.isChecked = event;
    switch (service.id) {
      case ServicesEnum.FullTank:
        this.additValues.fullTank = event;
        break;
      case ServicesEnum.BabyChair:
        this.additValues.isNeedChildChair = event;
        break;
      case ServicesEnum.RightHand:
        this.additValues.isRightWheel = event;
        break;
    }
    this.orderService.setTotalPrice();
  }

  formIsValid() {
    this.additValues.isValid = this.formGroup.valid;
    if (this.formGroup.valid) {
      this.orderService.setTotalPrice();
    }
    this.completedForm.emit(this.formGroup.valid);
    this.orderService.setAdditValues(this.additValues);
  }

  onDeleteValueFrom() {
    this.formGroup.patchValue({ from: "" });
    this.formIsValid();
  }

  onDeleteValueUntil() {
    this.formGroup.patchValue({ until: "" });
    this.formIsValid();
  }
}
