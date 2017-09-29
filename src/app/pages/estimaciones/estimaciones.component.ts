import { SelectService } from './../../services/select.service';
import { ValidationService } from './../../services/validation.service';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { DynamicTablesService } from './estimaciones.service';

@Component({
  selector: 'estimaciones-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './estimaciones.component.html',
  styleUrls: ['./estimaciones.component.scss'],
  providers: [ DynamicTablesService,SelectService ]
})
export class EstimacionesComponent {
    public data: any;
    public searchText:string;
    estimacionForm:FormGroup;
    clientes:any = [];
    autos:any = [];
    items:any = [];
    constructor(private _dynamicTablesService:DynamicTablesService,public fb:FormBuilder,public selectService:SelectService){
        this.estimacionForm = this.fb.group({
            auto_id:['',Validators.compose([Validators.required])],
            fecha:['',Validators.compose([Validators.required])],
            subTotal:['',Validators.compose([Validators.required])],
            total:['',Validators.compose([Validators.required])],
            cliente_id:['',Validators.compose([Validators.required])],
            items:['']

        });
        _dynamicTablesService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        });  
        this.selectService.loadClientes().then((res)=>{
            this.clientes = res;
        }) ;
        this.selectService.loadAutos().then((res)=>{
            this.autos = res;
        }) ;
    }
    savePresupuesto(){
     

            this._dynamicTablesService.savePresupuesto(this.estimacionForm.value).then((result)=>{
                this._dynamicTablesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.estimacionForm.setValue({nombre:'',apellido:'',cedula:'',image:'',email:'',password:''});

                });    
            })
          
        
    }
    agregarItem(item){
            this.items.push(item);
    }
    eliminarItem(index){
        
    }
    
}

