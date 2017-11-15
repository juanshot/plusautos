import {Injectable} from '@angular/core';

@Injectable()
export class FeedService {

  private _data = [
    // {
    //   type: 'text-message',
    //   author: 'Juan',
    //   surname: 'Garcia',
    //   header: 'Posted new message',
    //   text: 'Lavado de auto matricula 234',
    //   time: 'Hoy 11:55 pm',
    //   ago: '25 minutos atras',
    //   expanded: false,
    // }, 
    //   {
    //   type: 'text-message',
    //   author: 'Juan',
    //   surname: 'Garcia',
    //   header: 'Posted new message',
    //   text: 'Lavado de auto matricula 234',
    //   time: 'Hoy 11:55 pm',
    //   ago: '25 minutos atras',
    //   expanded: false,
    // },  
    //   {
    //   type: 'text-message',
    //   author: 'Juan',
    //   surname: 'Garcia',
    //   header: 'Posted new message',
    //   text: 'Lavado de auto matricula 234',
    //   time: 'Hoy 11:55 pm',
    //   ago: '25 minutos atras',
    //   expanded: false,
    // },
    //   {
    //   type: 'text-message',
    //   author: 'Juan',
    //   surname: 'Garcia',
    //   header: 'Posted new message',
    //   text: 'Lavado de auto matricula 234',
    //   time: 'Hoy 11:55 pm',
    //   ago: '25 minutos atras',
    //   expanded: false,
    // }, 
    //   {
    //   type: 'text-message',
    //   author: 'Juan',
    //   surname: 'Garcia',
    //   header: 'Posted new message',
    //   text: 'Lavado de auto matricula 234',
    //   time: 'Hoy 11:55 pm',
    //   ago: '25 minutos atras',
    //   expanded: false,
    // }, 
    //  {
    //   type: 'text-message',
    //   author: 'Juan',
    //   surname: 'Garcia',
    //   header: 'Posted new message',
    //   text: 'Lavado de auto matricula 234',
    //   time: 'Hoy 11:55 pm',
    //   ago: '25 minutos atras',
    //   expanded: false,
    // }, 
  ];

  getData() {
    return this._data;
  }
}
