import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategoryProducts'
})
export class FilterCategoryProductsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
