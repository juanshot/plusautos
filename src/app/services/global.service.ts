import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    public iva = 12;

    constructor() { 
        
    }
    currentDateFormat(){
        var today:any = new Date();
        var dd:any = today.getDate();
        var mm:any = today.getMonth()+1; 

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        var fecha = yyyy+'-'+mm+'-'+dd;
        return fecha;
  }
}