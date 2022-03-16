import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.less']
})
export class BurgerButtonComponent implements OnInit {

  @Input() toggleBtn!: boolean;
  @Output() toggle = new EventEmitter()

  // public toggleBtn = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.toggleBtn = !this.toggleBtn;
    this.toggle.emit();
  }
}
