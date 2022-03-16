import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {

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
  }
}
