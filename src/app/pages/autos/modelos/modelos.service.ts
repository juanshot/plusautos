import { EndPointService } from './../../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './../../../services/user.service';
import * as firebase from 'firebase';
@Injectable()
export class ModelosService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getModelos().then(
            (response)=>{
                console.log(response);
                
            return response.modelos;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }

        savemodelo(modelo){
            return this.ep.saveModelo(modelo).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        editmodelo(modelo,id){
            return this.ep.updateModelo(modelo,id).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        borrarmodelo(modelo){
            return this.ep.saveModelo(modelo).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}