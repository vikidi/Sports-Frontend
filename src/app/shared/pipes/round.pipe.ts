import { Pipe, PipeTransform } from '@angular/core';
import { roundUtil } from 'src/app/utils/roundUtil';

@Pipe({ name: 'round' })
export class RoundPipe implements PipeTransform {
  transform(value: number, digits = 1): number {
    return roundUtil(value, digits);
  }
}
