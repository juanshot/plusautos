import { RolesService } from './roles.service';
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
  selector: 'rol-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [RolesService]
})
export class RolesComponent {
    public data: any;
    public searchText:string;
    rolForm:FormGroup;
    create:boolean = true;
 
    constructor(private _rolesService:RolesService,public fb:FormBuilder,public ep:EndPointService){
        this.rolForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
    

        })
        _rolesService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        });    
    }
  
    saveRole(){
        this._rolesService.saveRol(this.rolForm.value).then((result)=>{
            this._rolesService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this._rolesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res
                }); 
                this.rolForm.setValue({nombre:''});

            });    
        })     
    }
    
}

