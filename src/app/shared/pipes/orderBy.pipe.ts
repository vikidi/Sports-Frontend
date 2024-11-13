import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  /**
   * Sorts an array of objects by the given property and order.
   *
   * @param {any[]} input The array to sort.
   * @param {string} property The property to sort by.
   * @param {boolean|string} [order='asc'] The order to sort in, either `'asc'`, `'desc'`, or a boolean.
   *    If `true`, the array is sorted in ascending order; if `false`, the array
   *    is sorted in descending order.
   * @returns {any[]} The sorted array.
   */
  transform(
    input: any[] | null,
    property: string,
    order: boolean | 'asc' | 'desc' = 'asc'
  ): any[] {
    if (input === null) {
      return [];
    }

    if (input.some((element) => !element.hasOwnProperty(property))) {
      return input;
    }

    return orderBy(input, [property], [order]);
  }
}
