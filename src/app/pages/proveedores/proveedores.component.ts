import { SelectService } from './../../services/select.service';
import { ProveedoreService } from './proveedores.service';
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
  selector: 'proveedore-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
  providers: [ ProveedoreService, SelectService ]
})
export class ProveedoresComponent {
    public data: any;
    public searchText:string;
    proveedores:any = [];
    editMode:boolean = false;
    proveedoreForm:FormGroup;
    proveedorId:any ;
    constructor(private _dynamicTablesService:ProveedoreService,public fb:FormBuilder,public ep:EndPointService,public selectService:SelectService){
        this.proveedoreForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            ruc:[''],
            cedula:[''],
            tipoId:[''],
            celular:[''],
            telefono:['',Validators.compose([Validators.required])],
            correo:[''],
            direccion:['',Validators.compose([Validators.required])]

        })
        _dynamicTablesService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        }); 
        this.selectService.loadProveedores().then((res)=>{
            this.proveedores = res;
            console.log('proveedores',this.proveedores);
            
        })   
    }
    saveProveedor(){
            let request = this.proveedoreForm.value;
            delete request.tipoId; 
            this._dynamicTablesService.saveProveedore(request).then((result)=>{
                this._dynamicTablesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.proveedoreForm.setValue({nombre:'',cedula:'',direccion:'',celular:'',telefono:'',correo:'',ruc:'',tipoId:''});

                });    
        })      
    }
    updateProveedor(){
        let request = this.proveedoreForm.value;
        delete request.tipoId; 
        this._dynamicTablesService.updateProveedore(request,this.proveedorId).then((result)=>{
            this._dynamicTablesService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this.proveedoreForm.setValue({nombre:'',cedula:'',direccion:'',celular:'',telefono:'',correo:'',ruc:'',tipoId:''});

            });    
    })      
}
    editProveedor(proveedor){
        this.editMode = true;
        let tipoIdVal ='';
        this.proveedorId = proveedor.id;
        proveedor.cedula != null?tipoIdVal = 'cedula': tipoIdVal = 'ruc';
        this.proveedoreForm.patchValue({nombre:proveedor.nombre,cedula:proveedor.cedula,direccion:proveedor.direccion,celular:proveedor.cedula,telefono:proveedor.telefono,correo:'g@g.com',ruc:proveedor.ruc,tipoId:tipoIdVal});
    }
    newProveedor(){
        this.editMode = false;
        this.proveedoreForm.setValue({nombre:'',cedula:'',direccion:'',celular:'',telefono:'',correo:'',ruc:'',tipoId:''});
    }
    
}

