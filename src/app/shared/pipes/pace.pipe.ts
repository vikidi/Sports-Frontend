import { Pipe, PipeTransform } from '@angular/core';
import { roundUtil } from 'src/app/utils/roundUtil';

@Pipe({ name: 'pace' })
export class PacePipe implements PipeTransform {
  transform(value: number): string {
    let full = Math.floor(value);
    const decimal = value - full;
    let seconds = roundUtil(decimal * 60, 0);

    if (seconds === 60) {
      full += 1;
      seconds = 0;
    }

    let secondsString = seconds.toString();
    if (secondsString.length === 1) secondsString = '0' + secondsString;

    return `${full}:${secondsString}`;
  }
}
