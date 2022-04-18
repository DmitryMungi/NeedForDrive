import { Iaddit } from "src/app/shared/interfaces/order.interface";
import { Iservice } from "./addit.interface";
export const CURENT_DATE = new Date();

export const SERVICES = [
  {
    name: "fullTank",
    description: "Полный бак, 500р",
  },
  {
    name: "isNeedChildChair",
    description: "Детское кресло, 200р",
  },
  {
    name: "isRightWheel",
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
};
