import { Component, Input } from "@angular/core";

@Component({
  selector: "app-car-number",
  templateUrl: "./car-number.component.html",
  styleUrls: ["./car-number.component.less"],
})
export class CarNumberComponent {
  @Input() carNumber: string = "";

  constructor() {}
}
