export const TEXTBTN1 = "Выбрать модель";
export const TEXTBTN2 = "Дополнительно";
export const TEXTBTN3 = "Итого";
export const TEXTBTN4 = "Заказать";

export enum activeStepEnum {
  step1,
  step2,
  step3,
  step4,
}

export interface PageSteps {
  title: string;
  step: activeStepEnum;
  isValid: boolean;
}

export interface ValueAddressInterface {
  city: string;
  address: string;
  valid?: boolean;
}

export const pageTitles: PageSteps[] = [
  {
    title: "Местоположение",
    step: activeStepEnum.step1,
    isValid: true,
  },
  {
    title: "Модель",
    step: activeStepEnum.step2,
    isValid: false,
  },
  {
    title: "Дополнительно",
    step: activeStepEnum.step3,
    isValid: false,
  },
  {
    title: "Итого",
    step: activeStepEnum.step4,
    isValid: false,
  },
];
