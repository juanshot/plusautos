import 'pace';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AnonGuardService } from './services/anon-guard.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [AppConfig,AuthService,AnonGuardService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }