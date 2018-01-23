import { NgModule } from '@angular/core';

//Modulos
import { SharedModule } from '../shared/shared.module';

//Rutas de Pages
import { PagesRoutes } from './pages.routing';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    exports:[
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports:[
        SharedModule,
        PagesRoutes
    ]
})
export class PagesModule{}