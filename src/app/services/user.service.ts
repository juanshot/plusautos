import { Injectable } from '@angular/core';
localStorage
@Injectable()
export class UserService {
    data:any ={};
    constructor() { 

    }
     setUser(user){
            localStorage.setItem('nombre',user.nombre);
            localStorage.setItem('cedula',user.cedula);
            localStorage.setItem('id',user.id);
            localStorage.setItem('apellido',user.apellido);  
            localStorage.setItem('image',user.image);  
                 
    }
    setToken(token){
        localStorage.setItem('token',token);   
    }
    getToken(){
            return localStorage.getItem('token');
    }
     getUser(){
        
        let returnValue = {
                nombre: localStorage.getItem('nombre'),
                apellido: localStorage.getItem('apellido'),
                id: localStorage.getItem('id'),
                cedula: localStorage.getItem('cedula'),
                image: localStorage.getItem('image'),
                token: localStorage.getItem('token'),

        }
        return returnValue;
        
    }
}