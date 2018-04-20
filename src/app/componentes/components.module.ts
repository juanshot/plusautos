import { SelectModule } from 'angular2-select';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './../theme/directives/directives.module';
import { PipesModule } from './../theme/pipes/pipes.module';
import { DataTableModule } from 'angular2-datatable';
import { ServicioFormComponent } from './servicio-form/servicio-form.component';
import { SelectProveedorComponent } from './select-proveedor/select-proveedor.component';
import { SelectProductoComponent } from './select-producto/select-producto.component';
import { SeguimientoTimelineComponent } from './seguimiento-timeline/seguimiento-timeline.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { DetalleFormComponent } from './detalle-form/detalle-form';
import { AutoFormComponent } from './auto-form/auto-form.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ViewItems } from './view-items/view-items';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ 
        DataTableModule,
        PipesModule,
        DirectivesModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        SelectModule
    ],
    exports: [ServicioFormComponent,SelectProveedorComponent,SelectProductoComponent,SeguimientoTimelineComponent,ProductoFormComponent,DetalleFormComponent,ClienteFormComponent,AutoFormComponent, ViewItems],
    declarations:[ServicioFormComponent,SelectProveedorComponent,SelectProductoComponent,SeguimientoTimelineComponent,ProductoFormComponent,DetalleFormComponent,ClienteFormComponent,AutoFormComponent, ViewItems],
    providers: [],
})
export class ComponentsModule { }
