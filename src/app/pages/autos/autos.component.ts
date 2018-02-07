import { SelectService } from './../../services/select.service';
import { AutoService } from './autos.service';
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
  selector: 'auto-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss'],
  providers: [ AutoService, SelectService ]
})
export class AutoComponent {
    public data: any;
    public searchText:string;
    clientes:any = [];
    autoForm:FormGroup;
    talleres:any =[];
    clienteLabel:string ="Seleccione cliente..."
    constructor(private _dynamicTablesService:AutoService,public fb:FormBuilder,public ep:EndPointService,public selectService:SelectService){
        this.autoForm = this.fb.group({
            placa:['',Validators.compose([Validators.required])],
            ano:['',Validators.compose([Validators.required])],
            modelo:['',Validators.compose([Validators.required])],
            marca:['',Validators.compose([Validators.required])],
            cliente_id:['',Validators.compose([Validators.required])],
            kilometros:['',Validators.compose([Validators.required])],
            codigo_carroceria:[''],
            codigo_motor:['']

        })
        _dynamicTablesService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        }); 
        this.selectService.loadClientes().then((res)=>{
            this.clientes = res;
            console.log('clientes',this.clientes);
            
        })   
    }
    guardarauto(){
        console.log(this.autoForm.value);
        
    }
    saveAuto(){

            this._dynamicTablesService.saveAuto(this.autoForm.value).then((result)=>{
                this._dynamicTablesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.autoForm.setValue({placa:'',modelo:'',ano:'',cliente_id:'',marca:'',kilometros:'',codigo_carroceria:'',codigo_motor:''});

                });    
        })      
    }
    getTalleresAuto(id){
        this._dynamicTablesService.getTalleresAuto(id).then((result)=>{
           this.talleres = result;  
    })  
    }
    
}

