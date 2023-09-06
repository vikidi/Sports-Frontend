import { Pipe, PipeTransform } from '@angular/core';
import { movingAverage } from 'src/app/utils/movingAverage';

@Pipe({ name: 'lastMovingAve' })
export class LastMovingAveragePipe implements PipeTransform {
  transform(array: any, field: string): any {
    return movingAverage(array.map((a: any) => a[field])).at(-1);
  }
}
