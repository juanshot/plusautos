import { EndPointService } from './../../services/endpoint.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'select-proveedor',
    templateUrl: 'select-proveedor.component.html'
})

export class SelectProveedorComponent implements OnInit {
    proveedores:any=[];
    public searchText:string='';
    @Output()selected:EventEmitter<any> = new EventEmitter();
    constructor(public ep:EndPointService) { }

    ngOnInit() { 
        this.ep.getProveedores().then((res)=>{
            this.proveedores = res.proveedores;
            console.log(this.proveedores);
            
        })
    }
    selectProveedor(proveedor){
        this.selected.emit(proveedor);
    }

}