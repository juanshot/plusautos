import { SelectModule } from 'angular2-select';
import { ProductosComponent } from './productos.component';
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
    { path: 'listado', component: ProductosComponent, data: { breadcrumb: 'Listado' } }
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
    declarations: [ProductosComponent],
    providers: [EndPointService,UserService],
})

export class ProductosModule { }
