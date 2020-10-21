import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMedicine'
})
export class FilterMedicinePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const post of value) {
      if (
        post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.category.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.provider.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.price.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }
    

}
