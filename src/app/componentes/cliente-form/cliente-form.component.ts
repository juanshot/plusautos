import { SelectService } from './../../services/select.service';
import { EndPointService } from './../../services/endpoint.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ValidationService } from './../../services/validation.service';

@Component({
    selector: 'cliente-form',
    templateUrl: 'cliente-form.component.html'
})

export class ClienteFormComponent implements OnInit {
    clienteForm:FormGroup;
    clientes:Array<any> = [];
    clienteLabel:string="Seleccione Cliente..."
    @Output() saved:EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(public fb:FormBuilder,public ep:EndPointService,public select:SelectService) { 
        this.clienteForm = this.fb.group({
            nombre:['',Validators.compose([Validators.required])],
            apellido:['',Validators.compose([Validators.required])],
            direccion:['',Validators.compose([Validators.required])],
            celular:['',Validators.compose([Validators.required])],
            telefono:['',Validators.compose([Validators.required])],
            cedula:[''],
            email:[''],
            tipoId:[],
            ruc:[]

        })
       
    }
    ngOnInit() {
        this.select.loadClientes().then((res)=>{
            this.clientes = res;
        })
     }
    savecliente(){
        this.ep.saveCliente(this.clienteForm.value).then(
            (result)=>{
            this.saved.emit(true);   
        },
        (err)=>{
            this.saved.emit(false);
        }
    
    )      
     }
}