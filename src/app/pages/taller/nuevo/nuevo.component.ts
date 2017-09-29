import { Component, ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'az-inputs',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nuevo.component.html'
})
export class IngresoTallerComponent {
        
         ingresoTallerForm:FormGroup;
         autoForm:FormGroup;
         autoPicked:boolean = false;
    
            constructor(public formBuilder:FormBuilder){

            this.ingresoTallerForm = this.formBuilder.group({
                empleado_id:['',Validators.compose([Validators.required])],
                status_taller_id:['',Validators.compose([Validators.required])],
                fecha_ingreso:['',Validators.compose([Validators.required])],
                observaciones:['',Validators.compose([Validators.required])],
                detalles:['',Validators.compose([Validators.required])]
            });

            this.autoForm = this.formBuilder.group({
                placa:['',Validators.compose([Validators.required])],
                ano:['',Validators.compose([Validators.required])],
                modelo:['',Validators.compose([Validators.required])],
                marca:['',Validators.compose([Validators.required])],
                kilometros:['',Validators.compose([Validators.required])]
            });


            this.autoForm = this.formBuilder.group({
                
            })



 }
}



/*import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

Component({
    selector:'ingreso-taller',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './nuevo.component.html'

})
export class NuevoIngresoTaller{
        
    ingresoTallerForm:FormGroup;
    
    constructor(public formBuilder:FormBuilder){

            this.ingresoTallerForm = this.formBuilder.group({
                empleado_id:['',Validators.compose([Validators.required])],
                status_taller_id:['',Validators.compose([Validators.required])],
                fecha_ingreso:['',Validators.compose([Validators.required])],
                observaciones:['',Validators.compose([Validators.required])],
                detalles:['',Validators.compose([Validators.required])]
            })

    }
}*/