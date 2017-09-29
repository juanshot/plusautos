import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: 'Chequeo de Auto matricula : A3345' },
    { text: 'Desarme de Auto Matricula: A7677'},

  ];

  getTodoList() {
    return this._todoList;
  }
}
