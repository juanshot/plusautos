import { ComponentsModule } from './../../componentes/components.module';
import { ListadoGastosComponent } from './listado/listado-gastos.component';
import { GastosComponent } from './gastos.component';
import { SelectModule } from 'angular2-select';
import { environment } from './../../../environments/environment';
import { UserService } from './../../services/user.service';
import { EndPointService } from './../../services/endpoint.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from './../../theme/directives/directives.module';
import { NgModule } from '@angular/core';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

export const routes = [
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: 'nueva', component: GastosComponent, data: { breadcrumb: 'Nueva Compra' } },
    { path: 'listado', component: ListadoGastosComponent, data: { breadcrumb: 'Listado' } }
  ];

@NgModule({
    imports: [
        DataTableModule,
        PipesModule,
        DirectivesModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        HttpModule,
        SelectModule,
        ComponentsModule
    ],
    exports: [],
    declarations: [GastosComponent,ListadoGastosComponent],
    providers: [EndPointService,UserService],
})

export class GastosModule { }
