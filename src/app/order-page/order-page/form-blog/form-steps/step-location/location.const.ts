import { ICity, IAddress, Igeo, Iplacemark } from "./location.interface";

export const CITY_DEFAULT = "Ульяновск";

// export class CityAddress {
//   constructor(public name: string, public address: IAddress[]) {}
// }

export const DEFAULT_GEO: Igeo = {
  lat: 54.314192,
  lng: 48.403132,
};

export const NO_MATCHES: string = "Совпадений не найдено";
export const NO_CHOSEN: string = "Не выбран";

export const OPTION_PLACEMARK: Iplacemark = {
  preset: "islands#circleIcon",
  iconColor: "#0ec261",
};
