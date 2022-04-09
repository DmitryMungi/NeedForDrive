import { CityInterface, AddressInterface } from "./address.interface";

export const API_KEY = "fa1fe0ab-37b7-4d26-a68c-7372986f7de9";

export class CityAddress {
  constructor(public name: string, public address: AddressInterface[]) {}
}
