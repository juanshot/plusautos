import { EndPointService } from './../../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './../../../services/user.service';
import * as firebase from 'firebase';
@Injectable()
export class MarcasService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getMarcas().then(
            (response)=>{
            return response.marcas;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }

        saveMarca(marca){
            return this.ep.saveMarca(marca).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        editMarca(marca,id){
            return this.ep.updateMarca(marca,id).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        borrarMarca(marca){
            return this.ep.saveMarca(marca).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}