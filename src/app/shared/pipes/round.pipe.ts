import { Pipe, PipeTransform } from '@angular/core';
import { round } from 'src/app/utils/round';

@Pipe({ name: 'round' })
export class RoundPipe implements PipeTransform {
  /**
   * Rounds a number to the specified number of decimal places.
   *
   * @param {number} value The number to round.
   * @param {number} decimalPlaces The number of decimal places to round to. Defaults to 0 if not provided.
   * @returns {number} The rounded number.
   */
  transform(value: number, decimalPlaces: number = 0): number {
    return round(value, decimalPlaces);
  }
}
