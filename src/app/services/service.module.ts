import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SidebarService,
  SahredService
} from './service.index'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    SettingsService,
    SidebarService,
    SahredService
  ]
})
export class ServiceModule { }