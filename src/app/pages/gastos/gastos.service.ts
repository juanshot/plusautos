import { EndPointService } from './../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
@Injectable()
export class GastosService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getGastos().then(
            (response)=>{
            return response.gastos;
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
        savegasto(gasto){
            return this.ep.saveGasto(gasto).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        updategasto(gasto,id){
            return this.ep.updateGasto(gasto,id).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}