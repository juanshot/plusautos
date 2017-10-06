import { EndPointService } from './../../../services/endpoint.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {



  private _todoList = [
    { text: 'Chequeo de Auto matricula : A3345' },
    { text: 'Desarme de Auto Matricula: A7677'},

  ];

  constructor(public ep:EndPointService){

    
  }

  getTodoList() {
    return this._todoList;
  }
  public getStockVacio(){

        return this.ep.getStockVacio().then(
          (response)=>{
          return response.productos;
      },
          (err)=>{
              console.log('error:',err);   
          }
      )
        
      }
}
