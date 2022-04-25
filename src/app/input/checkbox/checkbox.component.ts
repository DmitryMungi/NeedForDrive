import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.less"],
})
export class CheckboxComponent {
  @Input() label: string = "";
  @Input() name: string = "";
  @Output() toggleCheckBox = new EventEmitter<boolean>();
  constructor() {}

  public isChecked: boolean = false;

  toggle() {
    this.isChecked = !this.isChecked;
    this.toggleCheckBox.emit(this.isChecked);
  }
}
