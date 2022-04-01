import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

export interface Branches {
  city: string;
  geometry: number[];
  address?: Address;
}

export interface Address {}

@Component({
  selector: "app-step-location",
  templateUrl: "./step-location.component.html",
  styleUrls: ["./step-location.component.less"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class StepLocationComponent implements OnInit {
  @Input() cityValue?: string;
  @Input() addressValue?: string;
  @Output() changeCityValue = new EventEmitter();
  @Output() changeAddressValue = new EventEmitter();

  public city: string | undefined;
  public address: string | undefined;

  public cityList: Branches = {
    city: "Москва",
    geometry: [55.817866, 37.952644],
    // 1: 55.817866,
    // 2: 37.952644,
    // },
  };

  constructor() {}

  ngOnInit(): void {
    this.city = this.cityValue;
    this.address = this.addressValue;
  }

  getValueCity(): void {
    this.changeCityValue.emit(this.city);
  }

  getValueAddress(): void {
    this.changeAddressValue.emit(this.address);
  }
}
