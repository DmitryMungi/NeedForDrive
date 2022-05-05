import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.less"],
})
export class CheckboxComponent {
  @Input() label: string = "";
  @Input() name: string = "";
  @Input() isChecked: boolean = false;
  @Output() toggleCheckBox = new EventEmitter<boolean>();
  constructor() {}

  toggle() {
    this.isChecked = !this.isChecked;
    this.toggleCheckBox.emit(this.isChecked);
  }
}
