import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.less"],
})
export class CheckboxComponent implements OnInit {
  @Input() label: string = "";
  @Input() name: string = "";
  constructor() {}

  public isChecked: boolean = false;

  ngOnInit(): void {}

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
