import { EndPointService } from './../../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
@Injectable()
export class CuentaService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getCuentas().then(
            (response)=>{
            return response.cuentas;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }
        public  getCuentasMadre() {
            return this.ep.getCuentasMadre().then(
                (response)=>{
                return response.cuentas;
            },
                (err)=>{
                    console.log('error:',err);   
                }
            )
            }
        savecuenta(cuenta){
            return this.ep.saveCuenta(cuenta).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        updatecuenta(cuenta,id){
            return this.ep.updateCuenta(cuenta,id).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}