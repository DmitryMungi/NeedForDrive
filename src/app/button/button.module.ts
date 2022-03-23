import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BurgerButtonComponent } from './burger-button/burger-button.component';

@NgModule({
  declarations: [ButtonComponent, BurgerButtonComponent],
  exports: [ButtonComponent, BurgerButtonComponent],
  imports: [CommonModule],
})
export class ButtonModule {}
