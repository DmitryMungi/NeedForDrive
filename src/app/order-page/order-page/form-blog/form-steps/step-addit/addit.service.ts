import { Injectable } from "@angular/core";
import { SERVICES } from "./addit.const";
import { IService } from "./addit.interface";

@Injectable({ providedIn: "root" })
export class AddidService {
  public valueFrom: string = "";
  public valueUntil: string = "";
  public services: IService[] = SERVICES;

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

  getServices(): IService[] {
    return this.services;
  }

  resetValues() {
    this.valueFrom = "";
    this.valueUntil = "";
    this.services.forEach((i) => (i.isChecked = false));
  }
}
