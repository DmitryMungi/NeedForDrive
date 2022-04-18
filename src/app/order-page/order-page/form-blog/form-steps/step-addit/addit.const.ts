import { Iaddit } from "src/app/shared/interfaces/order.interface";
import { Iservice } from "./addit.interface";
export const CURENT_DATE = new Date();
export enum ServicesEnum {
  FullTank = "fullTank",
  BabyChair = "babyChair",
  RightHand = "rightHand",
}

export const SERVICES = [
  {
    id: "fullTank",
    description: "Полный бак, 500р",
  },
  {
    id: "babyChair",
    description: "Детское кресло, 200р",
  },
  {
    id: "rightHand",
    description: "Правый руль, 1600р",
  },
];

export const ADDITDVALUES: Iaddit = {
  color: "",
  dateFrom: 0,
  dateUntil: 0,
  rate: "",
  fullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
  isValid: false,
};
