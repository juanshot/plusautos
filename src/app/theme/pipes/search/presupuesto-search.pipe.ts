import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'PresupuestoPipe' })
export class PresupuestoSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(presup=> {
        if (presup.id) {
            console.log(presup.id);
            
          return presup.id.toString().search(searchText) !== -1;
        }
      });
    }
  }
}
