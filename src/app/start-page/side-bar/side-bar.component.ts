import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less'],
})
export class SideBarComponent {
  @Output() menuIsVisible = new EventEmitter<void>();

  public visibleMenu = false;

  constructor() {}

  toggleMenu() {
    this.visibleMenu = !this.visibleMenu;
    this.menuIsVisible.emit();
  }
}
