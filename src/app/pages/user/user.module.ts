import { environment } from './../../../environments/environment';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { UserService } from './../../services/user.service';
import { EndPointService } from './../../services/endpoint.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from './../../theme/directives/directives.module';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

export const routes = [
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: 'listado', component: UserComponent, data: { breadcrumb: 'Listado' } }
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
        HttpModule
    ],
    exports: [],
    declarations: [UserComponent,ImageUploaderComponent],
    providers: [EndPointService,UserService],
})

export class UserModule { }
