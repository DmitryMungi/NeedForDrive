import { Component, Input } from "@angular/core";

export interface Icar {
  priceMax: number;
  priceMin: number;
  name: string;
  thumbnail: {};
  description: string;
  categoryId: {};
  colors: string[];
}

@Component({
  selector: "app-step-addit",
  templateUrl: "./step-addit.component.html",
  styleUrls: ["./step-addit.component.less"],
})
export class StepAdditComponent {
  constructor() {}

  public car: Icar = {
    priceMax: 35000,
    priceMin: 10000,
    name: "skoda",
    thumbnail: {},
    description: "description",
    categoryId: {},
    colors: ["Красный", "Голубой"],
  };
}
