import { Component } from "@angular/core";
import { LocationService } from "src/app/shared/services/location.service";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.less"],
})
export class LocationComponent {
  constructor(private locationService: LocationService) {}

  public get getCity() {
    return this.locationService.getCityValue();
  }
}
