import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.less"],
})
export class CheckboxComponent implements OnInit {
  @Input() label: string = "";
  @Input() name: string = "";
  @Output() toggleCheckBox = new EventEmitter();
  constructor() {}

  public isChecked: boolean = false;

  ngOnInit(): void {}

  toggle() {
    this.isChecked = !this.isChecked;
    this.toggleCheckBox.emit(this.isChecked);
  }
}
