import { EndPointService } from './../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './../../services/user.service';
import * as firebase from 'firebase';
@Injectable()
export class ServiciosService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getServicios().then(
            (response)=>{
            return response.servicios;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }

        saveServicio(servicio){
            return this.ep.saveServicio(servicio).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}