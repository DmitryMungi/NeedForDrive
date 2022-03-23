import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.less'],
})
export class SelectLangComponent {
  @Input() media?: string;

  public toggle = true;

  constructor() {}

  toggleLang() {
    this.toggle = !this.toggle;
  }
}
