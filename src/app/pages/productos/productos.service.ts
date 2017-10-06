import { EndPointService } from './../../services/endpoint.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { UserService } from './../../services/user.service';
import * as firebase from 'firebase';
@Injectable()
export class ProductosService { 


    constructor(public ep:EndPointService){

        
        }
        public  getAll() {
        return this.ep.getProductos().then(
            (response)=>{
            return response.productos;
        },
            (err)=>{
                console.log('error:',err);   
            }
        )
        }

        saveproducto(producto){
            return this.ep.saveProducto(producto).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }
        editProducto(id,request){
            return this.ep.editProducto(id,request).then(
                (result)=>{
                    return result;
                
            },
            (error)=>{
                return error;
            }

        
        )
        }

    


}