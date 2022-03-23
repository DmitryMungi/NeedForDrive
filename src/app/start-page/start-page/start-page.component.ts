import { Component } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less'],
})
export class StartPageComponent {
  public sideMenuIsVisible = false;

  constructor() {}

  sliderOverlay() {
    this.sideMenuIsVisible = !this.sideMenuIsVisible;
  }
}
