import { Pipe, PipeTransform } from '@angular/core';
import { roundUtil } from 'src/app/utils/roundUtil';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    const hourValue = value / 3600;

    console.log(hourValue);

    let hours = Math.floor(hourValue);

    const hourReminder = hourValue - hours;
    const minutesValue = hourReminder * 60;

    console.log(hours);
    console.log(hourReminder);
    console.log(minutesValue);

    let minutes = Math.floor(minutesValue);

    const secondsRemainder = minutesValue - minutes;
    let seconds = roundUtil(secondsRemainder * 60, 0);

    console.log(minutes);
    console.log(secondsRemainder);
    console.log(seconds);

    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }

    if (minutes === 60) {
      hours += 1;
      minutes = 0;
    }

    let hourString = hours.toString();
    let minuteString = minutes.toString();
    let secondString = seconds.toString();

    if (hourString.length === 1) hourString = '0' + hourString;
    if (minuteString.length === 1) minuteString = '0' + minuteString;
    if (secondString.length === 1) secondString = '0' + secondString;

    return `${hourString}:${minuteString}:${secondString}`;
  }
}
