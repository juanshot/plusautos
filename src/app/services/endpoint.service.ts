import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class EndPointService {
    private apiUrl:string='http://localhost:8000/api/';
    constructor(public http:Http,public user:UserService) { }

    getApiUrl():string{
        return this.apiUrl;
    }

    // login request
    loginRequest(request:Object){
        return this.http.post(this.getApiUrl()+'user/signin',request).map((res)=>{
            if(res.status == 500) {
                throw new Error('Hubo un problema con el servidor')
              } 
              return res.json();
         }).toPromise().then(
            (response)=>{
                    let apiResponse = response;
                    this.user.setToken(apiResponse.token);
                    return response;
                    
        },
            (err:Error)=>{
                return err;
            }
        )
    }
    getUserData(){
        return this.http.get(this.getApiUrl()+'user/getUser?token='+this.user.getToken()).map((res)=>{
            if(res.status == 401) {
                this.handleTokenInvalid()
              } 
            if(res.status == 500) {
                throw new Error('Hubo un problema con el servidor')
              } 
              return res.json();
         }).toPromise().then(
            (response)=>{
                return response;
            },
            (err:Error)=>{
                return err;
            }
        )
    }
    getUsers(){
           
        return this.http.get(this.getApiUrl()+'get_users?token='+this.user.getToken()).map((res)=>{
            if(res.status == 401) {
                this.handleTokenInvalid()
              } 
            if(res.status == 500) {
                throw new Error('Hubo un problema con el servidor')
              } 
              return res.json();
         }).toPromise().then(
            (response)=>{
                return response;
            },
            (err:Error)=>{
                return err;
            }
        )

    }
    // obtener listado de roles
    getRoles(){
        
     return this.http.get(this.getApiUrl()+'get_roles?token='+this.user.getToken()).map((res)=>{
        if(res.status == 401) {
            this.handleTokenInvalid()
          } 
        if(res.status == 500) {
            throw new Error('Hubo un problema con el servidor')
          } 
          return res.json();
     }).toPromise().then(
         (response)=>{
             return response;
         },
         (err:Error)=>{
             return err;
         }
     )

 }
 

    //save user
    saveUser(request:Object){
        return this.http.post(this.getApiUrl()+'save_user?token='+this.user.getToken(),request).map((res)=>{
            if(res.status == 401) {
                this.handleTokenInvalid()
              } 
            if(res.status == 500) {
                throw new Error('Hubo un problema con el servidor')
              } 
              return res.json();
         }).toPromise().then(
            (response)=>{
                return response;    
        },
            (err:Error)=>{
                return err;
            }
        )
    }
    // formato para imagenes


        //save rol

        saveRol(request:Object){
            return this.http.post(this.getApiUrl()+'save_rol?token='+this.user.getToken(),request).map((res)=>{
                if(res.status == 401) {
                    this.handleTokenInvalid()
                  } 
                if(res.status == 500) {
                    throw new Error('Hubo un problema con el servidor')
                  } 
                  return res.json();
             }).toPromise().then(
                (response:Response)=>{
                    return response.json();    
            },
                (err:Error)=>{
                    return err;
                }
            )
        }

    // autos endpoints

    saveAuto(request:Object){
        return this.http.post(this.getApiUrl()+'save_auto?token='+this.user.getToken(),request).map((res)=>{
            if(res.status == 401) {
                this.handleTokenInvalid()
              } 
            if(res.status == 500) {
                throw new Error('Hubo un problema con el servidor')
              } 
              return res.json();
         }).toPromise().then(
            (response)=>{
                return response;    
        },
            (err:Error)=>{
                return err;
            }
        )
    }
    // obtener lista de autos
    getAutos(){
        
     return this.http.get(this.getApiUrl()+'get_autos?token='+this.user.getToken()).map((res)=>{
        if(res.status == 401) {
            this.handleTokenInvalid()
          } 
        if(res.status == 500) {
            throw new Error('Hubo un problema con el servidor')
          } 
          return res.json();
     }).toPromise().then(
         (response)=>{
             return response;
         },
         (err:Error)=>{
             return err;
         }
     )

 }

    // obtener lista de clientes
    getClientes(){
        
     return this.http.get(this.getApiUrl()+'get_clientes?token='+this.user.getToken()).map((res)=>{
        if(res.status == 401) {
            this.handleTokenInvalid()
          } 
        if(res.status == 500) {
            throw new Error('Hubo un problema con el servidor')
          } 
          return res.json();
     }).toPromise().then(
         (response)=>{
             return response;
         },
         (err:Error)=>{
             return err;
         }
     )

 }
//guardar cliente
 saveCliente(request:Object){
    return this.http.post(this.getApiUrl()+'save_cliente?token='+this.user.getToken(),request).map((res)=>{
        if(res.status == 401) {
            this.handleTokenInvalid()
          } 
        if(res.status == 500) {
            throw new Error('Hubo un problema con el servidor')
          } 
          return res.json();
     }).toPromise().then(
        (response)=>{
            return response;    
    },
        (err:Error)=>{
            return err;
        }
    )
}

// obtener lista de presupuestos
    getPresupuestos(){
        
     return this.http.get(this.getApiUrl()+'get_presupuestos?token='+this.user.getToken()).map((res)=>{
        if(res.status == 401) {
            this.handleTokenInvalid()
          } 
        if(res.status == 500) {
            throw new Error('Hubo un problema con el servidor')
          } 
          return res.json();
     }).toPromise().then(
         (response)=>{
             return response;
         },
         (err:Error)=>{
             return err;
         }
     )

 }
//guardar presupuesto

 savePresupuesto(request:Object){
    return this.http.post(this.getApiUrl()+'save_presupuesto?token='+this.user.getToken(),request).map((res)=>{
        if(res.status == 401) {
            this.handleTokenInvalid()
          } 
        if(res.status == 500) {
            throw new Error('Hubo un problema con el servidor')
          } 
          return res.json();
     }).toPromise().then(
        (response)=>{
            return response;    
    },
        (err:Error)=>{
            return err;
        }
    )
}

 handleTokenInvalid(){
        console.log('Token Invalid');
        
 }


}