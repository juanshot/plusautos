import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngresoTallerComponent } from './nuevo/nuevo.component';

export const routes = [
  
  { path: 'nuevo', component: IngresoTallerComponent, data: { breadcrumb: 'Nuevo' } },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IngresoTallerComponent]
})

export class TallerModule { }
