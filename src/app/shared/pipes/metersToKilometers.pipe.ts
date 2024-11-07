import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mToKm' })
export class MetersToKilometersPipe implements PipeTransform {
  /**
   * Convert meters to kilometers
   *
   * @param meters Distance in meters
   * @returns Distance in kilometers
   */
  transform(meters: number): number {
    return meters / 1000;
  }
}
