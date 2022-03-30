export interface CarInterface {
  id: number;
  model: string;
  brand: string;
  priceRange: string;
  img: string;
  colors?: {
    color: string;
  };
  steering?: string;
  class: string;
  checked: boolean;
}

export interface Toggle {
  value: string;
  label: number;
  checked: boolean;
}

export const toggles: Toggle[] = [
  { value: "Все модели", label: 0, checked: true },
  { value: "Эконом", label: 1, checked: false },
  { value: "Премиум", label: 2, checked: false },
];

export const cars: CarInterface[] = [
  {
    id: 1,
    model: "ELANTRA",
    brand: "Hyndai",
    priceRange: "12 000 - 25 000 ₽",
    img: "../../../assets/img/car-1.jpg",
    class: "economy",
    checked: false,
  },
  {
    id: 2,
    model: "i30 N",
    brand: "Hyndai",
    priceRange: "10 000 - 32 000 ₽",
    img: "../../../assets/img/car-2.jpg",
    class: "economy",
    checked: false,
  },
  {
    id: 3,
    model: "CRETA",
    brand: "Hyndai",
    priceRange: "12 000 - 25 000 ₽",
    img: "../../../assets/img/car-3.jpg",
    class: "premium",
    checked: false,
  },
  {
    id: 4,
    model: "SONATA",
    brand: "Hyndai",
    priceRange: "10 000 - 32 000 ₽",
    img: "../../../assets/img/car-4.jpg",
    class: "premium",
    checked: false,
  },
  {
    id: 5,
    model: "ELANTRA",
    brand: "Hyndai",
    priceRange: "12 000 - 25 000 ₽",
    img: "../../../assets/img/car-1.jpg",
    class: "economy",
    checked: false,
  },
  {
    id: 6,
    model: "i30 N",
    brand: "Hyndai",
    priceRange: "10 000 - 32 000 ₽",
    img: "../../../assets/img/car-2.jpg",
    class: "economy",
    checked: false,
  },
  {
    id: 7,
    model: "CRETA",
    brand: "Hyndai",
    priceRange: "12 000 - 25 000 ₽",
    img: "../../../assets/img/car-3.jpg",
    class: "premium",
    checked: false,
  },
  {
    id: 8,
    model: "SONATA",
    brand: "Hyndai",
    priceRange: "10 000 - 32 000 ₽",
    img: "../../../assets/img/car-4.jpg",
    class: "premium",
    checked: false,
  },
];
