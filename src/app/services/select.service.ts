import { EndPointService } from './endpoint.service';
import { Injectable } from '@angular/core';
@Injectable()
export class SelectService {

    constructor(public ep:EndPointService) { }


    loadClientes(){  
        let resultOptions = [];
        return this.ep.getClientes().then((resp)=>{
            console.log(resp,'clientesss');
            
            let format = resp.clientes;
            format.map((result)=>{
                let obj = {
                    value: result.id,
                    label: result.nombre +''+result.apellido
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
                   label: result.placa +' - '+result.marca+' '+result.modelo
               }
               resultOptions.push(obj);
               
           })
           return  resultOptions;

        })
   
        
    }

    loadServicios(){  
        let resultOptions = [];
        return this.ep.getServicios().then((resp)=>{
            let format = resp.servicios;
            format.map((result)=>{
               let obj = {
                   value: result.id,
                   label: result.nombre
               }
               resultOptions.push(obj);
               
           })
           return  resultOptions;

        })     
    }

    loadProductos(){  
        let resultOptions = [];
        return this.ep.getProductos().then((resp)=>{
            let format = resp.productos;
            format.map((result)=>{
               let obj = {
                   value: result.id,
                   label: result.nombre
               }
               resultOptions.push(obj);
               
           })
           return  resultOptions;

        })     
    }
    loadProveedores(){  
        let resultOptions = [];
        return this.ep.getProveedores().then((resp)=>{
            let format = resp.proveedores;
            format.map((result)=>{
               let obj = {
                   value: result.id,
                   label: result.nombre
               }
               resultOptions.push(obj);
               
           })
           return  resultOptions;

        })     
    }

    loadUnidadMedida(){  
        let resultOptions = [];
        return this.ep.getUnidadMedida().then((resp)=>{
            let format = resp.unidades;
            format.map((result)=>{
               let obj = {
                   value: result.id,
                   label: result.nombre
               }
               resultOptions.push(obj);
               
           })
           return  resultOptions;

        })
   
        
    }
}