import { EndPointService } from './../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
@Injectable()
export class ClienteService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getClientes().then(
            (response)=>{
            return response.clientes;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }
        saveCliente(cliente){
            return this.ep.saveCliente(cliente).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        getAutosCliente(cliente){
            return this.ep.getAutosCliente(cliente).then(
                (result)=>{
                    return result.autos;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        getTalleresCliente(cliente){
            return this.ep.getTalleresCliente(cliente).then(
                (result)=>{
                    return result.talleres;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}