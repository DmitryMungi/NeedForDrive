import { Component, Input, OnInit } from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormControl,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { CURENT_DATE } from "./addit.const";

import * as moment from "moment";

export interface Icar {
  priceMax: number;
  priceMin: number;
  name: string;
  thumbnail: {};
  description: string;
  categoryId: {};
  colors: string[];
}

export interface Itarif {
  name: string;
}

export interface Iservice {
  id: string;
  name: string;
}

@Component({
  selector: "app-step-addit",
  templateUrl: "./step-addit.component.html",
  styleUrls: ["./step-addit.component.less"],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class StepAdditComponent implements OnInit {
  public curentDate: string = moment(CURENT_DATE).format("yyyy-MM-DDThh:mm");

  public formGroup = new FormGroup({
    from: new FormControl(this.curentDate, Validators.required),
    until: new FormControl("", Validators.required),
  });
  constructor(private orderForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.orderForm.form.addControl("from", this.formGroup);
    this.orderForm.form.addControl("until", this.formGroup);
  }

  public car: Icar = {
    priceMax: 35000,
    priceMin: 10000,
    name: "skoda",
    thumbnail: {},
    description: "description",
    categoryId: {},
    colors: ["Любой", "Красный", "Голубой"],
  };

  public tarif: Itarif[] = [
    {
      name: "Поминутно, 7₽/мин",
    },
    {
      name: "На сутки, 1999 ₽/сутки",
    },
  ];

  public services: Iservice[] = [
    {
      id: "fulltank",
      name: "Полный бак, 500р",
    },
    {
      id: "babyChair",
      name: "Детское кресло, 200р",
    },
    {
      id: "rightWheel",
      name: "Правый руль, 1600р",
    },
  ];

  valueChange(item: any) {
    console.log(item);
  }

  onDeleteValue(item: any) {
    item.value = "";
  }
}
