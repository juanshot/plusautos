import { EndPointService } from './../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
@Injectable()
export class ProveedoreService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getProveedores().then(
            (response)=>{
            return response.proveedores;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }
        saveProveedore(proveedore){
            return this.ep.saveProveedore(proveedore).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        updateProveedore(proveedore,id){
            return this.ep.updateProveedore(proveedore,id).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}