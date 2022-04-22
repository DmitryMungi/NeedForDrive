import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-radio-button",
  templateUrl: "./radio-button.component.html",
  styleUrls: ["./radio-button.component.less"],
})
export class RadioButtonComponent {
  @Input() label: string = "";
  @Input() name: string = "";

  @Output() changeEvent = new EventEmitter<string>();

  constructor() {}

  onChange(event: Event) {
    this.changeEvent.emit((event.target as HTMLInputElement).value);
  }
}
