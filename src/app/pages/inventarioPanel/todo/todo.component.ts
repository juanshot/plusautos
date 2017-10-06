import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'az-todo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [ TodoService ]
})

export class TodoComponent {
    public todoList:Array<any>;
    public newTodoText:string = '';
    public sinStock:Array<any>;
    @Output()
    change:EventEmitter<number> = new EventEmitter<number>();

    constructor( private _todoService:TodoService) {
        this.todoList = this._todoService.getTodoList();
        this._todoService.getStockVacio().then((res)=>{
            this.sinStock = res;
            console.log('sin stock',this.sinStock);
            this.change.emit(this.sinStock.length)
            
        });
    }


}
