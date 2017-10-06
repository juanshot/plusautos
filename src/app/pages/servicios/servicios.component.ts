import { ServiciosService } from './servicios.service';
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
  selector: 'servicios-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
  providers: [ServiciosService]
})
export class ServiciosComponent {
    public data: any;
    public searchText:string;
    servicioForm:FormGroup;
    create:boolean = true;
 
    constructor(private _serviciosService:ServiciosService,public fb:FormBuilder,public ep:EndPointService){
        this.servicioForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            precio:['',Validators.compose([Validators.required])],
    

        })
        _serviciosService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        });    
    }
  
    saveServicio(){
        this._serviciosService.saveServicio(this.servicioForm.value).then((result)=>{
            this._serviciosService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this._serviciosService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res
                }); 
                this.servicioForm.setValue({nombre:'',precio:''});

            });    
        })     
    }
    
}

