import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
//''
//http://52.63.214.247/mas_autos_api_/public/api/
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
        return this.http.get(this.getApiUrl()+'user/getUser?token='+this.user.getToken()).toPromise().then(
            (response)=>{
                return response.json();
            },
            (err:Error)=>{
                return err;
            }
        )
    }

    getUsers(page?){
           
        return this.http.get(this.getApiUrl()+'get_users?token='+this.user.getToken()).toPromise().then(
            (response)=>{
                return response.json();
            },
            (err:Error)=>{
                return err;
            }
        )

    }
    //Obtener data de modelo standart
    getModel(model,page?){
        return this.http.get(`${this.getApiUrl()}`)
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
        return this.http.post(this.getApiUrl()+'save_user?token='+this.user.getToken(),request).toPromise().then(
            (response)=>{
                return response.json();    
        },
            (err:Error)=>{
                return err;
            }
        )
    }
    //save empleado

    saveEmpleado(request:Object){
        return this.http.post(this.getApiUrl()+'save_empleado?token='+this.user.getToken(),request).toPromise().then(
            (response)=>{
                return response.json();    
        },
            (err:Error)=>{
                return err;
            }
        )
    }

    // get empleados

    getEmpleados(){
            
        return this.http.get(this.getApiUrl()+'get_empleados?token='+this.user.getToken()).toPromise().then(
            (response)=>{
                return response.json();
            },
            (err:Error)=>{
                return err;
            }
        )

    }

    // actualizacion de empleados
    updateEmpleado(empleado,id){
        return this.http.post(this.getApiUrl()+`update_empleado/${id}?token=`+this.user.getToken(),empleado).toPromise().then(
            (response)=>{
                console.log(response.json());
                
                return response.json()
            },
            (err:Error)=>{
                return err;
            }
        )
    }

    //save compra

    saveCompra(request:Object){
        return this.http.post(this.getApiUrl()+'save_compra?token='+this.user.getToken(),request).toPromise().then(
            (response)=>{
                return response.json();    
        },
            (err:Error)=>{
                return err;
            }
        )
    }

    // get compras

    getCompras(){
            
        return this.http.get(this.getApiUrl()+'get_compras?token='+this.user.getToken()).toPromise().then(
            (response)=>{
                return response.json();
            },
            (err:Error)=>{
                return err;
            }
        )

    }

    // actualizacion de compras

    updateCompra(compra,id){
        return this.http.post(this.getApiUrl()+`update_compra/${id}?token=`+this.user.getToken(),compra).toPromise().then(
            (response)=>{
                console.log(response.json());
                
                return response.json()
            },
            (err:Error)=>{
                return err;
            }
        )
    }


        //save rol

        saveRol(request:Object){
            return this.http.post(this.getApiUrl()+'save_rol?token='+this.user.getToken(),request).toPromise().then(
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
        return this.http.post(this.getApiUrl()+'save_auto?token='+this.user.getToken(),request).toPromise().then(
            (response)=>{
                return response.json();    
        },
            (err:Error)=>{
                return err;
            }
        )
    }
    // obtener lista de autos
    getAutos(){
        
     return this.http.get(this.getApiUrl()+'get_autos?token='+this.user.getToken()).toPromise().then(
         (response)=>{
             return response.json();
         }
     )

 }

        //**   CLIENTES */

    // obtener lista de clientes
    getClientes(){
        
     return this.http.get(this.getApiUrl()+'get_clientes?token='+this.user.getToken()).toPromise().then(
         (response)=>{
             
             return response.json();
         },
         (err:Error)=>{
             return err;
         }
     )

 }
    //guardar cliente
    saveCliente(request:Object){
        return this.http.post(this.getApiUrl()+'save_cliente?token='+this.user.getToken(),request).toPromise().then(
            (response)=>{
                return response.json();    
        },
            (err:Error)=>{
                return err;
            }
        )
    }
    //obtener autos de un cliente
    getAutosCliente(cliente){

        return this.http.get(this.getApiUrl()+`get_autos_cliente/${cliente}?token=`+this.user.getToken()).toPromise().then(
            (response)=>{
                return response.json();    
        },
            (err:Error)=>{
                return err;
            }
        )

    }

    //obtener talleres de un cliente
    getTalleresCliente(cliente){
        
                return this.http.get(this.getApiUrl()+`get_talleres_cliente/${cliente}?token=`+this.user.getToken()).toPromise().then(
                    (response)=>{
                        return response.json();    
                },
                    (err:Error)=>{
                        return err;
                    }
                )
        
            }
    
//obtener talleres de un cliente
getTalleresAuto(auto){
    
            return this.http.get(this.getApiUrl()+`get_talleres_auto/${auto}?token=`+this.user.getToken()).toPromise().then(
                (response)=>{
                    return response.json();    
            },
                (err:Error)=>{
                    return err;
                }
            )
    
        }

// obtener lista de presupuestos
    getPresupuestos(){
        
     return this.http.get(this.getApiUrl()+'get_presupuestos?token='+this.user.getToken()).toPromise().then(
         (response)=>{
             
             
             return response.json();
         },
         (err:Error)=>{
             return err;
         }
     )

 }
 getPdfPresupuesto(id){

    return this.http.get(this.getApiUrl()+`get_pdf_presupuesto/${id}?token=`+this.user.getToken()).toPromise().then(
        (response)=>{
            
            
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )


 }
//guardar presupuesto

 savePresupuesto(request:Object){
    return this.http.post(this.getApiUrl()+'save_presupuesto?token='+this.user.getToken(),request).toPromise().then(
        (response)=>{
          console.log(response);
          
            return response.json();    
    },
        (err:Error)=>{
            return err;
        }
    )
}

// obtener lista de presupuestos
getServicios(){
    
 return this.http.get(this.getApiUrl()+'get_servicios?token='+this.user.getToken()).toPromise().then(
     (response)=>{
            
         return response.json();
     },
     (err:Error)=>{
         return err;
     }
 )

}
//guardar servicios

saveServicio(request:Object){
return this.http.post(this.getApiUrl()+'save_servicio?token='+this.user.getToken(),request).toPromise().then(
    (response)=>{
      console.log(response);
      
        return response.json();    
},
    (err:Error)=>{
        return err;
    }
)
}

//guardar productos

saveProducto(request:Object){
    return this.http.post(this.getApiUrl()+'save_producto?token='+this.user.getToken(),request).toPromise().then(
        (response)=>{
          console.log(response);
          
            return response.json();    
    },
        (err:Error)=>{
            return err;
        }
    )
    }
// obtener lista de productos
getProductos(){
    
 return this.http.get(this.getApiUrl()+'get_productos?token='+this.user.getToken()).toPromise().then(
     (response)=>{
         
         
         return response.json();
     },
     (err:Error)=>{
         return err;
     }
 )

}

getProducto(id){
    
 return this.http.get(this.getApiUrl()+`get_producto/${id}?token=`+this.user.getToken()).toPromise().then(
     (response)=>{
         
         
         return response.json();
     },
     (err:Error)=>{
         return err;
     }
 )

}

getUnidadMedida(){
    
 return this.http.get(this.getApiUrl()+'get_unidad_medida?token='+this.user.getToken()).toPromise().then(
     (response)=>{
         
         
         return response.json();
     },
     (err:Error)=>{
         return err;
     }
 )

}
editProducto(id,request){
    return this.http.post(this.getApiUrl()+`edit_producto/${id}?token=`+this.user.getToken(),request).toPromise().then(
        (response)=>{
          console.log(response);
          
            return response.json();    
    },
        (err:Error)=>{
            return err;
        }
    )
    }

// stock vacio para panel

getStockVacio(){
    return this.http.get(this.getApiUrl()+'get_stock_vacio?token='+this.user.getToken()).toPromise().then(
         (response)=>{
             
             
             return response.json();
         },
         (err:Error)=>{
             return err;
         }
     )

}
// ingreso taller 
saveIngresoTaller(taller){
    return this.http.post(this.getApiUrl()+'ingresoTaller?token='+this.user.getToken(),taller).toPromise().then(
        (response)=>{
            return response.json()
        },
        (err:Error)=>{
            console.log(err);
            
            return  err;
        }
    )
}

// Listado Ingresos
getListadoIngresos(){
    return this.http.get(this.getApiUrl()+'listado_ingreso_taller?token='+this.user.getToken()).toPromise().then(
        (response)=>{
            
            
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )
   
}

// ingreso de proveedores
saveProveedore(proveedore){
    return this.http.post(this.getApiUrl()+'save_proveedor?token='+this.user.getToken(),proveedore).toPromise().then(
        (response)=>{
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )
}

// actualizacion de proveedores
updateProveedore(proveedore,id){
    return this.http.post(this.getApiUrl()+`update_proveedor/${id}?token=`+this.user.getToken(),proveedore).toPromise().then(
        (response)=>{
            console.log(response.json());
            
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )
}

// Listado proveedores
getProveedores(){
    return this.http.get(this.getApiUrl()+'get_proveedores?token='+this.user.getToken()).toPromise().then(
        (response)=>{
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )
   
}

//// facturas/////

// ingreso de facturas
saveFactura(factura){
    return this.http.post(this.getApiUrl()+'save_factura?token='+this.user.getToken(),factura).toPromise().then(
        (response)=>{
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )
}

// actualizacion de factura
updateFactura(factura,id){
    return this.http.post(this.getApiUrl()+`update_factura/${id}?token=`+this.user.getToken(),factura).toPromise().then(
        (response)=>{
            console.log(response.json());
            
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )
}

// Listado de facturas
getFacturas(){
    return this.http.get(this.getApiUrl()+'get_facturas?token='+this.user.getToken()).toPromise().then(
        (response)=>{
            console.log(response.json());
            
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )
   
}

getPrecioServicio(servicio){
    return this.http.get(this.getApiUrl()+`get_precio_servicio/${servicio}?token=`+this.user.getToken()).toPromise().then(
        (response)=>{
            console.log(response.json());
            
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )
   
}



// marcas autos

getMarcas(){
    return this.http.get(this.getApiUrl()+'get_marca_autos?token='+this.user.getToken()).toPromise().then(
        (response)=>{
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )
    
}

saveMarca(marca){
    return this.http.post(this.getApiUrl()+'save_marca_auto?token='+this.user.getToken(),marca).toPromise().then(
        (response)=>{
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )
}
updateMarca(marca,id){
    
    return this.http.post(this.getApiUrl()+`update_marca_auto/${id}?token=`+this.user.getToken(),marca).toPromise().then(
        (response)=>{
            console.log(response.json());
            
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )



}


// mcuentas

getCuentas(){
    return this.http.get(this.getApiUrl()+'get_cuentas?token='+this.user.getToken()).toPromise().then(
        (response)=>{
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )
    
}

getCuentasMadre(){
    return this.http.get(this.getApiUrl()+'get_cuentas_madre?token='+this.user.getToken()).toPromise().then(
        (response)=>{
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )
    
}
getCuentasContado(){
    return this.http.get(this.getApiUrl()+'get_cuentas_contado?token='+this.user.getToken()).toPromise().then(
        (response)=>{
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )
    
}

saveCuenta(cuenta){
    return this.http.post(this.getApiUrl()+'save_cuenta?token='+this.user.getToken(),cuenta).toPromise().then(
        (response)=>{
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )
}
updateCuenta(cuenta,id){
    
    return this.http.post(this.getApiUrl()+`update_cuenta/${id}?token=`+this.user.getToken(),cuenta).toPromise().then(
        (response)=>{
            console.log(response.json());
            
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )



}

// modelos autos

getModelos(){
    return this.http.get(this.getApiUrl()+'get_modelo_autos?token='+this.user.getToken()).toPromise().then(
        (response)=>{
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )
    
}

saveModelo(marca){
    return this.http.post(this.getApiUrl()+'save_modelo_auto?token='+this.user.getToken(),marca).toPromise().then(
        (response)=>{
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )
}
updateModelo(marca,id){
    
    return this.http.post(this.getApiUrl()+`update_modelo_auto/${id}?token=`+this.user.getToken(),marca).toPromise().then(
        (response)=>{
            console.log(response.json());
            
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )



}

/////**** seguimientos  */

getSeguimientos(){
    return this.http.get(this.getApiUrl()+'get_seguimientos?token='+this.user.getToken()).toPromise().then(
        (response)=>{
            return response.json();
        },
        (err:Error)=>{
            return err;
        }
    )
    
}

saveSeguimiento(seguimiento){
    return this.http.post(this.getApiUrl()+'save_seguimiento?token='+this.user.getToken(),seguimiento).toPromise().then(
        (response)=>{
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )
}
updateSeguimiento(seguimiento,id){
    
    return this.http.post(this.getApiUrl()+`update_seguimiento/${id}?token=`+this.user.getToken(),seguimiento).toPromise().then(
        (response)=>{
            console.log(response.json());
            
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    )



}
getFacturaMes(){

    return this.http.get(this.getApiUrl()+`get_sum_factura?token=`+this.user.getToken()).toPromise().then(
        (response)=>{            
            return response.json()
        },
        (err:Error)=>{
            return err;
        }
    );
}







 handleTokenInvalid(){
        console.log('Token Invalid');
        
 }


}