import { SelectService } from './../../services/select.service';
import { ClienteService } from './cliente.service';
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
  selector: 'cliente-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers: [ ClienteService, SelectService ]
})
export class ClienteComponent {
    public data: any;
    public searchText:string;
    clientes:any = [];
    clienteForm:FormGroup;
    autos:any = [];
    talleres:any = [];
    constructor(private _dynamicTablesService:ClienteService,public fb:FormBuilder,public ep:EndPointService,public selectService:SelectService){
        this.clienteForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            apellido:['',Validators.compose([Validators.required])],
            direccion:['',Validators.compose([Validators.required])],
            celular:['',Validators.compose([Validators.required])],
            telefono:['',Validators.compose([Validators.required])],
            cedula:[''],
            email:[''],
            tipoId:[],
            ruc:[]

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
    saveCliente(){

            this._dynamicTablesService.saveCliente(this.clienteForm.value).then((result)=>{
                this._dynamicTablesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.clienteForm.setValue({nombre:'',apellido:'',cedula:'',direccion:'',celular:'',telefono:'',email:'',tipoId:''});

                });    
        })      
    }

    getAutosCliente(cliente){
                this._dynamicTablesService.getAutosCliente(cliente).then((result)=>{

                    this.autos = result;
                    console.log(this.autos);
                    
                })
    }
    getTalleresCliente(cliente){
        this._dynamicTablesService.getTalleresCliente(cliente.id).then((result)=>{

            this.talleres = result;
            console.log(this.talleres);
            
        })
}

    
}

