import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AddidService {
  public valueFrom: string = "";
  public valueUntil: string = "";

  getValueFrom(): string {
    return this.valueFrom;
  }

  getValueUntil(): string {
    return this.valueUntil;
  }

  setValueFrom(item: string) {
    this.valueFrom = item;
  }

  setValueUntil(item: string) {
    this.valueUntil = item;
  }
}
