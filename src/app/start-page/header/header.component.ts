import { Component, Input } from "@angular/core";
import { LocationService } from "src/app/services/location.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"],
})
export class HeaderComponent {
  constructor(private locationService: LocationService) {}

  @Input() cityValue: string = this.locationService.getCityValue();
}
