import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CompraPipe' })
export class CompraSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(person => {
        if (person.num_factura) {
          return person.num_factura.search(searchText) !== -1;
        }
      });
    }
  }
}
