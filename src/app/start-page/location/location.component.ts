import { Component, Input } from "@angular/core";
import { LocationService } from "src/app/services/location.service";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.less"],
})
export class LocationComponent {
  constructor(private locationService: LocationService) {}

  @Input() cityValue: string = this.locationService.getCityValue();
}
