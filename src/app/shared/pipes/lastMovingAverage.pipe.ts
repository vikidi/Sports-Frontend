import { Pipe, PipeTransform } from '@angular/core';
import { lastMovingAverage } from 'src/app/utils/movingAverage';

@Pipe({ name: 'lastMovingAve' })
export class LastMovingAveragePipe implements PipeTransform {
  /**
   * Calculate the average of the last `windowSize` values of the given field in the given array.
   *
   * @param {any[]} array The array to calculate the moving average from.
   * @param {string} field The field to calculate the moving average of.
   * @param {number} [windowSize=3] The number of values to use for the moving average.
   * @returns {number} The moving average of the last `windowSize` values of the given field.
   */
  transform(array: any, field: string, windowSize: number = 3): any {
    return lastMovingAverage(
      array.map((a: any) => a[field]),
      windowSize
    );
  }
}
