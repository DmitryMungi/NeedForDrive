import { Component } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

export interface CarInterface {
  id: number;
  model: string;

  priceRange: string;
  img: string;
  colors?: {
    color: string;
  };
  steering?: string;
  class: string;
  checked: boolean;
}

@Component({
  selector: "app-step-model",
  templateUrl: "./step-model.component.html",
  styleUrls: ["./step-model.component.less"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class StepModelComponent {
  public carList: CarInterface[] = [
    {
      id: 1,
      model: "ELANTRA",
      priceRange: "12 000 - 25 000 ₽",
      img: "../../../assets/img/car-1.jpg",
      class: "economy",
      checked: false,
    },
    {
      id: 2,
      model: "i30 N",
      priceRange: "10 000 - 32 000 ₽",
      img: "../../../assets/img/car-2.jpg",
      class: "economy",
      checked: false,
    },
    {
      id: 3,
      model: "CRETA",
      priceRange: "12 000 - 25 000 ₽",
      img: "../../../assets/img/car-3.jpg",
      class: "premium",
      checked: false,
    },
    {
      id: 4,
      model: "SONATA",
      priceRange: "10 000 - 32 000 ₽",
      img: "../../../assets/img/car-4.jpg",
      class: "premium",
      checked: false,
    },
    {
      id: 5,
      model: "ELANTRA",
      priceRange: "12 000 - 25 000 ₽",
      img: "../../../assets/img/car-1.jpg",
      class: "economy",
      checked: false,
    },
    {
      id: 6,
      model: "i30 N",
      priceRange: "10 000 - 32 000 ₽",
      img: "../../../assets/img/car-2.jpg",
      class: "economy",
      checked: false,
    },
    {
      id: 7,
      model: "CRETA",
      priceRange: "12 000 - 25 000 ₽",
      img: "../../../assets/img/car-3.jpg",
      class: "premium",
      checked: false,
    },
    {
      id: 8,
      model: "SONATA",
      priceRange: "10 000 - 32 000 ₽",
      img: "../../../assets/img/car-4.jpg",
      class: "premium",
      checked: false,
    },
  ];
  public model: string | undefined; // пока не используется

  public checkedModel?: string;
  constructor() {}

  onCardClick(index: number, model: string): void {
    this.carList.map(
      (item: CarInterface, i: number) => (item.checked = i === index)
    );

    this.checkedModel = model;
  }
}
