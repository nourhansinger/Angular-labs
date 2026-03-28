import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})


export class DiscountPipe implements PipeTransform {

  transform(value:number,discount: number = 0.1): number {
    return value * (1 - discount);
  }
}
