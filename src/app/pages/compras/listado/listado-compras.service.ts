import { EndPointService } from './../../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './../../../services/user.service';
import * as firebase from 'firebase';
@Injectable()
export class ListadoComprasService { 


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