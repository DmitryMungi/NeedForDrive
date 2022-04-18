import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputDateComponent } from "./input-date/input-date.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { RadioButtonComponent } from "./radio-button/radio-button.component";

@NgModule({
  declarations: [
    InputComponent,
    InputDateComponent,
    CheckboxComponent,
    RadioButtonComponent,
  ],
  exports: [
    InputComponent,
    InputDateComponent,
    CheckboxComponent,
    RadioButtonComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class InputModule {}
