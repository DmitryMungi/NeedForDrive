import { Component } from "@angular/core";
import { LocationService } from "src/app/order-page/order-page/form-blog/form-steps/step-location/location.service";

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
