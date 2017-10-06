import { TodoComponent } from './todo/todo.component';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { AppConfig } from "../../app.config";
import { DashboardService } from './panel-inventario.service';

@Component({
  selector: 'az-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './panel-inventario.component.html',
  styleUrls: ['./panel-inventario.component.scss'],
  providers: [ DashboardService ] 
})
export class DashboardComponent  { 
    public config:any;
    public configFn:any; 
    public bgColor:any;
    public date = new Date(); 
    public weatherData:any;
    public sinStock:number =0;
    

    constructor(private _appConfig:AppConfig, private _dashboardService:DashboardService){
        this.config = this._appConfig.config;
        this.configFn = this._appConfig;
        this.weatherData = _dashboardService.getWeatherData();   
        
       
        
            
    } 
    getSinStock(val){
        this.sinStock = val;
    }
}
