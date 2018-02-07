import { SelectService } from './../../services/select.service';
import { EndPointService } from './../../services/endpoint.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'producto-form',
    templateUrl: 'producto-form.component.html'
})

export class ProductoFormComponent implements OnInit {
    productoForm:FormGroup;
    unidades:Array<any>=[];
    unidadLabel:string ="Seleccione unidad..."
    @Output() saved:EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(public fb:FormBuilder,public ep:EndPointService,public select:SelectService) { 
        this.productoForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            cantidad:['',Validators.compose([Validators.required])],
            precio_compra:['',Validators.compose([Validators.required])],
            unidad_medida_id:['',Validators.compose([Validators.required])]

        });
       
    }

    ngOnInit() {
        this.select.loadUnidadMedida().then((res)=>{
            this.unidades = res;
        })
     }
    saveProducto(){
        this.ep.saveProducto(this.productoForm.value).then(
            (result)=>{
            this.saved.emit(true);
            
             
        },
        (err)=>{
            this.saved.emit(false);
        }
    
    )      
     }
}