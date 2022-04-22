import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input-date",
  templateUrl: "./input-date.component.html",
  styleUrls: ["./input-date.component.less"],
})
export class InputDateComponent {
  @Input() label: string = "";
  @Input() value: string = "";
  @Input() minValue: string = "";
  @Input() maxValue?: string;
  @Input() placeholderValue: string = "";

  @Output() changeValue = new EventEmitter<string>();
  @Output() deleteValue = new EventEmitter<void>();

  constructor() {}

  valueChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.changeValue.emit(this.value);
  }

  onDeleteValue() {
    this.value = "";
    this.deleteValue.emit();
  }
}
