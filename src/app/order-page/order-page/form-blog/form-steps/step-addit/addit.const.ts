import { Iaddit } from "src/app/shared/interfaces/order.interface";
export const CURENT_DATE = new Date();
export enum ServicesEnum {
  FullTank = "fullTank",
  BabyChair = "babyChair",
  RightHand = "rightHand",
}

export enum RateEnum {
  month = "6259003d73b61100181028d9",
  minute = "62593c9d73b61100181028ed",
  day = "62593cac73b61100181028ee",
  week = "62593cca73b61100181028ef",
  weekSale = "62593cd573b61100181028f0",
  threeMounth = "62593cf073b61100181028f1",
  year = "61a4c81c05c99b2812794fcb",
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
  rateId: "",
  fullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
  isValid: false,
};
