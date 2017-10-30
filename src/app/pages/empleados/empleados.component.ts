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
import { DynamicTablesService } from './empleados.service';
@Component({
  selector: 'empleado-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
  providers: [ DynamicTablesService ]
})
export class EmpleadoComponent {
    public data: any;
    public searchText:string;
    public editMode:boolean =false;
    public empleadoId;
    empleadoForm:FormGroup;
    @ViewChild(ImageUploaderComponent)
    imageComponent:ImageUploaderComponent
    constructor(private _dynamicTablesService:DynamicTablesService,public fb:FormBuilder,public ep:EndPointService){
        this.empleadoForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            apellido_paterno:['',Validators.compose([Validators.required])],
            apellido_materno:['',Validators.compose([Validators.required])],
            fecha_nacimiento:['',Validators.compose([Validators.required])],
            lugar_nacimiento:['',Validators.compose([Validators.required])],
            grupo_sanguineo:[''],
            telefono_domicilio:['',Validators.compose([Validators.required])],
            telefono_celular:[''],
            direccion:['',Validators.compose([Validators.required])],
            referencia:[''],
            estado_civil_id:[''],
            cedula:['',Validators.compose([Validators.required])],
            email:['',Validators.compose([Validators.required,ValidationService.emailValidator])], 
            image:['']

        },{validator: ValidationService.validacionCedula('cedula')})
        _dynamicTablesService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        });  
        
       
    }
    guardarempleado(){
        console.log(this.empleadoForm.value);
        
    }
    editEmpleado(empleado){
        this.editMode = true;
        let tipoIdVal ='';
        this.empleadoId = empleado.id;
        empleado.cedula != null?tipoIdVal = 'cedula': tipoIdVal = 'ruc';
        this.empleadoForm.setValue({nombre:empleado.nombre,apellido_paterno:empleado.apellido_paterno, apellido_materno:empleado.apellido_materno, fecha_nacimiento: empleado.fecha_nacimiento, lugar_nacimiento: empleado.lugar_nacimiento ,grupo_sanguineo: empleado.fecha_nacimiento, telefono_domicilio:empleado.telefono_domicilio, telefono_celular:empleado.telefono_celular , cedula:empleado.cedula,direccion:empleado.direccion,email:empleado.email,image:empleado.image,referencia:'',estado_civil_id:empleado.estado_civil_id});
   
    }
    newEmpleado(){
        this.editMode = false;
        this.empleadoForm.setValue({nombre:'',apellido_paterno:'', apellido_materno:'',cedula:'',image:'',email:'',estado_civil_id:'',grupo_sanguineo:'',telefono_domicilio:'',telefono_celular:'',direccion:'',referencia:'',lugar_nacimiento:'',fecha_nacimiento:''});
        
       
    }
    saveEmpleado(){
        if(this.imageComponent.file != undefined){
                this._dynamicTablesService.upload(this.imageComponent.image).then((result)=>{
                    this.empleadoForm.controls['image'].setValue(result);
                    this._dynamicTablesService.saveEmpleado(this.empleadoForm.value).then((result)=>{
                        this._dynamicTablesService.getAll().then(res=>{
                            console.log("en component",res);
                            this.data = res
                            this.empleadoForm.setValue({nombre:'',apellido_paterno:'', apellido_materno:'',cedula:'',image:'',email:'',estado_civil_id:'',grupo_sanguineo:'',telefono_domicilio:'',telefono_celular:'',direccion:'',referencia:'',lugar_nacimiento:'',fecha_nacimiento:''});
                        });  
                        
                        
                    })
                
                })
                
                console.log(this.empleadoForm.value);
                
        }else{

            this._dynamicTablesService.saveEmpleado(this.empleadoForm.value).then((result)=>{
                this._dynamicTablesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.empleadoForm.setValue({nombre:'',apellido_paterno:'', apellido_materno:'',cedula:'',image:'',email:'',estado_civil_id:'',grupo_sanguineo:'',telefono_domicilio:'',telefono_celular:'',direccion:'',referencia:'',lugar_nacimiento:'',fecha_nacimiento:''});

                });    
            })
          
            


        }
    


        
    }
    updateEmpleado(){
      
        this._dynamicTablesService.updateEmpleado(this.empleadoForm.value,this.empleadoId).then((result)=>{
            this._dynamicTablesService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this.empleadoForm.setValue({nombre:'',apellido_paterno:'', apellido_materno:'',cedula:'',image:'',email:'',estado_civil_id:'',grupo_sanguineo:'',telefono_domicilio:'',telefono_celular:'',direccion:'',referencia:'',lugar_nacimiento:'',fecha_nacimiento:''});
                

            });    
    })      
}
    
}

