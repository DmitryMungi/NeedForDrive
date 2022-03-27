import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

export interface Branches {
  city: string;
  address: string[];
}

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
