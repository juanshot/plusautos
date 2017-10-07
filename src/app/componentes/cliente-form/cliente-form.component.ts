import { SelectService } from './../../services/select.service';
import { EndPointService } from './../../services/endpoint.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cliente-form',
    templateUrl: 'cliente-form.component.html'
})

export class ClienteFormComponent implements OnInit {
    clienteForm:FormGroup;
    clientes:Array<any> = [];
    @Output() saved:EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(public fb:FormBuilder,public ep:EndPointService,public select:SelectService) { 
        this.clienteForm = this.fb.group({
            placa:['',Validators.compose([Validators.required])],
            ano:['',Validators.compose([Validators.required])],
            modelo:['',Validators.compose([Validators.required])],
            marca:['',Validators.compose([Validators.required])],
            cliente_id:['',Validators.compose([Validators.required])],
            kilometros:['',Validators.compose([Validators.required])]

        });
       
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