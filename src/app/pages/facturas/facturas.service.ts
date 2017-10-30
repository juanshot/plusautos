import { EndPointService } from './../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
@Injectable()
export class FacturaService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getFacturas().then(
            (response)=>{
            return response.facturas;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }
        savefactura(factura){
            return this.ep.saveFactura(factura).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        updatefactura(factura,id){
            return this.ep.updateFactura(factura,id).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        public  getPrecio(servicio) {
            return this.ep.getPrecioServicio(servicio).then(
                (response)=>{
                return response.precio;
            },
                (err)=>{
                    console.log('error:',err);   
                }
            )
            }

    


}