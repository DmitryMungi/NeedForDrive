import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less']
})

export class StartPageComponent implements OnInit {

  public sideMenuIsVisible = false;

  public sliders = [
    {
      url: '../../../assets/img/slide-0-min.jpg',
      heading: 'Бесплатная парковка',
      description: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
      theme: 'green-theme'
    },
    {
      url: '../../../assets/img/slide-1-min.jpg',
      heading: 'Страховка',
      description: 'Полная страховка страховка автомобиля',
      theme: 'dark-blue-theme'
    },
    {
      url: '../../../assets/img/slide-2-min.jpg',
      heading: 'Бензин',
      description: 'Полный бак на любой заправке города за наш счёт',
      theme: 'fail-theme'
    },
    {
      url: '../../../assets/img/slide-3-min.jpg',
      heading: 'Обслуживание',
      description: 'Автомобиль проходит еженедельное ТО',
      theme: 'purple-theme'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  sliderOverlay(){
    this.sideMenuIsVisible = !this.sideMenuIsVisible;
  }
}
