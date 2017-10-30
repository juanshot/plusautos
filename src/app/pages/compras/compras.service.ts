import { EndPointService } from './../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
@Injectable()
export class CompraService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getCompras().then(
            (response)=>{
            return response.compras;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }
        public  getCuentasContado() {
            return this.ep.getCuentasContado().then(
                (response)=>{
                return response.cuentas;
            },
                (err)=>{
                    console.log('error:',err);   
                }
            )
            }
        savecompra(compra){
            return this.ep.saveCompra(compra).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        updatecompra(compra,id){
            return this.ep.updateCompra(compra,id).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}