import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgForm, ControlContainer } from "@angular/forms";

@Component({
  selector: "app-order-info",
  templateUrl: "./order-info.component.html",
  styleUrls: ["./order-info.component.less"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class OrderInfoComponent {
  @Input() form?: NgForm;
  @Input() textBtn: string = "Перейти";
  @Input() addressForm?: NgForm;
  @Output() nextStep = new EventEmitter();

  constructor() {}

  submit() {
    this.nextStep.emit();
    console.log(this.form);
  }
}
