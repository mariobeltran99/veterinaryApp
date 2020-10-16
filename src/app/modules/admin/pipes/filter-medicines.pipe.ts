import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMedicines'
})
export class FilterMedicinesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
