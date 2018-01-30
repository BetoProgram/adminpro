import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { AppRoutes } from './app.routing';
//Modulos
import { PagesModule } from './pages/pages.module';
//Servicios
import { ServiceModule } from './services/service.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
],
  imports: [
    ServiceModule,
    BrowserModule,
    PagesModule,
    AppRoutes
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
