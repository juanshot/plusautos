import { SelectService } from './../../services/select.service';
import { EndPointService } from './../../services/endpoint.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'servicio-form',
    templateUrl: 'servicio-form.component.html'
})

export class ServicioFormComponent implements OnInit {
    servicioForm:FormGroup;
    clientes:Array<any> = [];
    @Output() saved:EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(public fb:FormBuilder,public ep:EndPointService,public select:SelectService) { 
        this.servicioForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            precio:['',Validators.compose([Validators.required])],

        });
       
    }

    ngOnInit() {
        this.select.loadClientes().then((res)=>{
            this.clientes = res;
        })
     }
    saveServicio(){
        this.ep.saveServicio(this.servicioForm.value).then(
            (result)=>{
            this.saved.emit(true);      
             
        },
        (err)=>{
            this.saved.emit(false);
        }
    
    )      
     }
}