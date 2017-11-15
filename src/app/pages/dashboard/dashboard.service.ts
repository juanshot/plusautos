import { EndPointService } from './../../services/endpoint.service';
import { Injectable } from '@angular/core';


@Injectable()
export class DashboardService {
    constructor(private _ep:EndPointService){
       
    }

    getListadoIngresos(){
        return this._ep.getListadoIngresos().then((res)=>{
            return res;
        });
    }

    getFacturas(){
        return this._ep.getListadoIngresos().then((res)=>{
            return res;
        });
    }
    getSumaFacturas(){
        return this._ep.getFacturaMes().then((res)=>{
            return res;
        });
    }
    

    
}