import { Component, OnChanges, Input, SimpleChanges } from "@angular/core";

type buttonColors = "accept";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.less"],
})
export class ButtonComponent implements OnChanges {
  @Input() text = "click me";
  @Input() color?: buttonColors;
  @Input() size: "large" | "medium" | "max" = "large";
  @Input() theme?: string;
  @Input() isDisabled: boolean | null | undefined = false;

  public innerColor: buttonColors = "accept";
  public innerSize: "large" | "medium" | "max" = "large";

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { color, size } = changes;

    if (color && color.currentValue) {
      this.innerColor = color.currentValue;
    }

    if (size && size.currentValue) {
      this.innerSize = size.currentValue;
    }
  }
}
