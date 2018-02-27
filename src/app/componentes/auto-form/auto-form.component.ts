import { SelectService } from './../../services/select.service';
import { EndPointService } from './../../services/endpoint.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'auto-form',
    templateUrl: 'auto-form.component.html'
})

export class AutoFormComponent implements OnInit {
    autoForm:FormGroup;
    clientes:Array<any> = [];
    clienteLabel:string = "Seleccione Cliente.."
    @Output() saved:EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(public fb:FormBuilder,public ep:EndPointService,public select:SelectService) { 
        this.autoForm = this.fb.group({
            placa:['',Validators.compose([Validators.required])],
            ano:['',Validators.compose([Validators.required])],
            modelo:['',Validators.compose([Validators.required])],
            marca:['',Validators.compose([Validators.required])],
            cliente_id:['',Validators.compose([Validators.required])],
            kilometros:['',Validators.compose([Validators.required])],
            codigo_motor: [''],
            codigo_carroceria: ['']
        });
       
    }

    ngOnInit() {
        this.select.loadClientes().then((res)=>{
            this.clientes = res;
        })
     }
    saveAuto(){
        this.ep.saveAuto(this.autoForm.value).then(
            (result)=>{
            this.saved.emit(true);
            
             
        },
        (err)=>{
            this.saved.emit(false);
        }
    
    )      
     }
}