import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'dashboard', pathMatch:'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Panel de Control' }  },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: 'app/pages/charting/charting.module#ChartingModule', data: { breadcrumb: 'Charts' } },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'mail', loadChildren: 'app/pages/mail/mail.module#MailModule', data: { breadcrumb: 'Mail' } },
            { path: 'calendar', loadChildren: 'app/pages/calendar/calendar.module#CalendarModule', data: { breadcrumb: 'Calendar' } },
            { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule', data: { breadcrumb: 'Editors' } },
             { path: 'taller', loadChildren: 'app/pages/taller/taller.module#TallerModule', data: { breadcrumb: 'Taller' } },
             { path: 'estimaciones', loadChildren: 'app/pages/estimaciones/estimaciones.module#EstimacionesModule', data: { breadcrumb: 'Estimaciones' } },
             { path: 'usuarios', loadChildren: 'app/pages/user/user.module#UserModule', data: { breadcrumb: 'Usuarios' } },
             { path: 'roles', loadChildren: 'app/pages/roles/roles.module#RolesModule', data: { breadcrumb: 'roles' } },
             { path: 'autos', loadChildren: 'app/pages/autos/autos.module#AutosModule', data: { breadcrumb: 'autos' } },
             { path: 'clientes', loadChildren: 'app/pages/clientes/cliente.module#ClientesModule', data: { breadcrumb: 'clientes' } },
             { path: 'servicios', loadChildren: 'app/pages/servicios/servicios.module#ServiciosModule', data: { breadcrumb: 'servicios' } },
             { path: 'productos', loadChildren: 'app/pages/productos/productos.module#ProductosModule', data: { breadcrumb: 'productos' } },
             { path: 'inventario', loadChildren: 'app/pages/inventarioPanel/panel-inventario.module#PanelInventarioModule', data: { breadcrumb: 'Inventario' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);