import { ListadoComprasComponent } from './listado/listado-compras.component';
import { SelectProductoComponent } from './../../componentes/select-producto/select-producto.component';
import { SelectProveedorComponent } from './../../componentes/select-proveedor/select-proveedor.component';
import { ComprasComponent } from './compras.component';
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
    { path: 'nueva', component: ComprasComponent, data: { breadcrumb: 'Nueva Compra' } },
    { path: 'listado', component: ListadoComprasComponent, data: { breadcrumb: 'Listado' } }
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
    declarations: [ComprasComponent,SelectProveedorComponent,SelectProductoComponent,ListadoComprasComponent],
    providers: [EndPointService,UserService],
})

export class ComprasModule { }
