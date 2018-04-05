import { EndPointService } from './../../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './../../../services/user.service';
import * as firebase from 'firebase';
@Injectable()
export class ListadoGastosService { 


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