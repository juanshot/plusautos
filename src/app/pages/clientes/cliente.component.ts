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
    edit: boolean = false;
    clientId: number = 0
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
                    this.clienteForm.patchValue({nombre:'',apellido:'',cedula:'',direccion:'',celular:'',telefono:'',email:'',tipoId:'', ruc: ''});

                });    
        })      
    }

    editCliente(){
        console.log('este es el id que envio',this.clientId)
        this._dynamicTablesService.editCliente(this.clienteForm.value, this.clientId).then((result)=>{
            this._dynamicTablesService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this.clienteForm.patchValue({nombre:'',apellido:'',cedula:'',direccion:'',celular:'',telefono:'',email:'',tipoId:'', ruc: ''});
            });    
    })      
}

    getAutosCliente(cliente){
                this._dynamicTablesService.getAutosCliente(cliente).then((result)=>{

                    this.autos = result;
                    console.log(this.autos);
                    
                })
    }
    setDetail (cliente) {
        this.edit = true;
        this.clientId = cliente.id;
        this.clienteForm.patchValue({
            nombre: cliente.nombre || '',
            apellido: cliente.apellido || '',
            direccion: cliente.direccion || '',
            celular: cliente.celular || '',
            telefono: cliente.telefono || '',
            cedula: cliente.cedula || '',
            email:  cliente.email || '',
            tipoId: cliente.tipoId || '',
            ruc: cliente.ruc || ''
        })
    }
    getTalleresCliente(cliente){
        this._dynamicTablesService.getTalleresCliente(cliente.id).then((result)=>{

            this.talleres = result;
            console.log(this.talleres);
            
        })
}

    
}

