import { UserService } from './../../services/user.service';
import { HttpModule } from '@angular/http';
import { EndPointService } from './../../services/endpoint.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DashboardComponent } from './panel-inventario.component';
import { TodoComponent } from './todo/todo.component';
import { ChatComponent } from './chat/chat.component';
import { FeedComponent } from './feed/feed.component';
import { DatamapComponent } from './datamap/datamap.component';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';
import { ChartsModule } from 'ng2-charts';
import 'chart.js/dist/Chart.js';

export const routes = [
  { path: 'panel', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    DirectivesModule,
    PipesModule,
    RouterModule.forChild(routes),
    HttpModule
  ],
  declarations: [
    DashboardComponent,
    TodoComponent,
    ChatComponent,
    FeedComponent,
    DatamapComponent,
    DynamicChartComponent
  ],
  providers:[
    EndPointService,UserService
  ]
})

export class PanelInventarioModule { }
