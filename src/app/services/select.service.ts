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
    loadEmpleados(){  
        let resultOptions = [];
        return this.ep.getEmpleados().then((resp)=>{
            let format = resp.empleados;
            format.map((result)=>{
               let obj = {
                   value: result.id,
                   label: result.nombre +' '+result.apellido_paterno
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
    loadMarcaCarros(){  
        let resultOptions = [];
        return this.ep.getMarcas().then((resp)=>{
            let format = resp.marcas;
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
    loadCuentasMadre(){  
        let resultOptions = [];
        return this.ep.getCuentasMadre().then((resp)=>{
            let format = resp.cuentas;
            format.map((result)=>{
               let obj = {
                   value: result.id,
                   label: result.codigo +' '+result.nombre
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

    loadIngresosTaller(){  
        let resultOptions = [];
        return this.ep.getListadoIngresos().then((resp)=>{
            let format = resp.listadoIngresos;
            format.map((result)=>{
               let obj = {
                   value: result.id,
                   label: 'Orden de Taller #'+result.id
               }
               resultOptions.push(obj);
               
           })
           return  resultOptions;

        })
   
        
    }

    loadDetail(model,id){  
        let resultOptions = [];
        return this.ep.getDetail(model,id).then((resp)=>{
           
           return  resp;

        })
   
        
    }
}