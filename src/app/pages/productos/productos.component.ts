import { SelectService } from './../../services/select.service';
import { ProductosService } from './productos.service';
import { ValidationService } from './../../services/validation.service';
import { EndPointService } from './../../services/endpoint.service';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
@Component({
  selector: 'productos-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductosService,SelectService]
})
export class ProductosComponent {
    public data: any;
    public searchText:string;
    productoForm:FormGroup;
    create:boolean = true;
    unidades:any =[];
    productoId:number = 0;
 
    constructor(private _productosService:ProductosService,public fb:FormBuilder,public ep:EndPointService,public select:SelectService){
        this.productoForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            cantidad:['',Validators.compose([Validators.required])],
            precio_compra:['',Validators.compose([Validators.required])],
            unidad_medida_id:['',Validators.compose([Validators.required])]
    

        })
        _productosService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        });
        this.select.loadUnidadMedida().then((res)=>{
            this.unidades = res;
        })

            
    }
  
    saveproducto(){
        this._productosService.saveproducto(this.productoForm.value).then((result)=>{
            this._productosService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this._productosService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res
                }); 
                this.productoForm.setValue({nombre:'',cantidad:'',unidad_medida_id:'',precio_compra:''});

            });    
        })     
    }
    editProducto(){
        this._productosService.editProducto(this.productoId,this.productoForm.value).then((result)=>{
            this._productosService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this._productosService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res
                }); 
                this.productoForm.setValue({nombre:'',cantidad:'',unidad_medida_id:'',precio_compra:''});
                this.create = true;
            });    
        })     
    }
    assignProducto(producto){
        this.create = false;
        this.productoForm.setValue({nombre:producto.nombre,cantidad:producto.cantidad,unidad_medida_id:producto.unidad_medida_id.toString(),precio_compra:producto.precio_compra});
        this.productoForm.controls['unidad_medida_id'].setValue('1');
        this.productoId = producto.id;
    }
    
}

