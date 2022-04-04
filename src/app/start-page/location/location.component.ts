import { Component, Input, OnInit } from "@angular/core";
import { LocationService } from "src/app/services/location.service";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.less"],
})
export class LocationComponent implements OnInit {
  @Input() cityValue!: string;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.cityValue = this.locationService.getCityValue();
  }
}
