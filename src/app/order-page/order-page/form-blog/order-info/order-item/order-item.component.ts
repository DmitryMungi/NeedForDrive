import { Component, Input } from "@angular/core";

@Component({
  selector: "app-order-item",
  templateUrl: "./order-item.component.html",
  styleUrls: ["./order-item.component.less"],
})
export class OrderItemComponent {
  @Input() label: string = "";
  @Input() item: string = "";
  @Input() itemElse?: string;
  @Input() column: boolean = false;
  constructor() {}
}
