import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "gluing",
})
export class GluingPipe implements PipeTransform {
  transform(value: string, ...args: string[]) {
    let result = value + args;

    return result;
  }
}
