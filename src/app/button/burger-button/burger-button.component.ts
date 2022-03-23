import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.less'],
})
export class BurgerButtonComponent {
  @Input() toggleBtn!: boolean;
  @Output() toggle = new EventEmitter<void>();

  constructor() {}

  toggleMenu() {
    this.toggleBtn = !this.toggleBtn;
    this.toggle.emit();
  }
}
