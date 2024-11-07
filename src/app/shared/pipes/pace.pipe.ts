import { Pipe, PipeTransform } from '@angular/core';
import { round } from 'src/app/utils/round';

@Pipe({ name: 'pace' })
export class PacePipe implements PipeTransform {
  /**
   * Converts minutes per kilometer to a pace string in the format m:ss.
   * @param paceMinutesPerKm The pace in minutes per kilometer.
   * @returns A string representing the pace in the format m:ss.
   */
  transform(paceMinutesPerKm: number): string {
    const isInvalid = paceMinutesPerKm < 0 || isNaN(paceMinutesPerKm);
    if (isInvalid) {
      return '0:00';
    }

    const minutes = Math.floor(paceMinutesPerKm);
    const seconds = round((paceMinutesPerKm - minutes) * 60, 0) % 60;
    const secondsString = seconds.toString().padStart(2, '0');

    return `${minutes}:${secondsString}`;
  }
}
