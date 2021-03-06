import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AnonGuardService } from './services/anon-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule', canActivate: [AnonGuardService] },
  { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
  { path: '**', component: ErrorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   // useHash: true
});