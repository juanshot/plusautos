import { ValidationService } from './../../services/validation.service';
import { EndPointService } from './../../services/endpoint.service';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { DynamicTablesService } from './user.service';
@Component({
  selector: 'user-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [ DynamicTablesService ]
})
export class UserComponent {
    public data: any;
    public searchText:string;
    public userId = null
    userForm:FormGroup;
    @ViewChild(ImageUploaderComponent)
    imageComponent:ImageUploaderComponent
    constructor(private _dynamicTablesService:DynamicTablesService,public fb:FormBuilder,public ep:EndPointService){
        this.userForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            apellido:['',Validators.compose([Validators.required])],
            cedula:['',Validators.compose([Validators.required])],
            email:['',Validators.compose([Validators.required,ValidationService.emailValidator])],
            password:['',Validators.compose([Validators.required])],
            image:['']

        },{validator: ValidationService.validacionCedula('cedula')})
        _dynamicTablesService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        });    
    }
    guardarUsuario(){
        console.log(this.userForm.value);
        
    }
    saveUser(){
        if(this.imageComponent.file != undefined){
                this._dynamicTablesService.upload(this.imageComponent.image).then((result)=>{
                    this.userForm.controls['image'].setValue(result);
                    this._dynamicTablesService.saveUser(this.userForm.value).then((result)=>{
                        this._dynamicTablesService.getAll().then(res=>{
                            console.log("en component",res);
                            this.data = res
                            this.userForm.setValue({nombre:'',apellido:'',cedula:'',image:'',email:'',password:''});
                        });  
                        
                        
                    })
                
                })
                
                console.log(this.userForm.value);
                
        }else{

            this._dynamicTablesService.saveUser(this.userForm.value).then((result)=>{
                this._dynamicTablesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.userForm.setValue({nombre:'',apellido:'',cedula:'',image:'',email:'',password:''});

                });    
            })
          
            


        }
    


        
    }
    setDetail (user) {
        this.userForm.setValue({
            nombre: user.nombre || '',
            apellido: user.apellido || '',
            cedula: user.cedula || '',
            email: user.email || '',
            password: user.password || '',
            image: user.image || ''
        })
        this.userId = user._id
    }
    
}

