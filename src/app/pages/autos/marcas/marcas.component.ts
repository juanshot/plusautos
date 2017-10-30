import { MarcasService } from './marcas.service';
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
  selector: 'marcas-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss'],
  providers: [MarcasService]
})
export class MarcasComponent {
    public data: any;
    public searchText:string;
    marcaForm:FormGroup;
    marcaId:any;
    create:boolean = true;
 
    constructor(private _marcasService:MarcasService,public fb:FormBuilder,public ep:EndPointService){
        this.marcaForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])]

        })
        _marcasService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        });    
    }
  
    saveMarca(){
        this._marcasService.saveMarca(this.marcaForm.value).then((result)=>{
            this._marcasService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this._marcasService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res
                }); 
                this.marcaForm.setValue({nombre:''});

            });    
        })     
    }
    editMarca(){
        this._marcasService.editMarca(this.marcaForm.value,this.marcaId).then((res)=>{
            this._marcasService.getAll().then((res)=>{
                this.data = res;
            })  
        });
        
    }
    detailMarca(marca){
        this.create = false;
        this.marcaId = marca.id;
        this.marcaForm.setValue({nombre:marca.nombre});
    }
    borrar(id){
        this._marcasService.borrarMarca(id).then((res)=>{
            this._marcasService.getAll().then((res)=>{
                this.data = res;
            })
        });
    }
    
}

