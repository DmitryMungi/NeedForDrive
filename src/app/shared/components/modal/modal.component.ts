import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.less"],
})
export class ModalComponent {
  @Input() title: string = "";
  @Output() confirm = new EventEmitter<void>();
  @Output() goBack = new EventEmitter<void>();

  constructor() {}

  onConfirm() {
    this.confirm.emit();
  }

  onGoBack() {
    this.goBack.emit();
  }
}
