import { CityInterface } from "./address.interface";

export const API_KEY = "fa1fe0ab-37b7-4d26-a68c-7372986f7de9";

export const addressArray: CityInterface[] = [
  {
    name: "Москва",
    geometry: [55.753605, 37.619773],
    address: [
      {
        name: "Стрельбищенский переулок, 21",
        geometry: [55.763229, 37.539895],
      },
      {
        name: "проспект Мира, 186Бс2",
        geometry: [55.829977, 37.652346],
      },
      {
        name: "9-я Парковая улица, 47к2",
        geometry: [55.805285, 37.797819],
      },
      {
        name: "улица Дыбенко, 38к1",
        geometry: [55.876703, 37.484065],
      },
    ],
  },
  {
    name: "Ульяновск",
    geometry: [54.314192, 48.403132],
    address: [
      {
        name: "Московское шоссе, 52",
        geometry: [54.306859, 48.291876],
      },
      {
        name: "Транспортная улица, 6",
        geometry: [54.300008, 48.367792],
      },
      {
        name: "улица Розы Люксембург, 34Г",
        geometry: [54.352688, 48.385103],
      },
      {
        name: "улица Димитрова, 3",
        geometry: [54.338266, 48.542263],
      },
    ],
  },
];
