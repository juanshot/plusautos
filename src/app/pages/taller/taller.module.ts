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
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SelectModule,
    HttpModule,
  ],
  declarations: [IngresoTallerComponent,AutoFormComponent,DetalleFormComponent,ProductoFormComponent,ServicioFormComponent],
  providers:[UserService,EndPointService,SelectService]
})

export class TallerModule { }
