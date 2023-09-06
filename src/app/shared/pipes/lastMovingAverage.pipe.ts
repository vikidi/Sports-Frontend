import { Pipe, PipeTransform } from '@angular/core';
import { lastMovingAverage } from 'src/app/utils/lastMovingAverage';

@Pipe({ name: 'lastMovingAve' })
export class LastMovingAveragePipe implements PipeTransform {
  transform(array: any, field: string): any {
    return lastMovingAverage(array.map((a: any) => a[field]));
  }
}
