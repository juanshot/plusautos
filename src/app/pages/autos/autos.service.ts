import { EndPointService } from './../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class AutoService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getAutos().then(
            (response)=>{
            return response.autos;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }
        saveAuto(auto){
            return this.ep.saveAuto(auto).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

        getTalleresAuto(auto){
            return this.ep.getTalleresAuto(auto).then(
                (result)=>{
                    return result.talleres;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}