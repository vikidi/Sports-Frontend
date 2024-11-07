import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  /**
   * Converts total seconds to time string in the format HH:mm:ss
   *
   * @param {number} totalSeconds The total number of seconds to convert
   * @returns {string} The time string in the format HH:mm:ss
   */
  transform(totalSeconds: number): string {
    const isInvalid = totalSeconds < 0 || isNaN(totalSeconds);
    if (isInvalid) {
      return '00:00:00';
    }

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const hourString = hours.toString().padStart(2, '0');
    const minuteString = minutes.toString().padStart(2, '0');
    const secondString = seconds.toString().padStart(2, '0');

    return `${hourString}:${minuteString}:${secondString}`;
  }
}
