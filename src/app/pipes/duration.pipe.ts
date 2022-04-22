import { Pipe, PipeTransform } from "@angular/core";
import { IDateDuration } from "../shared/interfaces/order.interface";

export enum dateItemEnum {
  day = "day",
  hour = "hour",
  min = "minute",
  month = "month",
  week = "week",
}

export const DAY = "д ";
export const HOUR = "ч ";
export const MIN = "м ";
export const MONTH = "М ";
export const WEEK = "н ";

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  transform(date: IDateDuration): string {
    let result = "";
    for (let key in date) {
      if (date[key as keyof IDateDuration] != 0) {
        switch (key) {
          case dateItemEnum.day:
            result = result + date[key as keyof IDateDuration] + DAY;
            break;
          case dateItemEnum.hour:
            result = result + date[key as keyof IDateDuration] + HOUR;
            break;
          case dateItemEnum.min:
            result = result + date[key as keyof IDateDuration] + MIN;
            break;
          case dateItemEnum.month:
            result = result + date[key as keyof IDateDuration] + MONTH;
            break;
          case dateItemEnum.week:
            result = result + date[key as keyof IDateDuration] + WEEK;
            break;
        }
        // result = result + date[key as keyof IDateDuration];
      }
    }

    return result;
  }
}
