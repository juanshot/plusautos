import { EndPointService } from './../../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './../../../services/user.service';
import * as firebase from 'firebase';
@Injectable()
export class ListadoIngresosService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getListadoIngresos().then(
            (response)=>{
            return response.listadoIngresos;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }


}