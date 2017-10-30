import { EndPointService } from './../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './../../services/user.service';
import * as firebase from 'firebase';
@Injectable()
export class DynamicTablesService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getEmpleados().then(
            (response)=>{
            return response.empleados;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }
        upload(image) {
            let storageRef = firebase.storage().ref();
            // Create a timestamp as filename
            const filename = Math.floor(Date.now() / 1000);
        
            // Create a reference to 'images/todays-date.jpg'
            const imageRef = storageRef.child(`imagenes/${filename}.jpg`);
        
            return imageRef.putString(image, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
            // Do something here when the data is succesfully uploaded!
            return snapshot.metadata.downloadURLs[0];
            });
        }
        saveEmpleado(empleado){
            return this.ep.saveEmpleado(empleado).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        updateEmpleado(empleado,id){
            return this.ep.updateEmpleado(empleado,id).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}