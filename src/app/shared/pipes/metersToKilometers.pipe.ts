import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mToKm' })
export class MetersToKilometersPipe implements PipeTransform {
  transform(value: number): number {
    return value / 1000;
  }
}
