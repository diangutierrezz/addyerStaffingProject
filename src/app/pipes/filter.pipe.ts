import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.habilidades.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
      if (post.cargo.toLowerCase().indexOf(arg.toLowerCase())  > -1) {
        resultPosts.push(post);
      };
      if (post.nombre.toLowerCase().indexOf(arg.toLowerCase())  > -1) {
        resultPosts.push(post);
      };
      if (post.apellido.toLowerCase().indexOf(arg.toLowerCase())  > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
