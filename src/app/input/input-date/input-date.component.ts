import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  ControlContainer,
  FormGroup,
  FormControl,
  FormGroupDirective,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-input-date",
  templateUrl: "./input-date.component.html",
  styleUrls: ["./input-date.component.less"],
  // viewProviders: [
  //   // { provide: ControlContainer, useExisting: FormGroupDirective },
  // ],
})
export class InputDateComponent implements OnInit {
  @Input() label: string = "";
  @Input() value: string = "";
  @Input() minValue: string = "";
  @Input() groupName: string = "";
  @Input() placeholderValue: string = "";

  @Output() changeValue = new EventEmitter();
  @Output() deleteValue = new EventEmitter();

  // public formGroup = new FormGroup({
  //   name: new FormControl(this.value, Validators.required),
  // });

  constructor(private orderForm: FormGroupDirective) {}

  ngOnInit(): void {
    // this.orderForm.form.addControl(this.groupName, this.formGroup);
  }

  valueChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    // this.formGroup.patchValue({ name: this.value });
    this.changeValue.emit(this.value);
  }

  onDeleteValue(item: string) {
    item = "";
    this.value = item;
    // this.formGroup.reset();
    this.deleteValue.emit();
  }
}
