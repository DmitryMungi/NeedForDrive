import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-radio-button",
  templateUrl: "./radio-button.component.html",
  styleUrls: ["./radio-button.component.less"],
})
export class RadioButtonComponent implements OnInit {
  @Input() label: string = "";
  @Input() name: string = "";

  @Output() changeEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(event: Event) {
    this.changeEvent.emit((event.target as HTMLInputElement).value);
  }
}
