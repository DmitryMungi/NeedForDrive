import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {

  @Output() menuIsVisible = new EventEmitter();

  public toggle = true;
  public visibleMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLang(){
    this.toggle = !this.toggle;
  }

  toggleMenu(){
    this.visibleMenu = !this.visibleMenu;
    this.menuIsVisible.emit();
  }
}
