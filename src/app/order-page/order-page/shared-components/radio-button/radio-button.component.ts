import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-radio-button",
  templateUrl: "./radio-button.component.html",
  styleUrls: ["./radio-button.component.less"],
})
export class RadioButtonComponent implements OnInit {
  @Input() label: string = "";
  @Input() name: string = "colorSort"; // вынести в константы по дефолту

  constructor() {}

  ngOnInit(): void {}
}
