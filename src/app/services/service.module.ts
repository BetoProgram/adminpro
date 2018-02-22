import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SettingsService,
  SidebarService,
  SahredService,
  UsuarioService,
  LoginGuardGuard
} from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[
    SettingsService,
    SidebarService,
    SahredService,
    UsuarioService,
    LoginGuardGuard
  ]
})
export class ServiceModule { }