import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const post of value) {
      if (
        post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.lastname.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.dui.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        post.email.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }

}
