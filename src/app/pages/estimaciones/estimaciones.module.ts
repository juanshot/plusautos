import { UserService } from './../../services/user.service';
import { HttpModule } from '@angular/http';
import { EndPointService } from './../../services/endpoint.service';
import { EstimacionesComponent } from './estimaciones.component';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import {SelectModule} from 'angular2-select';

export const routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'listado', component: EstimacionesComponent, data: { breadcrumb: 'Listado' } }

];

@NgModule({
  imports: [
 
    DataTableModule,
    PipesModule,
    DirectivesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    RouterModule.forChild(routes),
    HttpModule
  ],
  declarations: [

    EstimacionesComponent
  ],
  providers: [EndPointService,UserService]
})
export class EstimacionesModule { 
  
}
