import { IngresoEditComponent } from './edit/ingreso-edit.component';
import { ComponentsModule } from './../../componentes/components.module';
import { SeguimientoTallerComponent } from './seguimiento-taller/seguimiento-taller';
import { EstimacionesComponent } from './estimaciones/estimaciones.component';
import { DirectivesModule } from './../../theme/directives/directives.module';
import { DataTableModule } from 'angular2-datatable';
import { PipesModule } from './../../theme/pipes/pipes.module';
import { ListadoIngresosComponent } from './listado/listado-ingresos.component';
import { ServicioFormComponent } from './../../componentes/servicio-form/servicio-form.component';
import { ProductoFormComponent } from './../../componentes/producto-form/producto-form.component';
import { SelectService } from './../../services/select.service';
import { UserService } from './../../services/user.service';
import { EndPointService } from './../../services/endpoint.service';
import { HttpModule } from '@angular/http';
import { SelectModule } from 'angular2-select';
import { AutoFormComponent } from './../../componentes/auto-form/auto-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngresoTallerComponent } from './nuevo/nuevo.component';
import {DetalleFormComponent} from "../../componentes/detalle-form/detalle-form";


export const routes = [

  { path: 'nuevo', component: IngresoTallerComponent, data: { breadcrumb: 'Nuevo' } },
  { path: 'edit/:id', component: IngresoEditComponent, data: { breadcrumb: 'Editar' } },
  { path: 'listado', component: ListadoIngresosComponent, data: { breadcrumb: 'Listado' } },
  { path: 'estimaciones', component: EstimacionesComponent, data: { breadcrumb: 'Presupuestos' } },
  { path: 'seguimiento', component: SeguimientoTallerComponent, data: { breadcrumb: 'Seguimiento' } },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SelectModule,
    HttpModule,
    PipesModule,
    DataTableModule,
    DirectivesModule,
    ComponentsModule
  ],
  declarations: [IngresoTallerComponent,ListadoIngresosComponent,EstimacionesComponent,SeguimientoTallerComponent, IngresoEditComponent],
  providers:[UserService,EndPointService,SelectService]
})

export class TallerModule { }
