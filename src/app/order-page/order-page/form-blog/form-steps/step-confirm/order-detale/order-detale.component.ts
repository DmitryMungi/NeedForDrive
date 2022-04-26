import { Component, Input } from "@angular/core";

@Component({
  selector: "app-order-detale",
  templateUrl: "./order-detale.component.html",
  styleUrls: ["./order-detale.component.less"],
})
export class OrderDetaleComponent {
  @Input() label: string = "";
  @Input() desc: string | number = "";

  constructor() {}
}
