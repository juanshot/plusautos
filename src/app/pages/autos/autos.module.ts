import {  ModelosComponent } from './modelos/modelos.component';
import { MarcasComponent } from './marcas/marcas.component';
import { SelectModule } from 'angular2-select';
import { AutoComponent } from './autos.component';
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
    { path: 'listado', component: AutoComponent, data: { breadcrumb: 'Listado' } },
    { path: 'marcas', component: MarcasComponent, data: { breadcrumb: 'Marcas' } },
    { path: 'modelos', component: ModelosComponent, data: { breadcrumb: 'Marcas' } },
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
        SelectModule
    ],
    exports: [],
    declarations: [AutoComponent,MarcasComponent,ModelosComponent],
    providers: [EndPointService,UserService],
})

export class AutosModule { }
