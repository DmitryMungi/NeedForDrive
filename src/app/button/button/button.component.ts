import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';

type buttonColors = 'accept';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() text = 'click me';
  @Input() color: buttonColors = 'accept';
  public innerColor: buttonColors = 'accept';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void{

    const {color}  = changes;

    if ( color && color.currentValue ) {
      this.innerColor = color.currentValue;
    }
  }

  ngOnInit(): void {
  }
}
