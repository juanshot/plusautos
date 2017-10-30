import { EndPointService } from './../../services/endpoint.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'select-producto',
    templateUrl: 'select-producto.component.html'
})

export class SelectProductoComponent implements OnInit {
    productos:any=[];
    public searchText:string='';
    @Output()selected:EventEmitter<any> = new EventEmitter();
    constructor(public ep:EndPointService) { }

    ngOnInit() { 
        this.ep.getProductos().then((res)=>{
            this.productos = res.productos;
            console.log(this.productos);
            
        })
    }
    selectproducto(producto){
        this.selected.emit(producto);
    
    }

}