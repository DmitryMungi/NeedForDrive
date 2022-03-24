import { Component, OnInit } from "@angular/core";

export interface Branches {
  city: string;
  address: string[];
}

@Component({
  selector: "app-step-location",
  templateUrl: "./step-location.component.html",
  styleUrls: ["./step-location.component.less"],
})
export class StepLocationComponent implements OnInit {
  public searchCity = document.querySelector("#search-city");
  public searchPoint = document.querySelector("#sarch-address");

  public branchesList: Branches[] = [
    {
      city: "Ульяновск",
      address: [
        "Нариманова 42",
        "Полбина 50А",
        "Калнина 4.1",
        "Московское ш., 1к",
      ],
    },
    {
      city: "Москва",
      address: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
