import { ListadoComprasService } from './listado-compras.service';
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
  selector: 'listadoCompras-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './listado-compras.component.html',
  styleUrls: ['./listado-compras.component.scss'],
  providers: [ListadoComprasService]
})
export class ListadoComprasComponent {
    public data: any;
    public searchText:string;
    listadoIngresoForm:FormGroup;
    create:boolean = true;
    compraId:any;
    modelItems="compras"
 
    constructor(private _listadoComprasService:ListadoComprasService,public fb:FormBuilder,public ep:EndPointService){
        this.listadoIngresoForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            precio:['',Validators.compose([Validators.required])],
    

        })
        _listadoComprasService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        });    
    }
    
}

