import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'AutoPipe' })
export class AutoSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(auto=> {
        if (auto.placa) {
            console.log(auto.placa);
            
          return auto.placa.search(searchText) !== -1;
        }
      });
    }
  }
}
