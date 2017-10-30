import { SelectService } from './../../services/select.service';
import { CuentaService } from './cuentas.service';
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
  selector: 'cuenta-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss'],
  providers: [ CuentaService, SelectService ]
})
export class CuentasComponent {
    public data: any;
    public searchText:string;
    cuentas:any = [];
    editMode:boolean = false;
    cuentaForm:FormGroup;
    cuentaId:any ;
    cuentasMadre:any = [];
    cuentaMadreLabel:string = 'Seleccione Cuenta Madre....';
    constructor(private _dynamicTablesService:CuentaService,public fb:FormBuilder,public ep:EndPointService,public selectService:SelectService){
        this.cuentaForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            codigo:['',Validators.compose([Validators.required])],
            descripcion:['',Validators.compose([Validators.required])],
            cuenta_madre_id:['',Validators.compose([Validators.required])]
           

        })
        _dynamicTablesService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        }); 
        this.selectService.loadCuentasMadre().then((result)=>{
            this.cuentasMadre = result;
            
        })

     
    }
    savecuenta(){
            let request = this.cuentaForm.value;
            delete request.tipoId; 
            this._dynamicTablesService.savecuenta(request).then((result)=>{
                this._dynamicTablesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.cuentaForm.setValue({nombre:'',codigo:'',descripcion:'',cuenta_madre_id:''});

                });    
        })      
    }
    updateCuenta(){
        let request = this.cuentaForm.value;
        delete request.tipoId; 
        this._dynamicTablesService.updatecuenta(request,this.cuentaId).then((result)=>{
            this._dynamicTablesService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this.cuentaForm.setValue({nombre:'',codigo:'',descripcion:'',cuenta_madre_id:''});

            });    
    })      
}
    editCuenta(cuenta){
        this.editMode = true;
        this.cuentaId = cuenta.id;
        this.cuentaForm.setValue({nombre:cuenta.nombre,codigo:cuenta.codigo,descripcion:cuenta.descripcion,cuenta_madre_id:cuenta.cuenta_madre_id.toString()});
    }
    newCuenta(){
        this.editMode = false;
        this.cuentaForm.setValue({nombre:'',codigo:'',descripcion:'',cuenta_madre_id:''});
    }
    
}

