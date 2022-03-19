import { Component, Input, OnInit } from '@angular/core';

export interface SliderContent {
  url: string,
  heading: string,
  description: string,
  theme?: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  @Input() overlay = false;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;
  @Input() sliders: SliderContent[] = [];

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick()
    }, this.slideInterval)
  }

  selectSlide(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.sliders.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex >= this.sliders.length - 1){
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
