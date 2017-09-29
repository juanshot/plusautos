import { EndPointService } from './../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './../../services/user.service';
import * as firebase from 'firebase';
@Injectable()
export class RolesService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getRoles().then(
            (response)=>{
            return response.roles;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }

        saveRol(rol){
            return this.ep.saveRol(rol).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}