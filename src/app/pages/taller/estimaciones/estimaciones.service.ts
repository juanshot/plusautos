import { EndPointService } from './../../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './../../../services/user.service';
import * as firebase from 'firebase';
@Injectable()
export class DynamicTablesService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getPresupuestos().then(
            (response)=>{
            return response.presupuestos;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }
        savePresupuesto(presupuesto){
            return this.ep.savePresupuesto(presupuesto).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}