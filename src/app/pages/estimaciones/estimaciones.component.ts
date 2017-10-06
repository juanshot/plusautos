import { GlobalService } from './../../services/global.service';
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
  providers: [ DynamicTablesService,SelectService ,GlobalService ]
})
export class EstimacionesComponent {
    public data: any;
    public searchText:string;
    estimacionForm:FormGroup;
    itemPresupuestoForm:FormGroup;
    clientes:any = [];
    autos:any = [];
    items:any = [];
    create:boolean=true;
    constructor(private _dynamicTablesService:DynamicTablesService,public fb:FormBuilder,public selectService:SelectService,public global:GlobalService){
        this.estimacionForm = this.fb.group({
            auto_id:['',Validators.compose([Validators.required])],
            fecha:['',Validators.compose([Validators.required])],
            subTotal:['',Validators.compose([Validators.required])],
            iva:['',Validators.compose([Validators.required])],
            total:['',Validators.compose([Validators.required])],
            cliente_id:['',Validators.compose([Validators.required])],
            items:['']

        });
        this.itemPresupuestoForm = this.fb.group({
            cantidad:[1,Validators.compose([Validators.required])],
            descripcion:['',Validators.compose([Validators.required])],
            precio:['',Validators.compose([Validators.required])]
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
            this.estimacionForm.controls['items'].setValue(this.items);

            console.log(this.estimacionForm.value);
            
            this._dynamicTablesService.savePresupuesto(this.estimacionForm.value).then((result)=>{
                this._dynamicTablesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.estimacionForm.reset();
                    this.estimacionForm.setValue({
                        auto_id:'',
                        fecha:'',
                        subTotal:'',
                        iva:'',
                        total:'',
                        cliente_id:'',
                        items:[]

                    })
                    this.items = [];

                });    
            })
          
        
    }
    addItem(){
            this.items.push(this.itemPresupuestoForm.value);
            this.itemPresupuestoForm.reset();
            let arrayAux = this.items;
            let totalVal = 0;
            arrayAux.forEach(element => {
                totalVal = totalVal + (element.precio * element.cantidad);
            });
            let iva = totalVal * this.global.iva / 100;
            let total = totalVal + iva;
            this.estimacionForm.controls['subTotal'].setValue(totalVal);
            this.estimacionForm.controls['iva'].setValue(iva);
            this.estimacionForm.controls['total'].setValue(total);
    }
    eliminarItem(index){
        console.log(index);
        this.items.splice(index);
        let arrayAux = this.items;
        let totalVal = 0;
        arrayAux.forEach(element => {
            totalVal = totalVal + (element.precio * element.cantidad);
        });
        let iva = totalVal * this.global.iva / 100;
        let total = totalVal + iva;
        this.estimacionForm.controls['subTotal'].setValue(totalVal);
        this.estimacionForm.controls['iva'].setValue(iva);
        this.estimacionForm.controls['total'].setValue(total);
        
    }
    
}

