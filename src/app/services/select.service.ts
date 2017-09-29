import { EndPointService } from './endpoint.service';
import { Injectable } from '@angular/core';
@Injectable()
export class SelectService {

    constructor(public ep:EndPointService) { }


    loadClientes(){  
        let resultOptions = [];
        return this.ep.getClientes().then((resp)=>{
            let format = resp.clientes;
            format.map((result)=>{
               let obj = {
                   value: result.id,
                   label: result.nombre +' '+result.apellido
               }
               resultOptions.push(obj);
               
           })
           return  resultOptions;

        })
   
        
    }
    loadAutos(){  
        let resultOptions = [];
        return this.ep.getAutos().then((resp)=>{
            let format = resp.autos;
            format.map((result)=>{
               let obj = {
                   value: result.id,
                   label: result.placa +' - '+result.modelo
               }
               resultOptions.push(obj);
               
           })
           return  resultOptions;

        })
   
        
    }
}