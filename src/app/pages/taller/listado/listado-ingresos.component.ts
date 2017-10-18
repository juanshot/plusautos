import { ListadoIngresosService } from './listado-Ingresos.service';
import { ValidationService } from './../../../services/validation.service';
import { EndPointService } from './../../../services/endpoint.service';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../../theme/directives/directives.module';
@Component({
  selector: 'listadoIngresos-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './listado-ingresos.component.html',
  styleUrls: ['./listado-ingresos.component.scss'],
  providers: [ListadoIngresosService]
})
export class ListadoIngresosComponent {
    public data: any;
    public searchText:string;
    listadoIngresoForm:FormGroup;
    create:boolean = true;
 
    constructor(private _listadoIngresosService:ListadoIngresosService,public fb:FormBuilder,public ep:EndPointService){
        this.listadoIngresoForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            precio:['',Validators.compose([Validators.required])],
    

        })
        _listadoIngresosService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        });    
    }
    
}

