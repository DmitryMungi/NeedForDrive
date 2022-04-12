import { Igeo, Iplacemark } from "./location.interface";

export const CITY_DEFAULT = "Ульяновск";

export const DEFAULT_GEO: Igeo = {
  lat: 54.314192,
  lng: 48.403132,
};

export const NO_MATCHES: string = "Совпадений не найдено";

export const OPTION_PLACEMARK: Iplacemark = {
  preset: "islands#circleIcon",
  iconColor: "#0ec261",
};
