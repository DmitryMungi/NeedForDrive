import {Component} from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less']
})

export class StartPageComponent {

  public sideMenuIsVisible = false;

  public sliders = [
    {
      url: '../../../assets/img/slide-1.jpg',
      heading: 'Бесплатная парковка',
      description: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
      theme: 'green-theme'
    },
    {
      url: '../../../assets/img/slide-2.jpg',
      heading: 'Страховка',
      description: 'Полная страховка страховка автомобиля',
      theme: 'dark-blue-theme'
    },
    {
      url: '../../../assets/img/slide-3.jpg',
      heading: 'Бензин',
      description: 'Полный бак на любой заправке города за наш счёт',
      theme: 'fail-theme'
    },
    {
      url: '../../../assets/img/slide-4.jpg',
      heading: 'Обслуживание',
      description: 'Автомобиль проходит еженедельное ТО',
      theme: 'purple-theme'
    }
  ];

  constructor() { }

  sliderOverlay(){
    this.sideMenuIsVisible = !this.sideMenuIsVisible;
  }
}
