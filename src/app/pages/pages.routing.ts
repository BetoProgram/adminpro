import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  { 
    path:'',
    component:PagesComponent,
    children:[
      { path:'dashboard',component:DashboardComponent, data:{titulo:"Dashboard"} },
      { path:'progress',component:ProgressComponent,data:{titulo:"ProgressBar"} },
      { path:'graficas1',component:Graficas1Component,data:{titulo:"Graficas"} },
      { path: 'promesas',component:PromesasComponent,data:{titulo:"Pormesas"}},
      { path:'rxjs', component: RxjsComponent },
      { path:'account-settings',component:AccountSettingsComponent,data:{titulo:"Ajustes"} },
      { path:'',redirectTo:'dashboard',pathMatch:'full'}
    ]
  }
];

export const PagesRoutes = RouterModule.forChild(pagesRoutes);
