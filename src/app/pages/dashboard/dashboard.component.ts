import { Component, ViewEncapsulation } from '@angular/core';
import { AppConfig } from "../../app.config";
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'az-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ DashboardService ] 
})
export class DashboardComponent  { 
    public config:any;
    public configFn:any; 
    public bgColor:any;
    listadoIngresos:any =[];
    sumaMes:any=0;
    sumaSemana:any =0;


    constructor(private _appConfig:AppConfig, private _dashboardService:DashboardService){
           this._dashboardService.getListadoIngresos().then((res)=>{
               this.listadoIngresos = res.listadoIngresos;
           }) ;

           this._dashboardService.getSumaFacturas().then((res)=>{
            console.log(res);
            this.sumaMes = res.mes;
            this.sumaSemana = res.semana;
        }) ;
    } 
}
