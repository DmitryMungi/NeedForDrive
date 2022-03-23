import { Component, Input } from "@angular/core";
import { SliderContent, sliders } from "../slider.const";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.less"],
})
export class CarouselComponent {
  @Input() overlay = false;

  carouselContent: SliderContent[] = sliders;

  selectedIndex = 0;

  constructor() {}

  selectSlide(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    this.selectedIndex = this.selectedIndex === 0 ? this.carouselContent.length - 1 : --this.selectedIndex;
  }

  onNextClick(): void {
    this.selectedIndex = this.selectedIndex === this.carouselContent.length - 1 ? 0 : ++this.selectedIndex;
  }
}
