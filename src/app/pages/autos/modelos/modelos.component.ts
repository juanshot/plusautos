import { SelectService } from './../../../services/select.service';
import { ModelosService } from './modelos.service';
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
  selector: 'modelos-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss'],
  providers: [ModelosService,SelectService]
})
export class ModelosComponent {
    public data: any;
    public searchText:string;
    modeloForm:FormGroup;
    modeloId:any;
    create:boolean = true;
    marcas:any =[];
    marcaLabel='Seleccione marca del carro...';
 
    constructor(private _modelosService:ModelosService,public fb:FormBuilder,public ep:EndPointService,public select:SelectService){
        this.modeloForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            marca_id:['',Validators.compose([Validators.required])],


        })
        _modelosService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        }); 
        select.loadMarcaCarros().then((res)=>{
            this.marcas = res;
        })   
    }
  
    saveModelo(){
        this._modelosService.savemodelo(this.modeloForm.value).then((result)=>{
            this._modelosService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this._modelosService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res
                }); 
                this.modeloForm.setValue({nombre:'',marca_id:''});

            });    
        })     
    }
    editModelo(){
        this._modelosService.editmodelo(this.modeloForm.value,this.modeloId).then((res)=>{
            this._modelosService.getAll().then((res)=>{
                this.data = res;
            })  
        });
        
    }
    detailModelo(modelo){
        this.create = false;
        this.modeloId = modelo.id;
        this.modeloForm.setValue({nombre:modelo.nombre,marca_id:'id'});
    }
    borrar(id){
        this._modelosService.borrarmodelo(id).then((res)=>{
            this._modelosService.getAll().then((res)=>{
                this.data = res;
            })
        });
    }
    
}

