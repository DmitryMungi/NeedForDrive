import { Component } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
  selector: "app-step-model",
  templateUrl: "./step-model.component.html",
  styleUrls: ["./step-model.component.less"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class StepModelComponent {
  constructor() {}

  public model: string | undefined;
}
